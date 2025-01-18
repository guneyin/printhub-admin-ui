import { getTenantById } from '@/api/admin';
import type { PageServerLoad } from '../$types';
import type { Tenant } from '@/types';
import { error } from '@sveltejs/kit';

// export const load: PageServerLoad = async ({ params }) => {
//     const command = params.command;
//     const tenantId = params.id;

//     // FETCH Tenant
//     let tenant: Tenant;
//     if (tenantId) {
//         tenant = await getTenantById(tenantId);
//     }

//     if (tenantId && !tenant) throw error(404, 'Tenant not found.');

//     return {
//         command,
//         tenant
//     }
//     // const id = params.id as string;
//     // let tenant;
//     // await getTenantById(id)
//     //     .then(r => tenant = (r as Tenant))
//     //     .catch(e => apierror(e));

//     // //console.log(tenant);

//     // const form = await superValidate(tenant, zod(tenantFormSchema));

//     // console.log(form.data);
//     // return { form, tenant };
// };