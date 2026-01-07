// import { hmoLogos } from '@/app/data/hmo';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import React from 'react';

// const HMOLogos = () => {
// 	return (
// 		<div>
// 			{' '}
// 			{hmoLogos.map((logo, idx) => (
// 				<motion.div
// 					key={idx}
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					whileInView={{ opacity: 1, scale: 1 }}
// 					whileHover={{
// 						scale: 1.05,
// 						boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
// 					}}
// 					whileTap={{ scale: 0.97 }}
// 					transition={{ duration: 0.3, delay: idx * 0.05 }}
// 					viewport={{ once: true }}
// 					className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-center"
// 				>
// 					<Image
// 						src={`/assets/hmos/${logo}`}
// 						alt={`HMO ${idx + 1}`}
// 						width={120}
// 						height={80}
// 						className="object-contain max-h-[60px]"
// 					/>
// 				</motion.div>
// 			))}
// 		</div>
// 	);
// };

// export default HMOLogos;
import { hmoLogos } from '@/app/data/hmo';
import Image from 'next/image';
import React from 'react';

// Create a custom Tailwind animation in your CSS (e.g., global.css or equivalent)
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(100%); }
// }
//
// .animate-marquee {
//   animation: marquee 20s linear infinite; /* Adjust duration as needed */
// }

const HMOLogos = () => {
	const infiniteLogos = [...hmoLogos, ...hmoLogos];

	return (
		<section className="py-16 bg-white border-y border-slate-100 overflow-hidden relative">
			<div className="max-w-7xl mx-auto px-4 mb-10 text-center">
				<h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm">Trusted Healthcare Partners</h3>
			</div>

			{/* Gradient masks for smooth fade edges */}
			<div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
			<div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

			<div className="flex overflow-hidden group">
				<div
					className="flex space-x-16 animate-marquee whitespace-nowrap py-4 group-hover:[animation-play-state:paused]"
					style={{ animation: 'marquee 40s linear infinite' }}
				>
					{infiniteLogos.map((logo, idx) => (
						<div
							key={`${idx}-${logo}`}
							className="flex items-center justify-center h-20 w-48 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer"
						>
							<Image
								src={`/assets/hmos/${logo}`}
								alt={`HMO Partner ${idx}`}
								width={150}
								height={80}
								className="object-contain h-full w-full"
							/>
						</div>
					))}
				</div>
				{/* Duplicate for seamless loop (just in case the first one isn't enough, but usually the 'infiniteLogos' handles content, and the CSS handles the movement. 
                    Actually, the standard marquee technique needs TWO sets of children animating. 
                    Let's stick to the single div with 'infiniteLogos' which already doubles the data, and just animate that div.
                */}
			</div>

			<style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
		</section>
	);
};

export default HMOLogos;
