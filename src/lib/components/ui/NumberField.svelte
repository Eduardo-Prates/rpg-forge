<script lang="ts">
	let {
		id,
		label,
		hiddenLabel,
		value = $bindable(),
		min,
		max,
		step = 1,
		description,
		compact = false
	} = $props<{
		id: string;
		label?: string;
		hiddenLabel?: string;
		value: number;
		min?: number;
		max?: number;
		step?: number;
		description?: string;
		compact?: boolean;
	}>();

	const descriptionId = `${id}-description`;
</script>

<div class="space-y-1">
	<!-- Hidden Label for Accessibility -->
	<label
		for={id}
		class="sr-only"
	>
		{hiddenLabel || label}
	</label>

	{#if label}
		<label
			for={id}
			class="block text-sm font-medium"
		>
			{label}
		</label>
	{/if}

	<input
		id={id}
		type="number"
		inputmode="numeric"
		bind:value
		{min}
		{max}
		{step}
		aria-describedby={
			description
				? descriptionId
				: undefined
		}
		class={`
			focus-ring
			rounded-md
			border
			p-2

			${compact
				? 'w-20 text-center'
				: 'w-full'}
		`}
	/>

	{#if description}
		<p
			id={descriptionId}
			class="text-sm text-gray-500"
		>
			{description}
		</p>
	{/if}
</div>