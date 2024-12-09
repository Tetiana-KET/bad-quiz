import fs from 'node:fs';
import { join } from 'path';

export async function readFile(pathToFileTiRead) {
	const curDir = process.cwd();

	const readableStream = fs.createReadStream(
		join(curDir, pathToFileTiRead),
		'utf8'
	);
	return new Promise((resolve, reject) => {
		let data = '';

		readableStream.on('data', chunk => (data += chunk));

		readableStream.on('end', () => {
			const lines = data
				.split('\n')
				.map(line => line.trim().replace(/\r$/, ''));
			resolve(lines);
		});

		readableStream.on('error', error => {
			reject(error);
		});
	});
}
