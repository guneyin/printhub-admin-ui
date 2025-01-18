import { session } from '@/state/session.svelte';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session_id =  event.cookies.get('session_id') as string;
	session.set(session_id);

	return await resolve(event);
};
