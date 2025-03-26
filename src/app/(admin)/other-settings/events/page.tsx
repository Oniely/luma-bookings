import { getEvents } from "@/lib/action/events";
import { notFound } from "next/navigation";
import Events from "@/components/AdminUI/Events";
import { use } from "react";

const EventsPage = () => {
  const { data, error } = use(getEvents());
  
  if (error) {
    return (
      <p className="text-red-500">Error loading events: {error.toString()}</p>
    );
  }
  if (!data) return("No events available at the moment.");


  return (
    <Events eventData={data}/>
  );
};
export default EventsPage;