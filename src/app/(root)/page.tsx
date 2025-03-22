import RoomCard from "@/components/Cards/RoomCard";
import Hero from "@/components/Home/Hero";
import RoomCardsSkeleton from "@/components/Room/RoomCardSkeleton";
import { getAllRooms } from "@/lib/action/rooms";
import { Room } from "@/lib/types";
import { Suspense, use } from "react";

function RoomsList() {
	const { data, error } = use(getAllRooms());

	if (error) {
		return (
			<p className="text-red-500">
				Error loading rooms: {error.toString()}
			</p>
		);
	}

	if (!data || data.length === 0) {
		return <p>No rooms available at the moment.</p>;
	}

	return (
		<div className="grid grid-cols-2 py-6 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
			{data.map((room: Room) => (
				<RoomCard key={room.room_id} room={room} />
			))}
		</div>
	);
}

export default async function Home() {
	return (
		<>
			<Hero />
			<section className="relative py-8 padding-container max-container h-dvh">
				<h1 className="text-3xl font-medium font-canela">
					Available Rooms
				</h1>
				<Suspense fallback={<RoomCardsSkeleton />}>
					<RoomsList />
				</Suspense>
			</section>
		</>
	);
}
