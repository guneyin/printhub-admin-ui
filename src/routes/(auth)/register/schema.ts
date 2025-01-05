import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirm: z.string().min(6),
}).refine(
    (values) => {
      return values.password === values.passwordConfirm;
    },
    {
      message: "Passwords must match!",
      path: ["passwordConfirm"],
    }
  );

export type RegisterSchema = typeof registerSchema;
