"use client";

import { formatDate } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchWidget = () => {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: undefined,
		to: undefined,
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

	const handleSearch = () => {
		console.log("Searching for rooms");
		console.log(dateRange);
		console.log(guests);
	};

	return (
		<div className="flex items-center rounded-full overflow-hidden max-w-xl mx-auto bg-[#ebebeb] pl-5 text-md my-4 max-h-40">
			<Popover>
				<PopoverTrigger asChild className="flex">
					<div className="flex items-center">
						<button className="flex flex-col items-start py-4 px-10 hover:rounded-full hover:bg-[#dddddd]">
							<span className="font-medium tracking-tighter">
								Check in
							</span>
							<span className="tracking-tight">
								{dateRange?.from
									? formatDate(dateRange.from)
									: "Add Dates"}
							</span>
						</button>

						<div className="h-12 w-[1px] bg-gray-300 mx-2 self-center" />

						<button className="flex flex-col items-start py-4 px-10 hover:rounded-full hover:bg-[#dddddd]">
							<span className="font-medium tracking-tighter">
								Check out
							</span>
							<span className="tracking-tight">
								{dateRange?.to
									? formatDate(dateRange.to)
									: "Add Dates"}
							</span>
						</button>
						<div className="h-12 w-[1px] bg-gray-300 mx-2 self-center" />
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
					<button className="flexBetween grow pr-4 py-4 hover:rounded-full hover:bg-[#dddddd] flex-col !items-start">
						<span className="ml-4 font-medium tracking-tighter">
							Who
						</span>
						<span className="ml-4 tracking-tight">
							{totalGuests > 0
								? `${totalGuests} guest${
										totalGuests !== 1 ? "s" : ""
								  }`
								: "Add guests"}
						</span>
					</button>
				</PopoverTrigger>
				<PopoverContent
					className="w-auto p-0 rounded-4xl"
					align="center"
				>
					<div className="flex flex-col p-7 w-[30rem] gap-6">
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
								<span className="font-medium">Children</span>
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
				<button
					onClick={handleSearch}
					className="w-[3rem] h-[3rem] flexCenter bg-primary rounded-full mr-3 cursor-pointer"
				>
					<Search className="text-white" />
				</button>
			</Popover>
		</div>
	);
};

export default SearchWidget;
