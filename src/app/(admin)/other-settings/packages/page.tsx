import { getPackages } from "@/lib/action/package";
import { notFound } from "next/navigation";
import Packages from "@/components/AdminUI/Packages";
import { use } from "react";

const PackagesPage = () => {
  const { data, error } = use(getPackages());

  if (!data) notFound();

  return (
    <Packages packageData={data}/>
  );
};
export default PackagesPage;