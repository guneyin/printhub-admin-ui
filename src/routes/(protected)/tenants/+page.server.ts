import type { PageServerLoad } from './$types';
import { getTenantList } from '@/api/tenant';
import { apierror } from '@/error';

export const load: PageServerLoad = async () => {
	const tenants = await getTenantList()
		.catch(e => apierror(e));

	return {
		tenants
	};
};

