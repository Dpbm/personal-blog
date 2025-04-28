import DB from '@/app/db/DB';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		const db = new DB();
		const data = db.countPosts();
		db.close();

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
		console.error(`Failed on count posts`);
		return new Response(JSON.stringify({ total: 0 }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
