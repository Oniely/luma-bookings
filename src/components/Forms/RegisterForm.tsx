"use client";

import { register } from "@/lib/action/auth";
import { registerSchema } from "@/lib/schema/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import Loading from "../Loading";
import { Button } from "../ui/button";
import { SquareAsterisk } from "lucide-react";

const RegisterForm = () => {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
		confirmPassword: "",
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
			confirmPassword: formData.get("confirmPassword") as string,
		};

		const result = registerSchema.safeParse(formValuesData);

		if (!result.success) {
			const newErrors: any = {};
			result.error.errors.forEach((error) => {
				newErrors[error.path[0]] = error.message;
			});
			setErrors(newErrors);
			return;
		}

		const res = await register(result.data);

		if (res?.error) {
			setErrors({ email: res.error });
			return;
		} else {
			router.push("/login");
		}
	}

	const [state, formAction, isPending] = useActionState(handleSubmit, null);

	return (
		<div className="relative z-50 flex flex-col max-w-lg gap-3 p-4 mx-auto bg-white border border-primary">
			<div className="flex justify-between">
				<div>
					<h2 className="text-2xl font-semibold font-canela">
						Sign up
					</h2>
					<p className="text-sm">
						Please enter your details to sign up.
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
				<div className="w-full">
					<div className="flex justify-between items-center">
						<p>Confirm Password</p>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs text-right">
								{errors.confirmPassword}
							</p>
						)}
					</div>
					<input
						type="password"
						name="confirmPassword"
						value={formValues.confirmPassword}
						onChange={handleChange}
						className="w-full px-2 py-3 border"
					/>
				</div>
				<Button
					className="w-full py-7 font-semibold cursor-pointer rounded-none text-base"
					disabled={isPending}
				>
					{isPending ? <Loading color="#FFF" /> : "Sign up"}
				</Button>
				<p className="text-sm text-center">
					Already have an account?{" "}
					<Link href="/login" className="underline">
						Log in
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegisterForm;
