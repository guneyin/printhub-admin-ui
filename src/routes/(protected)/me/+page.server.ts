import type { PageServerLoad } from './$types';
import { me } from '@/api/user';
import { apierror } from '@/error';

export const load: PageServerLoad = async ({ locals }) => {
	const user = await me(locals)
		.catch(e => apierror(e));

	return { user };
}