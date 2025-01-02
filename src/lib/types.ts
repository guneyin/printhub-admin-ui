export type Session = {
    id?: string;
    provider?: string;
    user?: User;
};

export type User = {
    active?: boolean;
    avatarURL?: string;
    email?: string;
    name?: string;
    password?: string;
    role?: UserRole;
    uuid?: string;
};

export enum UserRole {
    admin = 'admin',
    tenant = 'tenant',
    client = 'client',
}

export interface Tenant {
    uuid: string;
    email: string;
    name: string;
    address: string;
    logo: string;
}

export type TenantList = Tenant[];