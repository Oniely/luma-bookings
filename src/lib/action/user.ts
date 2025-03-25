"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getAllUsers() {
	const { data, error } = await tryCatch(axiosClient.get("/get_all_users"));

	if (error) return { error: "Cannot get rooms" };

	return { data: data.data.data, error };
}