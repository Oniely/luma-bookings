"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	ArrowRight,
	FilterIcon,
	HomeIcon,
	Landmark,
	Mountain,
	Sofa,
	Tent,
	TreePalm,
	Waves,
	Wind,
} from "lucide-react";

const categories = [
	{ icon: <Waves />, label: "Amazing pools" },
	{ icon: <Landmark />, label: "Icons" },
	{ icon: <Mountain />, label: "Amazing views" },
	{ icon: <TreePalm />, label: "Beachfront" },
	{ icon: <TreePalm />, label: "Farms" },
	{ icon: <Wind />, label: "Windmills" },
	{ icon: <HomeIcon />, label: "Tiny homes" },
	{ icon: <Sofa />, label: "Rooms" },
	{ icon: <Tent />, label: "Countryside" },
	{ icon: <Waves />, label: "Amazing pools" },
	{ icon: <Landmark />, label: "Icons" },
	{ icon: <Mountain />, label: "Amazing views" },
	{ icon: <TreePalm />, label: "Beachfront" },
	{ icon: <TreePalm />, label: "Farms" },
	{ icon: <Wind />, label: "Windmills" },
	{ icon: <HomeIcon />, label: "Tiny homes" },
	{ icon: <Sofa />, label: "Rooms" },
	{ icon: <Tent />, label: "Countryside" },
];

export default function CategoryCarousel() {
	const [startIndex, setStartIndex] = useState(0);
	const itemsPerPage = 12;

	const handleNext = () => {
		if (startIndex + itemsPerPage < categories.length) {
			setStartIndex(startIndex + 1);
		}
	};

	const handlePrev = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1);
		}
	};

	return (
		<div className="w-full flex items-center justify-between gap-2 py-4 padding-container">
			<Button
				onClick={handlePrev}
				variant="outline"
				size="icon"
				className="shrink-0"
			>
				<ArrowLeft className="h-4 w-4" />
			</Button>

			<div className="flex-1 flex justify-center gap-4 overflow-hidden">
				{categories
					.slice(startIndex, startIndex + itemsPerPage)
					.map((category, index) => (
						<div
							key={index}
							className="flex flex-col items-center cursor-pointer"
						>
							<div className="text-2xl">{category.icon}</div>
							<span className="text-sm mt-1">
								{category.label}
							</span>
						</div>
					))}
			</div>

			<Button
				onClick={handleNext}
				variant="outline"
				size="icon"
				className="shrink-0"
			>
				<ArrowRight className="h-4 w-4" />
			</Button>

			<Button
				variant="outline"
				className="ml-4 shrink-0 flex items-center gap-2"
			>
				<FilterIcon className="h-4 w-4" />
				<span>Filter</span>
			</Button>
		</div>
	);
}
