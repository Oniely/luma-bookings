import BookNow from "../Button/BookNow";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<div className="flexBetween w-full h-[5rem] padding-container">
			<div>Left</div>
			<div className="font-canela-light text-2xl">Luma</div>
			<div>
				<BookNow />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
