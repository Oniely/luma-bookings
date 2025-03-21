import { Room } from "@/lib/types";
import { formatAvailableDate } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
	room: Room;
}

const RoomCard = ({ room }: Props) => {
	return (
		<Link href={`/room/${room.room_id}`} passHref>
			<article className="relative">
				<div className="flex rounded-2xl relative w-full h-69">
					<Image
						className="aspect-square rounded-2xl object-cover object-center"
						src={room.room_img_url[0]}
						fill
						alt="photo"
					/>
				</div>
				<div className="gap-0 text-md">
					<div className="flexBetween">
						<h2 className="truncate font-medium mt-2 text-black-100">
							{room.room_name}
						</h2>
						<div className="flexCenter gap-1">
							<Star
								className="fill-black-100 text-black-100 stroke-1"
								size={15}
							/>
							<span className="text-black-100">4.85</span>
						</div>
					</div>
					<h3 className="truncate text-secondary leading-none">
						{room.room_description}
					</h3>
					<h3 className="truncate text-secondary leading-none mt-1">
						{/* {formatAvailableDate(
							room.dateAvailableStart!,
							room.dateAvailableEnd!
						)} */}
					</h3>
					<div className="mt-1.5 text-black-100">
						<span className="font-medium">${room.room_price}</span>{" "}
						night
					</div>
				</div>

				{room.room_is_guest_favorite && (
					<p className="bg-white text-black-100 py-1 px-2 absolute top-3 left-3 rounded-full text-sm font-medium">
						Guest favorite
					</p>
				)}
			</article>
		</Link>
	);
};

export default RoomCard;
