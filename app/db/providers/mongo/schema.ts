import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
	title: String,
	subtitle: String,
	date: { type: Number, default: Math.trunc(Date.now()) },
	slug: String,
});

export const postModel =
	mongoose.models.Post || mongoose.model('Post', postSchema);
