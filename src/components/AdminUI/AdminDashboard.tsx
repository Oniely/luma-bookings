import { Shield, User, Bed, Settings } from "lucide-react";
import Link from "next/link";

const AdminOptions = [
    { icon: Shield, title: "Login & security", description: "Update your password and secure the Admin account", path: "/login-security" },

    { icon: User, title: "Manage Users", description: "View list of users", path: "/manage-users" },

    { icon: Bed, title: "Manage Hotels", description: "Manage all the hotels and bookings", path: "/manage-hotels" },

    { icon: Settings, title: "Other Settings", description: "Manage Payments Options, Packages, and Events", path: "/other-settings" },
  ];
  
  const AdminCard = ({ icon: Icon, title, description, path }: { icon: any; title: string; description: string; path: string }) => {
    return (
      <Link href={path}>
        <button className="flex-col p-4 bg-white rounded-2xl shadow-md gap-4 items-start w-full h-full cursor-pointer hover:bg-gray-100 hover:shadow-lg transition duration-200">
          <Icon className={`w-12 h-12 ${getIconColor(Icon)}`} />
          <div className="flex flex-col items-end justify-between h-30">
            <h3 className="text-2xl mt-13 font-semibold">{title}</h3>
            <p className="text-md mb-2 text-gray-500">{description}</p>
          </div>
        </button>
      </Link>
    );
  };
  
  const getIconColor = (icon) => {
    switch (icon) {
      case User:
        return "text-blue-500";
      case Shield:
        return "text-red-500";
      case Bed:
        return "text-yellow-500";
      case Settings:
        return "text-gray-500";
      default:
        return "text-black";
    }
  };

export default function AdminDashboard() {
  return (
    <div>
      <nav className="flex flex-col items-start align-center justify-content-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <p className="text-3xl font-semibold text-center">Admin Dashboard</p>
      </nav>
      <div className="flex-1 mt-10 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AdminOptions.map((option, index) => (
          <AdminCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
}