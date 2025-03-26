import { Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import SearchWidget from "./SearchWidget";

const Searchbar = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="mr-2 hover:bg-transparent hover:text-white flexCenter size-10 cursor-pointer">
					<Search className="size-6" />
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-screen bg-transparent border-0 shadow-none">
				<div>
					<SearchWidget />
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default Searchbar;
