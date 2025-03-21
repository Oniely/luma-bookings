"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

interface Props {
	desc: string;
}

const RoomDescription = ({ desc }: Props) => {
	const truncatedText = desc.slice(0, 300) + (desc.length > 300 ? "..." : "");

	return (
		<div>
			<p className="text-md leading-6">{truncatedText}</p>
			{desc.length > 10 && (
				<Dialog>
					<DialogTrigger asChild>
						<button className="text-sm mt-2 underline underline-offset-2 text-secondary-100">
							See more
						</button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-lg h-[90%] overflow-y-auto">
						<DialogHeader>
							<DialogTitle className="text-xl">
								About the space
							</DialogTitle>
						</DialogHeader>
						<p className="text-base leading-7 tracking-wide whitespace-pre-wrap text-gray-800">
							{desc}
						</p>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
};

export default RoomDescription;
