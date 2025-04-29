import { PostCardData } from '../../../types';

export default function mapToPostData(data: any): PostCardData[] {
	return data.map(
		(d: any) =>
			({
				id: d.id,
				title: d.title,
				subtitle: d.subtitle,
				date: d.date,
				slug: d.slug,
			} as PostCardData)
	);
}
