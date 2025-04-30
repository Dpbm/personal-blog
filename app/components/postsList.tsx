'use client';

import { useState } from 'react';
import { PostCardData } from '../types';
import PostCard from './post';

type LoadPostsProps = {
	initialPosts: PostCardData[];
	totalPosts: number;
};

export default function PostsList({
	initialPosts,
	totalPosts,
}: LoadPostsProps) {
	const [posts, setPosts] = useState<PostCardData[]>(initialPosts);
	const [loading, setLoading] = useState(false);
	const [pointer, setPointer] = useState(1);

	const hasMorePosts = posts.length < totalPosts;

	async function getData() {
		if (loading || !hasMorePosts) return;

		try {
			setLoading(true);

			const res = await fetch(`/api/posts?offset=${pointer}`);
			const data: PostCardData[] = await res.json();
			setPosts([...posts, ...data]);
			setPointer((p) => p + 1);

			setLoading(false);
		} catch (error) {}
	}

	return (
		<li className='list-none'>
			{posts.length > 0 ? (
				posts.map((post: PostCardData) => (
					<PostCard post={post} key={post.id} />
				))
			) : (
				<p className='text-xl mt-10'>No Posts yet!</p>
			)}

			{hasMorePosts && (
				<div className='w-full flex flex-col items-center'>
					<button
						onClick={getData}
						disabled={loading}
						className={`border p-5 ${
							!loading
								? 'cursor-pointer hover:opacity-40'
								: 'opacity-40'
						}`}
					>
						{loading ? 'Loading...' : 'Load More Posts'}
					</button>
				</div>
			)}
		</li>
	);
}
