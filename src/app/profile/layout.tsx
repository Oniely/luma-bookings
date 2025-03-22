import Menu from "@/components/Navbar/Menu";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Luma Bookings",
	description:
		"Luma Bookings is a cutting‐edge hotel booking platform designed specifically for modern travelers. The app streamlines the entire process of finding and reserving the perfect accommodation, whether you’re exploring a bustling city or seeking a quiet retreat.",
};

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<ProfileSidebar />
			<main className="bg-beige w-full relative pt-10">
				{children}
				<div className="absolute top-10 flexBetween w-full padding-container">
					<label htmlFor="sidebarTrigger" className="flexStart gap-1">
						<SidebarTrigger
							name="sidebarTrigger"
							id="sidebarTrigger"
							className="size-10 text-white"
							variant={"default"}
							size={"lg"}
						/>
						<span className="cursor-pointer text-lg">Menu</span>
					</label>
					<Link href="/">
						<p className="font-canela text-2xl text-[#505050] flexCenter gap-1">
							<ArrowLeft size={22} /> Go back
						</p>
					</Link>
				</div>
			</main>
		</SidebarProvider>
	);
}
