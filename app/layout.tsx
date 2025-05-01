import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { githubURL } from './constants';
import './global.css';

const roboto = Roboto({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dpbm Website',
	description: 'This is my personal website.',
	abstract:
		"My website contains a bunch of posts telling my ideas about technology in general. I'm pretty sure you'd like to read them ;)",
	applicationName: 'Dpbm Website',
	authors: [
		{ name: 'Dpbm', url: githubURL },
		{ name: 'Alexandre', url: githubURL },
	],
	category: 'Technology,blogs',
	creator: 'Alexandre(Dpbm)',
	keywords: [
		'technology',
		'computer science',
		'computer',
		'blog',
		'python',
		'AI',
		'quantum computing',
		'quantum',
		'ideas',
	],
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
