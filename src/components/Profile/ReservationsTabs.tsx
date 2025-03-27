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
					value="pending"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Pending
				</TabsTrigger>
				<TabsTrigger
					value="active"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Active
				</TabsTrigger>
				<TabsTrigger
					value="cancelled"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Cancelled
				</TabsTrigger>
				<TabsTrigger
					value="completed"
					className="border border-gray-200 rounded-none px-4 py-2 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
				>
					Completed
				</TabsTrigger>
			</TabsList>

			{/* All Reservations */}
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

			{/* Pending Reservations */}
			<TabsContent value="pending">
				{reservations
					.filter((res) => res.reservation_status === "pending")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "pending"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No reservations to confirm
					</div>
				)}
			</TabsContent>

			{/* Active Reservations */}
			<TabsContent value="active">
				{reservations
					.filter((res) => res.reservation_status === "active")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "active"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No active reservations
					</div>
				)}
			</TabsContent>

			{/* Cancelled Reservations */}
			<TabsContent value="cancelled">
				{reservations
					.filter((res) => res.reservation_status === "cancelled")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "cancelled"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No cancelled reservations
					</div>
				)}
			</TabsContent>

			{/* Completed Reservations */}
			<TabsContent value="completed">
				{reservations
					.filter((res) => res.reservation_status === "completed")
					.map((reservation) => (
						<ReservedBooking
							key={reservation.reservation_id}
							reservation={reservation}
						/>
					))}
				{reservations.filter(
					(res) => res.reservation_status === "completed"
				).length === 0 && (
					<div className="py-8 text-center text-gray-500">
						No completed reservations
					</div>
				)}
			</TabsContent>
		</Tabs>
	);
};

export default ReservationsTabs;
