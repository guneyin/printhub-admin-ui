import type { Tenant } from '@/types';
import type { LayoutServerLoad } from './$types';
import { getTenantById } from '@/api/admin';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, url }) => {
    const command = params.command;
    const tenantId = params.id;

    // FETCH Tenant
    let tenant: Tenant = {};
    if (tenantId) {
        tenant = await getTenantById(tenantId);
    }

    if (tenantId && !tenant) throw error(404, 'Tenant not found.');

    return {
        command,
        id: params.id,
        path: url.pathname
    };
}) satisfies LayoutServerLoad;