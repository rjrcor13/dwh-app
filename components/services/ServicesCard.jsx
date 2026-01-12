'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import { ArrowRight } from 'lucide-react';

const serviceVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'circOut',
		},
	},
};

const ServiceCard = ({ service, index }) => {
	return (
		<Link href={`/expertise/services/${service.slug}`} passHref className="h-full block">
			<motion.div
				variants={serviceVariants}
				className={cn(
					'bg-white/5 backdrop-blur-md rounded-[2rem] p-8 flex flex-col items-start h-full',
					'border border-white/5 hover:bg-white/10 hover:border-white/20',
					'transition-all duration-300 group cursor-pointer relative overflow-hidden',
					'hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1'
				)}
			>
				{/* Icon */}
				<div
					className={cn(
						'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
						'bg-white/5 text-secondary border border-white/10',
						'group-hover:scale-110 group-hover:bg-secondary group-hover:text-white',
						'transition-all duration-300'
					)}
				>
					<DynamicIcons
						name={service.icon}
						width={28}
						height={28}
						className="w-7 h-7"
					/>
				</div>

				{/* Content */}
				<div className="flex-grow">
					<h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-secondary transition-colors">
						{service.title}
					</h4>
					<p className="text-blue-100/70 text-sm leading-relaxed mb-6 font-light line-clamp-3">
						{service.description}
					</p>
				</div>

				{/* Action Indicator */}
				<div className="flex items-center text-sm font-bold text-secondary gap-2 mt-auto group-hover:translate-x-1 transition-transform">
					Explore <ArrowRight className="w-4 h-4" />
				</div>
			</motion.div>
		</Link>
	);
};

export default ServiceCard;
