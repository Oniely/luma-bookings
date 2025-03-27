"use client";

import { useState } from "react";
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
import { Star } from "lucide-react";

const ReservedBooking = ({ reservation }: { reservation: Reservation }) => {
	const [rating, setRating] = useState(0);
	const [reviewText, setReviewText] = useState("");

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
		}).format(Number(reservation.reservation_payment_amount));

	const handleSubmitReview = () => {
		const payload = {
			reservationId: reservation.reservation_id,
			rating,
			reviewText,
		};

		console.log("Submitted Review: ", payload);
		// TODO: Send this data to your backend API
	};

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
							reservation.reservation_status === "pending"
								? "bg-yellow-100 text-yellow-800"
								: reservation.reservation_status === "active"
								? "bg-green-100 text-green-800"
								: reservation.reservation_status === "completed"
								? "bg-blue-100 text-blue-800"
								: "bg-gray-100 text-gray-800"
						}`}
					>
						{reservation.reservation_status === "pending"
							? "Pending"
							: reservation.reservation_status === "active"
							? "Active"
							: reservation.reservation_status === "completed"
							? "Completed"
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
										<span>${reservation.reservation_payment_amount}</span>
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
								</div>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Close</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				{reservation.reservation_status === "completed" && (
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<button className="text-blue-600">
								Write Review
							</button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Write a Review
								</AlertDialogTitle>
								<AlertDialogDescription>
									Rate your experience and leave a comment.
								</AlertDialogDescription>
							</AlertDialogHeader>

							{/* Star Rating System */}
							<div className="flex justify-center gap-1 my-2">
								{[1, 2, 3, 4, 5].map((star) => (
									<Star
										key={star}
										size={30}
										className={`cursor-pointer ${
											star <= rating
												? "text-yellow-500"
												: "text-gray-300"
										}`}
										onClick={() => setRating(star)}
									/>
								))}
							</div>

							{/* Review Input */}
							<textarea
								className="w-full border rounded-lg p-2"
								rows={3}
								placeholder="Write your review..."
								value={reviewText}
								onChange={(e) => setReviewText(e.target.value)}
							/>

							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									className="bg-blue-600 hover:bg-blue-700"
									onClick={handleSubmitReview}
									disabled={
										rating === 0 || reviewText.trim() === ""
									}
								>
									Submit Review
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
