<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	import { Button } from '$lib/components/ui/button/index.js';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Hesabınız doğrulandı</title>
</svelte:head>

<div
	class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
	data-x-chunk-name="dashboard-02-chunk-1"
	data-x-chunk-description="An empty state showing no products with a heading, description and a call to action to add a product."
>
	<div class="flex flex-col items-center gap-1 text-center">
		<h3 class="text-2xl font-bold tracking-tight">Hesabınız doğrulandı!</h3>
		<p class="text-muted-foreground text-sm">
			Tebrikler, {data.user.email} hesabınız doğrulandı, Şimdi oturum açmak için aşağıdaki düğmeyi kullanın.
		</p>
		<Button class="mt-4" on:click={() => goto('/login?email='+data.user.email)}>Oturum Aç</Button>
	</div>
</div>
