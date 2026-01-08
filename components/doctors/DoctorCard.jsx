'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
	MarsIcon,
	Stethoscope,
	VenusIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const DoctorCard = ({ doctor }) => {
	const router = useRouter();

	const handleViewProfile = () => {
		router.push(`/doctors/${doctor.id}`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -4 }}
			transition={{ duration: 0.3 }}
			className="group relative bg-white rounded-[2rem] p-8 transition-all duration-300 ease-out border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 cursor-pointer overflow-hidden"
			onClick={handleViewProfile}
		>
			{/* Hover Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/0 group-hover:to-primary/5 transition-colors duration-500 pointer-events-none" />

			<div className="relative z-10 flex flex-col items-center text-center">
				{/* Minimalist Avatar */}
				<div className="relative mb-5">
					<Avatar className="w-24 h-24 rounded-full border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-300">
						<AvatarImage
							src={doctor.image}
							alt={doctor.name}
							className="object-cover"
						/>
						<AvatarFallback className="bg-slate-50 text-slate-400 text-xl font-heading">
							{doctor.name.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					{/* Status Dot */}
					<div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
				</div>

				{/* Name & Specialty */}
				<h3 className="text-xl font-bold font-heading text-primary mb-2">
					{doctor.name}
				</h3>

				<div className="flex flex-wrap justify-center gap-2 mb-6">
					{Array.isArray(doctor.specialties) ? (
						doctor.specialties.map((spec, i) => (
							<Badge
								key={i}
								variant="secondary"
								className="bg-primary/5 text-primary hover:bg-primary/10 border-transparent font-medium px-3 py-1 rounded-lg transition-colors"
							>
								{spec}
							</Badge>
						))
					) : (
						<Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-transparent px-3 py-1 rounded-lg transition-colors">
							{doctor.specialties}
						</Badge>
					)}
				</div>

				{/* Minimal Info List */}
				<div className="w-full space-y-3 mb-6">
					<div className="flex items-center justify-center gap-2 text-sm text-slate-500">
						<ClockIcon className="w-4 h-4 text-secondary" />
						<span>{doctor.clinicHours}</span>
					</div>
					<div className="flex items-center justify-center gap-2 text-sm text-slate-500">
						<CalendarIcon className="w-4 h-4 text-secondary" />
						<span>{doctor.clinicDays.join(', ')}</span>
					</div>
				</div>

				{/* Full Width Action */}
				{/* Minimalist Link Action */}
				<div
					className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer group/link"
					onClick={(e) => {
						e.stopPropagation();
						handleViewProfile();
					}}
				>
					View Profile
					<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
				</div>
			</div>
		</motion.div>
	);
};

export default DoctorCard;
