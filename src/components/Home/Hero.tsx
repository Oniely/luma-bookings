import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative w-full h-dvh flex items-end padding-container py-6">
			<Image
				src="/images/test-bg.jpg"
				alt="bg"
				className="z-0 object-cover"
				fill
				priority
			/>

			<div className="relative z-50">
				<p className="text-3xl mt-2 max-w-lg text-black">
					Dedicated to providing the best experience tailored to your
					needs.
				</p>
			</div>
		</section>
	);
};

export default Hero;
