import client from "./axios";
import type { User } from "@/types";

export const me = async (locals: App.Locals): Promise<User> => {
    return await client(locals).get<User>('user/me')
        .then(r => Promise.resolve(r.data))
        .catch(e => Promise.reject(e));
}
