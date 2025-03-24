import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Footer = () => {
	return (
		<footer className="py-20 flexCenter bg-black-100">
			<div className="flex flex-col w-full padding-container max-container gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<Link href={"/"} className="mb-10">
						<Image
							src="/images/logo-light.png"
							alt="logo"
							width={1000}
							height={1000}
							className="object-cover w-full h-[15rem]"
						/>
					</Link>

					<div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
						{FOOTER_LINKS.map((columns) => (
							<FooterColumn
								title={columns.title}
								key={columns.title}
							>
								<ul className="flex flex-col gap-4 regular-14 text-secondary">
									{columns.links.map((link) => (
										<Link
											href={link.url}
											key={link.label}
											className="hover:underline hover:text-secondary-100"
										>
											{link.label}
										</Link>
									))}
								</ul>
							</FooterColumn>
						))}

						<div className="flex flex-col gap-5">
							<FooterColumn title={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map((link) => (
									<Link
										href={link.url}
										key={link.label}
										className="flex flex-row gap-4 md:flex-col lg: text-secondary"
									>
										<p className="whitespace-nowrap">
											{link.label}:{" "}
										</p>
										<p className="text-blue-500 underline medium-14 whitespace-nowrap">
											{link.value}
										</p>
									</Link>
								))}
							</FooterColumn>
						</div>

						<div className="flex flex-col gap-5">
							<FooterColumn title={SOCIALS.title}>
								<ul className="flex gap-4 text-gray-500 regular-14">
									{SOCIALS.links.map((link, i) => (
										<Link href={link.url} key={i}>
											<link.icon className="text-secondary hover:text-secondary-100" />
										</Link>
									))}
								</ul>
							</FooterColumn>
						</div>
					</div>
				</div>

				<div className="border bg-secondary h-[1px]" />

				<p className="w-full text-center regular-14 text-secondary-100">
					&copy; 2025 Luma | All rights reserved
				</p>
			</div>
		</footer>
	);
};

type FooterColumnProps = {
	title: string;
	children: ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="text-white bold-18 whitespace-nowrap">{title}</h4>
			{children}
		</div>
	);
};

export default Footer;
