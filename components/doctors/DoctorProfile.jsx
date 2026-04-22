'use client';

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
	Phone,
	DoorOpen,
	Share2,
	CheckCircle,
	User,
	Mail,
	ArrowRight
} from 'lucide-react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';

import AmbientBackground from '@/components/ui/AmbientBackground';
import PremiumBadge from '@/components/ui/PremiumBadge';
import { cn } from '@/lib/utils';

const DoctorProfile = ({ doctor }) => {
	const router = useRouter();
	const [isCopied, setIsCopied] = useState(false);

	const handleShare = () => {
		const url = window.location.href;
		navigator.clipboard.writeText(url);
		setIsCopied(true);
		toast.success('Profile link copied to clipboard!');
		setTimeout(() => setIsCopied(false), 2000);
	};

	if (!doctor) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-50">
				<div className="text-center">
					<div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
					<p className="text-slate-500 font-medium">Locating doctor...</p>
				</div>
			</div>
		);
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<div className="min-h-screen bg-slate-50/50 relative font-sans selection:bg-blue-100 pb-32">

			{/* Ambient Background */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<AmbientBackground variant="light" />
			</div>

			{/* Sticky Breadcrumb Container */}
			<div className="sticky top-[80px] z-30 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all duration-300">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					<nav className="flex items-center text-sm font-medium text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
						<Link href="/" className="hover:text-primary transition-colors flex items-center gap-2 group shrink-0">
							<Home className="w-4 h-4 group-hover:text-secondary transition-colors" />
							<span className="hidden sm:inline">Home</span>
						</Link>
						<ChevronLeft className="w-4 h-4 mx-2 text-slate-300 rotate-180 shrink-0" />
						<Link href="/doctors" className="hover:text-primary transition-colors shrink-0">
							Doctors
						</Link>
						<ChevronLeft className="w-4 h-4 mx-2 text-slate-300 rotate-180 shrink-0" />
						<span className="text-slate-900 font-bold truncate max-w-[200px] bg-white/50 px-3 py-1 rounded-full border border-white/50 shrink-0">
							{doctor.name}
						</span>
					</nav>

					<div className="flex items-center gap-3 ml-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={handleShare}
							className="rounded-full bg-white/50 border border-white/80 hover:bg-white text-slate-600 font-bold shadow-sm"
						>
							{isCopied ? <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> : <Share2 className="w-4 h-4 mr-2" />}
							<span className="hidden md:inline">Share Profile</span>
						</Button>
					</div>
				</div>
			</div>

			{/* HERO SECTION */}
			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 mb-16 items-center flex flex-col md:flex-row gap-12">
				
				{/* Portrait Area */}
				<motion.div 
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative group shrink-0"
				>
					<div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
					<div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl ring-1 ring-slate-100">
						<Avatar className="w-full h-full rounded-none">
							<AvatarImage
								src={doctor.image && doctor.image !== '/assets/avatar.jpg' ? doctor.image : (doctor.gender === 'Female' ? '/assets/doctor-female.png' : '/assets/doctor-male.png')}
								alt={doctor.name}
								className="object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<AvatarFallback className="bg-blue-50 text-blue-600 text-5xl font-heading">
								{doctor.name ? doctor.name.substring(0, 2).toUpperCase() : 'DR'}
							</AvatarFallback>
						</Avatar>
					</div>
				</motion.div>

				{/* Content Area */}
				<div className="flex-1 space-y-8 text-center md:text-left">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="mb-6 flex justify-center md:justify-start">
							<PremiumBadge text={`${(Array.isArray(doctor.specialties) ? doctor.specialties[0] : doctor.specialties) || 'Medical'} Specialist`} icon={Stethoscope} />
						</div>

						<h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-heading text-slate-900 mb-6 tracking-tight leading-tight">
							{doctor.name}
						</h1>

						<div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 max-w-2xl">
							{Array.isArray(doctor.specialties) ? (
								doctor.specialties.map((spec, index) => (
									<Badge key={index} className="bg-white px-5 py-2.5 rounded-2xl text-primary font-bold text-base shadow-sm border border-blue-50 hover:border-primary/20 transition-all cursor-default">
										{spec}
									</Badge>
								))
							) : (
								<Badge className="bg-white px-5 py-2.5 rounded-2xl text-primary font-bold text-base shadow-sm border border-blue-50">
									{doctor.specialties}
								</Badge>
							)}
						</div>

						<div className="flex flex-col sm:flex-row items-center gap-4">
							<Button className="w-full sm:w-auto px-10 py-8 text-lg font-bold rounded-2xl shadow-xl shadow-blue-900/20 bg-primary hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] group">
								In-Clinic Visit <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button variant="outline" className="w-full sm:w-auto px-10 py-8 text-lg font-bold rounded-2xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
								Contact for Schedule
							</Button>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

					{/* LEFT COLUMN: About & Professional Info */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="lg:col-span-8 space-y-12"
					>
						{/* About Section */}
						{doctor.bio && (
							<motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 border border-white/80 shadow-xl shadow-slate-200/40 relative group overflow-hidden">
								<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
									<User className="w-48 h-48 text-primary" />
								</div>
								
								<h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-8 flex items-center gap-4">
									<div className="p-3 bg-blue-100/50 rounded-2xl text-primary"><User className="w-6 h-6" /></div>
									Biography
								</h2>
								
								<div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:font-bold prose-li:text-slate-600">
									<ReactMarkdown remarkPlugins={[remarkGfm]}>
										{doctor.bio}
									</ReactMarkdown>
								</div>
							</motion.div>
						)}

						{/* Quick Info Grid */}
						<motion.div variants={itemVariants} className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/50">
							<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 border-b border-slate-50 pb-6">
								Professional Credentials
							</h3>
							
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Hospital */}
								<div className="flex items-center gap-5 p-7 rounded-[2rem] bg-slate-50 border border-white hover:border-blue-100 transition-all group shadow-sm">
									<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-primary group-hover:scale-110 transition-transform">
										<Building2 className="w-6 h-6" />
									</div>
									<div>
										<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Clinic Center</p>
										<p className="font-bold text-slate-900 text-lg">{doctor.hospital}</p>
									</div>
								</div>

								{/* Clinic Room */}
								<div className="flex items-center gap-5 p-7 rounded-[2rem] bg-slate-50 border border-white hover:border-orange-100 transition-all group shadow-sm">
									<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-orange-500 group-hover:scale-110 transition-transform">
										<DoorOpen className="w-6 h-6" />
									</div>
									<div>
										<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
										<p className="font-bold text-slate-900 text-lg truncate max-w-[150px]">{doctor.clinicRoom || 'Room 101'}</p>
									</div>
								</div>

								{/* Contact */}
								<div className="flex items-center gap-5 p-7 rounded-[2rem] bg-slate-50 border border-white hover:border-emerald-100 transition-all group shadow-sm">
									<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-emerald-500 group-hover:scale-110 transition-transform">
										<Phone className="w-6 h-6" />
									</div>
									<div className="flex flex-col">
										<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hotline / Contact</p>
										{(() => {
											const contacts = doctor.contactNumbers || (Array.isArray(doctor.contactNumber) ? doctor.contactNumber : [doctor.contactNumber]);
											return contacts.filter(Boolean).map((num, idx) => (
												<p key={idx} className="font-bold text-slate-900 text-lg leading-tight">{num}</p>
											));
										})()}
										{(!doctor.contactNumbers && !doctor.contactNumber) && <p className="font-bold text-slate-900 text-lg">Contact Us</p>}
									</div>
								</div>

								{/* Gender */}
								<div className="flex items-center gap-5 p-7 rounded-[2rem] bg-slate-50 border border-white hover:border-pink-100 transition-all group shadow-sm">
									<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-pink-500 group-hover:scale-110 transition-transform">
										{doctor.gender === 'Female' ? <VenusIcon className="w-6 h-6" /> : <MarsIcon className="w-6 h-6 text-blue-500" />}
									</div>
									<div>
										<p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Classification</p>
										<p className="font-bold text-slate-900 text-lg">{doctor.gender}</p>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT COLUMN: Schedule & Insurance */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit"
					>
						{/* Clinic Schedule */}
						<div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-100/50 group">
							<h3 className="text-xl font-bold text-slate-900 mb-10 flex items-center gap-3">
								<ClockIcon className="w-6 h-6 text-primary" />
								Clinic Hours
							</h3>

							<div className="space-y-10">
								<div>
									<div className="flex flex-wrap gap-2 mb-4">
										{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
											const isActive = doctor.clinicDays.includes(day);
											return (
												<div
													key={day}
													className={cn(
														"w-11 h-11 flex items-center justify-center rounded-2xl text-[10px] font-black transition-all duration-500",
														isActive 
															? "bg-primary text-white shadow-lg shadow-blue-900/20 scale-105" 
															: "bg-slate-50 text-slate-300 border border-transparent"
													)}
												>
													{day.toUpperCase()}
												</div>
											);
										})}
									</div>
									<div className="mt-6 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-50 text-center group-hover:bg-blue-50 transition-colors">
										<p className="text-2xl font-black text-primary tracking-tight">
											{doctor.clinicHours}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Insurance / HMO Box */}
						<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-45 transition-transform duration-700">
								<CreditCardIcon className="w-24 h-24" />
							</div>
							
							<h3 className="relative z-10 text-xl font-bold mb-8 flex items-center gap-3">
								<CreditCardIcon className="w-6 h-6 text-blue-400" />
								Accepted Insurance
							</h3>

							<div className="relative z-10 flex flex-wrap gap-2">
								{doctor.hmo.map((hmo, idx) => (
									<span
										key={idx}
										className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold border border-white/10 hover:border-white/30 transition-all"
									>
										{hmo}
									</span>
								))}
								{doctor.hmo.length === 0 && <span className="text-white/40 italic">No insurance providers listed</span>}
							</div>
							
							<div className="mt-10 pt-8 border-t border-white/5 space-y-4">
								<div className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors">
									<Mail className="w-4 h-4" />
									<span className="text-xs font-medium truncate">billing@divineword.ph</span>
								</div>
								<div className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors">
									<Phone className="w-4 h-4" />
									<span className="text-xs font-medium">Extension 104</span>
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
