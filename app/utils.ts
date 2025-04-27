export const buildPostURL = (slug: string) => `/posts/${slug}`;
export const getDateString = (date: Date) =>
	`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
