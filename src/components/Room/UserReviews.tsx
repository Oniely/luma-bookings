import { Dot, Star } from "lucide-react";
import { getReviews } from "@/lib/action/reviews";


const UserReviews = () => {


	return (
		<div className="flex flex-col gap-4 mt-2">
			<div className="flex items-center leading-8">
				<div className="flex items-center gap-2">
					<Star
						className="text-white stroke-1 fill-white"
						size={28}
					/>
					<span className="text-lg text-white">4.85</span>
				</div>
				<Dot />
				<button className="text-lg text-white underline-offset-2">
					69 reviews
				</button>
			</div>
			<div>Add reviews UI here...</div>
			
		</div>
	);
};

export default UserReviews;
