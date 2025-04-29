import { InsertionPostcardData, PostCardData } from '../types';
import { Persistence } from './Persistence';

export default class DB implements Persistence {
	private provider: Persistence;

	constructor(provider: Persistence) {
		this.provider = provider;
	}

	async connect(): Promise<void> {
		await this.provider.connect();
	}

	async addPost(post: InsertionPostcardData): Promise<void> {
		await this.provider.addPost(post);
	}

	async getPosts(offset: number): Promise<PostCardData[]> {
		return await this.provider.getPosts(offset);
	}

	async getPost(slug: string): Promise<PostCardData> {
		return await this.provider.getPost(slug);
	}

	async getAllPosts(): Promise<PostCardData[]> {
		return await this.provider.getAllPosts();
	}

	async countPosts(): Promise<number> {
		return await this.provider.countPosts();
	}

	async closeConnection(): Promise<void> {
		await this.provider.closeConnection();
	}
}
