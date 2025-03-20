import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";

const LoginPage = () => {
	return (
		<div className="relative content-center w-full py-8 min-h-dvh">
			<Image
				src="/images/test-bg.jpg"
				alt="bg"
				className="z-0 object-cover"
				fill
			/>

			<LoginForm />
		</div>
	);
};

export default LoginPage;
