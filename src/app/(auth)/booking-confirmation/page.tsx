import { auth } from "@/app/auth";
import BookingConfirmation from "@/components/Forms/BookingConfirmation";
import { redirect } from "next/navigation";

const BookingConfirmationPage = async () => {
	const session = await auth();

	if (!session) redirect("/login");

	return (
		<div className="padding-container max-container">
			<BookingConfirmation />
		</div>
	);
};

export default BookingConfirmationPage;
