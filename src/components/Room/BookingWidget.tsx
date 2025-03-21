"use client";

import { Room } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

interface Props {
	room: Room;
}

interface RangeDate {
	from: Date;
	to: Date;
}

const BookingWidget = ({ room }: Props) => {
	const router = useRouter();

	const [dateRange, setDateRange] = useState<RangeDate | any>({
		from: null,
		to: null,
	});

	const [guests, setGuests] = useState({
		adults: 0,
		children: 0,
	});

	const totalGuests = guests.adults + guests.children;
	const isGuestLimitReached = totalGuests >= room.room_max_guests;
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

	const handleReserve = () => {
		if (!dateRange.from || !dateRange.to) {
			toast.warning("Please select check-in and check-out dates");
			return;
		}

		if (totalGuests === 0) {
			toast.warning("Please add at least one guest");
			return;
		}

		if (totalGuests > room.room_max_guests) {
			toast.warning(
				`Maximum ${room.room_max_guests} guests allowed for this room`
			);
			return;
		}

		const searchParams = new URLSearchParams({
			checkIn: dateRange.from?.toISOString() || "",
			checkOut: dateRange.to?.toISOString() || "",
			adults: guests.adults.toString(),
			children: guests.children.toString(),
			nights: nightsOfStay.toString(),
			roomPrice: room.room_price.toString(),
			maxGuest: room.room_max_guests.toString(),
		});

		router.push(`/booking-confirmation?${searchParams.toString()}`);
		return;
	};

	return (
		<>
			{/* big screens */}
			<div className="hidden sm:block">
				<div className="sticky w-full h-auto max-w-sm max-h-full p-5 space-y-4 bg-white border border-secondary-100 rounded-2xl text-black-100 top-4">
					<h3 className="text-base">
						<span className="text-xl font-semibold">
							${room.room_price}{" "}
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
							<PopoverContent
								className="w-auto p-0"
								align="center"
							>
								<Calendar
									mode="range"
									selected={dateRange}
									// @ts-ignore
									onSelect={setDateRange}
									numberOfMonths={2}
									classNames={{
										months: "flex flex-col gap-6 w-full md:flex-row",
									}}
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
												? `${totalGuests} guests (max ${room.room_max_guests})`
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
											<span className="font-medium">
												Adults
											</span>
											<span className="text-sm text-gray-500">
												Ages 13 or above
											</span>
										</div>
										<div className="gap-4 flexCenter">
											<Button
												onClick={() =>
													updateGuestCount(
														"adults",
														false
													)
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
													updateGuestCount(
														"adults",
														true
													)
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
													updateGuestCount(
														"children",
														false
													)
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
													updateGuestCount(
														"children",
														true
													)
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
					<Button
						className="w-full text-lg py-7"
						size={"lg"}
						onClick={handleReserve}
					>
						Reserve
					</Button>
					<p className="text-sm text-center">
						*You won&apos;t be charged yet.
					</p>
					<div className="space-y-2">
						<div className="flexBetween">
							<p className="underline">{`$${room.room_price} x ${nightsOfStay} nights`}</p>
							<p>{`$${room.room_price * nightsOfStay}`}</p>
						</div>
						{/* <div className="flexBetween">
						<p className="underline">{`Booking fee`}</p>
						<p>{`$10`}</p>
					</div> */}
					</div>
					<Separator color="#dddddd" />
					{/* separator */}
					<div className="text-lg font-semibold flexBetween">
						<p>Total</p>
						<p>{`$${room.room_price * nightsOfStay}`}</p>
					</div>
				</div>
			</div>
			{/* mobile */}
			<div className="sm:hidden">
				{/* TODO MOBILE FOR BOOKING WIDGET */}
				<div></div>
			</div>
		</>
	);
};

export default BookingWidget;
