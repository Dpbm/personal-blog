import Link from 'next/link';
import { PostCardData } from '../types';
import { buildPostURL } from '../utils';

export default function PostCard({ post }: { post: PostCardData }) {
	const datetime = new Date(post.date).toUTCString();
	const postURL = buildPostURL(post.slug);

	return (
		<Link href={postURL}>
			<ul className='border p-10 rounded-md hover:opacity-40'>
				<h1 className='text-3xl'>{post.title}</h1>
				<h2 className='text-md'>{post.subtitle}</h2>
				<time dateTime={datetime} className='text-xs text-zinc-500'>
					{datetime}
				</time>
			</ul>
		</Link>
	);
}
