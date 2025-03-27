"use client";

import { updateProfile } from "@/lib/action/auth";
import { updateProfileSchema } from "@/lib/schema/auth";
import { UserSession } from "@/lib/types";
import Image from "next/image";
import { useActionState, useState, useEffect } from "react";

interface Props {
	user: UserSession;
	token: string;
}

const UpdateProfileForm = ({ user, token }: Props) => {
	const [formValues, setFormValues] = useState({
		fname: user.fullName
			? user.fullName.split(" ").slice(0, -1).join(" ")
			: "",
		lname: user.fullName ? user.fullName.split(" ").slice(-1)[0] : "",
		password: "",
		confirmPassword: "",
	});
	const [profileImage, setProfileImage] = useState<File | null>(null);
	const [previewImage, setPreviewImage] = useState<string>(user.profile_url);
	const [errors, setErrors] = useState<any>({});

	// Cleanup function for object URL to avoid memory leaks
	useEffect(() => {
		return () => {
			// Only revoke the URL if it's not the original profile URL
			if (previewImage !== user.profile_url) {
				URL.revokeObjectURL(previewImage);
			}
		};
	}, [previewImage, user.profile_url]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, [e.target.name]: "" });
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, profile_image: "" });
		const file = e.target.files?.[0];
		if (file) {
			setProfileImage(file);
			const imageUrl = URL.createObjectURL(file);
			setPreviewImage(imageUrl);
		}
	};

	async function handleSubmit(prevState: any, formData: FormData) {
		const formValuesData = {
			fname: formData.get("fname") as string,
			lname: formData.get("lname") as string,
			password: (formData.get("password") as string) || undefined,
			confirmPassword:
				(formData.get("confirmPassword") as string) || undefined,
			profile_image: profileImage || null,
		};

		const result = updateProfileSchema.safeParse(formValuesData);

		if (!result.success) {
			const newErrors: any = {};
			result.error.errors.forEach((error) => {
				newErrors[error.path[0]] = error.message;
			});
			setErrors(newErrors);
			return;
		}

		try {
			console.log(result.data);

			const res = await updateProfile(
				{
					fname: result.data.fname,
					lname: result.data.lname,
					password: result.data.password || "",
					confirmPassword: result.data.confirmPassword || "",
					profile_image: result.data.profile_image || null,
				},
				token
			);

			return { success: true, message: "Profile updated successfully" };
		} catch (error: any) {
			console.error(error);
			return {
				success: false,
				message: error.message || "Failed to update profile",
			};
		}
	}

	const [state, formAction, isPending] = useActionState(handleSubmit, null);

	return (
		<form
			action={formAction}
			className="container h-auto grid grid-cols-2 gap-10"
		>
			{state && (
				<div
					className={`col-span-2 p-3 rounded ${
						state.success
							? "bg-green-100 text-green-600"
							: "bg-red-100 text-red-600"
					}`}
				>
					{state.message}
				</div>
			)}
			<div className="col-span-2 -mb-4">
				<div className="flex gap-2">
					<Image
						src={previewImage}
						alt="profile"
						width={100}
						height={100}
						className="border rounded-full size-20 border-black-100 object-cover"
					/>
					<div>
						<p>{user.username}</p>
						<p className="text-sm font-light leading-none">
							@{user.username}
						</p>
						<label
							htmlFor="profile_image"
							className="text-sm underline cursor-pointer"
						>
							Change Profile
						</label>
						{errors.profile_image && (
							<p className="text-sm font-normal text-red-600">
								{errors.profile_image}
							</p>
						)}
					</div>
					<input
						type="file"
						id="profile_image"
						name="profile_image"
						hidden
						accept="image/jpeg,image/png,image/jpg"
						onChange={handleImageChange}
					/>
				</div>
			</div>
			<div className="col-span-1">
				<label
					htmlFor="fname"
					className="text-sm font-medium text-black-100 flexBetween"
				>
					First Name
					{errors.fname && (
						<span className="font-normal text-red-600">
							{errors.fname}
						</span>
					)}
				</label>
				<input
					type="text"
					name="fname"
					id="fname"
					className="w-full px-2 py-2 border border-black-100"
					value={formValues.fname}
					onChange={handleChange}
				/>
			</div>
			<div className="col-span-1">
				<label
					htmlFor="lname"
					className="text-sm font-medium flexBetween text-black-100"
				>
					Last Name
					{errors.lname && (
						<span className="font-normal text-red-600">
							{errors.lname}
						</span>
					)}
				</label>
				<input
					type="text"
					name="lname"
					id="lname"
					value={formValues.lname}
					onChange={handleChange}
					className="w-full px-2 py-2 border border-black-100"
				/>
			</div>
			<div className="col-span-1">
				<label
					htmlFor="password"
					className="text-sm font-medium flexBetween text-black-100"
				>
					Password
					{errors.password && (
						<span className="font-normal text-red-600">
							{errors.password}
						</span>
					)}
				</label>
				<input
					type="password"
					name="password"
					id="password"
					value={formValues.password}
					onChange={handleChange}
					className="w-full px-2 py-2 border border-black-100"
				/>
			</div>
			<div className="col-span-1">
				<label
					htmlFor="confirmPassword"
					className="text-sm font-medium flexBetween text-black-100"
				>
					Confirm Password
					{errors.confirmPassword && (
						<span className="font-normal text-red-600">
							{errors.confirmPassword}
						</span>
					)}
				</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					value={formValues.confirmPassword}
					onChange={handleChange}
					className="w-full px-2 py-2 border border-black-100"
				/>
			</div>
			<div className="col-span-2">
				<input
					name="submit"
					id="submit"
					className="border border-black-100 border-black-100-[#101010] bg-[#101010] text-white w-full py-2.5 transition-colors delay-75 ease-linear cursor-pointer hover:opacity-95"
					type="submit"
					value="Update Profile"
				/>
			</div>
		</form>
	);
};

export default UpdateProfileForm;
