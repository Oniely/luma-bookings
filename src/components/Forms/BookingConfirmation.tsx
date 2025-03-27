"use client";

import React, { useEffect } from "react";
import PaymentMethod from "../PaymentMethod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/lib/store/bookingStore";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const BookingConfirmation = () => {
	const router = useRouter();
	const { checkIn, checkOut, guests, roomDetails, resetBooking } =
		useBookingStore();

	const checkInDate = checkIn ? new Date(checkIn) : null;
	const checkOutDate = checkOut ? new Date(checkOut) : null;

	// Calculate nights of stay
	const nightsOfStay =
		checkInDate && checkOutDate
			? Math.ceil(
					(checkOutDate.getTime() - checkInDate.getTime()) /
						(1000 * 60 * 60 * 24)
			  )
			: 0;

	const totalPrice = roomDetails?.price
		? roomDetails.price * nightsOfStay
		: 0;

	useEffect(() => {
		return () => {
			// resetBooking();
		};
	}, []);

	const handleConfirmBooking = () => {
		console.log({
			checkIn: checkInDate?.toISOString(),
			checkOut: checkOutDate?.toISOString(),
			guests: {
				adults: guests.adults,
				children: guests.children,
				total: guests.adults + guests.children,
			},
			room: {
				id: roomDetails?.id,
				name: roomDetails?.name,
				pricePerNight: roomDetails?.price,
				maxGuests: roomDetails?.maxGuests,
			},
			stay: {
				nights: nightsOfStay,
				totalPrice: totalPrice,
			},
		});
		return;
	};

	return (
		<div className="relative w-full min-h-dvh py-6 flexCenter">
			<div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center py-8">
				{/* paymentMethods */}
				<div className="flex flex-col max-w-xl">
					<div className="mt-6 flex flex-row">
						<button
							className="px-4 py-3 text-black rounded-lg flex items-center justify-center gap-2"
							onClick={() => router.back()}
						>
							<ArrowLeft size={28} />
						</button>
						<p className="text-3xl mt-2 max-w-lg">
							Confirm Booking
						</p>
					</div>
					<div className="mt-6">
						<p className="text-2xl mt-2 max-w-lg">Payment</p>
					</div>
					<PaymentMethod />
					<div className="flex flex-col">
						<div className="mt-4">
							<p className="text-2xl whitespace-nowrap">
								Cancellation Policy
							</p>
							<p className="whitespace-nowrap">
								This reservation is non-refundable.
							</p>
						</div>
					</div>
				</div>

				{/* Booking */}
				<div className="flex flex-col w-full max-w-xl">
					{roomDetails ? (
						<div className="sticky w-full h-auto max-h-full p-5 space-y-4 bg-white border shadow-lg border-secondary-100 rounded-2xl text-black-100 top-4">
							<h3 className="text-base">
								<span className="text-xl font-semibold">
									${roomDetails.price.toLocaleString()}{" "}
								</span>
								night
							</h3>

							<div className="w-full border rounded-xl">
								<div className="grid grid-cols-2 border-b">
									<div className="flex flex-col items-start px-4 py-4 border-r">
										<span className="text-xs font-medium tracking-tighter">
											Check in
										</span>
										<span className="tracking-tight text-md">
											{checkInDate
												? formatDate(checkInDate)
												: "N/A"}
										</span>
									</div>

									<div className="flex flex-col items-start px-4 py-4">
										<span className="text-xs font-medium tracking-tighter">
											Check out
										</span>
										<span className="tracking-tight text-md">
											{checkOutDate
												? formatDate(checkOutDate)
												: "N/A"}
										</span>
									</div>
								</div>

								<div className="flex items-center w-full p-5 justfiy-between">
									<div className="flex flex-col items-start grow">
										<p className="text-xs font-medium uppercase">
											Guests
										</p>
										<span className="text-md">
											{guests.adults + guests.children}{" "}
											guests
										</span>
									</div>
								</div>
							</div>

							<div className="flexBetween">
								<p className="underline">{`$${roomDetails.price} x ${nightsOfStay} nights`}</p>
								<p>{`$${totalPrice}`}</p>
							</div>
							<Separator color="#dddddd" />
							<div className="text-lg font-semibold flexBetween">
								<p>Total</p>
								<p>{`$${totalPrice}`}</p>
							</div>

							<div className="w-full">
								<Button
									onClick={handleConfirmBooking}
									className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
								>
									Confirm Booking
								</Button>
							</div>
						</div>
					) : (
						<p>
							No booking information found. Please select a room
							first.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default BookingConfirmation;
