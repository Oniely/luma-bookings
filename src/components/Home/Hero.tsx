import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative h-dvh">
			<Image src="/images/test-bg.jpg" alt="bg" fill />
		</section>
	);
};

export default Hero;
