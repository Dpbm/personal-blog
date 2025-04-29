import { InsertionPostcardData, PostCardData } from '../types';

export interface Persistence {
	connect(): Promise<void>;
	countPosts(): Promise<number>;
	getPosts(offset: number): Promise<PostCardData[]>;
	getAllPosts(): Promise<PostCardData[]>;
	getPost(slug: string): Promise<PostCardData>;
	addPost(post: InsertionPostcardData): Promise<void>;
	closeConnection(): Promise<void>;
}
