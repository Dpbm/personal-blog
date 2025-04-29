import DB from './app/db/DB';
import Mongo from './app/db/providers/mongo/mongo';
import Sqlite from './app/db/providers/sqlite/sqlite';

(async () => {
	const db = new DB(new Sqlite());
	await db.connect();
	const posts = await db.getAllPosts();
	await db.closeConnection();

	const db2 = new DB(new Mongo());
	await db2.connect();
	for (const post of posts) {
		await db2.addPost({
			date: post.date,
			slug: post.slug,
			subtitle: post.subtitle,
			title: post.title,
		});
	}
	await db2.closeConnection();
})();
