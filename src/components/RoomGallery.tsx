"use client";

import { Room } from "@/lib/types";
import { useState } from "react";

const RoomGallery = ({ room }: { room: Room }) => {
	const [showAllPhotos, setShowAllPhotos] = useState(false);

	if (showAllPhotos) {
		return (
			<div className="absolute inset-0 min-h-screen bg-white z-50">
				<div className="grid gap-4 bg-black p-8 text-white">
					<div>
						<h2 className="mr-40 text-3xl">
							Photos of {room.title}
						</h2>
						<button
							onClick={() => setShowAllPhotos(false)}
							className="fixed right-8 top-8 flex gap-1 rounded-2xl bg-white px-4 py-2 text-black shadow shadow-black"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="h-6 w-6"
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
						room.photos.map((photo) => (
							<div className="flex justify-center" key={room.id}>
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
			<div className="grid grid-cols-[2fr,_1fr] gap-2 overflow-hidden rounded-3xl">
				<div>
					{room.photos?.[0] && (
						<div>
							<img
								onClick={() => setShowAllPhotos(true)}
								className="aspect-square h-full w-full cursor-pointer object-cover object-center"
								src={`${room.photos[0]}`}
								alt="photo"
							/>
						</div>
					)}
				</div>
				<div className="grid">
					{room.photos?.[1] && (
						<img
							onClick={() => setShowAllPhotos(true)}
							className="aspect-square cursor-pointer object-cover object-center"
							src={`${room.photos[1]}`}
							alt="photo"
						/>
					)}
					{room.photos?.[2] && (
						// made a div here and made the image relative and use top-2 to make a gap
						// and use overflow-hidden to not make an overflow and make a perfect square triple image
						<div className="overflow-hidden">
							<img
								onClick={() => setShowAllPhotos(true)}
								className="relative top-2 aspect-square cursor-pointer object-cover object-center"
								src={`${room.photos[2]}`}
								alt="photo"
							/>
						</div>
					)}
				</div>
			</div>
			<button
				onClick={() => setShowAllPhotos(true)}
				className="absolute bottom-2 right-2 flex items-center gap-1 rounded-2xl bg-white px-4 py-2 shadow-md shadow-gray-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>
				<span>Show more photos</span>
			</button>
		</div>
	);
};

export default RoomGallery;
