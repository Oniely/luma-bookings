import { signIn } from "@/app/auth";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

const SignInWithGoogle = () => {
	return (
		<form
			action={async () => {
				"use server";

				await signIn("github", {
					redirectTo: "/",
				});
			}}
		>
			<Button
				variant="outline"
				className="w-full hover:bg-white-100 z-50"
			>
				<Github size={30} />
				Login with Github
			</Button>
		</form>
	);
};

export default SignInWithGoogle;
