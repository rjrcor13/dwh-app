import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import AboutUs from '@/components/home/AboutUs';
import ConnectWithUsSection from '@/components/home/ConnectWithUs';
import EventsSection from '@/components/home/Events';
import FAQSection from '@/components/home/FAQ';
import OurServicesSection from '@/components/home/Services';
import Stats from '@/components/stats/Stats';
import Image from 'next/image';
import React from 'react';
const classNames = 'my-24';
export const Blob = () => {
	return (
		<svg
			className="absolute -top-20 right-0 w-[600px] h-[600px] -z-10 opacity-20"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 327.53 303.49"
		>
			<defs>
				<style>{`.cls-1{fill:#4553a4;}`}</style>
			</defs>
			<path
				className="cls-1"
				d="M285.35,0c0,1.74-15.84,75,87.07,106.4s113.48,57,118.64,102.81c7.85,69.58,72.64,94.28,72.64,94.28H612V0H285.35Z"
				transform="translate(-284.47)"
			/>
		</svg>
	);
};
const HomePage = () => {
	return (
		<div>
			<div>
				<Banner />
			</div>

			<main>
				<Stats />
				{/* <AboutUs className="max-w-7xl mx-auto my-12 lg:mt-10 mt-0 " /> */}
				<div className=" bg-[url(/assets/about-us.webp)_  bg-cover bg-center bg-no-repeat relative">
					{/* <Blob /> */}
					{/* <Image
						src="/assets/about-us.webp" // Use relative path for Next.js
						alt="About Us"
						width={500} // Keep original aspect ratio, set a max width
						height={500}
						className="object-cover  absolute -top-20 right-0 w-full h-auto -z-10 opacity-20" // Responsive image, rounded corners
					/> */}
					<AboutUs className="relative z-10 max-w-7xl mx-auto my-12 lg:mt-12 mt-0 min-h-[500px] " />
				</div>
				<OurServicesSection />

				<EventsSection />

				<ConnectWithUsSection />
				<FAQSection />
			</main>
		</div>
	);
};

export default HomePage;
