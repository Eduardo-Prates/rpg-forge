<script lang="ts">
	import { character } from '$lib/stores/character.svelte';

	import { classes } from '$lib/data/classes';
	import { species } from '$lib/data/species';
	import { backgrounds } from '$lib/data/backgrounds';
	import { synchronizeCharacter } from '$lib/utils/character-sync';
	import CardSection from '$lib/components/ui/CardSection.svelte';
	import CheckboxField from '$lib/components/ui/CheckboxField.svelte';

	function updateClassData() {
		synchronizeCharacter();
	}

</script>

<CardSection
	id="character-section"
	title="Personagem"
>
	<div class="grid gap-4 md:grid-cols-2">
		<div class="form-field">
			<label
				for="name"
				class="form-label"
			>
				Nome
			</label>

			<input
				id="name"
				type="text"
				bind:value={character.name}
				class="form-input"
			/>
		</div>

		<div class="form-field">
			<label
				for="class"
				class="form-label"
			>
				Classe
			</label>

			<select
				id="class"
				class="form-input"
				bind:value={character.class}
				onchange={updateClassData}
			>
				<option value="">
					Selecione uma classe
				</option>

				{#each classes as cls}
					<option value={cls.value}>
						{cls.label}
					</option>
				{/each}
			</select>
		</div>

		<div class="form-field">
			<label
				for="species"
				class="form-label"
			>
				Espécie
			</label>

			<select
				id="species"
				class="form-input"
				bind:value={character.species}
			>
				<option value="">
					Selecione uma espécie
				</option>

				{#each species as sp}
					<option value={sp.value}>
						{sp.label}
					</option>
				{/each}
			</select>
		</div>

		<div class="form-field">
			<label
				for="background"
				class="form-label"
			>
				Background
			</label>

			<select
				id="background"
				class="form-input"
				bind:value={character.background}
			>
				<option value="">
					Selecione um background
				</option>

				{#each backgrounds as bg}
					<option value={bg.value}>
						{bg.label}
					</option>
				{/each}
			</select>
		</div>

		<div class="form-field">
			<label
				for="level"
				class="form-label"
			>
				Nível
			</label>

			<input
				id="level"
				type="number"
				min="1"
				bind:value={character.level}
				onchange={updateClassData}
				class="form-input"
			/>
		</div>

		<div class="form-field">
			<label
				for="xp"
				class="form-label"
			>
				XP
			</label>

			<input
				id="xp"
				type="number"
				min="0"
				bind:value={character.xp}
				class="form-input"
			/>
		</div>
	</div>

	<div class="mt-6"> 
		<CheckboxField
			id="inspiration"
			label="Possui Inspiração"
			bind:checked={character.inspiration}
		/>
	</div>
	
</CardSection>
