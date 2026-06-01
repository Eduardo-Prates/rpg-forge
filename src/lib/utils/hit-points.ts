import { abilityModifier } from './dnd';

function averageHitDie(hitDie: number): number {
	switch (hitDie) {
		case 6:
			return 4;

		case 8:
			return 5;

		case 10:
			return 6;

		case 12:
			return 7;

		default:
			return Math.ceil(hitDie / 2);
	}
}

export function calculateMaximumHitPoints(
	hitDie: number,
	level: number,
	constitution: number
): number {
	const constitutionModifier =
		abilityModifier(constitution);

	const firstLevel =
		hitDie + constitutionModifier;

	const additionalLevels =
		(level - 1) *
		(averageHitDie(hitDie) +
			constitutionModifier);

	return firstLevel + additionalLevels;
}