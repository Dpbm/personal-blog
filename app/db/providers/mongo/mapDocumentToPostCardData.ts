import { PostCardData } from '../../../types';

export function MapDocumentToPostCardData(document: any): PostCardData {
	return {
		id: document._id.valueOf(),
		title: document.title,
		subtitle: document.subtitle,
		date: document.date,
		slug: document.slug,
	} as PostCardData;
}

export function MapManyDocumentsToPostCardData(
	documents: any[]
): PostCardData[] {
	return documents.map(MapDocumentToPostCardData);
}
