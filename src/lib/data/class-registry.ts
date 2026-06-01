import type { ClassDefinition } from '$lib/types/class-definition';

export const classRegistry = {
	barbarian: {
		name: 'Bárbaro',
		hitDie: 12,
		defaultSpeed: 9,
		savingThrows: ['strength', 'constitution']
	},

	bard: {
		name: 'Bardo',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['dexterity', 'charisma']
	},

	cleric: {
		name: 'Clérigo',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['wisdom', 'charisma']
	},

	druid: {
		name: 'Druida',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['intelligence', 'wisdom']
	},

	fighter: {
		name: 'Guerreiro',
		hitDie: 10,
		defaultSpeed: 9,
		savingThrows: ['strength', 'constitution']
	},

	monk: {
		name: 'Monge',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['strength', 'dexterity']
	},

	paladin: {
		name: 'Paladino',
		hitDie: 10,
		defaultSpeed: 9,
		savingThrows: ['wisdom', 'charisma']
	},

	ranger: {
		name: 'Patrulheiro',
		hitDie: 10,
		defaultSpeed: 9,
		savingThrows: ['strength', 'dexterity']
	},

	rogue: {
		name: 'Ladino',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['dexterity', 'intelligence']
	},

	sorcerer: {
		name: 'Feiticeiro',
		hitDie: 6,
		defaultSpeed: 9,
		savingThrows: ['constitution', 'charisma']
	},

	warlock: {
		name: 'Bruxo',
		hitDie: 8,
		defaultSpeed: 9,
		savingThrows: ['wisdom', 'charisma']
	},

	wizard: {
		name: 'Mago',
		hitDie: 6,
		defaultSpeed: 9,
		savingThrows: ['intelligence', 'wisdom']
	}
} satisfies Record<string, ClassDefinition>;