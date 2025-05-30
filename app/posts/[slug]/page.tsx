import IconLink from '@/app/components/iconLink';
import DB from '@/app/db/DB';
import { getDateString } from '@/app/utils';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './post.module.css'; // default styles for mdx
import Mongo from '@/app/db/providers/mongo/mongo';

type PostPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function Page({ params }: PostPageProps) {
	const { slug } = await params;

	const db = new DB(new Mongo());
	await db.connect();
	const postData = await db.getPost(slug);

	const { title, subtitle, date, slug: safeSlug } = postData;
	const datetime = new Date(date);
	const dateUTC = datetime.toUTCString();
	const dateString = getDateString(datetime);

	const { default: MdxPost } = await import(
		`../../content/${safeSlug}/post.mdx`
	);

	return (
		<main className='p-10 sm:p-30'>
			<IconLink icon={faArrowLeft} url={'/'} />
			<h1 className='text-5xl mb-2 mt-10 font-bold'>{title}</h1>
			<h2 className='text-2xl'>{subtitle}</h2>
			<time dateTime={dateUTC} className='text-md text-zinc-500'>
				{dateString}
			</time>
			<div className='mb-10'></div>
			<div className={styles.post}>
				<MdxPost />
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	const db = new DB(new Mongo());
	await db.connect();
	const posts = await db.getAllPosts();
	await db.closeConnection();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export const dynamicParams = false;
