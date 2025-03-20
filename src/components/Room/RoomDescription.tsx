"use client";

import { useState } from "react";

interface Props {
	desc: string;
}

const RoomDescription = ({ desc }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const truncatedText = desc.slice(0, 300) + (desc.length > 300 ? "..." : "");

	return (
		<div>
			<p className="text-md leading-6">
				{isExpanded ? desc : truncatedText}
			</p>
			{desc.length > 300 && (
				<button
					className="text-sm mt-2 underline underline-offset-2 text-secondary-100"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? "See less" : "See more"}
				</button>
			)}
		</div>
	);
};

export default RoomDescription;
