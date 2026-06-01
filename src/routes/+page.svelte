<script lang="ts">
	import { onMount } from 'svelte';
	import CharacterSection from '$lib/components/ficha/CharacterSection.svelte';
	import AbilitiesSection from '$lib/components/ficha/AbilitiesSection.svelte';
	import SavingThrowsSection from '$lib/components/ficha/SavingThrowsSection.svelte';
	import SkillsSection from '$lib/components/ficha/SkillsSection.svelte';
	import CombatSection from '$lib/components/ficha/CombatSection.svelte';
	import HitPointsSection from '$lib/components/ficha/HitPointsSection.svelte';
	import AttacksSection from '$lib/components/ficha/AttacksSection.svelte';
	import EquipmentSection from '$lib/components/ficha/EquipmentSection.svelte';
	import { character } from '$lib/stores/character.svelte';

	import {
		loadCharacter,
		saveCharacter
	} from '$lib/utils/storage';


	onMount(() => {
		const saved =
			loadCharacter();

		if (saved) {
			Object.assign(
				character,
				saved
			);
		}
	});

	$effect(() => {
		saveCharacter(character);
	});

</script>

<div class="mx-auto max-w-7xl p-4">
	<CharacterSection />

	<div class="mt-6 grid gap-6 lg:grid-cols-[320px_1fr]">
		<div class="space-y-6">
			<AbilitiesSection />
			<SavingThrowsSection />
		</div>

		<div class="space-y-6">
			<CombatSection />
			<HitPointsSection />
			<SkillsSection />
			<AttacksSection />
			<EquipmentSection />
		</div>
	</div>
</div>