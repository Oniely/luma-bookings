"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";
import { format } from "date-fns";
import { Transaction as Reservation } from "@/lib/types";

const ReservedBooking = ({ reservation }: { reservation: Reservation }) => {
	const formattedStartDate = format(
		new Date(reservation.reservation_date_start),
		"MMM dd, yyyy"
	);
	const formattedEndDate = format(
		new Date(reservation.reservation_date_end),
		"MMM dd, yyyy"
	);
	const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

	const formattedPayment = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(reservation.reservation_total_payment_amount);

	return (
		<div className="flex items-center justify-between border-b border-gray-200 py-4">
			<div className="flex items-center gap-4">
				<div className="w-20 h-20 bg-gray-200 rounded-md"></div>
				<div>
					<h3 className="text-lg font-semibold">
						{reservation.reservation_id}
					</h3>
					<p className="text-sm text-gray-500">{dateRange}</p>
					<span
						className={`text-xs px-2 py-1 rounded-full ${
							reservation.reservation_status === "to-confirm"
								? "bg-yellow-100 text-yellow-800"
								: reservation.reservation_status === "booked"
								? "bg-green-100 text-green-800"
								: reservation.reservation_status === "done"
								? "bg-blue-100 text-blue-800"
								: "bg-gray-100 text-gray-800"
						}`}
					>
						{reservation.reservation_status === "to-confirm"
							? "To Confirm"
							: reservation.reservation_status === "booked"
							? "Booked"
							: reservation.reservation_status === "done"
							? "Done"
							: "All"}
					</span>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<button className="text-primary">View Details</button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								Reservation Details
							</AlertDialogTitle>
							<AlertDialogDescription asChild>
								<div className="space-y-2 mt-2">
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Name:
										</span>
										<span>
											{reservation.reservation_id}
										</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Check-in:
										</span>
										<span>{formattedStartDate}</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Check-out:
										</span>
										<span>{formattedEndDate}</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Status:
										</span>
										<span className="capitalize">
											{reservation.reservation_status.replace(
												"-",
												" "
											)}
										</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Payment Amount:
										</span>
										<span>{formattedPayment}</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Payment Method:
										</span>
										<span className="capitalize">
											{
												reservation.reservation_payment_type
											}
										</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Description:
										</span>
										<span>
											{
												reservation.reservation_description
											}
										</span>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<span className="font-medium">
											Reservation ID:
										</span>
										<span className="text-sm text-gray-500">
											{reservation.room_id}
										</span>
									</div>
								</div>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Close</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
				{reservation.reservation_status === "to-confirm" && (
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<button className="text-red-600">Cancel</button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Cancel Reservation
								</AlertDialogTitle>
								<AlertDialogDescription>
									Are you sure you want to cancel this
									reservation? This action cannot be undone.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									No, keep it
								</AlertDialogCancel>
								<AlertDialogAction
									className="bg-red-600 hover:bg-red-700"
									onClick={() =>
										console.log(
											`Cancelled reservation ${reservation.reservation_id}`
										)
									}
								>
									Confirm Cancel
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				)}
			</div>
		</div>
	);
};

export default ReservedBooking;
