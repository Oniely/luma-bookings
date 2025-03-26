"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getReviews(roomId: string) {
    const { data, error } = await tryCatch(axiosClient.get(`/reviews/room/${roomId}`));

    if (error) return { error: "Cannot get reviews" };

    return { data: data.data.data, error };
}

export async function postReview(id: string) {
    const { data, error } = await tryCatch(axiosClient.post(`/review/${id}`));

    if (error) return { error: "Cannot post reviews" };

    return { data: data.data.data, error };
}
