import client from "./axios";
import type { User } from "@/types";
import { apierror } from "@/error";

export async function me(locals: App.Locals): Promise<User> {
    return await client(locals).get('user/me')
        .then((response) => Promise.resolve(response.data as User))
        .catch((error) => Promise.reject(apierror(error)));
}
