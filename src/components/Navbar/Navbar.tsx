import Image from "next/image";
import { Button } from "../ui/button";
import Menu from "./Menu";
import { Search } from "lucide-react";
import Searchbar from "../Search/Searchbar";

const Navbar = () => {
	return (
		<div className="flexBetween w-full h-[5rem] padding-container max-container absolute top-0 z-50 text-white left-1/2 tranform -translate-x-1/2">
			<div className="gap-3 flexCenter">
				<Button className="font-semibold">Book Now</Button>
			</div>
			<div className="absolute text-3xl transform -translate-x-1/2 font-canela-light left-1/2 flexCenter">
				<Image
					src="/images/logo-light.png"
					alt="Luma"
					width={200}
					height={80}
				/>
			</div>
			<div className="gap-3 flexCenter">
				<Searchbar />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
