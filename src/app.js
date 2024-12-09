import buildSequence from './utils/buildSequence.js';
import { readFile } from './utils/readFile.js';

export default async function app() {
	const puzzles = await readFile('source.txt');
	buildSequence(puzzles);
}
