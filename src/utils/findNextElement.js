export default function findNextElementIndex(curSequence, remainingFragments) {
	const sequenceEnd = curSequence.slice(-2);

	for (let i = 0; i < remainingFragments.length; i++) {
		const nextElementStart = remainingFragments[i].slice(0, 2);

		if (sequenceEnd === nextElementStart) {
			return i;
		}
	}
	return -1;
}
