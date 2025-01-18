<script lang="ts">
	import type { PageData } from './$types';

	import File from 'lucide-svelte/icons/file';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash2 from 'lucide-svelte/icons/trash-2';

	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { CirclePlus } from 'lucide-svelte';
	import type { TenantList } from '@/types';

	let { data }: { data: PageData } = $props();
	let tenants = data.tenants as TenantList;
</script>

<Tabs.Root value="all">
	<div class="flex items-center">
		<Tabs.List>
			<Tabs.Trigger value="all">All</Tabs.Trigger>
			<Tabs.Trigger value="active">Active</Tabs.Trigger>
			<Tabs.Trigger value="suspended">Suspended</Tabs.Trigger>
			<Tabs.Trigger value="archived" class="hidden sm:flex">Archived</Tabs.Trigger>
		</Tabs.List>

		<div class="ml-auto flex items-center gap-2">
			<Button href="/tenants/create" size="sm" variant="default" class="h-7 gap-1">
				<CirclePlus class="h-3.5 w-3.5" />
				<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Yeni </span>
			</Button>
		</div>
	</div>
	<Tabs.Content value="all">
		<Card.Root>
			<Card.Header>
				<Card.Title>Bayiler</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="hidden w-[100px] sm:table-cell">#</Table.Head>
							<Table.Head>Ünvan</Table.Head>
							<Table.Head>E-posta</Table.Head>
							<Table.Head>Adres</Table.Head>
							<Table.Head></Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each tenants as tenant}
							<Table.Row>
								<Table.Cell class="hidden sm:flex">1</Table.Cell>
								<Table.Cell class="hidden sm:table-cell">
									<div class="flex items-center">
										<Avatar.Root>
											<Avatar.Image id="logo" src={tenant.logo} alt={tenant.name} />
											<Avatar.Fallback>OM</Avatar.Fallback>
										</Avatar.Root>
										<div class="ml-4 space-y-1">
											<p class="text-sm font-medium leading-none">{tenant.name}</p>
										</div>
									</div>
								</Table.Cell>
								<Table.Cell>
									<Badge variant="outline">{tenant.email}</Badge>
								</Table.Cell>
								<Table.Cell>{tenant.address}</Table.Cell>

								<Table.Cell>
									<Button variant="outline" size="icon" href={'/tenants/view/'+tenant.uuid}>
										<Pencil class="h-4 w-4" />
									</Button>
									<Button variant="outline" size="icon">
										<Trash2 class="h-4 w-4 " color="#e65656" />
									</Button>
								</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
			<Card.Footer>
				<div class="text-muted-foreground text-xs">
					Showing <strong>1-10</strong> of <strong>32</strong> products
				</div>
			</Card.Footer>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
