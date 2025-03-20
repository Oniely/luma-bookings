import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import { login } from "@/lib/action/auth";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Github,
		Credential({
			name: "Email and Password",
			credentials: {
				// email: {
				// 	label: "Email",
				// 	type: "email",
				// 	placeholder: "hello@example.com",
				// },
				username: {
					label: "Username",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials) {
				if (!credentials) return null;

				try {
					const username = credentials.username as string;
					const password = credentials.password as string;
					const token = await login(username, password);
					return token;
				} catch (error) {
					console.error("Authentication error:", error);
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				if (account && account.provider === "github") {
					token.accessToken = account.access_token;
				} else {
					token.accessToken = user;
				}
			}
			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken;
			return session;
		},
	},
	events: {
		async signIn({ user, account, profile }) {
			console.log(
				`User ${user.id || user.email} signed in via ${
					account?.provider
				}`
			);
		},
		async signOut({ token }: any) {
			if (token?.githubToken) {
				try {
					await axios.delete(
						`https://api.github.com/applications/${process.env.AUTH_GITHUB_ID}/grant`,
						{
							headers: {
								Authorization: `Basic ${Buffer.from(
									`${process.env.GITHUB_CLIENT_ID}:${process.env.GITHUB_CLIENT_SECRET}`
								).toString("base64")}`,
							},
							data: { access_token: token.githubToken },
						}
					);
					console.log("GitHub token successfully revoked.");
				} catch (error) {
					console.error("Failed to revoke GitHub token:", error);
				}
			}
		},
	},
});
