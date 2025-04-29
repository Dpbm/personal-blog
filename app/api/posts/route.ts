import { postsPerPage } from '@/app/constants';
import DB from '@/app/db/DB';
import Mongo from '@/app/db/providers/mongo/mongo';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const offset = searchParams.get('offset');
	const safeOffset = offset ? parseInt(offset) * postsPerPage : 0;

	try {
		const db = new DB(new Mongo());
		await db.connect();
		const data = await db.getPosts(safeOffset);
		await db.closeConnection();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error(`Failed on get posts: ${offset}\n${error}`);
		return new Response(JSON.stringify([]), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
