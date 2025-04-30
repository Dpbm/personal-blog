'use client';

import { useEffect, useState } from 'react';
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

	async function getData(p: number) {
		if (p < pointer || loading || posts.length >= totalPosts) return;

		try {
			setLoading(true);

			const res = await fetch(`/api/posts?offset=${p}`);
			const data: PostCardData[] = await res.json();
			setPosts([...posts, ...data]);
			setPointer(p + 1);

			setLoading(false);
		} catch (error) {}
	}

	useEffect(() => {
		const handleScroll = async () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;

			const offsetInPX = 300;

			const isAtBottom =
				scrollTop + windowHeight >= documentHeight - offsetInPX;

			if (isAtBottom) {
				await getData(pointer);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [pointer]);

	return (
		<li className='list-none'>
			{posts.length > 0 ? (
				posts.map((post: PostCardData) => (
					<PostCard post={post} key={post.id} />
				))
			) : (
				<p className='text-xl mt-10'>No Posts yet!</p>
			)}
		</li>
	);
}
