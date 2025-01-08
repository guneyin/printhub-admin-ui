import { z } from "zod";
import { UserRole } from '@/types';

export const recoverSchema = z.object({
    email: z.string().email()
}); 

export const passwordSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirm: z.string().min(6),
    token: z.string()
}).refine(
    (values) => {
      return values.password === values.passwordConfirm;
    },
    {
      message: "Passwords must match!",
      path: ["passwordConfirm"],
    }
  );

export type RecoverSchema = typeof recoverSchema;
export type PasswordSchema = typeof passwordSchema;
