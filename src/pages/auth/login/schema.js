import z from "zod";

export const loginSchema = z.object({
  email: z.email("Plese enter valid email.").min(1, "Email is required"),
  password: z.string().min(6, "Password should have at least 6 characters."),
});
