import { z } from 'zod';

// See https://zod.dev/?id=primitives for schema syntax
export const tenantSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2),
	address: z.string(),
	phone: z.string(),
	logo: z.string(),
});

export type TenantSchema = typeof tenantSchema;