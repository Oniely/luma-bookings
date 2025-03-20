import { z } from "zod";

export const loginSchema = z.object({
	// email: z.string().email("Email is invalid"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
	.object({
		fname: z.string().nonempty("First name is required"),
		lname: z.string().nonempty("Last name is required"),
		username: z.string().min(3, "Username must be at least 3 characters"),
		email: z.string().email("Email is invalid"),
		password: z
			.string()
			.min(6, "Password must be at least 6 characters")
			.regex(
				/[A-Z]/,
				"Password must contain at least one uppercase letter"
			)
			.regex(/[0-9]/, "Password must contain at least one number"),
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
