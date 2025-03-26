import { Room } from "@/lib/types";
import RoomCard from "@/components/Cards/RoomCard";

interface GuestFavoriteRoomListProps {
	rooms: Room[];
}

const GuestFavoriteRoomList = ({ rooms }: GuestFavoriteRoomListProps) => {
	// Filter only rooms marked as guest favorites
	const favoriteRooms = rooms.filter((room) => room.room_is_guest_favorite);

	if (favoriteRooms.length === 0) {
		return null;
	}

	return (
		<section className="relative py-8 padding-container max-container">
			<h1 className="text-3xl font-medium font-canela">
				Guest Favorites
			</h1>
			<div className="grid grid-cols-2 py-6 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
				{favoriteRooms.map((room) => (
					<RoomCard key={room.room_id} room={room} />
				))}
			</div>
		</section>
	);
};

export default GuestFavoriteRoomList;
