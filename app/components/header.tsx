import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { githubURL, linkedinURL } from '../constants';

function SocialLink({ url, icon }: { url: string; icon: IconDefinition }) {
	return (
		<Link href={url} style={{ color: 'black' }}>
			<FontAwesomeIcon icon={icon} height={40} />
		</Link>
	);
}

export default function Header() {
	return (
		<section className='flex flex-col p-20 items-center'>
			<h1 className='text-5xl text-center mb-8'>
				Hello I'm Alexandre (Aka DPBM)👋
			</h1>
			<h2 className='text-lg max-w-2xl text-left mb-8'>
				I'm a computer scientist, passionate about AI and quantum
				computing. My mission here, is to share my knowledge and
				discoveries in this amazing computing world.
			</h2>
			<nav className='flex w-30 items-center justify-between'>
				<SocialLink icon={faGithub} url={githubURL} />
				<SocialLink icon={faLinkedin} url={linkedinURL} />
			</nav>
		</section>
	);
}
