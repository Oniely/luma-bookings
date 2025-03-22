import { Menu as MenuIcon, UserRound } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { auth } from "@/app/auth";
import { logout } from "@/lib/action/auth";

const Menu = async () => {
	const session = await auth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<nav className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2">
					<MenuIcon size={22} />
					<UserRound size={24} />
				</nav>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{!session?.user ? (
					<>
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href="/register">Sign up</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/login">Log in</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
					</>
				) : (
					<>
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href="/profile">Profile</Link>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/profile?tab=2">
									Your reservations
								</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
					</>
				)}
				<DropdownMenuGroup>
					<DropdownMenuItem>GitHub</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
				</DropdownMenuGroup>
				{session?.user && (
					<>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<button onClick={logout} className="w-full">
								Log out
							</button>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
