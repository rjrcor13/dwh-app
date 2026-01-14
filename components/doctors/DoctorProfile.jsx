'use client';

import { doctorsData } from '@/app/data/dummyDoctors';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
	MarsIcon,
	VenusIcon,
	Stethoscope,
	Building2,
	ChevronLeft,
	Home,
	MapPin
} from 'lucide-react';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const DoctorProfile = () => {
	const router = useRouter();
	const { doctorId } = useParams();

	const parsedId = useMemo(() => {
		if (!doctorId) return null;
		return Number(doctorId);
	}, [doctorId]);

	const doctor = useMemo(() => {
		if (!parsedId) return null;
		return doctorsData.find((doc) => doc.id === parsedId);
	}, [parsedId]);

	if (!parsedId || !doctor) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-50">
				<div className="text-center">
					<div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
					<p className="text-slate-500 font-medium">Locating doctor...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-slate-50 relative font-sans selection:bg-blue-100">

			{/* Ambient Background */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-70" />
				<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
			</div>

			{/* Sticky Breadcrumb */}
			<nav className="sticky top-[88px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
				<div className="max-w-7xl mx-auto px-6 h-14 flex items-center text-sm font-medium text-slate-500">
					<Link href="/home" className="hover:text-primary transition-colors flex items-center gap-2">
						<Home className="w-4 h-4" />
						<span>Home</span>
					</Link>
					<ChevronLeft className="w-4 h-4 mx-2 text-slate-300 rotate-180" />
					<Link href="/doctors" className="hover:text-primary transition-colors">
						Doctors
					</Link>
					<ChevronLeft className="w-4 h-4 mx-2 text-slate-300 rotate-180" />
					<span className="text-slate-900 font-bold truncate max-w-[200px]" aria-current="page">
						{doctor.name}
					</span>
				</div>
			</nav>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

					{/* Sidebar / Profile Card */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="lg:col-span-4"
					>
						<div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 sticky top-[200px] text-center">
							{/* Large Avatar */}
							<div className="relative inline-block mb-8 group">
								<div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500" />
								<Avatar className="w-56 h-56 rounded-full border-4 border-white shadow-2xl mx-auto relative z-10">
									<AvatarImage
										src={doctor.image}
										alt={doctor.name}
										className="object-cover"
									/>
									<AvatarFallback className="bg-blue-50 text-blue-600 text-5xl font-heading">
										{doctor.name.substring(0, 2).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<div className="absolute bottom-4 right-6 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full z-20" title="Available Today" />
							</div>

							<h2 className="text-3xl font-bold font-heading text-slate-900 mb-2">
								{doctor.name}
							</h2>

							<div className="flex flex-wrap justify-center gap-2 mb-10">
								{Array.isArray(doctor.specialties) ? (
									doctor.specialties.map((spec, index) => (
										<Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm">
											{spec}
										</Badge>
									))
								) : (
									<Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm">
										{doctor.specialties}
									</Badge>
								)}
							</div>

							<Button className="w-full py-7 text-lg font-bold rounded-2xl shadow-lg shadow-blue-900/20 bg-primary hover:bg-blue-800 transition-all duration-300 hover:scale-[1.02]">
								Book Appointment
							</Button>
						</div>
					</motion.div>

					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="lg:col-span-8 space-y-8"
					>
						{/* Info Header */}
						<div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2" />

							<div className="relative z-10">
								<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-3">
									<Stethoscope className="w-5 h-5 text-blue-500" />
									Professional Details
								</h3>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									{/* Hospital */}
									<div className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 h-full">
										<div className="p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
											<Building2 className="w-6 h-6 text-blue-600" />
										</div>
										<div>
											<p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Affiliated Hospital</p>
											<p className="font-bold text-slate-900 text-lg leading-snug">{doctor.hospital}</p>
										</div>
									</div>

									{/* Gender */}
									<div className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 h-full">
										<div className="p-3.5 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
											{doctor.gender === 'Female' ? (
												<VenusIcon className="w-6 h-6 text-pink-500" />
											) : (
												<MarsIcon className="w-6 h-6 text-blue-500" />
											)}
										</div>
										<div>
											<p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Gender</p>
											<p className="font-bold text-slate-900 text-lg">{doctor.gender}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Schedule & HMOs */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

							{/* Clinic Schedule */}
							<div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col h-full">
								<h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
									<ClockIcon className="w-6 h-6 text-emerald-500" />
									Clinic Schedule
								</h3>

								<div className="space-y-8 flex-1">
									<div>
										<div className="flex items-center gap-2 mb-3">
											<CalendarIcon className="w-4 h-4 text-slate-400" />
											<span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Days</span>
										</div>
										<div className="flex flex-wrap gap-2">
											{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
												const isActive = doctor.clinicDays.includes(day);
												return (
													<span
														key={day}
														className={`w-11 h-11 flex items-center justify-center rounded-2xl text-xs font-bold transition-all duration-300 border ${isActive
															? 'bg-emerald-50 border-emerald-100 text-emerald-700 shadow-sm scale-110'
															: 'bg-slate-50 border-transparent text-slate-300'}`}
													>
														{day}
													</span>
												);
											})}
										</div>
									</div>

									<div className="pt-6 border-t border-slate-100">
										<div className="flex items-center gap-2 mb-2">
											<ClockIcon className="w-4 h-4 text-slate-400" />
											<span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Hours</span>
										</div>
										<p className="text-xl font-bold text-slate-900 tracking-tight">
											{doctor.clinicHours}
										</p>
									</div>
								</div>
							</div>

							{/* HMOs */}
							<div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col h-full">
								<h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
									<CreditCardIcon className="w-6 h-6 text-violet-500" />
									Accepted HMOs
								</h3>

								<div className="flex flex-wrap content-start gap-3 h-full">
									{doctor.hmo.map((hmo, idx) => (
										<span
											key={idx}
											className="inline-flex items-center px-4 py-2.5 rounded-2xl bg-violet-50 text-violet-700 text-sm font-bold border border-violet-100 transition-colors hover:bg-violet-100 cursor-default"
										>
											{hmo}
										</span>
									))}
									{doctor.hmo.length === 0 && (
										<span className="text-slate-400 italic">No HMOs listed</span>
									)}
								</div>
							</div>
						</div>

					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default DoctorProfile;
