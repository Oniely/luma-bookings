"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getEvents() {
	const { data, error } = await tryCatch(axiosClient.get("/events"));

	if (error) return { error: "Cannot get events" };

	return { data: data.data.data, error };
}

export async function getEvent(id: string) {
	const { data, error } = await tryCatch(axiosClient.get(`/event/${id}`));

	if (error) return { error: "Cannot get events" };

	return { data: data.data.data, error };
}
