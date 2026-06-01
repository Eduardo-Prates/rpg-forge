import { abilityModifier } from './dnd';

export function savingThrowModifier(
	score: number,
	proficient: boolean,
	proficiencyBonus: number
) {
	const modifier = abilityModifier(score);

	if (!proficient) {
		return modifier;
	}

	return modifier + proficiencyBonus;
}