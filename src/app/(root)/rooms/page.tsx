import RoomList from "@/components/Home/RoomList";
import GuestFavoriteRoomList from "@/components/Room/GuestFavoriteRoomList";
import { getAllRooms } from "@/lib/action/rooms";
import RoomCardsSkeleton from "@/components/Room/RoomCardSkeleton";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";

const RoomsContent = async () => {
	const { data, error } = await getAllRooms();

	if (error) {
		return (
			<p className="text-red-500 padding-container max-container py-8">
				Error loading rooms: {error.toString()}
			</p>
		);
	}

	if (!data || data.length === 0) {
		return (
			<p className="padding-container max-container py-8">
				No rooms available at the moment.
			</p>
		);
	}

	return (
		<div className="page-space">
			<GuestFavoriteRoomList rooms={data} />
			<Separator />
			<RoomList rooms={data} />
		</div>
	);
};

const Rooms = () => {
	return (
		<Suspense
			fallback={
				<div className="padding-container max-container pb-8 page-space">
					<h1 className="text-3xl font-medium font-canela mb-6">
						Loading Rooms...
					</h1>
					<RoomCardsSkeleton />
				</div>
			}
		>
			<RoomsContent />
		</Suspense>
	);
};

export default Rooms;
