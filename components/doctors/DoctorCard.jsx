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
		router.push(`/doctors/${doctor.id}`);
	};

	const isGlass = variant === 'glass';

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -4 }}
			transition={{ duration: 0.3 }}
			className={cn(
				"group relative rounded-[2rem] p-8 transition-all duration-300 ease-out cursor-pointer overflow-hidden border",
				// Default Variant
				!isGlass && "bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-blue-900/5",
				// Glass Variant
				isGlass && "bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
			)}
			onClick={handleViewProfile}
		>
			{/* Hover Gradient Overlay */}
			<div className={cn(
				"absolute inset-0 bg-gradient-to-br transition-colors duration-500 pointer-events-none",
				!isGlass && "from-transparent to-blue-50/0 group-hover:to-blue-50/30",
				isGlass && "from-transparent to-white/0 group-hover:to-white/5"
			)} />

			<div className="relative z-10 flex flex-col items-center text-center">
				{/* Minimalist Avatar */}
				<div className="relative mb-5">
					<Avatar className={cn(
						"w-24 h-24 rounded-full border-4 shadow-lg transition-all duration-300",
						!isGlass && "border-slate-50 group-hover:border-blue-100",
						isGlass && "border-white/10 group-hover:border-white/30"
					)}>
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
				<h3 className={cn(
					"text-xl font-bold font-heading mb-2 transition-colors",
					!isGlass && "text-slate-900 group-hover:text-primary",
					isGlass && "text-white"
				)}>
					{doctor.name}
				</h3>

				<div className="flex flex-wrap justify-center gap-2 mb-6">
					{(Array.isArray(doctor.specialties) ? doctor.specialties : [doctor.specialties]).map((spec, i) => (
						<Badge
							key={i}
							variant="secondary"
							className={cn(
								"border-transparent font-medium px-3 py-1 rounded-lg transition-colors",
								!isGlass && "bg-blue-50 text-blue-700 hover:bg-blue-100",
								isGlass && "bg-white/10 text-blue-100 hover:bg-white/20"
							)}
						>
							{spec}
						</Badge>
					))}
				</div>

				{/* Minimal Info List */}
				<div className="w-full space-y-3 mb-6">
					<div className={cn("flex items-center justify-center gap-2 text-sm", !isGlass ? "text-slate-500" : "text-blue-50")}>
						<ClockIcon className={cn("w-4 h-4", !isGlass ? "text-slate-400" : "text-blue-200")} />
						<span>{doctor.clinicHours}</span>
					</div>
					<div className={cn("flex items-center justify-center gap-2 text-sm", !isGlass ? "text-slate-500" : "text-blue-50")}>
						<CalendarIcon className={cn("w-4 h-4", !isGlass ? "text-slate-400" : "text-blue-200")} />
						<span>{doctor.clinicDays.join(', ')}</span>
					</div>
				</div>

				{/* Minimalist Link Action */}
				<div
					className={cn(
						"mt-2 inline-flex items-center gap-1 text-sm font-bold transition-colors cursor-pointer group/link",
						!isGlass && "text-primary hover:text-blue-700",
						isGlass && "text-white hover:text-blue-200"
					)}
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
