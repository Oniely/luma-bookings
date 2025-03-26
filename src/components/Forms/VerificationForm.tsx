"use client";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import Loading from "../Loading";
import { Button } from "../ui/button";
import { SquareAsterisk } from "lucide-react";

const VerificationForm = () => {
	const [formValues, setFormValues] = useState({
		code: "",
	});
	const [errors, setErrors] = useState<any>({});
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, [e.target.name]: "" });
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const formValuesData = {
			code: Number(formData.get("code") as string)
		};

			router.push("/login");
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
                        <p>Verification Code</p>
                    </div>
                    <input
                        type="text"
                        name="fname"
                        value={formValues.code}
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
			</form>
		</div>
	);
};

export default VerificationForm;
