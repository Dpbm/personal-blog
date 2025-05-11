import type { MDXComponents } from 'mdx/types';
import { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props: ImageProps) => (
			<div className='post-image'>
				<img src={String(props.src)} />
			</div>
		),
		...components,
	};
}
