import { InsertionPostcardData, PostCardData } from '../../../types';
import { Persistence } from '../../Persistence';
import Database from 'better-sqlite3';
import { dbFile } from './constants';
import mapToPostData from './toPostData';
import { postsPerPage } from '../../../constants';

export default class Sqlite implements Persistence {
	//@ts-ignore
	private database: Database.Database;

	connect(): Promise<void> {
		this.database = new Database(dbFile, { fileMustExist: true });
		this.database.pragma('journal_mode = WAL');

		return new Promise((resolve) => resolve());
	}

	getPosts(offset: number): Promise<PostCardData[]> {
		const query = this.database.prepare(
			`
				SELECT *
				FROM posts
				ORDER BY id DESC
				LIMIT ?, ?;
			`
		);

		const data = query.all(offset, postsPerPage) || [];
		return new Promise((resolve) => resolve(mapToPostData(data)));
	}

	getAllPosts(): Promise<PostCardData[]> {
		const query = this.database.prepare(
			`
				SELECT *
				FROM posts;
			`
		);

		const data = query.all() || [];
		return new Promise((resolve) => resolve(mapToPostData(data)));
	}

	getPost(slug: string): Promise<PostCardData> {
		const query = this.database.prepare(
			`
				SELECT * 
				FROM posts 
				WHERE slug=?;
			`
		);

		const data = query.get(slug) || {};
		return new Promise((resolve) => resolve(data as PostCardData));
	}

	addPost(post: InsertionPostcardData): Promise<void> {
		// it's meant to be used via CLI
		const query = this.database.prepare(
			`
				INSERT INTO 
				posts(title, subtitle, slug, date)
				VALUES(?, ?, ?, ?);
			`
		);

		const result = query.run(
			post.title,
			post.subtitle,
			post.slug,
			Math.trunc(Date.now())
		);
		const id = result.lastInsertRowid;

		console.log(`Inserted with id: ${id}`);

		return new Promise((resolve) => resolve());
	}

	countPosts(): Promise<number> {
		const query = this.database.prepare(
			`
				SELECT COUNT(*)
				FROM posts;
			`
		);

		const result = query.get() as number;
		return new Promise((resolve) => resolve(result));
	}

	closeConnection(): Promise<void> {
		this.database.close();
		return new Promise((resolve) => resolve());
	}
}
