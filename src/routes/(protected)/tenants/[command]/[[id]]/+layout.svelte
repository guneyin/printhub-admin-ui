<script lang="ts">
	import { TenantMainNav } from '@/components/tenant';

	let { data, children } = $props();
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<TenantMainNav class="mx-6" path={data.path} />
		</div>
	</div>

	{@render children()}
</div>

