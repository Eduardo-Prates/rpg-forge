import type { Ability } from '$lib/types/ability';

export interface AbilityDefinition {
	key: Ability;
	label: string;
	shortLabel: string;
}

export const abilities: AbilityDefinition[] = [
	{
		key: 'strength',
		label: 'Força',
		shortLabel: 'FOR'
	},
	{
		key: 'dexterity',
		label: 'Destreza',
		shortLabel: 'DES'
	},
	{
		key: 'constitution',
		label: 'Constituição',
		shortLabel: 'CON'
	},
	{
		key: 'intelligence',
		label: 'Inteligência',
		shortLabel: 'INT'
	},
	{
		key: 'wisdom',
		label: 'Sabedoria',
		shortLabel: 'SAB'
	},
	{
		key: 'charisma',
		label: 'Carisma',
		shortLabel: 'CAR'
	}
];

export const abilityLabels: Record<Ability, string> = {
	strength: 'Força',
	dexterity: 'Destreza',
	constitution: 'Constituição',
	intelligence: 'Inteligência',
	wisdom: 'Sabedoria',
	charisma: 'Carisma'
};

export const abilityShortLabels: Record<Ability, string> = {
	strength: 'FOR',
	dexterity: 'DES',
	constitution: 'CON',
	intelligence: 'INT',
	wisdom: 'SAB',
	charisma: 'CAR'
};