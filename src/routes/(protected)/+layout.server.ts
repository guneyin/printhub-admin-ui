import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ parent }) => {
	const data = await parent();
	const { isAuthenticated } = data;

	if (!isAuthenticated) {
		return redirect(301, '/login');
	}

	return;
};