import type { PageServerLoad } from './$types';
import client from '@/api/axios';
import { fail } from '@sveltejs/kit';
import type { User } from '@/types';

export const load: PageServerLoad = async ({ cookies }) => {
	const response = await client(cookies).get(`/user/me`);
	if (response.status !== 200) {
		fail(response.status, {});
	}

	return { user: response.data as User };
}