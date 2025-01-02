<script lang="ts">
	let { children } = $props();
</script>
	
<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    {@render children()}
</main>
