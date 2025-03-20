import RoomCard from "@/components/Cards/RoomCard";
import Hero from "@/components/Home/Hero";
import { rooms } from "@/lib/mock_data";
import { auth } from "../auth";

export default async function Home() {
	const session = await auth();

	return (
		<>
			<Hero />
			<section className="w-full h-40">
				<h1>{JSON.stringify(session, null, 2)}</h1>
			</section>
			<section className="relative padding-container max-container h-dvh">
				<div className="grid grid-cols-2 py-8 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
					{rooms.map((room) => (
						<RoomCard key={room.id} room={room} />
					))}
					{rooms.map((room) => (
						<RoomCard key={room.id} room={room} />
					))}
				</div>
			</section>
		</>
	);
}
