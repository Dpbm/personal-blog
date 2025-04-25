import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconLink from './components/iconLink';
import { githubURL, linkedinURL } from './constants';
import { PostCardData } from './types';
import PostCard from './components/post';

const posts: PostCardData[] = [
	{
		title: 'test',
		subtitle: 'ajkdsha9dhu9329ud23hu9d23hu9',
		date: Date.now(),
		slug: 'asdadjhas',
	},
];

export default function Home() {
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

			<section className='flex flex-col p-20  w-screen'>
				<h1 className='text-2xl'>Recent Posts</h1>
				<li className='list-none'>
					{posts.map((post: PostCardData) => (
						<PostCard post={post} />
					))}
				</li>
			</section>
		</main>
	);
}
