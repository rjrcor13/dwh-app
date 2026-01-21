'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
	BedDouble,
	CheckCircle2,
	FileText,
	ShieldAlert,
	Stethoscope,
	DoorOpen,
	Sparkles,
	Phone,
	Clock,
	ChevronRight
} from 'lucide-react';
import React, { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import GlassCard from '@/components/ui/GlassCard';
import AmbientBackground from '@/components/ui/AmbientBackground';

// --- Sub-Components ---

const ContentFade = ({ children, contentKey }) => (
	<motion.div
		key={contentKey}
		initial={{ opacity: 0, x: 20 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -20 }}
		transition={{ duration: 0.4, ease: "easeOut" }}
		className="w-full relative z-10"
	>
		{children}
	</motion.div>
);

// 1. Admission/Discharge View
const ProcessView = ({ data }) => (
	<div className="space-y-8">
		<div className="mb-8 relative">
			<h2 className="text-3xl font-bold font-heading text-slate-900 mb-4 tracking-tight">{data.title}</h2>
			{data.intro && <p className="text-slate-500 text-lg leading-relaxed">{data.intro}</p>}
		</div>

		<div className="space-y-6">
			{data.sections.map((section, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: idx * 0.1 }}
				>
					<GlassCard className="p-6 md:p-8" hoverEffect={false}>
						<div className="relative z-10 space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-700 shadow-md shadow-primary/20 flex items-center justify-center text-white font-bold font-heading">
									{idx + 1}
								</div>
								<h3 className={cn("text-xl font-bold", section.isPrimaryText ? "text-secondary" : "text-slate-900")}>
									{section.heading}
								</h3>
							</div>

							{section.paragraphs.map((p, pIdx) => (
								<p key={pIdx} className="text-slate-600 leading-relaxed text-base pl-14">
									{p}
								</p>
							))}
						</div>
					</GlassCard>
				</motion.div>
			))}
		</div>
	</div>
);

// 2. Rooms View
const RoomsView = ({ data }) => (
	<div className="space-y-8">
		<div className="mb-8">
			<h2 className="text-3xl font-bold font-heading text-slate-900 mb-4 tracking-tight">{data.title}</h2>
			<p className="text-slate-500 text-lg">{data.intro}</p>
		</div>

		<div className="grid sm:grid-cols-2 gap-5">
			{data.listItems.map((item, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: idx * 0.05 }}
					className="h-full"
				>
					<GlassCard className="p-6 h-full flex flex-col" hoverEffect={true}>
						<div className="flex items-start justify-between mb-4">
							<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
								<DoorOpen className="w-6 h-6" />
							</div>
						</div>

						<h4 className="text-lg font-bold text-slate-900 mb-2">{item.term.replace(':', '')}</h4>
						<p className="text-slate-600 leading-relaxed text-sm flex-grow">{item.description}</p>
					</GlassCard>
				</motion.div>
			))}
		</div>

		{data.concludingParagraph && (
			<div className="bg-blue-50/50 rounded-2xl p-4 flex items-center justify-center gap-2 text-sm text-slate-500 font-medium border border-blue-100/50">
				<Sparkles className="w-4 h-4 text-secondary" />
				{data.concludingParagraph}
			</div>
		)}
	</div>
);

// 3. Rights View
const RightsView = ({ data }) => (
	<div className="space-y-8">
		<div className="mb-8">
			<h2 className="text-3xl font-bold font-heading text-slate-900 mb-4 tracking-tight">{data.title}</h2>
			<p className="text-slate-500 text-lg">Knowing your rights leads to better care.</p>
		</div>

		<div className="space-y-8">
			{data.sections.map((section, sIdx) => (
				<motion.div
					key={sIdx}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: sIdx * 0.2 }}
				>
					<GlassCard className="p-0 overflow-hidden" hoverEffect={true}>
						<div className="p-6 md:p-8 border-b border-indigo-50/50 bg-gradient-to-r from-indigo-50/30 to-transparent">
							<h3 className="text-xl font-bold font-heading text-primary">{section.heading}</h3>
						</div>

						<div className="divide-y divide-indigo-50/50">
							{section.items.map((item, i) => (
								<div
									key={i}
									className="p-6 md:p-8 flex gap-5 hover:bg-white/40 transition-colors group"
								>
									<div className="shrink-0 w-6 h-6 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm mt-1">
										<CheckCircle2 className="w-3 h-3" />
									</div>

									<div>
										<p className="text-slate-900 text-base font-bold leading-relaxed mb-2">{item.text}</p>
										<p className="text-slate-500 text-sm leading-relaxed italic">
											"{item.tagalog}"
										</p>
									</div>
								</div>
							))}
						</div>
					</GlassCard>
				</motion.div>
			))}
		</div>
	</div>
);

