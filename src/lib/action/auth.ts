"use server";

import { signIn, signOut, unstable_update } from "@/app/auth";
import axiosClient from "@/lib/axios";
import { jwtDecode } from "jwt-decode";

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
			email: data.email,
			password: data.confirmPassword,
			profile_url: data?.profile_url || "/images/default_profile.jpg",
		});

		return res.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updateProfile(
	data: {
		fname: string;
		lname: string;
		username: string;
		password?: string;
		profile_image?: File | null;
	},
	token: string
) {
	try {
		const formData = new FormData();
		formData.append("fullName", data.fname + " " + data.lname);
		formData.append("username", data.username);

		// Only append password if it exists and is not empty
		if (data.password) {
			formData.append("password", data.password);
		}

		// Only append profile_image if it exists
		if (data.profile_image) {
			formData.append("profile_url", data.profile_image);
		}

		// update session of next-auth
		await unstable_update({
			user: {
				fullName: data.fname + " " + data.lname,
				username: data.username,
			},
		});

		const res = await axiosClient.put("/update_user", formData, {
			headers: {
				"x-access-token": token,
			},
		});

		return res.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function loginWithGithub() {
	try {
		const githubResponse = await signIn("github", {
			redirect: false,
		});

		if (!githubResponse?.ok) {
			throw new Error("GitHub login failed");
		}

		const token = await token_exchange(githubResponse.token);
		if (!token) {
			throw new Error("Failed to fetch user data from GitHub");
		}

		const data = jwtDecode(token);
		if (!data) {
			throw new Error("Failed to fetch convert jwt token to user data");
		}

		// Redirect to the home page after successful login
		await signIn("github", {
			redirectTo: "/",
		});
	} catch (error: any) {
		console.error(error);
		throw new Error("GitHub login and registration failed");
	}
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

export async function token_exchange(token: string) {
	try {
		const response = await axiosClient.post("/login_github", {
			AUTH_TOKEN: token,
		});

		return response.data.token;
	} catch (error: any) {
		return null;
	}
}
