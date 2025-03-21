import { Room } from "@/lib/types";
import { Dot, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import Perks from "./Perks";
import RoomDescription from "./RoomDescription";

interface Props {
	room: Room;
}

const RoomInformation = ({ room }: Props) => {
	return (
		<div className="flex flex-col max-w-full col-span-2 gap-6 lg:max-w-3xl">
			<div>
				<h1 className="text-xl">{room.room_name}</h1>
				<div className="inline-flex">
					<span>4 guests</span>
					<Dot />
					<span>1 bedroom</span>
					<Dot />
					<span>1 bed</span>
					<Dot />
					<span>1 bath</span>
				</div>
				{room.room_is_guest_favorite ? (
					<div className="border rounded-xl border-white flex items-center justify-around my-8 p-5 h-[6rem]">
						<div className="gap-5 leading-none flexCenter">
							<p className="text-lg font-medium text-center">
								Guest <br /> favorite
							</p>
							<p className="text-sm hidden lg:block">
								One of the most loved rooms <br /> on Luma,
								according to guests
							</p>
						</div>
						<div className="block h-full lg:hidden">
							<Separator orientation="vertical" />
						</div>
						<div className="flex-col leading-none flexCenter">
							<p className="font-medium">4.84</p>
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<Star className="" size={12} key={i} />
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
				<RoomDescription desc={room.room_description} />
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
	);
};

export default RoomInformation;
