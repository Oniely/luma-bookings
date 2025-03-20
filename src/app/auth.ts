import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import { login } from "@/lib/action/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Github,
		Credential({
			name: "Email and Password",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "hello@example.com",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials) {
				if (!credentials) return null;

				const email = credentials.email as string;
				const password = credentials.password as string;
				return login(email, password);
			},
		}),
	],
	pages: {
		signIn: "/login",
	},
	callbacks: {},
});
