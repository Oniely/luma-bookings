import { auth } from "@/app/auth";
import RegisterForm from "@/components/Forms/RegisterForm";
import Image from "next/image";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
	const session = await auth();

	if (session) {
		redirect("/");
	}

	return (
		<div className="relative content-center w-full py-8 min-h-dvh">
			<Image
				src="/images/test-bg.jpg"
				alt="bg"
				className="z-0 object-cover"
				fill
			/>

			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
