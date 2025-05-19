// import aboutus from '@/public/assets/about-us.webp';
// import { SquareArrowOutUpRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '../ui/button';

// const AboutUs = ({ className }) => {
// 	return (
// 		<div className={`${className}  grid grid-cols-4 gap-4'`}>
// 			<div className="col-span-2">
// 				<Image
// 					src={aboutus}
// 					alt="About Us"
// 					width="100%"
// 					height={500}
// 					className="w-full object-cover"
// 				/>
// 			</div>
// 			<div className="p-8 flex flex-col justify-center items-start space-y-8  col-span-2 ">
// 				<p className="text-md italic text-primary  font-semibold mb-10">
// 					Who we are?
// 				</p>
// 				<div>
// 					<h1 className="text-3xl font-bold text-gray-800">
// 						A Place of Welcome Committed to Quality Health Care
// 					</h1>
// 					<p className="text-muted-foreground  mt-4">
// 						Divine Word Hospital is a Catholic tertiary hospital in Tacloban
// 						City, committed to quality healthcare and holistic wellness. Since
// 						1965, we have provided state-of-the-art medical services, trained
// 						future healthcare professionals, and upheld Christian values in
// 						patient care.
// 					</p>
// 				</div>

// 				<Button
// 					href="/about"
// 					// className="text-primary hover:underline flex flex-row gap-2"
// 				>
// 					Read more
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default AboutUs;
'use client';
import { cn } from '@/lib/utils'; // Utility for combining class names
import aboutusImage from '@/public/assets/about-us.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const AboutUs = ({ className }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className={cn(
				className,
				'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 items-center ' // Responsive grid layout
			)}
		>
			<div className="col-span-1 md:col-span-2">
				<Image
					src={aboutusImage} // Use relative path for Next.js
					alt="About Us"
					width={500} // Keep original aspect ratio, set a max width
					height={500}
					className="w-full h-auto object-cover  " // Responsive image, rounded corners
				/>
			</div>
			<div className="col-span-1 md:col-span-2 p-4 md:p-6 lg:p-8 flex flex-col justify-center items-start space-y-4 md:space-y-12">
				<p className="text-sm italic_ text-indigo-500 font-semibold ">
					Who we are?
				</p>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800">
						A Place of Welcome Committed to Quality Health Care
					</h2>
					<p className="text-gray-600 mt-2 md:mt-4">
						Divine Word Hospital is a Catholic tertiary hospital in Tacloban
						City, committed to quality healthcare and holistic wellness. Since
						1965, we have provided state-of-the-art medical services, trained
						future healthcare professionals, and upheld Christian values in
						patient care.
					</p>
				</div>
				<Button
					asChild // Use asChild to wrap the Link
					// variant="link"

					className="text-white" // Consistent styling
					// className="p-0 text-primary hover:underline flex items-center gap-2" // Consistent styling
				>
					<a href="/about-us" aria-label="Read more about us">
						Read More <span aria-hidden="true">&rarr;</span>
					</a>
				</Button>
			</div>
		</motion.div>
	);
};

export default AboutUs;
