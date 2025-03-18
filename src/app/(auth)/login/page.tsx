import LoginForm from "@/components/Forms/LoginForm";
import { SquareAsterisk } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
	return (
		<div className="relative content-center w-full h-dvh">
			<Image src="/images/test-bg.jpg" alt="bg" className="z-0" fill />

			<LoginForm />
		</div>
	);
};

export default LoginPage;
