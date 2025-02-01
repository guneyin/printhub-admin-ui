import type { Tenant, TenantList, User } from '@/types';
import client from '@/api/axios';

export const getTenantList = async (): Promise<TenantList> => {
	return await client().get<TenantList>('/admin/tenant')
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const getTenantByID = async (id: string): Promise<TenantList> => {
	return await client().get<TenantList>('/admin/tenant/?uuid='+id)
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

// export const saveTenant = async (data: Tenant): Promise<Tenant> => {
// 	return await client().post('/admin/tenant', data)
// 		.then(r => Promise.resolve(r.data))
// 		.catch(e => Promise.reject(e));
// }
//
// export const getTenantUsers = async (id: string): Promise<User[]> => {
// 	return await client().get('/admin/tenant/user/'+filter('id', id))
// 		.then(r => Promise.resolve(r.data))
// 		.catch(e => Promise.reject(e));
// }

