import Link from 'next/link';
import { PostCardData } from '../types';
import { buildPostURL, getDateString } from '../utils';

export default function PostCard({ post }: { post: PostCardData }) {
	const datetime = new Date(post.date);
	const dateString = getDateString(datetime);

	const postURL = buildPostURL(post.slug);

	return (
		<Link href={postURL}>
			<ul className='border p-10 mb-10 rounded-md hover:opacity-40'>
				<h1 className='text-3xl text-wrap'>{post.title}</h1>
				<h2 className='text-md text-wrap'>{post.subtitle}</h2>
				<time
					dateTime={datetime.toUTCString()}
					className='text-xs text-zinc-500 text-wrap'
				>
					{dateString}
				</time>
			</ul>
		</Link>
	);
}
