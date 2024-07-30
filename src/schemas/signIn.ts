import { z } from "zod";

export const signIn = z.object({
  email: z.string().email({message:"Email is required"}),
  password: z.string({message: "Password is required"}).min(8, "Password must be at least 8 characters long"),
}).required();

export type SignIn = z.infer<typeof signIn>;