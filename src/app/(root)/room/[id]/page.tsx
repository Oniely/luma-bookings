import BookingWidget from "@/components/BookingWidget";
import RoomGallery from "@/components/RoomGallery";
import Link from "next/link";

const Page = () => {
	const room = {
		id: "1",
		title: "Room 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus nec dui sagittis auctor",
		checkIn: "3:00 PM",
		checkOut: "11:00 AM",
		maxGuest: 2,
		price: 100,
		photos: [
			"/images/test-bg.jpg",
			"/images/test-bg.jpg",
			"/images/test-bg.jpg",
			"/images/test-bg.jpg",
		],
	};

	return (
		<div className="-mx-8 mt-8 bg-gray-100 px-8 pt-8 h-screen">
			<h1 className="text-3xl">{room.title}</h1>
			<Link href={"/"}>{room.title}</Link>
			<RoomGallery room={room} />

			<div className="mb-8 mt-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr,_1fr]">
				<div className="">
					<div className="my-4">
						<h2 className="text-2xl font-semibold">Desciption</h2>
						{room.description}
					</div>
					Check-in: {room.checkIn}
					<br />
					Check-out: {room.checkOut}
					<br />
					Max number of guests: {room.maxGuest}
				</div>

				<div>
					<BookingWidget room={room} />
				</div>
			</div>
			<div className="-mx-8 border-t bg-white px-8 py-8">
				<div>
					<h2 className="text-2xl font-semibold">Extra Info</h2>
				</div>
				<div className="mt-2 text-sm leading-5 text-gray-700">
					{room.description}
				</div>
			</div>
		</div>
	);
};

export default Page;
