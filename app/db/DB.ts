import Database from 'better-sqlite3';
import { dbFile } from '../constants';
import { PostCardData } from '../types';
import toPostData from './toPostData';

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
	LIMIT ?, 20
`
		);

		const data = query.all(offset) || [];
		return toPostData(data);
	}

	addPost(post: PostCardData): void {
		// it's meant to be used via CLI
		const query = this.database.prepare(
			`
				INSERT INTO 
				posts(title, subtitle, slug, date)
				VALUES(?, ?, ?, ?)
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

	close(): void {
		this.database.close();
	}
}
