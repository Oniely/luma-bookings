import BookingWidget from "@/components/Room/BookingWidget";
import Perks from "@/components/Room/Perks";
import RoomDescription from "@/components/Room/RoomDescription";
import RoomGallery from "@/components/Room/RoomGallery";
import { Separator } from "@/components/ui/separator";
import { rooms } from "@/lib/mock_data";
import { Room } from "@/lib/types";
import { Dot, Star } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
	const id = (await params)?.id;

	if (!id) notFound();

	const room = rooms.find((room) => room.id === id);

	if (!room) notFound();

	return (
		<div className="relative min-h-screen px-8 pb-8 text-white page-space bg-primary padding-container max-container">
			<h1 className="mt-8 mb-3 text-3xl">{room.title}</h1>
			<RoomGallery room={room} />
			<div className="grid grid-cols-3 mt-8">
				<div className="flex flex-col max-w-xl col-span-2 gap-6 lg:max-w-2xl">
					<div>
						<h1 className="text-xl">{room.title}</h1>
						<div className="inline-flex">
							<span>4 guests</span>
							<Dot />
							<span>1 bedroom</span>
							<Dot />
							<span>1 bed</span>
							<Dot />
							<span>1 bath</span>
						</div>
						{room.guestFavorite ? (
							<div className="border rounded-xl border-white flex items-center justify-around my-8 p-5 h-[6rem]">
								<div className="gap-5 leading-none flexCenter">
									<p className="text-lg font-medium text-center">
										Guest <br /> favorite
									</p>
									<p className="text-sm hidden lg:block">
										One of the most loved rooms <br /> on
										Luma, according to guests
									</p>
								</div>
								<div className="block h-full lg:hidden">
									<Separator orientation="vertical" />
								</div>
								<div className="flex-col leading-none flexCenter">
									<p className="font-medium">4.84</p>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												className=""
												size={12}
												key={i}
											/>
										))}
									</div>
								</div>
								<Separator orientation="vertical" />
								<div className="flex-col leading-none flexCenter">
									<p className="font-medium">200</p>
									<p className="text-sm underline">reviews</p>
								</div>
							</div>
						) : (
							<div className="flex items-center mt-2 leading-8">
								<div className="flex items-center gap-2">
									<Star
										className="text-white stroke-1 fill-white"
										size={18}
									/>
									<span className="text-white">4.85</span>
								</div>
								<Dot />
								<button className="text-white underline underline-offset-2">
									69 reviews
								</button>
							</div>
						)}
					</div>
					<Separator />
					<div>
						<RoomDescription desc={room.description} />
					</div>
					<Separator className="my-2" />
					<div>
						<h1 className="text-xl">What this place offers</h1>
						<div className="max-w-lg py-3">
							<Perks
								perks={[
									"Air conditioning",
									"Baby friendly",
									"Cool air",
									"Coffee maker",
									"Free parking",
									"Gym access",
									"Kitchen",
									"Pet friendly",
									"Private bathroom",
									"Private entrance",
									"Smart TV",
									"Free WiFi",
									"Free water",
								]}
							/>
						</div>
					</div>
				</div>

				<div>
					<BookingWidget room={room} />
				</div>
			</div>
			<Separator className="my-5" />
			<div>
				<div className="flex items-center mt-2 leading-8">
					<div className="flex items-center gap-2">
						<Star
							className="text-white stroke-1 fill-white"
							size={28}
						/>
						<span className="text-lg text-white">4.85</span>
					</div>
					<Dot />
					<button className="text-lg text-white underline-offset-2">
						69 reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
