import BookingWidget from "@/components/BookingWidget";
import RoomGallery from "@/components/RoomGallery";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Dot, Star } from "lucide-react";
import Link from "next/link";

const Page = () => {
	const room = {
		id: "1",
		title: "Cabin 2-Modern Cabin w/Tempur bed & stunning view",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus nec dui sagittis auctor",
		checkIn: "3:00 PM",
		checkOut: "11:00 AM",
		maxGuest: 2,
		price: 100,
		photos: [
			"https://a0.muscache.com/im/pictures/ffb001b7-92a3-413f-ae51-e5b2c1df5580.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/6f4f3124-e7fc-4484-89fd-561d87cb0ec1.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/0f87c895-6bd8-4424-b069-bc38464cd5f3.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/0852a549-7c05-43c8-86b7-852b6867f009.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/ff22eba0-5a97-4b1e-b7a2-ea2781ebaeae.jpg?im_w=720",
		],
	};

	return (
		<div className="relative min-h-screen px-8 text-white page-space bg-primary padding-container max-container pb-8">
			<h1 className="text-3xl mb-3 mt-8">{room.title}</h1>
			<RoomGallery room={room} />

			<div className="grid grid-cols-3 mt-8">
				<div className="max-w-2xl col-span-2 gap-6 flex flex-col">
					<div>
						<h1 className="text-xl">{room.title}</h1>
						<div className="inline-flex">
							<span>4 guests</span>
							<Dot />
							<span>1 bedroom</span>
							<Dot />
							<span>1 bed</span>
							<Dot />
							<span>1 bath</span>
						</div>
						<div className="flex items-center mt-2 leading-8">
							<div className="flex items-center gap-2">
								<Star
									className="fill-white text-white stroke-1"
									size={18}
								/>
								<span className="text-white">4.85</span>
							</div>
							<Dot />
							<button className="text-white underline underline-offset-2">
								69 reviews
							</button>
						</div>
					</div>
					<div className="w-full h-[1px] bg-secondary-100" />
				</div>

				<BookingWidget room={room} />
			</div>
		</div>
	);
};

export default Page;
