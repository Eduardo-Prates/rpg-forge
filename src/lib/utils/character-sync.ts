import { classRegistry } from '$lib/data/class-registry';
import { character } from '$lib/stores/character.svelte';

import { calculateMaximumHitPoints } from './hit-points';

export function synchronizeCharacter() {
	if (!character.class) {
		return;
	}

	const classData =
		classRegistry[character.class];

	character.speed =
		classData.defaultSpeed;

	const maximumHitPoints =
		calculateMaximumHitPoints(
			classData.hitDie,
			character.level,
			character.abilities.constitution
		);

	character.hitPoints.maximum =
		maximumHitPoints;

	character.hitPoints.current =
		maximumHitPoints;

	character.hitPoints.hitDiceMaximum =
		character.level;

	if (
		character.hitPoints.hitDiceCurrent >
		character.level
	) {
		character.hitPoints.hitDiceCurrent =
			character.level;
	}
}