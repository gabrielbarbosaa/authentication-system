import { z } from "zod";

export const signUp = z.object({
  email: z.string().email({message:"Email is required"}),
  password: z.string({message: "Password is required"}).min(8, "Password must be at least 8 characters long"),
  name: z.string({message: "Name is required"}).min(3, "Name must be at least 3 characters long"),
  username: z.string({message: "Username is required"}).min(3, "Username must be at least 3 characters long"),
  phone: z.string({message: "Phone is required"}).min(10, "Phone must be at least 10 characters long"),
  address: z.string({message: "Address is required"}).min(3, "Address must be at least 3 characters long"),
  city: z.string({message: "City is required"}).min(3, "City must be at least 3 characters long"),
  state: z.string({message: "State is required"}).min(3, "State must be at least 3 characters long"),
}).required();

export type SignUp = z.infer<typeof signUp>;