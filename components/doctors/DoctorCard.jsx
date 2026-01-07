'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
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
			whileHover={{ y: -5 }}
			transition={{ duration: 0.3 }}
			className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300"
		>
			{/* Decorative accent */}
			<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full -mr-1 -mt-1" />

			<div className="flex flex-col items-center text-center">
				{/* Avatar with Ring */}
				<div className="relative mb-6">
					<div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-secondary to-teal-100 shadow-lg">
						<Avatar className="w-full h-full rounded-full border-4 border-white bg-white">
							<AvatarImage
								src={doctor.image}
								alt={doctor.name}
								className="object-cover"
							/>
							<AvatarFallback className="bg-slate-100 text-slate-400 text-3xl font-heading">
								{doctor.name.substring(0, 2).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</div>
					{/* Status Indicator */}
					<div className="absolute bottom-1 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full" title="Available" />
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
								className="bg-slate-100 text-slate-600 hover:bg-secondary/20 hover:text-secondary border-transparent"
							>
								{spec}
							</Badge>
						))
					) : (
						<Badge variant="secondary" className="bg-slate-100 text-slate-600">
							{doctor.specialties}
						</Badge>
					)}
				</div>

				{/* Info Grid */}
				<div className="w-full grid grid-cols-2 gap-3 text-left mb-6 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
					<div className="col-span-2 flex items-center gap-2 text-sm text-slate-600">
						<ClockIcon className="w-4 h-4 text-secondary shrink-0" />
						<span className="truncate">{doctor.clinicHours}</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-slate-600">
						<CalendarIcon className="w-4 h-4 text-secondary shrink-0" />
						<span className="truncate">{doctor.clinicDays.join(', ')}</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-slate-600">
						{doctor.gender === 'Male' ? (
							<MarsIcon className="w-4 h-4 text-blue-500 shrink-0" />
						) : (
							<VenusIcon className="w-4 h-4 text-pink-500 shrink-0" />
						)}
						<span>{doctor.gender}</span>
					</div>
					{doctor.hmo && doctor.hmo.length > 0 && (
						<div className="col-span-2 flex items-start gap-2 text-sm text-slate-600">
							<CreditCardIcon className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
							<span className="line-clamp-1 text-xs">
								HMO: {doctor.hmo.join(', ')}
							</span>
						</div>
					)}
				</div>

				{/* Action */}
				<Button
					className="w-full bg-slate-900 text-white hover:bg-secondary hover:text-primary transition-all shadow-lg shadow-slate-900/10 group-hover:shadow-secondary/20 font-bold rounded-xl h-12"
					onClick={handleViewProfile}
				>
					View Profile
				</Button>
			</div>
		</motion.div>
	);
};

export default DoctorCard;
