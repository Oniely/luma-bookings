"use client";

import {
	GlassWater,
	Wifi,
	Tv,
	Car,
	Utensils,
	Bath,
	Wind,
	Coffee,
	Dog,
	Snowflake,
	Baby,
	Dumbbell,
	LockKeyhole,
	Plus,
} from "lucide-react";
import { ReactNode, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Create a const object for perk names to get better autocomplete
export const PERKS = {
	FREE_WATER: "Free water",
	FREE_WIFI: "Free WiFi",
	SMART_TV: "Smart TV",
	FREE_PARKING: "Free parking",
	KITCHEN: "Kitchen",
	PRIVATE_BATHROOM: "Private bathroom",
	AIR_CONDITIONING: "Air conditioning",
	COFFEE_MAKER: "Coffee maker",
	PET_FRIENDLY: "Pet friendly",
	COOL_AIR: "Cool air",
	BABY_FRIENDLY: "Baby friendly",
	GYM_ACCESS: "Gym access",
	PRIVATE_ENTRANCE: "Private entrance",
} as const;

// Create a type from the values of PERKS
export type PerkName = (typeof PERKS)[keyof typeof PERKS];

interface PerkItem {
	name: PerkName;
	icon: ReactNode;
}

const perksList: PerkItem[] = [
	{ name: PERKS.FREE_WATER, icon: <GlassWater size={24} /> },
	{ name: PERKS.FREE_WIFI, icon: <Wifi size={24} /> },
	{ name: PERKS.SMART_TV, icon: <Tv size={24} /> },
	{ name: PERKS.FREE_PARKING, icon: <Car size={24} /> },
	{ name: PERKS.KITCHEN, icon: <Utensils size={24} /> },
	{ name: PERKS.PRIVATE_BATHROOM, icon: <Bath size={24} /> },
	{ name: PERKS.AIR_CONDITIONING, icon: <Wind size={24} /> },
	{ name: PERKS.COFFEE_MAKER, icon: <Coffee size={24} /> },
	{ name: PERKS.PET_FRIENDLY, icon: <Dog size={24} /> },
	{ name: PERKS.COOL_AIR, icon: <Snowflake size={24} /> },
	{ name: PERKS.BABY_FRIENDLY, icon: <Baby size={24} /> },
	{ name: PERKS.GYM_ACCESS, icon: <Dumbbell size={24} /> },
	{ name: PERKS.PRIVATE_ENTRANCE, icon: <LockKeyhole size={24} /> },
];

interface Props {
	perks?: PerkName[];
	className?: string;
	maxDisplay?: number;
}

// Single perk item component for reuse
const PerkItem = ({ perkName }: { perkName: PerkName }) => {
	const perk = perksList.find((p) => p.name === perkName) || perksList[0];

	return (
		<div className="flexStart gap-2 py-3 px-1">
			{perk.icon}
			<span className="text-sm">{perk.name}</span>
		</div>
	);
};

const Perks = ({
	perks = [PERKS.FREE_WIFI, PERKS.GYM_ACCESS],
	className = "",
	maxDisplay = 10,
}: Props) => {
	const hasMorePerks = perks.length > maxDisplay;
	const displayPerks = perks.slice(0, maxDisplay);

	return (
		<div className={`grid grid-cols-2 gap-1 ${className}`}>
			{displayPerks.map((perkName, index) => (
				<PerkItem key={index} perkName={perkName} />
			))}

			{hasMorePerks && (
				<Dialog>
					<DialogTrigger asChild>
						<Button className="flexCenter gap-2 border border-black px-1 py-6 cursor-pointer rounded-sm dtransition-colors bg-white text-primary mt-4 hover:bg-white/80">
							<span className="text-sm font-medium">
								{`Show all ${perks.length} amenities`}
							</span>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md h-[90%] sm:h-auto overflow-y-auto">
						<DialogHeader>
							<DialogTitle>All Amenities</DialogTitle>
						</DialogHeader>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
							{perks.map((perkName, index) => (
								<PerkItem key={index} perkName={perkName} />
							))}
						</div>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
};

export default Perks;
