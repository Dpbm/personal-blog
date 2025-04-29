export type InsertionPostcardData = {
	title: string;
	subtitle: string;
	date: number;
	slug: string;
};

export type PostCardData = InsertionPostcardData & {
	id: number;
};

export type PostPageParams = {
	params: Promise<{
		slug: string;
	}>;
};
