import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { oauth } from '@/api/auth';
import type { UserRole } from '@/types';
import type { ApiError } from '@/error';

export const load: PageServerLoad = async ({ params, url }) => {
	const role = url.searchParams.get('role') as UserRole;
	const callback = url.origin + "/oauth/" + params.provider + "/callback";

	const redirectUrl = await oauth(params.provider, role, callback)
		.catch((e:ApiError) => error(e.status, e.error));

	if (!redirectUrl) {
		error(500, "invalid redirect url");
	}

	throw redirect(302, redirectUrl as string);
}

