import type { Skill } from '$lib/types/skill';

export const skills: Skill[] = [
	{ id: 'acrobatics', name: 'Acrobacia', ability: 'dexterity' },
	{ id: 'arcana', name: 'Arcanismo', ability: 'intelligence' },
	{ id: 'athletics', name: 'Atletismo', ability: 'strength' },
	{ id: 'performance', name: 'Atuação', ability: 'charisma' },
	{ id: 'deception', name: 'Enganação', ability: 'charisma' },
	{ id: 'stealth', name: 'Furtividade', ability: 'dexterity' },
	{ id: 'history', name: 'História', ability: 'intelligence' },
	{ id: 'intimidation', name: 'Intimidação', ability: 'charisma' },
	{ id: 'insight', name: 'Intuição', ability: 'wisdom' },
	{ id: 'investigation', name: 'Investigação', ability: 'intelligence' },
	{ id: 'animal-handling', name: 'Lidar com Animais', ability: 'wisdom' },
	{ id: 'medicine', name: 'Medicina', ability: 'wisdom' },
	{ id: 'nature', name: 'Natureza', ability: 'intelligence' },
	{ id: 'perception', name: 'Percepção', ability: 'wisdom' },
	{ id: 'persuasion', name: 'Persuasão', ability: 'charisma' },
	{ id: 'sleight-of-hand', name: 'Prestidigitação', ability: 'dexterity' },
	{ id: 'religion', name: 'Religião', ability: 'intelligence' },
	{ id: 'survival', name: 'Sobrevivência', ability: 'wisdom' }
];