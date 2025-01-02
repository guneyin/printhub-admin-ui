import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { logout } from '@/api/auth';

export const load: PageServerLoad = async ({ locals, cookies }) => {
    await logout()
      .catch((error) => {
          fail(error);
      })

    cookies.delete('session_id', {path: '/'});
    locals.session = null;

    throw redirect(302, "/");
}
