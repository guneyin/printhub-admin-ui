<script lang="ts">
	import { goto } from "$app/navigation";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	//let path: string;
	export { className as class };
	//export { path };

	//const { page } = $props();

	function git(path: string) {
		goto(path);
	}
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
	<a data-sveltekit-replacestate href="/" class="hover:text-primary text-sm font-medium transition-colors">
		Genel
	</a>

	<a data-sveltekit-replacestate
		href="#" on:click={() => git("/users")}
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Kullanıcılar
	</a>
	<a data-sveltekit-replacestate
		href="/clients"
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Müşteriler
	</a>
	<a data-sveltekit-replacestate
		href="/settings"
		class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
	>
		Ayarlar
	</a>
</nav>
