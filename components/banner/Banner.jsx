// import dwh from '@/public/assets/dwh.jpg';
// import Image from 'next/image';
// import React from 'react';
// import { Button } from '../ui/button';

// const Banner = () => {
// 	return (
// 		<div className="relative w-full h-[500px] p-6">
// 			<Image
// 				src={dwh}
// 				alt="banner"
// 				className="w-full h-full object-cover"
// 				fill
// 				priority
// 			/>
// 			<div className="absolute inset-0 bg-primary/30 bg-opacity-50 z-10" />
// 			{/* Optional: Add content inside the overlay */}
// 			<div className="absolute inset-0 z-20 flex items-center justify-center text-white">
// 				<div className=" w-7xl container_  mx-auto  p-4 bg-amber-200_">
// 					<div className="space-y-12">
// 						<h1 className="text-5xl font-semibold text-shadow-lg">
// 							Providing Compassionate Care <br />
// 							and Healing for All
// 						</h1>
// 						<Button className="px-6 py-4 bg-secondary text-lg  rounded-sm cursor-pointer text-white font-semibold hover:bg-secondary/80 transition duration-300 ease-in-out shadow-lg">
// 							Learn more
// 						</Button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Banner;
import dwh from '@/public/assets/dwh.jpg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Banner = () => {
	return (
		<div className="relative w-full h-[500px] p-6">
			<Image
				src={dwh}
				alt="banner"
				className="w-full h-full object-cover"
				fill
				priority
			/>
			<div className="absolute inset-0 bg-primary/30 bg-opacity-50 z-10" />
			{/* Optional: Add content inside the overlay */}
			<div className="absolute inset-0 z-20 flex items-center justify-center text-white">
				<div className="container_ w-7xl mx-auto p-4">
					<div className="space-y-6 lg:text-left text-center">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-shadow-lg leading-tight lg:max-w-170 w-full">
							Providing Compassionate Care and Healing for All
						</h1>
						<div className="space-x-4">
							{/* <Link
								href="/about-us"
								className="px-6 py-3 sm:py-4 bg-secondary text-lg rounded-sm cursor-pointer text-white font-semibold hover:bg-secondary/80 transition duration-300 ease-in-out shadow-lg"
							>
								Learn more
							</Link> */}
							<Link
								href="/about-us"
								className="bg-secondary border border-secondary py-2 px-4 rounded-md hover:bg-secondary/80 font-semibold shadow transition duration-300 ease-in-out"
							>
								Learn more
							</Link>
							<Link
								href="/doctors"
								className="lg:hidden inline-block bg-transparent py-2 px-4 border rounded-md hover:bg-white/80 semi hover:text-gray-800 font-semibold shadow transition duration-300 ease-in-out"
							>
								Find a Doctor
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
