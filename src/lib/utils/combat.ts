import { abilityModifier } from './dnd';
import { skillModifier } from './skills';

export function initiative(
	dexterity: number
): number {
	return abilityModifier(dexterity);
}

export function passivePerception(
	wisdom: number,
	proficient: boolean,
	level: number
): number {
	return (
		10 +
		skillModifier(
			wisdom,
			proficient,
			level
		)
	);
}