import IconLink from '@/app/components/iconLink';
import DB from '@/app/db/DB';
import { PostPageParams } from '@/app/types';
import { getDateString } from '@/app/utils';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './post.css'; // default styles for mdx

export default async function Page({ params }: PostPageParams) {
	const { slug } = await params;

	const db = new DB();
	const postData = db.getPost(slug);

	const { title, subtitle, date, slug: safeSlug } = postData;
	const datetime = new Date(date);
	const dateUTC = datetime.toUTCString();
	const dateString = getDateString(datetime);

	const { default: MdxPost } = await import(
		`../../content/${safeSlug}/post.mdx`
	);

	return (
		<main className='p-20'>
			<IconLink icon={faArrowLeft} url={'/'} />
			<h1 className='text-5xl mb-2 mt-10 font-bold'>{title}</h1>
			<h2 className='text-2xl'>{subtitle}</h2>
			<time dateTime={dateUTC} className='text-md text-zinc-500'>
				{dateString}
			</time>
			<div className='mb-10'></div>

			<MdxPost />
		</main>
	);
}

export function generateStaticParams() {
	const posts = new DB().getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export const dynamicParams = false;
