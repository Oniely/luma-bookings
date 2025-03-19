import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
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
			<body className={`${poppinsFont.variable} antialiased`}>
				<Navbar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
