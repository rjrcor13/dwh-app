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
					'bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start',
					'transition-all duration-300',
					'hover:shadow-xl hover:scale-[1.02]',
					'border border-gray-100 hover:border-indigo-500/30',
					'group h-full cursor-pointer'
				)}
			>
				<div
					className={cn(
						'w-20 h-20 rounded-full flex items-center justify-center mb-4',
						'transition-colors duration-300',
						'group-hover:bg-indigo-500/20 bg-indigo-50',
						'text-primary'
					)}
					// className={cn(
					// 	'w-16 h-16 rounded-full flex items-center justify-center mb-4',
					// 	'transition-colors duration-300',

					// 	'text-indigo-500'
					// )}
				>
					{/* <ServiceIcon className="w-8 h-8" /> */}
					{/* <DynamicHealthIcon
						name={service.icon}
						size={64}
						className="text-primary mx-auto mb-4"
					/> */}
					<DynamicIcons
						name={service.icon}
						width={32}
						height={32}
						className="w-16 h-16"
					/>
				</div>
				<h4
					className={cn(
						'text-lg font-semibold mb-2',
						'transition-colors duration-300',
						'text-gray-800 group-hover:text-primary text-center'
					)}
				>
					{service.title}
				</h4>
				<p className="text-sm text-gray-600 text-center">
					{service.description}
				</p>
			</motion.div>
		</Link>
	);
};

export default ServiceCard;
