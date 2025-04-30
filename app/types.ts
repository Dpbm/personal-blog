export type InsertionPostcardData = {
	title: string;
	subtitle: string;
	date: number;
	slug: string;
};

export type PostCardData = InsertionPostcardData & {
	id: string;
};
