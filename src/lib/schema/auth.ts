import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Email is invalid"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
	.object({
		fname: z.string().nonempty("First name is required"),
		lname: z.string().nonempty("Last name is required"),
		email: z.string().email("Email is invalid"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string(),
	})
	.refine(
		(data: { password: string; confirmPassword: string }) =>
			data.password === data.confirmPassword,
		{
			message: "Passwords do not match",
			path: ["confirmPassword"],
		}
	);
