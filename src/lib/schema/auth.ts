import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Email is invalid"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
	.object({
		email: z.string().email("Email is invalid"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string(),
	})
	.refine((data: any) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
