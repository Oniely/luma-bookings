import ManageUsers from "@/components/AdminUI/ManageUsers";
import { getAllUsers } from "@/lib/action/user";
import { use } from "react";

const Page = () => {
  const { data, error } = use(getAllUsers());
  
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
  
  return <ManageUsers userData={data} />;
};

export default Page;