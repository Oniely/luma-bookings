"use server";

import { signIn, signOut } from "@/app/auth";
import axiosClient from "@/lib/axios";

export async function login(username: string, password: string) {
	try {
		if (!username || !password) {
			throw new Error("Username and password are required");
		}

		const res = await axiosClient.post("/login", {
			username,
			password,
		});

		return res.data;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
}

export async function register(data: {
	fname: string;
	lname: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	profile_url?: string;
}) {
	try {
		if (!data.fname || !data.lname) {
			throw new Error("First & Last name is required");
		}

		if (!data.username) {
			throw new Error("Username is required");
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!data.email || !emailRegex.test(data.email)) {
			throw new Error("Please provide a valid email address");
		}

		if (data.password !== data.confirmPassword) {
			throw new Error("Passwords do not match");
		}

		const res = await axiosClient.post("/create_user", {
			fullName: data.fname + " " + data.lname,
			username: data.username,
			// email: data.email,
			password: data.confirmPassword,
			profile_url: data?.profile_url || "/images/default_profile.png",
		});

		return res.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function loginWithGithub() {
	await signIn("github", {
		redirectTo: "/",
	});
}

export async function loginWithCredential(username: string, password: string) {
	try {
		const response = await signIn("credentials", {
			username,
			password,
			redirect: false,
		});

		return response;
	} catch (error: any) {
		throw new Error(error);
	}
}

export async function logout() {
	await signOut({
		redirectTo: "/login",
	});
}
