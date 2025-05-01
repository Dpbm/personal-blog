import { MetadataRoute } from 'next';
import DB from './db/DB';
import Mongo from './db/providers/mongo/mongo';
import { PostCardData } from './types';
import { buildPostURL, prodURL } from './utils';

export async function generateSitemaps() {
	return [{ id: 0 }];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const db = new DB(new Mongo());
	await db.connect();
	const posts = await db.getAllPosts();

	return posts.map((post: PostCardData) => ({
		url: `${prodURL}${buildPostURL(post.slug)}`,
		lastModified: new Date(post.date).toUTCString(),
	}));
}
