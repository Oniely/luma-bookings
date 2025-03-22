import UpdateProfileForm from "@/components/Forms/UpdateProfileForm";
import { auth } from "../auth";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await auth();

	if (!session) redirect("/login");

	return (
		<section className="pt-6 pb-10 h-dvh md:pb-14">
			<div className="pt-[4rem] padding-container flex flex-col gap-7 relative overflow-hidden">
				<div className="text-[#505050]">
					<p className="text-sm uppercase">
						Account / Dashboard / Profile
					</p>
					<h1 className="text-4xl font-semibold tracking-wider uppercase">
						Your Profile
					</h1>
				</div>
				<div className="flex items-start justify-center md:justify-start">
					<UpdateProfileForm
						user={session.user}
						token={session.accessToken}
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
