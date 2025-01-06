import client from '@/api/axios';
import type { User, UserRole } from '@/types';

export const register = async (email: string, password: string, role: UserRole): Promise<User> => {
	return await client().post<User>('auth/register', { email, password }, { params: { role } })
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const login = async (email: string, password: string, role: UserRole): Promise<string> => {
	return await client().post('auth/login', { email, password }, { params: { role: role } })
		.then(r => r.headers['set-cookie'] as unknown as string)
		.catch(e => Promise.reject(e))
}

export const logout = async (): Promise<void> => {
	return await client().get('auth/logout')
		.then(r => Promise.resolve(r.data))
		.catch(e => Promise.reject(e));
}

export const oauth = async (provider: string, role: UserRole, callback: string): Promise<string> => {
	return await client().get("auth/oauth/" + provider, { params: { role, callback } })
		.then(r => Promise.resolve(r.headers.location as string))
		.catch(e => Promise.reject(e));
}

export const callback = async (provider: string, role: UserRole, code: string): Promise<string> => {
	return await client().get("auth/oauth/" + provider + "/complete", { params: { role, code } })
		.then(r => Promise.resolve(r.headers['set-cookie'] as unknown as string))
		.catch(e => Promise.reject(e));
}

export const recoverPassword = async (email: string, role: UserRole): Promise<void> => {
	return await client().get('auth/recover', { params: { email, role } })
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
