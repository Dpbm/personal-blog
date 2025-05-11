import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props) => (
			<Image
				sizes='100vw'
				width={100}
				height={100}
				style={{ width: '100%', height: 'auto' }}
				{...(props as ImageProps)}
			/>
		),
		...components,
	};
}
