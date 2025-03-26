import { BookKey, Home, LogOut, Settings } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
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
import { logout } from "@/lib/action/auth";
import { Separator } from "../ui/separator";

const items = [
	{
		title: "Account",
		url: "/profile",
		icon: Home,
	},
	{
		title: "Your Reservations",
		url: "/profile/reservations",
		icon: BookKey,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];

export default function ProfileSidebar() {
	return (
		<Sidebar>
			<SidebarContent className="pt-20 bg-beige">
				<SidebarHeader>
					<Link
						href="/"
						className="font-canela text-black-100 text-3xl pl-1 flexStart gap-1"
					>
						Luma
					</Link>
				</SidebarHeader>
				<SidebarGroup>
					<SidebarGroupLabel>Profile Dashboard</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url} className="text-md">
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<SidebarMenuButton className="flexStart">
										<LogOut />
										<span className="text-md">Logout</span>
									</SidebarMenuButton>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Are you sure you want to logout?
										</AlertDialogTitle>
										<AlertDialogDescription>
											You will be logged out of your
											account and redirected to the login
											page. You will need to sign in again
											to access your account.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>
											Cancel
										</AlertDialogCancel>
										<AlertDialogAction onClick={logout}>
											Confirm
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
