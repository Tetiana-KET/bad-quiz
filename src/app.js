import { readFile } from './readFile.js';

export default async function app() {
	const puzzles = await readFile('source.txt');
	console.log(puzzles);
}
