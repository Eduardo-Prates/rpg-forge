<script lang="ts">
	import AbilityCard from './AbilityCard.svelte';

	import { abilities } from '$lib/data/abilities';

	import { character } from '$lib/stores/character.svelte';

	import { synchronizeCharacter } from '$lib/utils/character-sync';

	import CardSection from '$lib/components/ui/CardSection.svelte';

	import {
		abilityModifier,
		formatModifier
	} from '$lib/utils/dnd';

	let lastConstitution =
	character.abilities.constitution;

	$effect(() => {
		const constitution =
			character.abilities.constitution;

		if (
			constitution !==
			lastConstitution
		) {
			lastConstitution =
				constitution;

			synchronizeCharacter();
		}
	});

</script>

<CardSection
	id="abilities-section"
	title="Atributos"
>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
		{#each abilities as ability}
			<AbilityCard
				label={ability.label}
				bind:score={character.abilities[
					ability.key
				]}
				modifier={formatModifier(
					abilityModifier(
						character.abilities[
							ability.key
						]
					)
				)}
			/>
		{/each}
	</div>
</CardSection>