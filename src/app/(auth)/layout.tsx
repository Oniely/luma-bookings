import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Luma Bookings",
	description:
		"Luma Bookings is a cutting‐edge hotel booking platform designed specifically for modern travelers. The app streamlines the entire process of finding and reserving the perfect accommodation, whether you’re exploring a bustling city or seeking a quiet retreat.",
};

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
