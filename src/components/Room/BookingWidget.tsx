"use client";

import { formatDate } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface Props {
	room?: any;
}

const BookingWidget = ({ room }: Props) => {
	const [dateRange, setDateRange] = useState<any>({
		from: null,
		to: null,
	});

	const [guests, setGuests] = useState({
		adults: 0,
		children: 0,
	});

	const totalGuests = guests.adults + guests.children;

	const updateGuestCount = (
		type: "adults" | "children",
		increment: boolean
	) => {
		setGuests((prev) => ({
			...prev,
			[type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
		}));
	};

	return (
		<div className="w-full max-w-sm p-5 bg-white border border-secondary-100 rounded-2xl text-black-100 space-y-4 h-auto max-h-full sticky top-4">
			<h3 className="text-base">
				<span className="text-xl font-semibold">$14,560 </span>
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
									{guests
										? `${
												guests.adults + guests.children
										  } guests`
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
						<div className="flex flex-col p-7 w-full gap-6">
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
									>
										+
									</Button>
								</div>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>

			<Link href="/booking-confirmation">
			<Button className="w-full py-7 text-lg" size={"lg"}>
				Reserve
			</Button>
			</Link>

			<p className="text-sm text-center">*You&apos;t be charged yet.</p>
			<div className="flexBetween">
				<p className="underline">$14,560 x 5 nights</p>
				<p>$72,800</p>
			</div>
			<Separator color="#dddddd" />
			{/* separator */}
			<div className="flexBetween font-semibold text-lg">
				<p>Total</p>
				<p>$72,800</p>
			</div>
		</div>
	);
};

export default BookingWidget;
