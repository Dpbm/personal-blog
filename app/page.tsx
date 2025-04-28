'use client';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconLink from './components/iconLink';
import { githubURL, linkedinURL } from './constants';
import { PostCardData } from './types';
import PostCard from './components/post';
import { useEffect, useState } from 'react';

export default function Home() {
	const [totalPosts, setTotalPosts] = useState(Infinity);
	const [posts, setPosts] = useState<PostCardData[]>([]);
	const [loading, setLoading] = useState(false);
	const [pointer, setPointer] = useState(0);

	async function getData(p: number) {
		if (p < pointer) return;

		try {
			setLoading(true);
			const res = await fetch(`/api/posts/?offset=${p}`);
			const data: PostCardData[] = await res.json();
			setPosts([...posts, ...data]);
			setPointer(p + 1);
			setLoading(false);
		} catch (error) {}
	}

	async function countPosts() {
		if (totalPosts != Infinity) {
			return;
		}

		try {
			const res = await fetch(`/api/total/posts`);
			const data: { total: number } = await res.json();
			setTotalPosts(data.total);
		} catch (error) {}
	}

	useEffect(() => {
		(async () => {
			await countPosts();
			await getData(pointer);
		})();
	}, []);

	useEffect(() => {
		const handleScroll = async () => {
			if (loading || posts.length >= totalPosts) {
				return;
			}

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
		<main>
			<section className='flex flex-col pt-20 pb-10 pl-10 pr-10 items-center w-screen'>
				<h1 className='text-5xl text-center mb-8'>
					Hello I'm Alexandre (Aka DPBM)👋
				</h1>
				<h2 className='text-lg max-w-2xl text-left mb-8'>
					I'm a computer scientist, passionate about AI and quantum
					computing. My mission here, is to share my knowledge and
					discoveries in this amazing computing world.
				</h2>
				<nav className='flex w-30 items-center justify-between'>
					<IconLink icon={faGithub} url={githubURL} />
					<IconLink icon={faLinkedin} url={linkedinURL} />
				</nav>
			</section>

			<section className='flex flex-col p-10 w-screen'>
				<h1 className='text-2xl'>Recent Posts</h1>
				<li className='list-none'>
					{posts.length > 0 ? (
						posts.map((post: PostCardData) => (
							<PostCard post={post} key={post.id} />
						))
					) : (
						<p className='text-xl mt-10'>
							{!loading ? 'No Posts yet!' : 'Loading Posts...'}
						</p>
					)}
					<span></span>
				</li>
			</section>
		</main>
	);
}
