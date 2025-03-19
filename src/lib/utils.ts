import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatAvailableDate(start: Date, end: Date) {
	const startMonth = start.toLocaleString("en-US", { month: "short" });
	const endMonth = end.toLocaleString("en-US", { month: "short" });
	const startDay = start.getDate();
	const endDay = end.getDate();

	if (startMonth === endMonth) {
		return `${startMonth} ${startDay} - ${endDay}`;
	} else {
		return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
	}
}

export function formatDate(date: Date) {
	const startMonth = date.toLocaleString("en-US", { month: "short" });
	const startDay = date.getDate();

	return `${startMonth} ${startDay}`;
}
