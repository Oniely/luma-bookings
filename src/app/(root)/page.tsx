import RoomCard from "@/components/Cards/RoomCard";
import Hero from "@/components/Home/Hero";

export default function Home() {
	const room = {
		id: "1",
		image: "/images/test-bg.jpg",
		title: "Room",
		description: "Cozy room in prime location",
		data_available_start: new Date(),
		data_available_end: new Date(),
		price: 100,
	};

	return (
		<>
			<Hero />
			{/* <section className="w-full h-40">
				<CategoryCarousel />
			</section> */}
			<section className="relative padding-container max-container h-dvh">
				<div className="grid grid-cols-2 py-8 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
					<RoomCard room={{ ...room, guest_favorite: true }} />
					<RoomCard room={room} />
					<RoomCard room={{ ...room, guest_favorite: true }} />
					<RoomCard room={room} />
					<RoomCard room={{ ...room, guest_favorite: true }} />
					<RoomCard room={room} />
					<RoomCard room={{ ...room, guest_favorite: true }} />
					<RoomCard room={room} />
				</div>
			</section>
		</>
	);
}
