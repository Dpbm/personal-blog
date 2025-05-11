import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const nextConfig: NextConfig = {
	pageExtensions: ['mdx', 'ts', 'tsx'],
	trailingSlash: true,
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});

export default withMDX(nextConfig);
