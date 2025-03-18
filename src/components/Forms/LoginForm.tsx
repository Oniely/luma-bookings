"use client";

import { login } from "@/lib/action/auth";
import { loginSchema } from "@/lib/schema/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import Loading from "../Loading";
import { Button } from "../ui/button";
import { SquareAsterisk } from "lucide-react";

const LoginForm = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState<any>({});
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const formValuesData = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		const result = loginSchema.safeParse(formValuesData);

		if (!result.success) {
			const newErrors: any = {};
			result.error.errors.forEach((error) => {
				newErrors[error.path[0]] = error.message;
			});
			setErrors(newErrors);
			return;
		}

		const res = await login(result.data);

		if (res?.error) {
			setErrors({ email: res.error });
			return;
		} else {
			// save jwt to web (localStorage/sessionStorage)
			router.push("/");
		}
	}

	const [state, formAction, isPending] = useActionState(handleSubmit, null);

	return (
		<div className="relative z-50 flex flex-col max-w-lg gap-3 p-4 mx-auto bg-white border border-primary">
			<div className="flex justify-between">
				<div>
					<h2 className="text-2xl font-semibold font-canela">
						Login
					</h2>
					<p className="text-sm">
						Please enter your credentials to log in.
					</p>
				</div>
				<div>
					<SquareAsterisk size={24} />
				</div>
			</div>
			<form action={formAction} className="grid grid-cols-1 gap-3">
				<div className="w-full">
					<div className="flex justify-between items-center">
						<p>Email</p>
						{errors.email && (
							<p className="text-red-500 text-xs text-right">
								{errors.email}
							</p>
						)}
					</div>
					<input
						type="text"
						name="email"
						value={formValues.email}
						onChange={handleChange}
						className="w-full px-2 py-3 border"
					/>
				</div>
				<div className="w-full">
					<div className="flex justify-between items-center">
						<p>Password</p>
						{errors.password && (
							<p className="text-red-500 text-xs text-right">
								{errors.password}
							</p>
						)}
					</div>
					<input
						type="password"
						name="password"
						value={formValues.password}
						onChange={handleChange}
						className="w-full px-2 py-3 border"
					/>
				</div>
				<Button
					className="w-full py-7 font-semibold cursor-pointer rounded-none text-base"
					disabled={isPending}
				>
					{isPending ? <Loading /> : "Log in"}
				</Button>
				<p className="text-sm text-center">
					Don&apos;t have an account?{" "}
					<Link href="/register" className="underline">
						Sign Up
					</Link>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
