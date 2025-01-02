import client from '@/api/axios';
import type { UserRole } from '@/types';

export async function login(email: string, password: string, role: UserRole): Promise<string> {
	return await client().post('auth/login', { email, password }, { params : { role: role } })
		.then((response) => {
			return response.headers['set-cookie'] as unknown as string;
		})
		.catch((error) => {
			return Promise.reject(error);
		})
}

export async function logout(): Promise<boolean> {
	return await client().get('auth/logout')
		.then(() => {
			return Promise.resolve(true);
		})
		.catch((error) => {
			return Promise.reject(error);
		})
}