// import { error } from '@sveltejs/kit';
// import type {TenantList} from "@/types";
//
// export const load: Load = async ({ event }) => {
//     const r = await fetch('http://localhost:8080/api/tenant');
//     const list = ((await r.json()) as TenantList);
//
//     return {
//         props: {
//             list
//         }
//     }
// }