<script lang="ts">
	import { character } from '$lib/stores/character.svelte';

	import CardSection from '$lib/components/ui/CardSection.svelte';

	function addEquipment() {
		character.equipment = [
			...character.equipment,

			{
				id: crypto.randomUUID(),

				name: '',

				quantity: 1,

				description: ''
			}
		];
	}

	function removeEquipment(id: string) {
		character.equipment =
			character.equipment.filter(
				(item) => item.id !== id
			);
	}
</script>

<CardSection
	id="equipment-section"
	title="Equipamentos"
>
	<button
		type="button"
		class="focus-ring rounded-md border px-4 py-2"
		onclick={addEquipment}
	>
		Adicionar Item
	</button>

	<div class="mt-4 space-y-4">
		{#each character.equipment as item}
			<div
                class="rounded-lg border p-4"
            >
                <div class="grid gap-4 md:grid-cols-2">
                    <div>
                        <label
                            for={`equipment-name-${item.id}`}
                            class="mb-1 block"
                        >
                            Nome
                        </label>

                        <input
                            id={`equipment-name-${item.id}`}
                            type="text"
                            bind:value={item.name}
                            class="focus-ring w-full rounded border p-2"
                        />
                    </div>

                    <div>
                        <label
                            for={`equipment-quantity-${item.id}`}
                            class="mb-1 block"
                        >
                            Quantidade
                        </label>

                        <input
                            id={`equipment-quantity-${item.id}`}
                            type="number"
                            min="1"
                            bind:value={item.quantity}
                            class="focus-ring w-full rounded border p-2"
                        />
                    </div>
                </div>

                <div class="mt-4">
                    <label
                        for={`equipment-description-${item.id}`}
                        class="mb-1 block"
                    >
                        Descrição
                    </label>

                    <textarea
                        id={`equipment-description-${item.id}`}
                        bind:value={item.description}
                        class="focus-ring w-full rounded border p-2"
                        rows="3"
                    />
                </div>

                <button
                    type="button"
                    class="focus-ring mt-4 rounded border px-3 py-2"
                    onclick={() =>
                        removeEquipment(item.id)}
                >
                    Remover
                </button>
            </div>
		{/each}
	</div>
</CardSection>