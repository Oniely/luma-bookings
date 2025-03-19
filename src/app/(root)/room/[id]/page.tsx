import BookingWidget from "@/components/BookingWidget";
import RoomGallery from "@/components/RoomGallery";
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
		<div className="relative min-h-screen px-8 text-white page-space bg-primary padding-container max-container">
			<div className="mt-4">
				<h1 className="text-3xl mb-3">{room.title}</h1>
				<RoomGallery room={room} />
			</div>
		</div>
	);
};

export default Page;
