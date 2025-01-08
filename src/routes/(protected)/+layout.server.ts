import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { type Session } from "@/types";

export const load: LayoutServerLoad = async ({ parent, cookies, locals }) => {
	const { isAuthenticated } = await parent();

	if (!isAuthenticated) {
		return redirect(301, '/login');
	}

	return;
};