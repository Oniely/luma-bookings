import { Button } from "../ui/button";
import Menu from "./Menu";
import { Search } from "lucide-react";

const Navbar = () => {
	return (
		<div className="flexBetween w-full h-[5rem] padding-container max-container absolute top-0 z-50 text-white left-1/2 tranform -translate-x-1/2">
			<div className="gap-3 flexCenter">
				<Button className="font-semibold">Book Now</Button>
			</div>
			<div className="absolute text-3xl transform -translate-x-1/2 font-canela-light left-1/2 flexCenter">
				Luma
			</div>
			<div className="gap-3 flexCenter">
				<Search className="mr-2" />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
