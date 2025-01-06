import type { PageServerLoad } from "./$types";

import { validateUser } from '@/api/auth';
import { apierror } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token') as string;

    const user = await validateUser(token)
        .catch(e => apierror(e));

    return {
        user,
    };
};
