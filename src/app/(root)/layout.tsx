import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";

const latoFont = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-lato",
});

export const metadata: Metadata = {
	title: "Luma Bookings",
	description:
		"Luma Bookings is a cutting‐edge hotel booking platform designed specifically for modern travelers. The app streamlines the entire process of finding and reserving the perfect accommodation, whether you’re exploring a bustling city or seeking a quiet retreat.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${latoFont.variable} antialiased`}>
				<Navbar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
