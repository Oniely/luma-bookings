import BookingWidget from "@/components/Room/BookingWidget";
import Perks from "@/components/Room/Perks";
import RoomDescription from "@/components/Room/RoomDescription";
import RoomGallery from "@/components/Room/RoomGallery";
import { Separator } from "@/components/ui/separator";
import { Dot, Star } from "lucide-react";

const Page = () => {
	const room = {
		id: "1",
		title: "Cabin 2-Modern Cabin w/Tempur bed & stunning view",
		description:
			"This modern studio unit is 22 sqm , it the perfect place for you to stay in Cebu City with your friends and family. Horizon 101, the highest building in Cebu, is located at 74 General Maxilom Ave in Cebu City. The building itself is just a walking distance to Fuente Osmeña Circle, Cristo Inglesia Church, Restaurants, Shopping malls, Hospitals, and Banks. Public transport is highly available as jeeps, and taxis are all around the city, and is located in the lobby of this building. The space The unit has a full sized bed with a pull-out bed for extra person. It has wifi, air-conditioning, water heater shower, HD LED TV and ready to Netflix but your acct and youtube,mini refrigerator means it is a kind of refrigerator that only cool down a beverage like water and coke but will not become cooled fast,microwave, induction cooker, electric kettle, rice cooker, and complete kitchen utensils and also complete with towels and bathroom accessories. Check in/out.please note that check in are after 1400hrs but maybe earlier based on the availability.check out is strictly at 1200 hrs or earier. There are security officers on duty 24/7 at the horizon 101 property.and also has pay parking space just inquire on us.Guest accessSwimming Pool Notice:pool is available 8am to 8pm.swimming pool will be closed every Tuesday due to cleaning.extra towel charge - Php 75 per towelOther things to noteRequirements for guests checking in must be sent to us before the check in date to have a smooth check in.- Valid Id- Vaccine Card/ Vaccine CertificateRequirements for visitors- Valid Id- Vaccine Card/ Vaccine Certificatefor early check in we charge php100 per hour and it depends on the availability in our bookings payment is through Gcash. we charge late check outs php100 per hourfor check in 2pm we have a staff that will assist you upon check in, if you are planning to chk in late no worries we will just leave the check in form, key and key card in the mailboxwe can only accept alternations that has been informed to us 1 week(7 days) before the check idate. thank you",
		checkIn: "3:00 PM",
		checkOut: "11:00 AM",
		maxGuest: 2,
		price: 100,
		photos: [
			"https://a0.muscache.com/im/pictures/ffb001b7-92a3-413f-ae51-e5b2c1df5580.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/6f4f3124-e7fc-4484-89fd-561d87cb0ec1.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/0f87c895-6bd8-4424-b069-bc38464cd5f3.jpg?im_w=720",
			"https://a0.muscache.com/im/pictures/0852a549-7c05-43c8-86b7-852b6867f009.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/ff22eba0-5a97-4b1e-b7a2-ea2781ebaeae.jpg?im_w=720",
		],
	};

	return (
		<div className="relative min-h-screen px-8 text-white page-space bg-primary padding-container max-container pb-8">
			<h1 className="text-3xl mb-3 mt-8">{room.title}</h1>
			<RoomGallery room={room} />
			<div className="grid grid-cols-3 mt-8">
				<div className="max-w-xl lg:max-w-2xl col-span-2 gap-6 flex flex-col">
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
						<div className="flex items-center mt-2 leading-8">
							<div className="flex items-center gap-2">
								<Star
									className="fill-white text-white stroke-1"
									size={18}
								/>
								<span className="text-white">4.85</span>
							</div>
							<Dot />
							<button className="text-white underline underline-offset-2">
								69 reviews
							</button>
						</div>
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
							className="fill-white text-white stroke-1"
							size={28}
						/>
						<span className="text-white text-lg">4.85</span>
					</div>
					<Dot />
					<button className="text-white underline-offset-2 text-lg">
						69 reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
