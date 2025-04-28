import { postsPerPage } from '@/app/constants';
import DB from '@/app/db/DB';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const offset = searchParams.get('offset');
	const safeOffset = offset ? parseInt(offset) * postsPerPage : 0;

	try {
		const db = new DB();
		const data = db.getPosts(safeOffset);
		db.close();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error(`Failed on get posts: ${offset}`);
		return new Response(JSON.stringify([]), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
