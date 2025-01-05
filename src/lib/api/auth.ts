import client from '@/api/axios';
import { apierror, customerror } from '@/error';
import type { User, UserRole } from '@/types';

export async function register(email: string, password: string, role: UserRole): Promise<void> {
	return await client().post('auth/register', { email, password }, { params: { role } })
		.then(() => Promise.resolve())
		.catch((error) => Promise.reject(apierror(error)));
}

export async function login(email: string, password: string, role: UserRole): Promise<string> {
	return await client().post('auth/login', { email, password }, { params : { role: role } })
		.then((response) => response.headers['set-cookie'] as unknown as string)
		.catch(() => Promise.reject(customerror('invalid credentials')))
}

export async function logout(): Promise<void> {
	return await client().get('auth/logout')
		.then(() =>  Promise.resolve())
		.catch((error) => Promise.reject(apierror(error)));
}

export async function oauth(provider: string, role: UserRole, callback: string): Promise<string> {
	return await client().get("auth/oauth/"+provider, { params: { role, callback } })
		.then((response) => Promise.resolve(response.headers.location as string))
		.catch((error) => Promise.reject(apierror(error)));
}

export async function callback(provider: string, role: UserRole, code: string): Promise<string> {
	return await client().get("auth/oauth/"+provider+"/complete", { params: { role, code } })
		.then((response) =>  Promise.resolve(response.headers['set-cookie'] as unknown as string))
		.catch((error) => Promise.reject(apierror(error)));
}

export async function recoverPassword(email: string, role: UserRole): Promise<void>  {
	return await client().get('auth/recover', { params: { email, role } })
		.then(() => Promise.resolve())
		.catch((error) => Promise.reject(apierror(error)));
}

export async function validateToken(token: string): Promise<User> {
	return await client().get('auth/validate', { params: { token } })
		.then((response) => Promise.resolve(response.data as User))
		.catch((error) => Promise.reject(apierror(error)));
}

export async function changePassword(token: string, password: string): Promise<void> {
	return await client().get('auth/change', { params: { token, password } })
		.then(() => Promise.resolve())
		.catch((error) => Promise.reject(apierror(error)));
}