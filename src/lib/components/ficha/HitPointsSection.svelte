<script lang="ts">
	import { character } from '$lib/stores/character.svelte';
	import CardSection from '$lib/components/ui/CardSection.svelte';
</script>

<CardSection
	id="hit-points-section"
	title="Pontos de Vida"
>
	<div class="grid gap-4 md:grid-cols-2">
		<div class="rounded-lg border p-4">
			<label
				for="hp-current"
				class="mb-2 block font-medium"
			>
				PV Atuais
			</label>

			<input
				id="hp-current"
				type="number"
				min="0"
				bind:value={character.hitPoints.current}
				class="w-full rounded border p-2"
			/>
		</div>

		<div class="rounded-lg border p-4">
			<label
				for="hp-max"
				class="mb-2 block font-medium"
			>
				PV Máximos
			</label>

			<input
				id="hp-max"
				type="number"
				min="1"
				bind:value={character.hitPoints.maximum}
				class="w-full rounded border p-2"
			/>
		</div>

		<div class="rounded-lg border p-4">
			<label
				for="hp-temp"
				class="mb-2 block font-medium"
			>
				PV Temporários
			</label>

			<input
				id="hp-temp"
				type="number"
				min="0"
				bind:value={character.hitPoints.temporary}
				class="w-full rounded border p-2"
			/>
		</div>

		<div class="rounded-lg border p-4">
			<label
				for="hit-dice"
				class="mb-2 block font-medium"
			>
				Dados de Vida
			</label>

			<div class="flex items-center gap-2">
				<input
					id="hit-dice"
					type="number"
					min="0"
					bind:value={character.hitPoints.hitDiceCurrent}
					class="w-20 rounded border p-2 text-center"
				/>

				<span>/</span>

				<input
					type="number"
					min="0"
					bind:value={character.hitPoints.hitDiceMaximum}
					class="w-20 rounded border p-2 text-center"
				/>
			</div>
		</div>
	</div>
</CardSection>