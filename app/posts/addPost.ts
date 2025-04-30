import path from 'node:path';
import DB from '../db/DB';
import { PostCardData } from '../types';
import { rename } from 'node:fs';
import Mongo from '../db/providers/mongo/mongo';

const db = new DB(new Mongo());

//@ts-ignore
var postData: PostCardData = {};

function generateSlug(title: string) {
	const dashedTitle = title
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zA-Z0-9\s]/g, '')
		.replace(/\s+/g, '-');
	const randomString = (Math.random() + 1).toString(20).substring(2);
	return dashedTitle + '-' + randomString;
}

(async () => {
	const title = process.argv[2];
	const subtitle = process.argv[3];
	const currentPath = process.argv[4];

	postData.title = title;
	postData.subtitle = subtitle;
	postData.slug = generateSlug(title);

	const newPath = path.join(currentPath, '..', postData.slug);
	rename(currentPath, newPath, () => {});

	await db.connect();
	await db.addPost(postData);
	await db.closeConnection();
})();
