import { formatAvailableDate } from "@/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";

interface Props {
	room: {
		id: string;
		image: string;
		title: string;
		description: string;
		data_available_start: Date;
		data_available_end: Date;
		price: number;
		guest_favorite?: boolean;
	};
}

const RoomCard = ({ room }: Props) => {
	return (
		<Link href={`/room/${room.id}`} passHref>
			<article className="relative">
				<div className="flex rounded-2xl">
					<img
						className="aspect-square rounded-2xl object-cover object-center"
						src={room.image}
						alt="photo"
					/>
				</div>
				<div className="gap-0 text-md">
					<div className="flexBetween">
						<h2 className="truncate font-medium mt-2 text-black-100">
							{room.title}
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
						{room.description}
					</h3>
					<h3 className="truncate text-secondary leading-none mt-1">
						{formatAvailableDate(
							room.data_available_start,
							room.data_available_end
						)}
					</h3>
					<div className="mt-1.5 text-black-100">
						<span className="font-medium">${room.price}</span> night
					</div>
				</div>

				{room.guest_favorite && (
					<p className="bg-white text-black-100 py-1 px-2 absolute top-3 left-3 rounded-full text-sm font-medium">
						Guest favorite
					</p>
				)}
			</article>
		</Link>
	);
};

export default RoomCard;
