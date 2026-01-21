'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils'; // Import cn

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

const DoctorCard = ({ doctor, variant = 'default' }) => {
	const router = useRouter();

	const handleViewProfile = () => {
		router.push(`/doctors/${doctor.slug}`);
	};

	const isGlass = variant === 'glass';

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -6 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className={cn(
				"group relative rounded-[2rem] p-6 sm:p-8 cursor-pointer overflow-hidden border transition-all duration-300",
				// Default Variant
				!isGlass && "bg-white border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(31,27,153,0.1)] hover:border-blue-100",
				// Glass Variant
				isGlass && "bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
			)}
			onClick={handleViewProfile}
		>
			{/* Hover Gradient Overlay */}
			<div className={cn(
				"absolute inset-0 bg-gradient-to-br transition-colors duration-500 pointer-events-none",
				!isGlass && "from-transparent via-transparent to-blue-50/0 group-hover:to-blue-50/60",
				isGlass && "from-transparent to-white/0 group-hover:to-white/5"
			)} />

			<div className="relative z-10 flex flex-col items-center text-center h-full">
				{/* Minimalist Avatar */}
				<div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
					<Avatar className={cn(
						"w-28 h-28 rounded-2xl shadow-xl transition-all duration-300",
						!isGlass && "border-4 border-white shadow-slate-200",
						isGlass && "border-white/10"
					)}>
						<AvatarImage
							src={doctor.image}
							alt={doctor.name}
							className="object-cover"
						/>
						<AvatarFallback className="bg-blue-50 text-blue-600 text-3xl font-heading rounded-2xl">
							{doctor.name.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					{/* Status Dot */}
					<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-[3px] border-white rounded-full shadow-sm" />
				</div>

				{/* Name & Specialty */}
				<h3 className={cn(
					"text-xl sm:text-2xl font-bold font-heading mb-1 transition-colors leading-tight",
					!isGlass && "text-slate-900 group-hover:text-primary",
					isGlass && "text-white"
				)}>
					{doctor.name}
				</h3>
				<p className={cn("text-sm font-medium mb-5 uppercase tracking-wide", !isGlass ? "text-slate-500" : "text-blue-200")}>
					{Array.isArray(doctor.specialties) ? doctor.specialties.join(', ') : doctor.specialties}
				</p>

				{/* Info Tags */}
				<div className="flex flex-wrap justify-center gap-2 mb-8 w-full">
					{/* Clinic Hours */}
					<div className={cn(
						"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold",
						!isGlass ? "bg-slate-50 text-slate-600" : "bg-white/10 text-white"
					)}>
						<ClockIcon className="w-3.5 h-3.5" />
						{doctor.clinicHours}
					</div>
					{/* Clinic Days */}
					<div className={cn(
						"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold",
						!isGlass ? "bg-slate-50 text-slate-600" : "bg-white/10 text-white"
					)}>
						<CalendarIcon className="w-3.5 h-3.5" />
						{doctor.clinicDays.join(', ')}
					</div>
				</div>

				{/* Spacer to push button to bottom if needed flex-grow */}
				<div className="flex-grow" />

				{/* Button Action */}
				<button
					className={cn(
						"w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 group/btn",
						!isGlass && "bg-white border-2 border-slate-100 text-slate-600 hover:border-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
						isGlass && "bg-white/10 border-white/10 text-white hover:bg-white hover:text-primary"
					)}
					onClick={(e) => {
						e.stopPropagation();
						handleViewProfile();
					}}
				>
					View Profile
					<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
				</button>
			</div>
		</motion.div>
	);
};

export default DoctorCard;
