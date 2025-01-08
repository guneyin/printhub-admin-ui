<script lang="ts">
	import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<svelte:head>
    <title>{ page.error?.message }</title> 
</svelte:head>

<div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
  <div class="w-full max-w-sm md:max-w-3xl">
    <div class="flex flex-col items-center gap-1 text-center">
      <h3 class="text-2xl font-bold tracking-tight">{ page.status }</h3>
      <p class="text-muted-foreground text-sm">{ page.error?.message }</p>
      <Button class="mt-4" on:click={() => goto('/')}>Return Home</Button>
    </div>
  </div>
</div>