"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getAllRooms() {
	const { data, error } = await tryCatch(axiosClient.get("/rooms"));

	if (error) return { error: "Cannot get rooms" };

	return { data: data.data.data, error };
}

export async function getRoom(id: string) {
	const { data, error } = await tryCatch(axiosClient.get(`/room/${id}`));

	if (error) return { error: "Cannot get room" };

	return { data: data.data.data, error };
}
