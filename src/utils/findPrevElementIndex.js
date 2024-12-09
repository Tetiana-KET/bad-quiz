export default function findPrevElementIndex(curSequence, remainingFragments) {
	const sequenceStart = curSequence.slice(0, 2);

	for (let i = 0; i < remainingFragments.length; i++) {
		const nextElementEnd = remainingFragments[i].slice(-2);

		if (sequenceStart === nextElementEnd) {
			return i;
		}
	}
	return -1;
}
