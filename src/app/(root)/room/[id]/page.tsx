import BookingWidget from "@/components/Room/BookingWidget";
import RoomGallery from "@/components/Room/RoomGallery";
import RoomInformation from "@/components/Room/RoomInformation";
import UserReviews from "@/components/Room/UserReviews";
import { Separator } from "@/components/ui/separator";
import { getRoom } from "@/lib/action/rooms";
import { rooms } from "@/lib/mock_data";
import { Dot, Star } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
	const id = (await params)?.id;

	if (!id) notFound();

	const { data: room } = await getRoom(id);

	if (!room) notFound();

	return (
		<div className="relative min-h-screen px-8 pb-8 text-white page-space bg-primary padding-container max-container">
			<h1 className="mt-8 mb-3 text-3xl">{room.title}</h1>
			<RoomGallery room={room} />
			<div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-6">
				<RoomInformation room={room} />
				<BookingWidget room={room} />
			</div>
			<Separator className="my-5" />
			<div>
				<UserReviews />
			</div>
		</div>
	);
};

export default Page;