// --- Main Component ---

const PatientsPage = ({ patientsData }) => {
	const [activeTab, setActiveTab] = useState('admission');

	const tabs = [
		{ id: 'admission', label: 'Admission', icon: FileText, desc: 'Requirements & process' },
		{ id: 'discharge', label: 'Discharge', icon: CheckCircle2, desc: 'Clearance & billing' },
		{ id: 'rooms', label: 'Rooms', icon: BedDouble, desc: 'Rates & amenities' },
		{ id: 'rights', label: 'Rights', icon: ShieldAlert, desc: 'Patient entitlement' },
	];

	if (!patientsData) return null;

	return (
		<div className="bg-slate-50/50 min-h-screen relative font-sans selection:bg-primary/20 selection:text-primary pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<AmbientBackground variant="light" />

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header Section */}
				<PageHeader
					badgeIcon={Stethoscope}
					badgeText="Patient Guide"
					title="Patient"
					highlightText="Information"
					description="Everything you need for a comfortable stay at Divine Word Hospital."
				/>

				<div className="grid lg:grid-cols-12 gap-12 items-start">

					{/* LEFT COLUMN: Sticky Navigation (4 cols) */}
					<div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

						{/* Vertical Navigation Pills */}
						<div className="flex flex-col gap-3">
							{tabs.map((tab) => {
								const isActive = activeTab === tab.id;
								const Icon = tab.icon;
								return (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={cn(
											"group relative text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between",
											isActive
												? "bg-white border-blue-100 shadow-md ring-1 ring-blue-500/10"
												: "bg-white/40 border-transparent hover:bg-white/80 hover:border-white hover:shadow-sm"
										)}
									>
										<div className="flex items-center gap-4">
											<div className={cn(
												"w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300",
												isActive ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-blue-50 text-slate-400 group-hover:bg-white group-hover:text-primary"
											)}>
												<Icon className="w-5 h-5" />
											</div>
											<div>
												<span className={cn("block font-bold text-sm", isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800")}>
													{tab.label}
												</span>
												<span className={cn("block text-xs", isActive ? "text-slate-500" : "text-slate-400")}>
													{tab.desc}
												</span>
											</div>
										</div>
										{isActive && <ChevronRight className="w-5 h-5 text-primary opacity-50" />}
									</button>
								);
							})}
						</div>

						{/* Admissions Contact Widget */}
						<div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-900/20">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[30px]" />
							<div className="relative z-10">
								<h3 className="font-bold text-lg mb-1">Need Assistance?</h3>
								<p className="text-blue-200 text-sm mb-6">Our Admission Office is open daily.</p>

								<div className="space-y-4">
									<div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
										<Phone className="w-5 h-5 text-secondary" />
										<span className="font-bold">0919-067-2673</span>
									</div>
									<div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
										<Clock className="w-5 h-5 text-secondary" />
										<span className="font-bold text-sm">24/7 Service</span>
									</div>
								</div>
							</div>
						</div>

					</div>

					{/* RIGHT COLUMN: Active Content (8 cols) */}
					<div className="lg:col-span-8 min-h-[500px]">
						<AnimatePresence mode="wait">
							{activeTab === 'admission' && (
								<ContentFade contentKey="admission">
									<ProcessView data={patientsData.admission} />
								</ContentFade>
							)}
							{activeTab === 'discharge' && (
								<ContentFade contentKey="discharge">
									<ProcessView data={patientsData.discharge} />
								</ContentFade>
							)}
							{activeTab === 'rooms' && (
								<ContentFade contentKey="rooms">
									<RoomsView data={patientsData.rooms} />
								</ContentFade>
							)}
							{activeTab === 'rights' && (
								<ContentFade contentKey="rights">
									<RightsView data={patientsData.rights} />
								</ContentFade>
							)}
						</AnimatePresence>
					</div>

				</div>
			</div>
		</div>
	);
};

export default PatientsPage;
