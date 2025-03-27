import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const Showcase = () => {
	return (
		<section className="relative pt-10 pb-30 padding-container max-container min-h-dvh">
			<h1 className="text-[clamp(2rem,5vw,6rem)] font-medium font-canela leading-none">
				More Than a Stay—A Story to Remember. Our hotel isn't just a
				destination; it's where memories unfold, experiences linger, and
				every moment feels like an anniversary worth celebrating.
			</h1>
			<div className="flexBetween flex-col min-[900px]:flex-row gap-10 mt-20 md:px-[10vw]">
				<Image
					src={"/images/showcase1.jpg"}
					alt="showcase"
					width={400}
					height={400}
					className="object-cover"
				/>
				<p className="max-w-md text-justify">
				Jane, a busy business traveler, opens the hotel app on her smartphone. She inputs New York City as her destination, selects check-in and check-out dates, and filters for hotels with high guest ratings and in the downtown area. Jane browses the search results, taps on a hotel to view detailed room information, and proceeds to book a deluxe room. The app guides her through the secure payment process, and she receives an instant confirmation with all the reservation details. Jane later accesses her account to review the itinerary and prepare for her upcoming trip.
				</p>
			</div>
			<div className="flexBetween flex-col-reverse min-[900px]:flex-row gap-10 mt-30 md:px-[6vw]">
				<div className="space-y-4">
					<p className="max-w-md text-sm">
					John, a leisure traveler, opens the hotel app to plan his vacation. He inputs his destination, travel dates, and guest count, then applies filters to narrow down his options. After reviewing several hotel profiles, John selects one that meets his needs, completes the booking process with a secure payment, and receives an instant confirmation. He later checks his account for detailed itinerary information and any special instructions from the hotel.
					</p>
					<div>
					</div>
				</div>
				<Image
					src={"/images/showcase2.jpg"}
					alt="showcase"
					width={500}
					height={500}
					className="w-[500px] h-[300px] object-cover"
				/>
			</div>
			<div className="size-[70rem] bg-secondary absolute top-1/2 -right-40 transform -translate-y-1/2 -z-10 rounded-full blur-[180px]" />
		</section>
	);
};

export default Showcase;
