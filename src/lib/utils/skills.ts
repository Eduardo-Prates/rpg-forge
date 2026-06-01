import { abilityModifier, proficiencyBonus } from './dnd';

export function skillModifier(
	score: number,
	proficient: boolean,
	level: number
) {
	const modifier = abilityModifier(score);

	if (!proficient) {
		return modifier;
	}

	return modifier + proficiencyBonus(level);
}