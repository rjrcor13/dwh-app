'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';

const serviceVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.4,
			ease: 'easeInOut',
		},
	}),
	exit: { opacity: 0, y: -20 },
};

const ServiceCard = ({ service, index }) => {
	const ServiceIcon = service.icon;
	return (
		<Link href={`/expertise/services/${service.slug}`} passHref>
			<motion.div
				variants={serviceVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				custom={index}
				className={cn(
					'bg-white rounded-[2rem] p-8 flex flex-col items-center justify-start h-full',
					'transition-all duration-300 ease-out',
					'hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/5',
					'border border-slate-100 hover:border-primary/20',
					'group cursor-pointer relative overflow-hidden'
				)}
			>
				{/* Hover Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/0 group-hover:to-primary/5 transition-colors duration-500" />

				<div
					className={cn(
						'w-20 h-20 rounded-2xl flex items-center justify-center mb-6',
						'transition-transform duration-500 ease-out group-hover:scale-110',
						'bg-primary/5 text-primary',
						'relative z-10'
					)}
				>
					<DynamicIcons
						name={service.icon}
						width={40}
						height={40}
						className="w-10 h-10"
					/>
				</div>

				<div className="relative z-10 flex flex-col items-center">
					<h4
						className={cn(
							'text-xl font-bold font-heading mb-3',
							'text-slate-900 group-hover:text-primary transition-colors duration-300',
							'text-center tracking-tight'
						)}
					>
						{service.title}
					</h4>
					<p className="text-slate-500 text-center leading-relaxed font-base">
						{service.description}
					</p>
				</div>
			</motion.div>
		</Link>
	);
};

export default ServiceCard;
