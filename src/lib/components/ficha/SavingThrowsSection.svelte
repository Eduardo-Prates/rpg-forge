<script lang="ts">
	import { character } from '$lib/stores/character.svelte';

	import { classRegistry } from '$lib/data/class-registry';

	import type { Ability } from '$lib/types/ability';

	import { abilities } from '$lib/data/abilities';

	import CardSection from '$lib/components/ui/CardSection.svelte';

	import {
		formatModifier,
		proficiencyBonus
	} from '$lib/utils/dnd';

	import {
		savingThrowModifier
	} from '$lib/utils/saving-throws';
	
	const currentProficiencyBonus = $derived(
		proficiencyBonus(character.level)
	);	
	
	function isProficient(
		ability: Ability
	): boolean {
		if (!character.class) {
			return false;
		}

		const classData =
			classRegistry[
				character.class
			];

		return (
			classData?.savingThrows.some(
				(save) => save === ability
			) ?? false
		);
	}
</script>

<CardSection
	id="saving-throws-section"
	title="Salvaguardas"
>
	<div class="grid gap-2">
		{#each abilities as ability}
			<div
				class="flex items-center justify-between rounded-lg border p-3"
			>
				<div class="flex items-center gap-2">
					{#if isProficient(
						ability.key
					)}
						<span
							aria-label="Proficiente"
						>
							●
						</span>
					{/if}

					<span>
						{ability.label}
					</span>
				</div>

				<span class="font-semibold">
					{formatModifier(
						savingThrowModifier(
							character.abilities[
								ability.key
							],
							isProficient(
								ability.key
							),
							currentProficiencyBonus
						)
					)}
				</span>
			</div>
		{/each}
	</div>
</CardSection>