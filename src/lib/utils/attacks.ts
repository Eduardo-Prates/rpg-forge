import { abilityModifier, proficiencyBonus } from './dnd';

export function attackBonus(
	abilityScore: number,
	proficient: boolean,
	level: number
): number {
	const modifier =
		abilityModifier(abilityScore);

	if (!proficient) {
		return modifier;
	}

	return (
		modifier +
		proficiencyBonus(level)
	);
}

export function damageModifier(
	abilityScore: number
): number {
	return abilityModifier(
		abilityScore
	);
}