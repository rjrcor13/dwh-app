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
			className="group relative bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 transition-all duration-300 ease-out border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
			onClick={handleViewProfile}
		>
			{/* Hover Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/0 group-hover:to-primary/10 transition-colors duration-500 pointer-events-none" />

			<div className="relative z-10 flex flex-col items-center text-center">
				{/* Minimalist Avatar */}
				<div className="relative mb-5">
					<Avatar className="w-24 h-24 rounded-full border-2 border-white/10 shadow-lg group-hover:border-secondary/50 transition-all duration-300">
						<AvatarImage
							src={doctor.image}
							alt={doctor.name}
							className="object-cover"
						/>
						<AvatarFallback className="bg-white/5 text-blue-200 text-xl font-heading backdrop-blur-md">
							{doctor.name.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					{/* Status Dot */}
					<div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-4 border-[#1a1f3c] rounded-full" />
				</div>

				{/* Name & Specialty */}
				<h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-secondary transition-colors">
					{doctor.name}
				</h3>

				<div className="flex flex-wrap justify-center gap-2 mb-6">
					{Array.isArray(doctor.specialties) ? (
						doctor.specialties.map((spec, i) => (
							<Badge
								key={i}
								variant="secondary"
								className="bg-white/5 text-blue-100 hover:bg-white/10 hover:text-white border-transparent font-medium px-3 py-1 rounded-lg transition-colors backdrop-blur-md"
							>
								{spec}
							</Badge>
						))
					) : (
						<Badge variant="secondary" className="bg-white/5 text-blue-100 hover:bg-white/10 hover:text-white border-transparent px-3 py-1 rounded-lg transition-colors backdrop-blur-md">
							{doctor.specialties}
						</Badge>
					)}
				</div>

				{/* Minimal Info List */}
				<div className="w-full space-y-3 mb-6">
					<div className="flex items-center justify-center gap-2 text-sm text-blue-200/70 group-hover:text-blue-100 transition-colors">
						<ClockIcon className="w-4 h-4 text-secondary/70 group-hover:text-secondary" />
						<span>{doctor.clinicHours}</span>
					</div>
					<div className="flex items-center justify-center gap-2 text-sm text-blue-200/70 group-hover:text-blue-100 transition-colors">
						<CalendarIcon className="w-4 h-4 text-secondary/70 group-hover:text-secondary" />
						<span>{doctor.clinicDays.join(', ')}</span>
					</div>
				</div>

				{/* Minimalist Link Action */}
				<div
					className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-white transition-colors cursor-pointer group/link"
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
