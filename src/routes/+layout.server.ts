import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const session_id = cookies.get('session_id');
    const isAuthenticated =  !!session_id && !!session_id !== undefined;

    // console.log("isAuthenticated", isAuthenticated);

    return { isAuthenticated };
};
