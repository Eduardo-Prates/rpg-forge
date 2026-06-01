import type { Character } from '$lib/types/character';

import { defaultCharacter } from '$lib/data/default-character';

export const character =
	$state<Character>(
		structuredClone(
			defaultCharacter
		)
	);