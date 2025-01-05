<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<svelte:head>
    <title>{ page.error?.message }</title> 
</svelte:head>

<div
  class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
  data-x-chunk-name="dashboard-02-chunk-1"
  data-x-chunk-description="An empty state showing no products with a heading, description and a call to action to add a product."
>
  <div class="flex flex-col items-center gap-1 text-center">
    <h3 class="text-2xl font-bold tracking-tight">{ page.status }</h3>
    <p class="text-muted-foreground text-sm">{ page.error?.message }</p>
    <Button class="mt-4" on:click={() => goto('/')}>Return Home</Button>
  </div>
</div>  
