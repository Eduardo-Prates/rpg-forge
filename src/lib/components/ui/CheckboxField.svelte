<script lang="ts">
	let {
		id,
		label,
		checked = $bindable(),
		description
	} = $props<{
		id: string;
		label: string;
		checked: boolean;
		description?: string;
	}>();

	const descriptionId = `${id}-description`;
</script>

<div class="space-y-1">
	<label
		for={id}
		class="
			flex
			cursor-pointer
			items-center
			gap-3
		"
	>
		<input
			id={id}
			type="checkbox"
			bind:checked
			aria-describedby={
				description
					? descriptionId
					: undefined
			}
			class="
				focus-ring
				h-5
				w-5
			"
		/>

		<span class="font-medium">
			{label}
		</span>
	</label>

	{#if description}
		<p
			id={descriptionId}
			class="text-sm text-gray-500"
		>
			{description}
		</p>
	{/if}
</div>