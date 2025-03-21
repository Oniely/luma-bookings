import { Skeleton } from "../ui/skeleton";

export const RoomCardsSkeleton = () => (
	<div className="grid grid-cols-2 py-6 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
		{[...Array(4)].map((_, i) => (
			<div className="flex flex-col space-y-3" key={i}>
				<Skeleton className="h-69 rounded-xl bg-gray-300" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px] bg-gray-300" />
					<Skeleton className="h-4 w-[200px] bg-gray-300" />
					<Skeleton className="h-4 w-[100px] bg-gray-300" />
				</div>
			</div>
		))}
	</div>
);

export default RoomCardsSkeleton;
