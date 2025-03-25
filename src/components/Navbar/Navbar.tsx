import Image from "next/image";
import Link from "next/link";
import Searchbar from "../Search/Searchbar";
import { Button } from "../ui/button";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<div className="flexBetween w-full h-[5rem] padding-container max-container absolute top-0 z-30 left-1/2 tranform -translate-x-1/2 text-white bg-black/30">
			<div className="gap-3 flexCenter">
				<Button className="font-semibold text-current">Book Now</Button>
			</div>
			<div className="absolute text-3xl transform -translate-x-1/2 font-canela-light left-1/2 flexCenter">
				<Link href="/">
					<div className="relative w-[11rem] h-[5rem]">
						<Image
							src="/images/logo-light.png"
							alt="Luma"
							className="object-cover object-center"
							fill
						/>
					</div>
				</Link>
			</div>
			<div className="gap-3 text-current flexCenter">
				<Searchbar />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
