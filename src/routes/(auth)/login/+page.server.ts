import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { fail, redirect } from '@sveltejs/kit';

import { Cookie } from 'tough-cookie';
import { login } from '@/api/auth';
import { UserRole } from '@/types';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        const role = form.get('role') as UserRole;

        let setCookieHeader = '';
        await login(email, password, role)
          .then(response => setCookieHeader = response)
          .catch(error => fail(error));

        if (setCookieHeader) {
            for (const el of setCookieHeader) {
                const resCookie = Cookie.parse(el);
                console.log(resCookie);
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

        return redirect(303, '/');
    }
};

