import { PerkName } from "@/components/Room/Perks";

export interface Room {
	id: string;
	title: string;
	description: string;
	photos: string[];
	price: number;
	maxGuest: number;
	dateAvailableStart?: Date;
	dateAvailableEnd?: Date;
	guestFavorite?: boolean;
	perks?: PerkName[];
}
