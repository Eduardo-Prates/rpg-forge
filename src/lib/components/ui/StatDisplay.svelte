<script lang="ts">
	let {
		label,
		value
	} = $props<{
		label: string;
		value: string | number;
	}>();
</script>

<div
	class="flex items-center justify-between rounded-lg border p-3"
>
	<dt>{label}</dt>

	<dd class="font-semibold">
		{value}
	</dd>
</div>