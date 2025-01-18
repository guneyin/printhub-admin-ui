<script lang="ts">
	import type { PageData } from '../$types';
	import { TenantPage } from '@/components/tenant';

	let { data }: { data: PageData } = $props();
</script>

<TenantPage {data} />