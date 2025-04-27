import readline from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
import path from 'node:path';
import DB from '../db/DB';
import { PostCardData } from '../types';
import { rename } from 'node:fs';

type Callback = (_: string) => void;
type Prompt = { prompt: string; func: Callback };
type Prompts = Prompt[];

const db = new DB();
const rl = readline.createInterface({ input: stdin, output: stdout });

//@ts-ignore
var postData: PostCardData = {};

function generateSlug(title: string) {
	const dashedTitle = title.replace(' ', '-');
	const randomString = (Math.random() + 1).toString(20).substring(2);
	return dashedTitle + '-' + randomString;
}

function setTitle(title: string) {
	postData.title = title;
	postData.slug = generateSlug(title);
}

function setSubTitle(subtitle: string) {
	postData.subtitle = subtitle;
}

function updatePath(currentPath: string) {
	const newPath = path.join(currentPath, '..', postData.slug);
	rename(currentPath, newPath, () => {});
}

function ask(prompt: Prompt): Promise<void> {
	return new Promise((resolve) => {
		rl.question(prompt.prompt, (answer: string) => {
			prompt.func(answer);
			resolve();
		});
	});
}

const prompts: Prompts = [
	{ prompt: 'post title: ', func: setTitle },
	{ prompt: 'post subtitle: ', func: setSubTitle },
	{ prompt: 'post path: ', func: updatePath },
];

(async () => {
	for await (const prompt of prompts) {
		await ask(prompt);
	}

	rl.close();

	// @ts-ignore
	db.addPost(postData);
	db.close();
})();
