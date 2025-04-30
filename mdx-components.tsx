import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props) => (
			<Image
				sizes='100vw'
				width={500}
				height={500}
				style={{ width: '100%', height: 'auto' }}
				{...(props as ImageProps)}
			/>
		),
		...components,
	};
}
