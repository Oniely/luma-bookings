import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReservedBooking from "./ReservedBooking";
import { Transaction as Reservation } from "@/lib/types";

// Mock data matching the Transaction interface
// const mockReservations: Reservation[] = [
// 	{
// 		reservation_id: "RES-001",
// 		user_id: "USR-001",
// 		room_id: "RM-101",
// 		package_id: "PKG-001",
// 		reservation_date_start: new Date("2025-04-15"),
// 		reservation_date_end: new Date("2025-04-20"),
// 		reservation_total_payment_amount: 899.99,
// 		reservation_payment_type: "credit-card",
// 		reservation_description: "Beachfront resort with ocean view",
// 		reservation_status: "to-confirm",
// 	},
// 	{
// 		reservation_id: "RES-002",
// 		user_id: "USR-002",
// 		room_id: "RM-203",
// 		package_id: "PKG-002",
// 		reservation_date_start: new Date("2025-05-03"),
// 		reservation_date_end: new Date("2025-05-07"),
// 		reservation_total_payment_amount: 650.5,
// 		reservation_payment_type: "paypal",
// 		reservation_description: "Mountain cabin with hot tub access",
// 		reservation_status: "to-confirm",
// 	},
// 	{
// 		reservation_id: "RES-003",
// 		user_id: "USR-003",
// 		room_id: "RM-305",
// 		reservation_date_start: new Date("2025-04-22"),
// 		reservation_date_end: new Date("2025-04-24"),
// 		reservation_total_payment_amount: 425.0,
// 		reservation_payment_type: "credit-card",
// 		reservation_description: "City apartment near downtown attractions",
// 		reservation_status: "booked",
// 	},
// 	{
// 		reservation_id: "RES-004",
// 		user_id: "USR-004",
// 		room_id: "RM-401",
// 		package_id: "PKG-003",
// 		event_id: "EVT-001",
// 		reservation_date_start: new Date("2025-06-10"),
// 		reservation_date_end: new Date("2025-06-17"),
// 		reservation_total_payment_amount: 1750.0,
// 		reservation_payment_type: "bank-transfer",
// 		reservation_description: "Luxury villa with private pool",
// 		reservation_status: "booked",
// 	},
// 	{
// 		reservation_id: "RES-005",
// 		user_id: "USR-005",
// 		room_id: "RM-102",
// 		reservation_date_start: new Date("2025-05-18"),
// 		reservation_date_end: new Date("2025-05-22"),
// 		reservation_total_payment_amount: 495.75,
// 		reservation_payment_type: "credit-card",
// 		reservation_description: "Forest retreat with hiking trails",
// 		reservation_status: "booked",
// 	},
// 	{
// 		reservation_id: "RES-006",
// 		user_id: "USR-001",
// 		room_id: "RM-205",
// 		event_id: "EVT-002",
// 		reservation_date_start: new Date("2025-03-05"),
// 		reservation_date_end: new Date("2025-03-09"),
// 		reservation_total_payment_amount: 575.25,
// 		reservation_payment_type: "paypal",
// 		reservation_description: "Lake house with boat dock access",
// 		reservation_status: "done",
// 	},
// 	{
// 		reservation_id: "RES-007",
// 		user_id: "USR-002",
// 		room_id: "RM-307",
// 		reservation_date_start: new Date("2025-02-28"),
// 		reservation_date_end: new Date("2025-03-02"),
// 		reservation_total_payment_amount: 320.5,
// 		reservation_payment_type: "credit-card",
// 		reservation_description: "Downtown loft with city views",
// 		reservation_status: "done",
// 	},
// 	{
// 		reservation_id: "RES-008",
// 		user_id: "USR-003",
// 		room_id: "RM-105",
// 		package_id: "PKG-004",
// 		reservation_date_start: new Date("2025-03-12"),
// 		reservation_date_end: new Date("2025-03-15"),
// 		reservation_total_payment_amount: 420.75,
// 		reservation_payment_type: "credit-card",
// 		reservation_description: "Countryside cottage with garden",
// 		reservation_status: "done",
// 	},
// ];

const ReservationsTabs = ({reservations}: {reservations: Reservation[]}) => {
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
				{reservations.filter(
					(res) => res.reservation_status === "done"
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
