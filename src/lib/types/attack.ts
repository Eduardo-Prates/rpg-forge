import type { Ability } from './ability';

export interface Attack {
	id: string;

	name: string;

	ability: Ability;

	damageDice: string;

	damageType: string;

	proficient: boolean;
}