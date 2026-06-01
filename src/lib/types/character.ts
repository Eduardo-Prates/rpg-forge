import type { Ability } from './ability';
import type { CharacterClass } from './class';
import type { SkillId } from './skill-id';
import type { Attack } from './attack';
import type { EquipmentItem } from './equipment';

export type AbilityScores = Record<Ability, number>;

export interface HitPoints {
	current: number;
	maximum: number;
	temporary: number;

	hitDiceCurrent: number;
	hitDiceMaximum: number;
}

export interface Character {
	id: string;

	name: string;

	class: CharacterClass | null;
	subclass: string | null;

	species: string | null;
	background: string | null;

	level: number;
	xp: number;

	inspiration: boolean;

	armorClass: number;

	speed: number;

	hitPoints: HitPoints;

	abilities: AbilityScores;

	skillProficiencies: SkillId[];

	attacks: Attack[];

	equipment: EquipmentItem[];
}