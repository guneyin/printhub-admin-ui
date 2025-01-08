import type { Cookies } from '@sveltejs/kit';
import { Cookie } from 'tough-cookie';

export function cookieParser(rawCookies: string, cookies: Cookies) {
	if (rawCookies) {
		for (const el of rawCookies) {
			const resCookie = Cookie.parse(el);
			if (resCookie) {
				cookies.set(resCookie.key, resCookie.value, {
					httpOnly: true,
					sameSite: resCookie.sameSite === 'strict',
					path: resCookie.path as string,
					maxAge: resCookie?.maxAge as number,
					secure: resCookie?.secure
				});
			}
		}
	}
}