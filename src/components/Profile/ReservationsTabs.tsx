import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReservedBooking from "./ReservedBooking";
import { Transaction as Reservation } from "@/lib/types";

const ReservationsTabs = ({
	reservations,
}: {
	reservations: Reservation[];
}) => {
	return (
		<Tabs defaultValue="all" className="w-full">
			<TabsList className="flex w-full rounded-none border-0 bg-transparent p-0">
				<TabsTrigger
					value="all"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					All
				</TabsTrigger>
				<TabsTrigger
					value="to-confirm"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					To Confirm
				</TabsTrigger>
				<TabsTrigger
					value="booked"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Booked
				</TabsTrigger>
				<TabsTrigger
					value="done"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Done
				</TabsTrigger>
			</TabsList>

			<TabsContent value="all">
				{reservations.map((reservation) => (
					<ReservedBooking
						key={reservation.reservation_id}
						reservation={reservation}
					/>
				))}
				{reservations.length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No reservations found
					</div>
				)}
			</TabsContent>

			<TabsContent value="to-confirm">
				{reservations
					.filter((res) => res.reservation_status === "to-confirm")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "to-confirm"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No reservations to confirm
					</div>
				)}
			</TabsContent>

			<TabsContent value="booked">
				{reservations
					.filter((res) => res.reservation_status === "booked")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "booked"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No booked reservations
					</div>
				)}
			</TabsContent>

			<TabsContent value="done">
				{reservations
					.filter((res) => res.reservation_status === "done")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter((res) => res.reservation_status === "done")
					.length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No completed reservations
					</div>
				)}
			</TabsContent>
		</Tabs>
	);
};

export default ReservationsTabs;
