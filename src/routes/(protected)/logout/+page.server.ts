import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { logout } from '@/api/auth';

export const load: PageServerLoad = async ({ locals, cookies }) => {
    await logout()

    cookies.delete('session_id', {path: '/'});
    locals.session_id = "";

    throw redirect(302, "/");
}
