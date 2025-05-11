import type { MDXComponents } from 'mdx/types';
import { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		img: (props: ImageProps) => (
			<div className='grid place-items-center'>
				<img src={String(props.src)} style={{ maxHeight: 500 }} />
			</div>
		),
		...components,
	};
}
