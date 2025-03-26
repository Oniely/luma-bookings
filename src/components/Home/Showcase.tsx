import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const Showcase = () => {
	return (
		<section className="relative pt-10 pb-30 padding-container max-container min-h-dvh">
			<h1 className="text-[clamp(2rem,5vw,6rem)] font-medium font-canela leading-none">
				More Than a Stay—A Story to Remember. Our hotel isn't just a
				destination; it's where memories unfold, experiences linger, and
				every moment feels like an anniversary worth celebrating.
			</h1>
			<div className="flexBetween flex-col min-[900px]:flex-row gap-10 mt-20 md:px-[10vw]">
				<Image
					src={"/images/showcase1.jpg"}
					alt="showcase"
					width={400}
					height={400}
					className="object-cover"
				/>
				<p className="max-w-md text-justify">
					Britani tried to surreptitiously record a fight in
					thesprinter van. Meredith became convinced that arecording
					device was hidden in her room. Whitneyrevealed that she had
					reached out to Monica to getdirt on Lisa.
				</p>
			</div>
			<div className="flexBetween flex-col-reverse min-[900px]:flex-row gap-10 mt-30 md:px-[6vw]">
				<div className="space-y-4">
					<p className="max-w-md text-sm">
						Heather graced us with another killer monologue,
						thistime while the women enjoyed dinner at luxury
						themepark BON, urging everyone to stop trying to
						“catch”their castmates in a lie, and instead form a
						protectivesisterhood circle that no gossip blogger
						couldpenetrate by, um, encouraging each person to sharea
						screenshot of the most hurtful thing they had eversaid
						about someone else at the table. And that is howthe
						season ended with security needing to separateLisa and
						Angie after they started throwing flowers ateach other.
					</p>
					<div>
						<button className="bg-black-100 text-white py-2 px-4 rounded-full flexCenter gap-2 cursor-pointer hover:bg-black">
							<MoveUpRight className="size-4" />
							<span className="text-sm uppercase font-medium">
								Book Now
							</span>
						</button>
					</div>
				</div>
				<Image
					src={"/images/showcase2.jpg"}
					alt="showcase"
					width={500}
					height={500}
					className="w-[500px] h-[300px] object-cover"
				/>
			</div>
			<div className="size-[70rem] bg-secondary absolute top-1/2 -right-40 transform -translate-y-1/2 -z-10 rounded-full blur-[180px]" />
		</section>
	);
};

export default Showcase;
