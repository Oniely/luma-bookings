import { auth } from "@/app/auth";
import AccountManagement from "@/components/AdminUI/ManageAccount"
import { Employee } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function Page(){
    const session = await auth();

    if (!session) redirect("/login");
    
    return(<AccountManagement employee={session?.user}/>)
}