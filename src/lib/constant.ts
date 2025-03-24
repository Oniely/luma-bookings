import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const NAV_LINKS = [
	{ href: "/", key: "home", label: "Home" },
	{ href: "/", key: "community", label: "Community?" },
	{ href: "/", key: "services", label: "Services" },
	{ href: "/", key: "pricing", label: "Pricing" },
	{ href: "/", key: "contact_us", label: "Contact Us" },
];

export const FOOTER_LINKS = [
	{
		title: "Learn More",
		links: [
			{ label: "About Luma", url: "#" },
			{ label: "Press Releases", url: "#" },
			{ label: "Environment", url: "#" },
			{ label: "Jobs", url: "#" },
			{ label: "Privacy Policy", url: "#" },
			{ label: "Contact Us", url: "#" },
		],
	},
	{
		title: "Our Community",
		links: [
			{ label: "Luma Community", url: "#" },
			{ label: "Luma-Laban", url: "#" },
			{ label: "Lumanians", url: "#" },
		],
	},
];

export const FOOTER_CONTACT_INFO = {
	title: "Contact Us",
	links: [
		{
			label: "Admin Officer",
			value: "123-456-7890",
			url: "tel:123-456-7890",
		},
		{
			label: "Email Officer",
			value: "luma-bookings@outlook.com",
			url: "mailto:luma-bookings@outlook.com",
		},
	],
};

export const SOCIALS = {
	title: "Social",
	links: [
		{ icon: Facebook, url: "https://facebook.com" },
		{ icon: Instagram, url: "https://instagram.com" },
		{ icon: Twitter, url: "https://twitter.com" },
		{ icon: Youtube, url: "https://youtube.com" },
		{ icon: Linkedin, url: "https://linkedin.com" },
	],
};
