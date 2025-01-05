import type { PageServerLoad } from './$types';
import { me } from '@/api/user';
import { error } from '@sveltejs/kit';
import type { ApiError } from '@/error';

export const load: PageServerLoad = async ({ locals }) => {
	const user = await me(locals)
		.catch((e:ApiError) => error(e.status, e.error));

	return { user };
}