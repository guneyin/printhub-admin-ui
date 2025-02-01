import type { PageServerLoad } from './$types';
import type { Tenant, TenantList } from '@/types';
import { getTenantByID } from '@/api/tenant';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { tenantFormSchema } from '@/components/forms/tenant/schema';

export const load: PageServerLoad = async (event) => {
	const command = event.params.command;
	const tenantId = event.params.id;

	// FETCH Tenant
	let tenant: Tenant = {};
	if (tenantId !== "_") {
		await getTenantByID(tenantId)
			.then((data: TenantList) => { tenant = data[0]; })
			.catch((error: Error) => { throw error; });
	}

	switch (command) {
		case 'users':
	}

	return {
		command,
		tenant,
		form: await superValidate(tenant, zod(tenantFormSchema)),
	};
};