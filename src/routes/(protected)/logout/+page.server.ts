import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { logout } from '@/api/auth';
import { apierror } from '@/error';
import { session } from '@/state/session.svelte';

export const load: PageServerLoad = async ({ cookies }) => {
    await logout()
      .catch(e => apierror(e));

    cookies.delete('session_id', {path: '/'});
    session.terminate();

    throw redirect(302, "/");
}
