<script lang="ts">
	export interface SelectOption {
		value: string;
		label: string;
	}

	let {
		id,
		label,
		value = $bindable(),
		options,
		description,
		placeholder = 'Selecione'
	} = $props<{
		id: string;
		label: string;
		value: string | null;
		options: SelectOption[];
		description?: string;
		placeholder?: string;
	}>();

	const descriptionId = `${id}-description`;
</script>

<div class="space-y-1">
	<label
		for={id}
		class="block text-sm font-medium"
	>
		{label}
	</label>

	<select
		id={id}
		bind:value
		aria-describedby={
			description
				? descriptionId
				: undefined
		}
		class="
			focus-ring
			w-full
			rounded-md
			border
			p-2
		"
	>
		<option value="">
			{placeholder}
		</option>

		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>

	{#if description}
		<p
			id={descriptionId}
			class="text-sm text-gray-500"
		>
			{description}
		</p>
	{/if}
</div>