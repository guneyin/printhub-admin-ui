import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { callback } from '@/api/auth';
import type { UserRole } from '@/types';
import { cookieParser } from '@/cookie';
import { apierror } from '@/error';

export const load: PageServerLoad = async ({ params, url, cookies }) => {
  const code = url.searchParams.get('code') as string;

  let setCookieHeader = '';
  await callback(params.provider, code)
    .then(r => setCookieHeader = r)
    .catch(e => apierror(e));

  cookieParser(setCookieHeader, cookies);

  return redirect(302, "/me");
}
