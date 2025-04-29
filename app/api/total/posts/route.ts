import DB from '@/app/db/DB';
import Mongo from '@/app/db/providers/mongo/mongo';

export async function GET() {
	try {
		const db = new DB(new Mongo());
		await db.connect();
		const data = await db.countPosts();
		await db.closeConnection();

		return new Response(
			JSON.stringify({
				total: data,
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (error) {
		console.error(`Failed on count posts\n${error}`);
		return new Response(JSON.stringify({ total: 0 }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
