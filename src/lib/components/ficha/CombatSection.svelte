<script lang="ts">
	import { character } from '$lib/stores/character.svelte';

	import CardSection from '$lib/components/ui/CardSection.svelte';
	import NumberField from '$lib/components/ui/NumberField.svelte';
	import StatDisplay from '$lib/components/ui/StatDisplay.svelte';

	import {
		formatModifier,
		proficiencyBonus
	} from '$lib/utils/dnd';

	import {
		initiative,
		passivePerception
	} from '$lib/utils/combat';

	function hasPerceptionProficiency() {
		return character.skillProficiencies.includes(
			'perception'
		);
	}
</script>

<CardSection
	id="combat-section"
	title="Combate"
>
	<div class="grid gap-2">
		<NumberField
			id="armor-class"
			label="Classe de Armadura"
			bind:value={character.armorClass}
		/>

		<dl class="grid gap-2">
			<StatDisplay
				label="Iniciativa"
				value={formatModifier(
					initiative(
						character.abilities.dexterity
					)
				)}
			/>

			<StatDisplay
				label="Bônus de Proficiência"
				value={formatModifier(
					proficiencyBonus(
						character.level
					)
				)}
			/>

			<StatDisplay
				label="Percepção Passiva"
				value={passivePerception(
					character.abilities.wisdom,
					hasPerceptionProficiency(),
					character.level
				)}
			/>
		</dl>

		<NumberField
			id="speed"
			label="Deslocamento"
			bind:value={character.speed}
			description="Valor em metros por rodada"
		/>
	</div>
</CardSection>