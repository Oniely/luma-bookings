import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookingState {
	checkIn: Date | null;
	checkOut: Date | null;
	guests: {
		adults: number;
		children: number;
	};
	roomDetails: {
		id: string;
		price: number;
		maxGuests: number;
		name?: string;
	} | null;

	setDates: (checkIn: Date | null, checkOut: Date | null) => void;
	setGuests: (adults: number, children: number) => void;
	setRoomDetails: (roomDetails: BookingState["roomDetails"]) => void;
	resetBooking: () => void;
}

export const useBookingStore = create<BookingState>()(
	persist(
		(set) => ({
			checkIn: null,
			checkOut: null,
			guests: {
				adults: 1,
				children: 0,
			},
			roomDetails: null,

			setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),
			setGuests: (adults, children) =>
				set({ guests: { adults, children } }),
			setRoomDetails: (roomDetails) => set({ roomDetails }),
			resetBooking: () =>
				set({
					checkIn: null,
					checkOut: null,
					guests: { adults: 1, children: 0 },
					roomDetails: null,
				}),
		}),
		{
			name: "booking-storage",
		}
	)
);
