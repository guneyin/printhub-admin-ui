import { z } from "zod";

export const tenantFormSchema = z.object({
	uuid: z.string().uuid(),
	email: z.string().email(),
	name: z.string(),
	address: z.string(),
	phone: z.string(),
	logo: z.string(),
});

export type TenantFormSchema = typeof tenantFormSchema;