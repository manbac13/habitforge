import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Plese enter valid email.").min(1, "Email is required"),
  password: z.string().min(6, "Password should have at least 6 characters."),
});
