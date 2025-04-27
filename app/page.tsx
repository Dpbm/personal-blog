import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconLink from './components/iconLink';
import { githubURL, linkedinURL } from './constants';
import { PostCardData } from './types';
import PostCard from './components/post';
import DB from './db/DB';

export default function Home() {
	const db = new DB();
	const posts = db.getPosts(0);

	return (
		<main>
			<section className='flex flex-col p-20 items-center w-screen'>
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

			<section className='flex flex-col p-20 w-screen'>
				<h1 className='text-2xl'>Recent Posts</h1>
				<li className='list-none'>
					{posts.length > 0 ? (
						posts.map((post: PostCardData) => (
							<PostCard post={post} key={post.id} />
						))
					) : (
						<p className='text-xl mt-10'>No Posts yet!</p>
					)}
				</li>
			</section>
		</main>
	);
}
