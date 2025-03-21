import { Dot, Star } from "lucide-react";

const UserReviews = () => {
	return (
		<div className="flex items-center mt-2 leading-8">
			<div className="flex items-center gap-2">
				<Star className="text-white stroke-1 fill-white" size={28} />
				<span className="text-lg text-white">4.85</span>
			</div>
			<Dot />
			<button className="text-lg text-white underline-offset-2">
				69 reviews
			</button>
		</div>
	);
};

export default UserReviews;
