import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { oauth } from '@/api/auth';
import { apierror } from '@/error';

export const load: PageServerLoad = async ({ params, url }) => {
	const callback = url.origin + "/oauth/" + params.provider + "/callback";

	const redirectUrl = await oauth(params.provider, callback)
		.catch((e) => apierror(e));

	if (!redirectUrl) {
		error(500, "invalid redirect url");
	}

	throw redirect(302, redirectUrl as string);
}

