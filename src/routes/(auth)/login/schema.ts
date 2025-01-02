import { z } from "zod";
import { UserRole } from '@/types';

export const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.nativeEnum(UserRole)
});

export type FormSchema = typeof formSchema;