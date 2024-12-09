import findNextElementIndex from './findNextElement.js';
import findPrevElementIndex from './findPrevElementIndex.js';

export default function buildSequence(fragments) {
	const usedFragments = new Set();
	let sequence = fragments[0];
	console.log(`sequence: `, sequence);
	usedFragments.add(fragments[0]);

	console.log(`usedFragments: `, usedFragments);

	while (usedFragments.size < fragments.length) {
		const remainingFragments = fragments.filter(el => !usedFragments.has(el));
		const nextElementIndex = findNextElementIndex(sequence, remainingFragments);

		if (nextElementIndex !== -1) {
			sequence += remainingFragments[nextElementIndex].slice(2);
			usedFragments.add(remainingFragments[nextElementIndex]);
		} else {
			const prevElementIndex = findPrevElementIndex(
				sequence,
				remainingFragments
			);
			if (prevElementIndex !== -1) {
				sequence = remainingFragments[prevElementIndex].slice(0, -2) + sequence;
				usedFragments.add(remainingFragments[prevElementIndex]);
			} else {
				break;
			}
		}
	}
	console.log(`Resulting sequence: `, sequence);
	console.log(`Resulting used Fragments: `, usedFragments);
}
