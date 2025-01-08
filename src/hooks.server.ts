import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.session_id = event.cookies.get('session_id') as string;

	const response = await resolve(event);
	return response;
};
