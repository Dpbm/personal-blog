import type { MetadataRoute } from 'next';
import { prodURL } from './utils';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${prodURL}/sitemap/*.xml`,
	};
}
