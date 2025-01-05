import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { logout } from '@/api/auth';
import type { ApiError } from '@/error';

export const load: PageServerLoad = async ({ locals, cookies }) => {
    await logout()
      .catch((e:ApiError) => error(e.status, e.error));

    cookies.delete('session_id', {path: '/'});
    locals.session_id = "";

    throw redirect(302, "/");
}
