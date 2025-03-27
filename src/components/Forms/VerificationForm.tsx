"use client";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import Loading from "../Loading";
import { Button } from "../ui/button";
import { SquareAsterisk } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { verify } from "@/lib/action/auth";

const VerificationForm = () => {
	const [formValues, setFormValues] = useState({
		code: "",
	});
	const [errors, setErrors] = useState<any>({});
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, [e.target.name]: "" });
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const username = searchParams.get("username");
		if (!username) {
			alert("Username is missing in the URL.");
			return;
		}
		const formValuesData = {
			username,
			confirmation_code: formData.get("code") as string
		};
		

		const res = await verify(formValuesData);
		console.log(res)
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
						Enter your Verification code below {searchParams.get("username")}
					</h2>
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
                        name="code"
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
