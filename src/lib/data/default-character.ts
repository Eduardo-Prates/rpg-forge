import type { Character } from '$lib/types/character';

export const defaultCharacter: Character = {
	id: crypto.randomUUID(),

	name: '',

	class: null,
	subclass: null,

	species: null,
	background: null,

	level: 1,
	xp: 0,

	inspiration: false,

	skillProficiencies: [],

	armorClass: 10,

	speed: 9,

	hitPoints: {
		current: 10,
		maximum: 10,
		temporary: 0,

		hitDiceCurrent: 1,
		hitDiceMaximum: 1
	},

	abilities: {
		strength: 10,
		dexterity: 10,
		constitution: 10,
		intelligence: 10,
		wisdom: 10,
		charisma: 10
	},

	attacks: [],

	equipment: []
};