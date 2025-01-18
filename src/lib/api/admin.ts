import type { Tenant, TenantList } from '@/types';
import client from '@/api/axios';

export const tenantList = async (): Promise<TenantList> => {
	return await client().get<TenantList>('/admin/tenant/list')
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const getTenantById = async (id: string): Promise<Tenant> => {
	return await client().get<Tenant>('/admin/tenant?filter=id:'+id)
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const saveTenant = async (data: Tenant): Promise<Tenant> => {
	return await client().post('/admin/tenant', data)
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}