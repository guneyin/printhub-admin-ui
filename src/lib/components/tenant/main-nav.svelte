<script lang="ts">
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };

	const { data } = $props();
	const url = $derived(`/tenants/${data.id}`);
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
	<a href="{url}" class="hover:text-primary text-sm font-medium transition-colors">
		Genel
	</a>

	<a data-sveltekit-replacestate
		href="{url}/users"
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Kullanıcılar
	</a>
	<a data-sveltekit-replacestate
		href="{url}/clients"
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Müşteriler
	</a>
	<a data-sveltekit-replacestate
		href="{url}/settings"
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Ayarlar
	</a>
</nav>
