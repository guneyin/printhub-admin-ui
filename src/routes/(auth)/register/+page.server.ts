import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { registerSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

import { register, validateToken } from '@/api/auth';
import { UserRole } from '@/types';
import { error } from "@sveltejs/kit";
import type { ApiError } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token');
    let registerForm = await superValidate(zod(registerSchema));

    if (token) {
        const user = await validateToken(token)
            .catch((e:ApiError) => error(e.status, e.error));

        registerForm.data.email = user.email as string;
        registerForm.data.password = '123456';
        registerForm.data.passwordConfirm = '123456';
    }

    return {
        registerForm
    };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const form = await superValidate(request, zod(registerSchema));

        let status = 200;
        let statusText = 'OK';

        await register(email, password, UserRole.client)
            .catch((e:ApiError) => error(e.status, e.error));

        return { form, success: true, status, statusText };
    },
};

