"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PaymentMethod = () => {
	const paymentMethods = [
		{ id: "card", name: "Credit or debit card" },
		{ id: "gcash", name: "GCash" },
		{ id: "cash", name: "Cash" },
	];

	const [selected, setSelected] = useState(paymentMethods[0]);
	const [open, setOpen] = useState(false);

	return (
		<div className="container py-2 bg-transparent text-black w-1/2 align-items-center justify-content-center">
			<div className="relative w-100">
				<button
					onClick={() => setOpen(!open)}
					className="w-full flex justify-between items-center px-4 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
				>
					<span className="flex items-center gap-2">
						{selected.name}
					</span>
					<ChevronDown size={18} />
				</button>
				{open && (
					<ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
						{paymentMethods.map((method) => (
							<li
								key={method.id}
								className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer ${
									selected.id === method.id
										? "bg-gray-200"
										: ""
								}`}
								onClick={() => {
									setSelected(method);
									setOpen(false);
								}}
							>
								{method.name}
							</li>
						))}
					</ul>
				)}
				{selected.id === "card" && (
					<div className="mt-4 border p-4 rounded-lg shadow-sm bg-white">
						<label className="block text-sm font-medium text-gray-700">
							Card number
						</label>
						<input
							type="text"
							className="w-full border p-2 rounded-lg mt-1"
							placeholder="•••• •••• •••• ••••"
						/>

						<label className="block text-sm font-medium text-gray-700 mt-2">
							Card Owner
						</label>
						<input
							type="text"
							className="w-full border p-2 rounded-lg mt-1"
							placeholder="Card Owner"
						/>

						<div className="flex gap-2 mt-2">
							<div className="w-1/2">
								<label className="block text-sm font-medium text-gray-700">
									Expiration
								</label>
								<input
									type="text"
									className="w-full border p-2 rounded-lg mt-1"
									placeholder="MM/YY"
								/>
							</div>

							<div className="w-1/2">
								<label className="block text-sm font-medium text-gray-700">
									CVV
								</label>
								<input
									type="text"
									className="w-full border p-2 rounded-lg mt-1"
									placeholder="•••"
								/>
							</div>
						</div>

						<label className="block text-sm font-medium text-gray-700 mt-2">
							ZIP code
						</label>
						<input
							type="text"
							className="w-full border p-2 rounded-lg mt-1"
							placeholder="ZIP code"
						/>

						<label className="block text-sm font-medium text-gray-700 mt-2">
							Country/region
						</label>
						<select className="w-full border p-2 rounded-lg mt-1">
							<option>Philippines</option>
							<option>United States</option>
							<option>Canada</option>
						</select>
					</div>
				)}

				{selected.id === "gcash" && (
					<div className="mt-4 border p-4 rounded-lg shadow-sm bg-white">
						<label className="block text-sm font-medium text-gray-700">
							Phone Number
						</label>
						<input
							type="text"
							className="w-full border p-2 rounded-lg mt-1"
							placeholder="Enter your GCash number"
						/>
					</div>
				)}

				{selected.id === "cash" && (
					<div className="mt-4 border p-4 rounded-lg shadow-sm bg-white">
						<label className="block text-sm font-medium text-gray-700">
							Enter Amount of Cash
						</label>
						<input
							type="text"
							className="w-full border p-2 rounded-lg mt-1"
							placeholder="Enter your Cash"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default PaymentMethod;
