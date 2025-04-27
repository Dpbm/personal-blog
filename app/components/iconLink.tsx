import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function IconLink({
	url,
	icon,
}: {
	url: string;
	icon: IconDefinition;
}) {
	return (
		<Link href={url} style={{ color: 'black' }}>
			<FontAwesomeIcon
				icon={icon}
				height={40}
				className='hover:opacity-40'
			/>
		</Link>
	);
}
