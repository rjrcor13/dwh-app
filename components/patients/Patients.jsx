'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
	BedDouble,
	CheckCircle2,
	ChevronRight,
	FileText,
	ShieldAlert,
	Stethoscope,
	DoorOpen,
	ArrowRight
} from 'lucide-react';
import React, { useState } from 'react';

// --- Sub-Components ---

// 1. Content Wrapper with Fade Transaction
const ContentFade = ({ children, contentKey }) => (
	<motion.div
		key={contentKey}
		initial={{ opacity: 0, y: 10, scale: 0.98 }}
		animate={{ opacity: 1, y: 0, scale: 1 }}
		exit={{ opacity: 0, y: -10, scale: 0.98 }}
		transition={{ duration: 0.3, ease: "easeOut" }}
		className="w-full"
	>
		{children}
	</motion.div>
);

// 2. Admission/Discharge View
const ProcessView = ({ data }) => (
	<div className="space-y-8 max-w-4xl mx-auto">
		<div className="text-center mb-12">
			<h2 className="text-3xl font-bold font-heading text-white mb-4">{data.title}</h2>
			{data.intro && <p className="text-blue-200/60 text-lg">{data.intro}</p>}
		</div>

		<div className="grid gap-6">
			{data.sections.map((section, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: idx * 0.1 }}
					className="group bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300"
				>
					<div className="flex gap-6">
						<div className="hidden md:flex flex-col items-center gap-2 shrink-0">
							<div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-bold font-heading">
								{idx + 1}
							</div>
							<div className="w-px h-full bg-white/5 group-last:hidden" />
						</div>

						<div className="space-y-3">
							<div className="flex items-center gap-3 md:hidden mb-2">
								<div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-sm text-secondary font-bold font-heading">
									{idx + 1}
								</div>
								<h3 className={cn("text-lg font-bold", section.isPrimaryText ? "text-secondary" : "text-white")}>
									{section.heading}
								</h3>
							</div>
							<h3 className={cn("text-xl font-bold hidden md:block", section.isPrimaryText ? "text-secondary" : "text-white")}>
								{section.heading}
							</h3>

							{section.paragraphs.map((p, pIdx) => (
								<p key={pIdx} className="text-blue-100/70 leading-relaxed text-sm md:text-base">
									{p}
								</p>
							))}
						</div>
					</div>
				</motion.div>
			))}
		</div>
	</div>
);

// 3. Rooms View
const RoomsView = ({ data }) => (
	<div className="max-w-6xl mx-auto">
		<div className="text-center mb-12">
			<h2 className="text-3xl font-bold font-heading text-white mb-4">{data.title}</h2>
			<p className="text-blue-200/60 text-lg">{data.intro}</p>
		</div>

		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{data.listItems.map((item, idx) => (
				<motion.div
					key={idx}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: idx * 0.05 }}
					whileHover={{ y: -5 }}
					className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-secondary/30 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full"
				>
					<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 text-white group-hover:text-secondary transition-colors">
						<DoorOpen className="w-6 h-6" />
					</div>
					<h4 className="text-xl font-bold text-white mb-2">{item.term.replace(':', '')}</h4>
					<p className="text-blue-100/60 leading-relaxed text-sm flex-grow mb-6">{item.description}</p>
				</motion.div>
			))}
		</div>

		{data.concludingParagraph && (
			<div className="mt-12 text-center text-blue-200/40 text-sm italic">
				{data.concludingParagraph}
			</div>
		)}
	</div>
);

// 4. Rights View (Clean List)
const RightsView = ({ data }) => (
	<div className="max-w-4xl mx-auto">
		<div className="text-center mb-12">
			<h2 className="text-3xl font-bold font-heading text-white mb-4">{data.title}</h2>
			<p className="text-blue-200/60 text-lg">Knowing your rights leads to better care.</p>
		</div>

		<div className="space-y-12">
			{data.sections.map((section, sIdx) => (
				<motion.div
					key={sIdx}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: sIdx * 0.2 }}
					className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
				>
					<div className="p-6 md:p-8 border-b border-white/10 bg-white/5">
						<h3 className="text-xl md:text-2xl font-bold font-heading text-secondary">{section.heading}</h3>
					</div>

					<div className="divide-y divide-white/5">
						{section.items.map((item, i) => (
							<div
								key={i}
								className="p-6 md:p-8 flex gap-6 hover:bg-white/5 transition-colors group"
							>
								<div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
									<CheckCircle2 className="w-5 h-5" />
								</div>

								<div>
									<p className="text-white text-lg font-medium leading-relaxed mb-3">{item.text}</p>
									<p className="text-blue-200/50 text-base italic font-serif leading-relaxed">"{item.tagalog}"</p>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			))}
		</div>
	</div>
);


// --- Main Component ---

const PatientsPage = ({ patientsData }) => {
	const [activeTab, setActiveTab] = useState('admission');

	const tabs = [
		{ id: 'admission', label: 'Admission', icon: FileText },
		{ id: 'discharge', label: 'Discharge', icon: CheckCircle2 },
		{ id: 'rooms', label: 'Rooms', icon: BedDouble },
		{ id: 'rights', label: 'Rights', icon: ShieldAlert },
	];

	if (!patientsData) return null;

	return (
		<div className="bg-primary min-h-screen relative font-sans selection:bg-secondary/30 selection:text-white pb-32 pt-32">

			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary to-primary pointer-events-none" />
			<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">
						<Stethoscope className="w-4 h-4 text-secondary" />
						<span>Patient Guide</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
						Patient Information
					</h1>
					<p className="text-blue-100/60 max-w-2xl mx-auto text-lg leading-relaxed">
						Quick access to everything you need for your stay at Divine Word Hospital.
					</p>
				</div>

				{/* 1. Integrated Segmented Control (Apple-Style Pills) */}
				<div className="sticky top-24 z-50 flex justify-center mb-16">
					<div className="p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex gap-1 shadow-2xl overflow-x-auto max-w-full no-scrollbar">
						{tabs.map((tab) => {
							const isActive = activeTab === tab.id;
							const Icon = tab.icon;
							return (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={cn(
										"relative px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shrink-0",
										isActive ? "text-white" : "text-white/50 hover:text-white"
									)}
								>
									{isActive && (
										<motion.div
											layoutId="pill-active"
											className="absolute inset-0 bg-secondary rounded-full shadow-lg shadow-secondary/25"
											transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
										/>
									)}
									<span className="relative z-10"><Icon className="w-4 h-4" /></span>
									<span className="relative z-10 text-sm font-bold tracking-wide">{tab.label}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* 2. Content Area */}
				<div className="min-h-[500px]">
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
	);
};

export default PatientsPage;
