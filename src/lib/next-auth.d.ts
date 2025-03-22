import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		accessToken: string;
		user: AdapterUser;
	}
	interface User {
		token: string;
		id: string;
	}
}
