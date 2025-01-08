import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { redirect } from '@sveltejs/kit';

import { login } from '@/api/auth';
import { cookieParser } from '@/cookie';
import { customerror } from "@/error";

export const load: PageServerLoad = async ({ url }) => {
    let email = url.searchParams.get('email') as string;

    let form = await superValidate(zod(formSchema));

    form.data = { email, password: '' }

    return {
        form,
    };
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email') as string;
        const password = form.get('password') as string;

        let setCookie = '';
        await login(email, password)
          .then(r => setCookie = r)
          .catch(e => customerror('invalid credentials'));

        cookieParser(setCookie, cookies);

        return redirect(303, '/');
    }
};

