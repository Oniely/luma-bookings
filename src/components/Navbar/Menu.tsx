import { CircleUserRound, Menu as MenuIcon } from "lucide-react";

const Menu = () => {
	return (
		<nav className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 stext-primary">
			<MenuIcon size={20} />
			<CircleUserRound size={24} />
		</nav>
	);
};

export default Menu;
