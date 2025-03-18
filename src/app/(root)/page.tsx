import Hero from "@/components/Home/Hero";
import CategoryCarousel from "@/components/Search/Category";
import { Button } from "@/components/ui/button";
import { ArrowRight, PersonStanding } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Hero />
			<section className="w-full h-40">
				<CategoryCarousel />
			</section>
			<section className="py-6 h-dvh max-container padding-container grid grid-cols-2 gap-4">
				<article className="grid grid-cols-2 mx-auto overflow-hidden bg-white shadow-md rounded-xl h-95 max-w-2xl">
					<div className="relative">
						<Image src="/images/test-bg.jpg" alt="bg" fill />
					</div>
					<div className="p-5 flexBetween flex-col !items-start">
						<div className="flexBetween !items-end w-full">
							<div className="text-primary">
								<h2 className="text-lg font-canela-light">
									Laghetto Hotels
								</h2>
								<h1 className="text-xl">Gramado</h1>
							</div>
							<div className="relative w-25 h-10">
								<Image
									src="/images/logo-dark.png"
									alt="logo"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<p className="text-primary text-[15px]">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Vero at amet soluta temporibus inventore
							mollitia quidem accusamus ab explicabo
							necessitatibus! Voluptas minus esse distinctio
							soluta neque recusandae architecto enim autem?
						</p>
						<div className="text-primary">
							<div />
							<Button className="w-full p-6 flexBetween">
								<span className="font-semibold">
									Check the room out
								</span>
								<ArrowRight />
							</Button>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
