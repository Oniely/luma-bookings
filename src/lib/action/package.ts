"use server";

import axiosClient from "../axios";
import { tryCatch } from "../try-catch";

export async function getPackages() {
    const { data, error } = await tryCatch(axiosClient.get("/packages"));

    if (error) return { error: "Cannot get packages" };

    return { data: data.data.data, error };
}

export async function getPackage(id: string) {
    const { data, error } = await tryCatch(axiosClient.get(`/package/${id}`));

    if (error) return { error: "Cannot get packages" };

    return { data: data.data.data, error };
}
