import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credential from "next-auth/providers/credentials";
import { login, token_exchange } from "@/lib/action/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
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
		async jwt({ token, user, account, trigger, session }) {
			if (user) {
				let decodedToken;

				if (account && account.provider === "github") {
					const token = await token_exchange(account.access_token!);
					token.accessToken = token;
					token.provider = "github";

					// TODO: add a creeate user for github login

					decodedToken = jwtDecode(token);
				} else {
					token.accessToken = user.token;
					token.provider = "credentials";

					decodedToken = jwtDecode(user.token);
				}
				token.user = decodedToken;
			}
			if (trigger === "update") {
				token.user = {
					...(token.user || {}),
					fullName: session.user.fullName,
					username: session.user.username,
				};
			}

			return token;
		},
		async session({ session, token, user }) {
			session.accessToken = token.accessToken as string;
			session.user = token.user;
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
			// TODO: need to test if working, after logging out from a github account, test the github token at the github api
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
