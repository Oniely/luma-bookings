"use server";

import axios from "axios";

export async function login(data: { email: string; password: string }) {
	try {
		const res = await axios.post(process.env.API_URL + "/auth/login_user", {
			email: data.email,
			password: data.password,
		});
		return res.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function register(data: {
	email: string;
	password: string;
	confirmPassword: string;
}) {
	try {
		const res = await axios.post(
			process.env.API_URL + "/auth/register_user",
			{
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
			}
		);
		return res.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
