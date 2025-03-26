import { auth } from "@/app/auth";
import ReservationsTabs from "@/components/Profile/ReservationsTabs";
import { getUserReservations } from "@/lib/action/userreservations";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await auth();

	if (!session) redirect("/login");	

	const { data, error } = await getUserReservations();

	if (error) {
		return (
			<p className="text-red-500">
				Error loading rooms: {error.toString()}
			</p>
		);
	}

	if (!data || data.length === 0) {
		return <p>No reservations currently</p>;
	}

	return (
		<section className="pt-6 pb-10 min-h-dvh md:pb-14">
			<div className="pt-[4rem] padding-container flex flex-col gap-7 relative overflow-hidden">
				<div className="text-[#505050]">
					<p className="text-sm uppercase">
						Account / Dashboard / Reservations
					</p>
					<h1 className="text-4xl font-semibold tracking-wider uppercase">
						Your Reservations
					</h1>
				</div>
				<div className="flex items-start justify-center md:justify-start">
					<ReservationsTabs reservations={data} />
				</div>
			</div>
		</section>
	);
};

export default page;
