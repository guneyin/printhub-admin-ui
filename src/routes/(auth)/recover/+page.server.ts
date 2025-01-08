import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { recoverSchema, passwordSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

import { recoverPassword, verifyToken, changePassword } from '@/api/auth';
import { type User, UserRole } from '@/types';
import { apierror } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let token = url.searchParams.get('token');
    let recoverForm = await superValidate(zod(recoverSchema));
    let passwordForm = await superValidate(zod(passwordSchema));
    let showPasswordForm = false;

    if (token) {
            const res = await verifyToken(token)
                .catch(e => apierror(e))
            const user = res as User;
            
            passwordForm.data.email = user.email;
            passwordForm.data.token = token;
            showPasswordForm = true            
    }

    return {
        showPasswordForm,
        recoverForm,
        passwordForm
    };
};

export const actions: Actions = {
    recover: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const form = await superValidate(request, zod(recoverSchema));

        let status = 200;
        let statusText = 'OK';

        await recoverPassword(email)
            .catch(e => apierror(e));

        return { form, success: true, status, statusText };
    },

    change: async ({ request }) => {
        const data = await request.formData();
        const token = data.get('token') as string;
        const password = data.get('password') as string;
        const form = await superValidate(request, zod(passwordSchema));

        let status = 200;
        let statusText = 'OK';

        await changePassword(token, password)
            .catch(e => apierror(e));

        return { form, success: true, status, statusText };
    }
};

