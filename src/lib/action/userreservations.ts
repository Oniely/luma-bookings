"use server";

import { auth } from "@/app/auth";
import axiosClient from "../axios";
import { tryCatch } from "../try-catch";
import { Transaction } from "../types";

export async function getUserReservations() {
	const { data, error } = await tryCatch(
		axiosClient.get("/transactions/own", {
			headers: {
				"Content-Type": "application/json",
				"x-access-token": (await auth())?.accessToken,
			},
		})
	);

	// console.log((await auth())!.accessToken);
	if (error) return { error: `${error}` };

	return { data: data.data.data, error };
}

export async function getReservations() {
	const { data, error } = await tryCatch(
		axiosClient.get("/transactions", {
		})
	);

	// console.log((await auth())!.accessToken);
	if (error) return { error: `${error}` };

	return { data: data.data.data, error };
}

export async function getRoom(id: string) {
	const { data, error } = await tryCatch(
		axiosClient.get(`/transaction/${id}`)
	);

	if (error) return { error: "Cannot get transaction" };

	return { data: data.data.data, error };
}

export async function bookRoom(transaction: Transaction, token: string) {
	try {
		const response = await axiosClient.post(
			"/transaction",
			{
				room_id: transaction.room_id,
				reservation_date_start: formatDate(
					transaction.reservation_date_start
				),
				reservation_date_end: formatDate(
					transaction.reservation_date_end
				),
				reservation_payment_amount: Number(
					transaction.reservation_payment_amount
				),
				reservation_payment_type: transaction.reservation_payment_type,
				reservation_description:
					transaction.reservation_description ||
					"I'd like to book this room",
				reservation_status: "pending",
			},
			{
				headers: {
					"x-access-token": token,
					"Content-Type": "application/json",
				},
			}
		);

		return response.data;
	} catch (error: any) {
		console.log(error);
		return error.response.data || "Error";
	}
}

const formatDate = (date: Date): string => {
	return date.toISOString().split("T")[0];
};
