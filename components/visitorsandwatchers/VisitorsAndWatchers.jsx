'use client';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Users, ShieldAlert, Ban, Info } from 'lucide-react';
import React from 'react';
import { Separator } from '../ui/separator';

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

const cardVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const VisitorsAndWatchers = () => {
	return (
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Background Ambience */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />
			<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

			<motion.div
				className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 space-y-16"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{/* Header */}
				<motion.div className="text-center space-y-4" variants={itemVariants}>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-md">
						<Users className="w-4 h-4 text-secondary" />
						<span>Guidelines</span>
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
						Visitors & Watchers
					</h1>
					<p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light">
						To ensure the safety and recovery of our patients, please observe the following policies during your visit.
					</p>
				</motion.div>

				{/* Visiting Guidelines Card */}
				<motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden">
					<div className="p-8 md:p-12 space-y-8">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20 shrink-0">
								<Clock className="w-6 h-6 text-secondary" />
							</div>
							<h2 className="text-2xl md:text-3xl font-bold text-white">General Visiting Policies</h2>
						</div>

						<p className="text-blue-100/80 leading-relaxed text-lg">
							DWH Management strengthens protective measures to safeguard patients, healthcare practitioners,
							and employees from unnecessary virus transmission.
						</p>

						<div className="grid gap-4">
							{[
								{
									label: "Visiting Hours",
									value: "3:00 PM – 6:00 PM",
									icon: <Clock className="w-5 h-5" />,
									highlight: true
								},
								{
									label: "Watchers Limit",
									value: "Only ONE (1) watcher is allowed per patient. Changing watchers frequently is not permitted.",
									icon: <Users className="w-5 h-5" />
								},
								{
									label: "ICU Watchers",
									value: "Only ONE (1) watcher allowed for restless, stable, and pediatric patients.",
									icon: <ShieldAlert className="w-5 h-5" />
								},
								{
									label: "NICU",
									value: "Visiting is temporarily cancelled. Parents must wait for doctor's advice.",
									icon: <Ban className="w-5 h-5 text-red-400" />
								},
								{
									label: "HMO & PWD ID",
									value: "Please present your ID to the admitting staff upon admission.",
									icon: <Info className="w-5 h-5" />
								},
								{
									label: "Financial Assistance",
									value: "Private rooms and above are NOT ELIGIBLE for financial assistance.",
									icon: <AlertCircle className="w-5 h-5 text-orange-400" />
								},
								{
									label: "Pillow & Blanket",
									value: "Bringing strictly prohibited unless newly purchased with receipt presented to guard.",
									icon: <Ban className="w-5 h-5" />
								},
								{
									label: "Children",
									value: "Children below 12 years old are discouraged from visiting.",
									icon: <BabyIcon />
								},
								{
									label: "PhilHealth",
									value: "Submit papers 72 hours after admission to avoid discharge delays. Visit Claims Office.",
									icon: <Info className="w-5 h-5" />
								},
								{
									label: "Discharge Time",
									value: "Cut-off time is 11:00 AM.",
									icon: <Clock className="w-5 h-5" />
								},
								{
									label: "Privacy Policy",
									value: "Taking photos/videos without consent is STRICTLY PROHIBITED (Data Privacy Act of 2012).",
									icon: <ShieldAlert className="w-5 h-5 text-red-400" />
								}
							].map((item, idx) => (
								<div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/5 hover:bg-white/10 transition-colors flex gap-4 items-start">
									<div className="mt-1 text-secondary opacity-80 shrink-0">{item.icon}</div>
									<div>
										<h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">{item.label}</h4>
										<div className="text-blue-100/70 text-sm leading-relaxed">
											{item.highlight ? (
												<Badge className="bg-secondary text-white border-secondary">{item.value}</Badge>
											) : (
												item.value
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* COVID-19 Alert Section */}
				<motion.div variants={itemVariants} className="bg-gradient-to-br from-red-900/40 to-red-950/40 backdrop-blur-xl border border-red-500/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />

					<div className="relative z-10 space-y-6">
						<div className="flex items-center gap-4 text-red-400">
							<ShieldAlert className="w-10 h-10" />
							<h2 className="text-3xl font-bold">COVID-19 Guidelines</h2>
						</div>

						<p className="text-red-200/80 text-lg">
							Strict protocols are in effect to minimize virus transmission and protect our community.
						</p>

						<div className="space-y-4">
							<div className="bg-red-950/50 rounded-xl p-5 border border-red-500/20 flex gap-4">
								<Ban className="w-6 h-6 text-red-500 shrink-0" />
								<div>
									<h4 className="font-bold text-red-200 mb-1">Visitation</h4>
									<p className="text-red-200/60 text-sm">NO VISITORS ARE ALLOWED in all inpatient care units.</p>
								</div>
							</div>
							<div className="bg-red-950/50 rounded-xl p-5 border border-red-500/20 flex gap-4">
								<ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
								<div>
									<h4 className="font-bold text-red-200 mb-1">Testing Requirements</h4>
									<p className="text-red-200/60 text-sm">Negative RT-PCR swab test required (dated within 5 days) for patients and companions before admission.</p>
								</div>
							</div>
							<div className="bg-red-950/50 rounded-xl p-5 border border-red-500/20 flex gap-4">
								<Users className="w-6 h-6 text-red-500 shrink-0" />
								<div>
									<h4 className="font-bold text-red-200 mb-1">Face Coverings</h4>
									<p className="text-red-200/60 text-sm">Face masks must be worn AT ALL TIMES within hospital premises.</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

			</motion.div>
		</div>
	);
};

// Helper Icon
const BabyIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5 text-secondary"
	>
		<path d="M9 12h.01" />
		<path d="M15 12h.01" />
		<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
		<path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 15" />
	</svg>
);

export default VisitorsAndWatchers;
