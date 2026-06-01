<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		id,
		title,
		children
	} = $props<{
		id: string;
		title: string;
		children: Snippet;
	}>();
</script>

<section
	class="card"
	aria-labelledby={id}
>
	<h2
		id={id}
		class="mb-4 text-xl font-semibold"
	>
		{title}
	</h2>

	{@render children()}
</section>