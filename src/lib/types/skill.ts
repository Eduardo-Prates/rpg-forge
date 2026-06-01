import type { Ability } from './ability';

export interface Skill {
	id: string;
	name: string;
	ability: Ability;
}