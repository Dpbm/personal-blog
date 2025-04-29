import mongoose, { Model, Mongoose, Schema } from 'mongoose';
import { Persistence } from '../../Persistence';
import { InsertionPostcardData, PostCardData } from '../../../types';
import {
	MapDocumentToPostCardData,
	MapManyDocumentsToPostCardData,
} from './mapDocumentToPostCardData';
import { postsPerPage } from '../../../constants';
import { postModel } from './schema';

export default class Mongo implements Persistence {
	async connect(): Promise<void> {
		await mongoose.connect(String(process.env.MONGO_URI));
	}

	async addPost(post: InsertionPostcardData): Promise<void> {
		const postData = new postModel(post);
		await postData.save();
	}

	async countPosts(): Promise<number> {
		return await postModel.countDocuments();
	}

	async getAllPosts(): Promise<PostCardData[]> {
		const documents = await postModel.find();
		return MapManyDocumentsToPostCardData(documents);
	}

	async getPost(slug: string): Promise<PostCardData> {
		const post = await postModel.findOne({ slug: slug });
		return MapDocumentToPostCardData(post);
	}

	async getPosts(offset: number): Promise<PostCardData[]> {
		const posts = await postModel
			.find()
			.sort({ _id: -1 })
			.skip(offset)
			.limit(postsPerPage);
		return MapManyDocumentsToPostCardData(posts);
	}

	async closeConnection(): Promise<void> {
		await mongoose.connection.close();
	}
}
