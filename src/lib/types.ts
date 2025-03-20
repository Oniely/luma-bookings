import { PerkName } from "@/components/Room/Perks";

export interface Room {
	id: string;
	title: string;
	type?: string;
	beds?: number;
	description: string;
	photos: string[];
	price: number;
	maxGuest: number;
	guestFavorite?: boolean;
	perks?: PerkName[];
	// occupiedDates?: Date[];

	dateAvailableStart?: Date;
	dateAvailableEnd?: Date;
}
