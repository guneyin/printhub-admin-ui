export type Session = {
    id: string;
    provider: string;
    user?: User;
};

export interface User {
    active?: boolean;
    avatarURL?: string;
    email: string;
    name?: string;
    password?: string;
    role?: UserRole;
    uuid?: string;
}

export enum UserRole {
    admin = 'admin',
    tenant = 'tenant',
    client = 'client',
}

export const DefaultUserRole = UserRole.admin;

export interface Tenant {
    uuid?: string;
    email?: string;
    name?: string;
    address?: string;
    phone?: string;
    logo?: string;
}

export type TenantList = Tenant[];