import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconLink from './components/iconLink';
import { githubURL, linkedinURL } from './constants';
import PostsList from './components/postsList';
import DB from './db/DB';
import Mongo from './db/providers/mongo/mongo';

export default async function Home() {
	const db = new DB(new Mongo());
	await db.connect();
	const totalPosts = await db.countPosts();
	const posts = await db.getPosts(0);

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
				<PostsList initialPosts={posts} totalPosts={totalPosts} />
			</section>
		</main>
	);
}
