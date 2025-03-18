import { Menu as MenuIcon, UserRound } from "lucide-react";

const Menu = () => {
	return (
		<nav className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2">
			<MenuIcon size={22} />
			<UserRound size={24} />
		</nav>
	);
};

export default Menu;
