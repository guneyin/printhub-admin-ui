import client from '@/api/axios';
import { DefaultUserRole, type User } from '@/types';

export const register = async (email: string, password: string): Promise<User> => {
	return await client().post<User>('auth/register', { email, password }, { params: { role: DefaultUserRole } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const login = async (email: string, password: string): Promise<string> => {
	return await client().post('auth/login', { email, password }, { params: { role: DefaultUserRole } })
		.then(r => r.headers['set-cookie'] as unknown as string)
		.catch(e => Promise.reject(e))
}

export const logout = async (): Promise<void> => {
	return await client().get('auth/logout')
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const oauth = async (provider: string, callback: string): Promise<string> => {
	return await client().get("auth/oauth/" + provider, { params: { role: DefaultUserRole, callback } })
		.then(r => Promise.resolve(r.headers.location as string))
		.catch(e => Promise.reject(e));
}

export const callback = async (provider: string, code: string): Promise<string> => {
	return await client().get("auth/oauth/" + provider + "/complete", { params: { role: DefaultUserRole, code } })
		.then(r => Promise.resolve(r.headers['set-cookie'] as unknown as string))
		.catch(e => Promise.reject(e));
}

export const recoverPassword = async (email: string): Promise<void> => {
	return await client().get('auth/recover', { params: { email, role: DefaultUserRole } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const verifyToken = async (token: string): Promise<User> => {
	return await client().get<User>('auth/verify', { params: { token } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const changePassword = async (token: string, password: string): Promise<void> => {
	return await client().get('auth/change', { params: { token, password } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const validateUser = async (token: string): Promise<User> => {
	return await client().get<User>('auth/validate', { params: { token } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}
