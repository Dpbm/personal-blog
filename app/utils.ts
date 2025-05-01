export const buildPostURL = (slug: string) => `/posts/${slug}`;
export const getDateString = (date: Date) =>
	`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
export const prodURL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
