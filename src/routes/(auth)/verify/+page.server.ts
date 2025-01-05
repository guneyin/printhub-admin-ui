import type { PageServerLoad, Actions } from "./$types";

import { validateToken } from '@/api/auth';
import { apierror } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token') as string;

    const user = await validateToken(token)
        .catch(e => apierror(e));

    return {
        user
    };
};
