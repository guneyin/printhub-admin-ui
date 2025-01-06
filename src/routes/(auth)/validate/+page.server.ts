import type { PageServerLoad } from "./$types";

import { validateUser } from '@/api/auth';
import { apierror } from "@/error";
import type { User } from "@/types";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token') as string;

    const res = await validateUser(token)
        .catch(e => apierror(e));
    const user = res as User;

    return {
        user,
    };
};
