import AdminBookingCard from "@/components/AdminUI/AdminBookings/AdminBookings";
import ManageBookings from "@/components/AdminUI/ManageBookings";
import { getReservations } from "@/lib/action/userreservations";
import { use } from "react";

export default function Page(){

    const {data, error} = use(getReservations());

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
        <><ManageBookings roomData={data} /></>
    );
}