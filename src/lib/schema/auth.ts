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

export const updateProfileSchema = z.object({
	fname: z.string().nonempty("First name is required"),
	lname: z.string().nonempty("Last name is required"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	password: z
		.string()
		.optional()
		.refine(
			(password) => {
				if (!password) return true;
				return password.length >= 6;
			},
			{ message: "Password must be at least 6 characters" }
		)
		.refine(
			(password) => {
				if (!password) return true;
				return /[A-Z]/.test(password);
			},
			{ message: "Password must contain at least one uppercase letter" }
		)
		.refine(
			(password) => {
				if (!password) return true;
				return /[0-9]/.test(password);
			},
			{ message: "Password must contain at least one number" }
		),
	profile_image: z
		.instanceof(File, { message: "Please upload a valid image" })
		.nullable()
		.optional()
		.refine(
			(file) => {
				if (!file) return true;
				return file.size <= 10 * 1024 * 1024;
			},
			{
				message: "Profile image must be less than 10MB",
			}
		)
		.refine(
			(file) => {
				if (!file) return true;
				return ["image/jpeg", "image/png", "image/jpg"].includes(
					file.type
				);
			},
			{
				message: "Only JPEG, JPG, and PNG files are allowed",
			}
		),
});
