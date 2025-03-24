import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Luma Bookings",
	description:
		"Luma Bookings is a cutting‐edge hotel booking platform designed specifically for modern travelers. The app streamlines the entire process of finding and reserving the perfect accommodation, whether you’re exploring a bustling city or seeking a quiet retreat.",
};

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="relative overflow-hidden">{children}</main>
			<Footer />
		</>
	);
}
