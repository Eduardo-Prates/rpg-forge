<script lang="ts">
	import NumberField from '$lib/components/ui/NumberField.svelte';

	let {
		label,
		score = $bindable(),
		modifier
	} = $props<{
		label: string;
		score: number;
		modifier: string;
	}>();
</script>

<div
	class="flex flex-col items-center rounded-xl border p-4"
>
	<h3
		class="text-center text-sm font-semibold uppercase"
	>
		{label}
	</h3>

	<div class="mt-3 text-3xl font-bold" aria-describedby={`Modificador de ${label}`}>
		{modifier}
	</div>

	<div class="mt-3">
		<NumberField
			id={`ability-${label}`}
			hiddenLabel={`Pontuação de ${label}`}
			bind:value={score}
			min={1}
			max={30}
			compact
		/>
	</div>
</div>