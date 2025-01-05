import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { error, redirect } from '@sveltejs/kit';

import { login } from '@/api/auth';
import { UserRole } from '@/types';
import { cookieParser } from '@/cookie';
import type { ApiError } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let email = url.searchParams.get('email') as string;
    let password = 'r8A0jYoSlU';
    let role = UserRole.admin;

    if (email===null) { email = 'admin1_@ph.com'}
    let form = await superValidate(zod(formSchema));

    form.data = { email, password, role }

    return {
        form,
    };
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        const role = form.get('role') as UserRole;

        let setCookie = '';
        await login(email, password, role)
          .then(response => setCookie = response)
          .catch((e:ApiError) => error(e.status, e.error));

        cookieParser(setCookie, cookies);

        return redirect(303, '/');
    }
};

