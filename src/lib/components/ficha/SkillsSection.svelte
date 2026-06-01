<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { character } from '$lib/stores/character.svelte';

	import { abilityShortLabels } from '$lib/data/abilities';

	import { formatModifier } from '$lib/utils/dnd';
	import { skillModifier } from '$lib/utils/skills';

	import CardSection from '$lib/components/ui/CardSection.svelte';

	function isProficient(skillId: string) {
		return character.skillProficiencies.includes(skillId as any);
	}

	function toggleProficiency(
		skillId: string,
		checked: boolean
	) {
		if (checked) {
			if (
				!character.skillProficiencies.includes(
					skillId as any
				)
			) {
				character.skillProficiencies = [
					...character.skillProficiencies,
					skillId as any
				];
			}

			return;
		}

		character.skillProficiencies =
			character.skillProficiencies.filter(
				(id) => id !== skillId
			);
	}
</script>

<CardSection
	id="skills-section"
	title="Perícias"
>
	<div class="grid gap-2 md:grid-cols-2">
		{#each skills as skill}
			<label
				class="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
			>
				<div class="flex items-center gap-3">
						<input
							type="checkbox"
							aria-label={`Proficiência em ${skill.name}`}
							class="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
							checked={isProficient(skill.id)}
							onchange={(event) =>
								toggleProficiency(
									skill.id,
									(event.currentTarget as HTMLInputElement)
										.checked
								)}
						/>
					<div>
						<div class="font-medium">
							{skill.name}
						</div>

						<div class="text-xs text-gray-500">
							{
								abilityShortLabels[
									skill.ability
								]
							}
						</div>
					</div>
				</div>

				<div class="font-semibold">
					{formatModifier(
						skillModifier(
							character.abilities[
								skill.ability
							],
							isProficient(
								skill.id
							),
							character.level
						)
					)}
				</div>
			</label>
		{/each}
	</div>
</CardSection>