import type { PageServerLoad } from './$types';
import { tenantList } from '@/api/admin';
import { apierror } from '@/error';

export const load: PageServerLoad = async () => {
	const tenants = await tenantList()
		.catch(e => apierror(e));

	return {
		tenants
	};
};

