<script>
	import { getLocale, getAvailableLocales, setLocale } from '$lib/language';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';

	let currentValue = getLocale();
	let locales = getAvailableLocales();
	let isOpen = false;

	/**
	 * @param {string} locale
	 */
	function changeLocale(locale) {
		setLocale(locale);
		currentValue = locale;
		isOpen = false; // Close the dropdown
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<style>
	.button-container {
		position: fixed;
		top: 10px;
		right: 10px;
		z-index: 1000;
	}
</style>

<div class="button-container">
	<button class="btn bg-zinc-600 py-1 px-3 text-white flex items-center" on:click={toggleDropdown}>
		{currentValue}
		{#if isOpen}
			<ChevronUp class="ml-1 w-4 h-4"/>
		{:else}
			<ChevronDown class="ml-1 w-4 h-4"/>
		{/if}
	</button>
	{#if isOpen}
		<div class="btn-group-vertical bg-zinc-600 text-white mt-2">
			{#each locales as locale}
				<button on:click={() => changeLocale(locale)}>
					{locale}
				</button>
			{/each}
		</div>
	{/if}
</div>