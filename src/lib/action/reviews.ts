"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getReviews() {
    const { data, error } = await tryCatch(axiosClient.get("/create_review"));

    if (error) return { error: "Cannot get reviews" };

    return { data: data.data.data, error };
}

export async function getReview(id: string) {
    const { data, error } = await tryCatch(axiosClient.get(`/create_review/${id}`));

    if (error) return { error: "Cannot get reviews" };

    return { data: data.data.data, error };
}
