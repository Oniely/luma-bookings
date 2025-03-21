import React from "react";
import { formatDate } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState, useEffect } from "react";
import { ChevronsUpDown } from "lucide-react";
import { useSearchParams } from "next/navigation";

const BookingInformation: React.FC = () => {
	const searchParams = useSearchParams();

	const checkIn = searchParams.get("checkIn")
		? new Date(searchParams.get("checkIn")!)
		: null;
	const checkOut = searchParams.get("checkOut")
		? new Date(searchParams.get("checkOut")!)
		: null;
	const adults = parseInt(searchParams.get("adults") || "0");
	const children = parseInt(searchParams.get("children") || "0");
	const nights = parseInt(searchParams.get("nights") || "0");
	const roomPrice = parseInt(searchParams.get("roomPrice") || "0");
	const maxGuest = parseInt(searchParams.get("maxGuest") || "0");

	const [dateRange, setDateRange] = useState<any>({
		from: checkIn,
		to: checkOut,
	});

	const [guests, setGuests] = useState({
		adults: adults || 0,
		children: children || 0,
	});

	useEffect(() => {
		if (checkIn || checkOut) {
			setDateRange({
				from: checkIn,
				to: checkOut,
			});
		}

		setGuests({
			adults: adults || 0,
			children: children || 0,
		});
	}, []);

	const totalGuests = guests.adults + guests.children;
	const isGuestLimitReached = totalGuests >= maxGuest;
	const nightsOfStay =
		dateRange.to && dateRange.from
			? Math.ceil(
					(dateRange.to.getTime() - dateRange.from.getTime()) /
						(1000 * 60 * 60 * 24)
			  )
			: 1;

	const updateGuestCount = (
		type: "adults" | "children",
		increment: boolean
	) => {
		if (increment && isGuestLimitReached) {
			return; // Prevent adding more guests if limit reached
		}

		setGuests((prev) => ({
			...prev,
			[type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
		}));
	};

	const nightlyPrice = roomPrice;
	const calculatedNights =
		dateRange.from && dateRange.to
			? Math.ceil((dateRange.to - dateRange.from) / (1000 * 60 * 60 * 24))
			: nights || 5;
	const totalPrice = nightlyPrice * calculatedNights;

	const handleConfirmBooking = () => {
		// TODO: Confirm booking
		return;
	};

	return (
		<div className="sticky w-full h-auto max-h-full p-5 space-y-4 bg-white border shadow-lg border-secondary-100 rounded-2xl text-black-100 top-4">
			<h3 className="text-base">
				<span className="text-xl font-semibold">
					${nightlyPrice.toLocaleString()}{" "}
				</span>
				night
			</h3>
			<div className="w-full border rounded-xl">
				<Popover>
					<PopoverTrigger asChild className="flex">
						<div className="grid grid-cols-2 border-b">
							<button className="flex flex-col items-start px-4 py-4 border-r">
								<span className="text-xs font-medium tracking-tighter">
									Check in
								</span>
								<span className="tracking-tight text-md">
									{dateRange?.from
										? formatDate(dateRange.from)
										: "Add Dates"}
								</span>
							</button>

							<button className="flex flex-col items-start px-4 py-4">
								<span className="text-xs font-medium tracking-tighter">
									Check out
								</span>
								<span className="tracking-tight text-md">
									{dateRange?.to
										? formatDate(dateRange.to)
										: "Add Dates"}
								</span>
							</button>
						</div>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar
							mode="range"
							selected={dateRange}
							onSelect={setDateRange}
							numberOfMonths={2}
							initialFocus
							disabled={{ before: new Date() }}
						/>
					</PopoverContent>
				</Popover>
				<Popover>
					<PopoverTrigger asChild>
						<button className="flex items-center w-full p-5 justfiy-between">
							<div className="flex flex-col items-start grow">
								<p className="text-xs font-medium uppercase">
									Guests
								</p>
								<span className="text-md">
									{totalGuests > 0
										? `${totalGuests} guests (max ${maxGuest})`
										: "Add guests"}
								</span>
							</div>
							<ChevronsUpDown size={24} />
						</button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0 rounded-4xl"
						align="center"
					>
						<div className="flex flex-col w-full gap-6 p-7">
							<div className="flexBetween">
								<div className="flex flex-col items-start">
									<span className="font-medium">Adults</span>
									<span className="text-sm text-gray-500">
										Ages 13 or above
									</span>
								</div>
								<div className="gap-4 flexCenter">
									<Button
										onClick={() =>
											updateGuestCount("adults", false)
										}
										variant={"ghost"}
										size={"icon"}
										className="rounded-full text-black-100 border-black-100 disabled:border-[#dddddd] border"
										disabled={guests.adults === 0}
									>
										-
									</Button>
									<span>{guests.adults}</span>
									<Button
										onClick={() =>
											updateGuestCount("adults", true)
										}
										variant={"ghost"}
										size={"icon"}
										className="border rounded-full text-black-100 border-black-100"
										disabled={isGuestLimitReached}
									>
										+
									</Button>
								</div>
							</div>
							<div className="flexBetween">
								<div className="flex flex-col items-start">
									<span className="font-medium">
										Children
									</span>
									<span className="text-sm text-gray-500">
										Ages 13 and below
									</span>
								</div>
								<div className="gap-4 flexCenter">
									<Button
										onClick={() =>
											updateGuestCount("children", false)
										}
										variant={"ghost"}
										size={"icon"}
										className="rounded-full text-black-100 border-black-100 disabled:border-[#dddddd] border"
										disabled={guests.children === 0}
									>
										-
									</Button>
									<span>{guests.children}</span>
									<Button
										onClick={() =>
											updateGuestCount("children", true)
										}
										variant={"ghost"}
										size={"icon"}
										className="border rounded-full text-black-100 border-black-100"
										disabled={isGuestLimitReached}
									>
										+
									</Button>
								</div>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>

			<div className="flexBetween">
				<p className="underline">{`$${roomPrice} x ${nightsOfStay} nights`}</p>
				<p>{`$${roomPrice * nightsOfStay}`}</p>
			</div>
			<Separator color="#dddddd" />
			{/* separator */}
			<div className="text-lg font-semibold flexBetween">
				<p>Total</p>
				<p>{`$${roomPrice * nightsOfStay}`}</p>
			</div>

			<div className="w-full">
				<Button
					onClick={handleConfirmBooking}
					className="w-full px-4 py-6 mt-4 text-lg font-semibold"
				>
					Confirm Booking
				</Button>
			</div>
		</div>
	);
};

export default BookingInformation;
