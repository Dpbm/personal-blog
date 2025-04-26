export type PostCardData = {
	id: number;
	title: string;
	subtitle: string;
	date: number;
	slug: string;
};

export type PostPageParams = {
	params: {
		slug: string;
	};
};
