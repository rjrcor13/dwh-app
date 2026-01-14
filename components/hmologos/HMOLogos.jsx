'use client';
import { hmoLogos } from '@/app/data/hmo';
import Image from 'next/image';
import React from 'react';

const HMOLogos = () => {
	// Duplicate for seamless infinite scroll
	const infiniteLogos = [...hmoLogos, ...hmoLogos];

	return (
		<section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
				{/* <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
					Trusted Healthcare Partners
				</h2> */}
				<div className="flex justify-center items-center gap-2 mb-4">
					<div className="h-px w-10 bg-secondary"></div>
					<span className="text-secondary font-bold tracking-widest uppercase text-sm">Trusted Healthcare Partners</span>
				</div>
				<h2 className="text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6">
					Accredited Insurance Providers
				</h2>
				<p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
					We partner with leading HMOs and insurance providers to ensure your care is accessible, seamless, and covered.
				</p>
			</div>

			{/* Gradient masks for smooth fade edges */}
			<div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
			<div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

			<div className="flex overflow-hidden group">
				<div
					className="flex space-x-24 animate-marquee whitespace-nowrap py-10 group-hover:[animation-play-state:paused]"
					style={{ animation: 'marquee 60s linear infinite' }}
				>
					{infiniteLogos.map((logo, idx) => (
						<div
							key={`${idx}-${logo}`}
							className="relative flex items-center justify-center h-24 w-48 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer"
						>
							<Image
								src={`/assets/hmos/${logo}`}
								alt={`HMO Partner ${idx}`}
								width={180}
								height={100}
								className="object-contain h-full w-full"
							/>
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
            `}</style>
		</section>
	);
};

export default HMOLogos;
