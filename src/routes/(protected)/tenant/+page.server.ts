import type { PageServerLoad } from './$types';
import {fail} from "@sveltejs/kit";
import type {TenantList} from "@/types";

export const load: PageServerLoad = async ({ locals, params }) => {
    // const { status, body } = await client. tenantGetList()
    // if (status !== 200) {
    //     console.log(body);
    //     fail(status);
    // }
    //
    // return {
    //     items: <TenantList>body
    // };
};