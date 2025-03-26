"use server";

import { auth } from "@/app/auth";
import axiosClient from "../axios";
import { tryCatch } from "../try-catch";


export async function getUserReservations() {
	const { data, error } = await tryCatch(axiosClient.get("/transactions/own", {
        headers: {
            "Content-Type": "application/json",
			"x-access-token": (await auth())?.accessToken,
        }
    }));

    console.log ((await auth())!.accessToken);
	if (error) return { error: `${error}` };

	return { data: data.data.data, error };
}

export async function getRoom(id: string) {
	const { data, error } = await tryCatch(axiosClient.get(`/transaction/${id}`));

	if (error) return { error: "Cannot get transaction" };

	return { data: data.data.data, error };
}
