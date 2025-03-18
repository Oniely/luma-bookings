import { Search } from "lucide-react";
import { Button } from "../ui/button";

const Searchbar = () => {
	return (
		<Button
			variant="ghost"
			className="mr-2 hover:bg-transparent hover:text-white"
			size="icon"
		>
			<Search className="size-6" />
		</Button>
	);
};

export default Searchbar;
