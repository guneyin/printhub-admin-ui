import type { PageServerLoad, Actions } from "./$types";

import { validateToken } from '@/api/auth';
import { error } from "@sveltejs/kit";
import type { ApiError } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token') as string;

    const user = await validateToken(token)
        .catch((e:ApiError) => error(e.status, e.error));

    return {
        user
    };
};
