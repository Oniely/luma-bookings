import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative flex items-end w-full py-10 h-dvh padding-container">
			<Image
				src="/images/test-bg.jpg"
				alt="bg"
				className="z-0 object-cover"
				fill
				priority
			/>

			<div className="relative z-50">
				<p className="max-w-xl mt-2 text-5xl font-canela-light text-white">
					Dedicated to providing the best experience tailored to your
					needs.
				</p>
			</div>
		</section>
	);
};

export default Hero;
