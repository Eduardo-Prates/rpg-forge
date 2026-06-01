import type { Ability } from './ability';

export interface ClassDefinition {
	name: string;

	hitDie: number;

	savingThrows: Ability[];

	defaultSpeed: number;
}