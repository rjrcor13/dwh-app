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
					'bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-start',
					'transition-all duration-300',
					'hover:shadow-xl hover:-translate-y-1',
					'border border-slate-100 hover:border-primary/20',
					'group h-full cursor-pointer'
				)}
			>
				<div
					className={cn(
						'w-20 h-20 rounded-2xl flex items-center justify-center mb-6',
						'transition-all duration-300',
						'bg-slate-50 group-hover:bg-primary',
						'text-primary group-hover:text-white'
					)}
				>
					{/* <ServiceIcon className="w-8 h-8" /> */}
					{/* <DynamicHealthIcon
						name={service.icon}
						size={64}
						className="text-primary mx-auto mb-4"
					/> */}
					<DynamicIcons
						name={service.icon}
						width={36}
						height={36}
						className="w-9 h-9"
					/>
				</div>
				<h4
					className={cn(
						'text-lg font-bold font-heading mb-3',
						'transition-colors duration-300',
						'text-slate-800 group-hover:text-primary text-center'
					)}
				>
					{service.title}
				</h4>
				<p className="text-sm text-slate-500 text-center leading-relaxed">
					{service.description}
				</p>
			</motion.div>
		</Link>
	);
};

export default ServiceCard;
