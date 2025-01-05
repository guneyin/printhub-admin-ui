import type { PageServerLoad } from './$types';
import type {TenantList} from "@/types";

export const load: PageServerLoad = async ({ locals, params }) => {
    // const { status, body } = await client. tenantGetList()
    // if (status !== 200) {
    //     error(status);
    // }
    //
    // return {
    //     items: <TenantList>body
    // };
};