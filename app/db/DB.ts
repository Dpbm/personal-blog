import Database from 'better-sqlite3';
import { dbFile, postsPerPage } from '../constants';
import { PostCardData } from '../types';
import mapToPostData from './toPostData';

export default class DB {
	private database;

	constructor() {
		this.database = new Database(dbFile, { fileMustExist: true });
		this.database.pragma('journal_mode = WAL');
	}

	getPosts(offset: number): PostCardData[] {
		const query = this.database.prepare(
			`
				SELECT *
				FROM posts
				ORDER BY id DESC
				LIMIT ?, ?;
			`
		);

		const data = query.all(offset, postsPerPage) || [];
		return mapToPostData(data);
	}

	getAllPosts(): PostCardData[] {
		const query = this.database.prepare(
			`
				SELECT *
				FROM posts;
			`
		);

		const data = query.all() || [];
		return mapToPostData(data);
	}

	getPost(slug: string): PostCardData {
		const query = this.database.prepare(
			`
				SELECT * 
				FROM posts 
				WHERE slug=?;
			`
		);

		const data = query.get(slug) || {};
		return data as PostCardData;
	}

	addPost(post: PostCardData): void {
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
	}

	countPosts(): number {
		const query = this.database.prepare(
			`
				SELECT COUNT(*)
				FROM posts;
			`
		);

		const result = query.get() as number;
		return result;
	}

	close(): void {
		this.database.close();
	}
}
