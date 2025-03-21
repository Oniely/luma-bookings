import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		accessToken: string | unknown;
		user: AdapterUser;
	}
	interface User {
		token: string;
		id: string;
	}
}
