import { auth } from "@/app/auth";
import ReservationsTabs from "@/components/Profile/ReservationsTabs";
import { getUserReservations } from "@/lib/action/userreservations";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Script from 'next/script';

// Create a loading component
const ReservationsLoading = () => (
	<div className="w-full flex flex-col items-center justify-center min-h-[300px]">
		<div className="h-8 w-8 rounded-full border-2 border-dotted border-gray-600 animate-spin" />
		<p className="mt-4 text-gray-600">Loading your reservations...</p>
	</div>
);

// Create a component to fetch and display reservations
const ReservationsContent = async () => {
	const { data, error } = await getUserReservations();

	if (error) {
		return (
			<div className="w-full flex flex-col items-center justify-center min-h-[300px]">
				<p className="text-red-500">
					Error loading reservations: {error.toString()}
				</p>
			</div>
		);
	}

	if (!data || data.length === 0) {
		return <p>No reservations currently</p>;
	}

	return <ReservationsTabs reservations={data} />;
};

const page = async () => {
	const session = await auth();

	if (!session) redirect("/login");

	return (
		<>
		<Script src='//fw-cdn.com/12558907/4954538.js' strategy="afterInteractive" />

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
					<Suspense fallback={<ReservationsLoading />}>
						<ReservationsContent />
					</Suspense>
				</div>
			</div>
		</section>
		</>
	);
};

export default page;
