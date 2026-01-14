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
			className="group relative bg-white rounded-[2rem] p-8 transition-all duration-300 ease-out border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 cursor-pointer overflow-hidden"
			onClick={handleViewProfile}
		>
			{/* Hover Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/0 group-hover:to-blue-50/30 transition-colors duration-500 pointer-events-none" />

			<div className="relative z-10 flex flex-col items-center text-center">
				{/* Minimalist Avatar */}
				<div className="relative mb-5">
					<Avatar className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-lg group-hover:border-blue-100 transition-all duration-300">
						<AvatarImage
							src={doctor.image}
							alt={doctor.name}
							className="object-cover"
						/>
						<AvatarFallback className="bg-blue-50 text-blue-600 text-xl font-heading">
							{doctor.name.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					{/* Status Dot */}
					<div className="absolute bottom-1 right-2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full" />
				</div>

				{/* Name & Specialty */}
				<h3 className="text-xl font-bold font-heading text-slate-900 mb-2 group-hover:text-primary transition-colors">
					{doctor.name}
				</h3>

				<div className="flex flex-wrap justify-center gap-2 mb-6">
					{Array.isArray(doctor.specialties) ? (
						doctor.specialties.map((spec, i) => (
							<Badge
								key={i}
								variant="secondary"
								className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-transparent font-medium px-3 py-1 rounded-lg transition-colors"
							>
								{spec}
							</Badge>
						))
					) : (
						<Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-transparent px-3 py-1 rounded-lg transition-colors">
							{doctor.specialties}
						</Badge>
					)}
				</div>

				{/* Minimal Info List */}
				<div className="w-full space-y-3 mb-6">
					<div className="flex items-center justify-center gap-2 text-sm text-slate-500">
						<ClockIcon className="w-4 h-4 text-slate-400" />
						<span>{doctor.clinicHours}</span>
					</div>
					<div className="flex items-center justify-center gap-2 text-sm text-slate-500">
						<CalendarIcon className="w-4 h-4 text-slate-400" />
						<span>{doctor.clinicDays.join(', ')}</span>
					</div>
				</div>

				{/* Minimalist Link Action */}
				<div
					className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-blue-700 transition-colors cursor-pointer group/link"
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
