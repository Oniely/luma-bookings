"use client";

import { Room } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Grip } from "lucide-react";

const RoomGallery = ({ room }: { room: Room }) => {
	const [showAllPhotos, setShowAllPhotos] = useState(false);

	if (showAllPhotos) {
		return (
			<div className="absolute inset-0 z-50 min-h-screen bg-white">
				<div className="grid gap-4 p-8 text-white bg-black">
					<div>
						<h2 className="mr-40 text-3xl">
							Photos of {room.title}
						</h2>
						<button
							onClick={() => setShowAllPhotos(false)}
							className="fixed flex gap-1 px-4 py-2 text-black bg-white shadow right-8 top-8 rounded-2xl shadow-black"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
								/>
							</svg>
							<span>Close photos</span>
						</button>
					</div>
					{room?.photos?.length > 0 &&
						room.photos.map((photo, index) => (
							<div className="flex justify-center" key={index}>
								<img
									className="object-cover object-center"
									src={`${photo}`}
									alt="photo"
								/>
							</div>
						))}
				</div>
			</div>
		);
	}

	return (
		<div className="relative">
			<div className="mx-auto max-w-7xl rounded-2xl overflow-hidden h-[450px]">
				<div className="grid w-full h-full grid-cols-1 gap-2 md:grid-cols-4">
					<div className="md:col-span-2">
						<div className="relative w-full h-full">
							<Image
								src={room.photos[0]}
								alt="Main view"
								fill
								className="object-cover w-full h-full"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
					</div>

					<div className="grid w-full h-full grid-cols-2 col-span-2 gap-2">
						<div className="relative w-full h-full">
							<Image
								src={room.photos[1]}
								alt="Room Photo"
								fill
								className="object-cover w-full h-full"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
						<div className="relative w-full h-full">
							<Image
								src={room.photos[1]}
								alt="Room Photo"
								fill
								className="object-cover w-full h-full"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
						<div className="relative w-full h-full">
							<Image
								src={room.photos[1]}
								alt="Room Photo"
								fill
								className="object-cover w-full h-full"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
						<div className="relative w-full h-full">
							<Image
								src={room.photos[1]}
								alt="Room Photo"
								fill
								className="object-cover w-full h-full"
								onClick={() => setShowAllPhotos(true)}
							/>
						</div>
					</div>
				</div>

				<div className="absolute mt-4 text-center bottom-3 right-6">
					<Button
						variant={"ghost"}
						onClick={() => setShowAllPhotos(true)}
						className="px-4 py-2 text-sm transition bg-white rounded-lg text-primary hover:bg-gray-700 hover:text-white"
					>
						<Grip />
						<span>Show all photos</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RoomGallery;
