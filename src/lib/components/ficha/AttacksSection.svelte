<script lang="ts">
	import { character } from '$lib/stores/character.svelte';

	import CardSection from '$lib/components/ui/CardSection.svelte';

	import {
		attackBonus,
		damageModifier
	} from '$lib/utils/attacks';

	import {
		formatModifier
	} from '$lib/utils/dnd';
</script>

<CardSection
	id="attacks-section"
	title="Ataques"
>
	<div class="space-y-3">
		{#each character.attacks as attack}
			<div
				class="rounded-lg border p-4"
			>
				<div
					class="flex items-center justify-between"
				>
					<h3 class="font-medium">
						{attack.name}
					</h3>

					<span class="text-sm opacity-70">
						{attack.damageType}
					</span>
				</div>

				<div class="mt-3 grid gap-2">
					<div>
						Bônus de Ataque:
						<strong>
							{formatModifier(
								attackBonus(
									character.abilities[
										attack.ability
									],
									attack.proficient,
									character.level
								)
							)}
						</strong>
					</div>

					<div>
						Dano:
						<strong>
							{attack.damageDice}
							{formatModifier(
								damageModifier(
									character.abilities[
										attack.ability
									]
								)
							)}
						</strong>
					</div>
				</div>
			</div>
		{/each}
	</div>
</CardSection>