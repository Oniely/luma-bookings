import Hero from "@/components/Home/Hero";
import RoomList from "@/components/Home/RoomList";
import Showcase from "@/components/Home/Showcase";
import RoomCardsSkeleton from "@/components/Room/RoomCardSkeleton";
import { Separator } from "@/components/ui/separator";
import { getAllRooms } from "@/lib/action/rooms";
import { Suspense } from "react";

const RoomsContent = async () => {
	const { data, error } = await getAllRooms();

	if (error) {
		return (
			<p className="py-8 text-red-500 padding-container max-container">
				Error loading rooms: {error.toString()}
			</p>
		);
	}

	if (!data || data.length === 0) {
		return (
			<p className="py-8 padding-container max-container">
				No rooms available at the moment.
			</p>
		);
	}

	return <RoomList rooms={data} />;
};

export default async function Home() {
	return (
		<>
			<Hero />
			<Showcase />
			<Separator />
			<Suspense
				fallback={
					<div className="pb-8 padding-container max-container page-space">
						<h1 className="text-3xl font-medium font-canelad">
							Loading Rooms...
						</h1>
						<RoomCardsSkeleton />
					</div>
				}
			>
				<RoomsContent />
			</Suspense>
		</>
	);
}
