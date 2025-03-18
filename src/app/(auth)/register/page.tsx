import RegisterForm from "@/components/Forms/RegisterForm";
import Image from "next/image";

const RegisterPage = () => {
	return (
		<div className="relative content-center w-full h-dvh">
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
