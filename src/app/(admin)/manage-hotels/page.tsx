import ManageHotels from "@/components/AdminUI/ManageHotels";
import { getAllRooms } from "@/lib/action/rooms";
import { Suspense, use } from "react";

const manageHotels = () => {
  const { data, error } = use(getAllRooms());
  
    if (error) {
      return (
        <p className="text-red-500">
          Error loading rooms: {error.toString()}
        </p>
      );
    }
  
    if (!data || data.length === 0) {
      return <p>No rooms available at the moment.</p>;
  }

  return (
  <ManageHotels roomData={data} />
);
};

export default manageHotels;