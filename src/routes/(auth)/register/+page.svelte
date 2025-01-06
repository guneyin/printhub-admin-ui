<script lang="ts">
	import * as Alert from '@/components/ui/alert';
	import Rocket from 'svelte-radix/Rocket.svelte';
	import type { PageData, ActionData } from './$types';
	import Registerorm from './form.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

	{#if form?.success}
		<Alert.Root>
			<Rocket class="h-4 w-4" />
			<Alert.Title>Heads up!</Alert.Title>
			<Alert.Description>Please check your mailbox.</Alert.Description>
		</Alert.Root>
	{:else}
		<Registerorm data={data.registerForm} />
	{/if}
