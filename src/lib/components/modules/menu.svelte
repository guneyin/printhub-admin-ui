<script lang="ts">
	import { Home, Library, type Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	type MenuItem = {
		name: string;
		href: string;
		icon: ComponentType<Icon>;
	};

	const menuItems: MenuItem[] = [
		{
			name: 'Panel',
			href: '/',
			icon: Home
		},
		{
			name: 'Bayiler',
			href: '/tenants',
			icon: Library
		}
	];
</script>

{#each menuItems as item}
	<a href={item.href}
    class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all">
		<svelte:component this={item.icon} class="h-4 w-4"/>
		<span>{item.name}</span>
	</a>
{/each}