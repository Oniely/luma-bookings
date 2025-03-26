import RoomCard from "../Cards/RoomCard";
import { Room } from "@/lib/types";

interface RoomListProps {
	rooms: Room[];
}

const RoomList = ({ rooms }: RoomListProps) => {
	if (!rooms || rooms.length === 0) {
		return <p>No rooms available at the moment.</p>;
	}

	return (
		<section className="relative py-8 padding-container max-container min-h-dvh">
			<h1 className="text-3xl font-medium font-canela">
				Available Rooms
			</h1>
			<div className="grid grid-cols-2 py-6 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
				{rooms.map((room) => (
					<RoomCard key={room.room_id} room={room} />
				))}
			</div>
		</section>
	);
};

export default RoomList;
