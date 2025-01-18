import client from "./axios";
import type { User } from "@/types";

export const me = async (): Promise<User> => {
    return await client().get<User>('user/me')
        .then(r => Promise.resolve(r.data))
        .catch(e => Promise.reject(e));
}
