'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	AlertCircle,
	Ban,
	Clock,
	Info,
	ShieldAlert,
	Users,
	CheckCircle2,
	MapPin,
	ArrowRight
} from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import GlassCard from '@/components/ui/GlassCard';
import AmbientBackground from '@/components/ui/AmbientBackground';

// --- Components ---

const InfoCard = ({ icon: Icon, title, children, className }) => (
	<GlassCard className={cn("p-8 md:p-10", className)} hoverEffect={true}>
		<div className="flex items-center gap-4 mb-8">
			<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-primary border border-blue-100 shrink-0 shadow-sm">
				<Icon className="w-6 h-6" />
			</div>
			<h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">{title}</h3>
		</div>
		<div className="space-y-6">
			{children}
		</div>
	</GlassCard>
);

const GuidelineItem = ({ icon: Icon, title, text }) => (
	<div className="flex gap-4 items-start p-5 hover:bg-white/50 rounded-2xl transition-colors group">
		<div className="mt-1 w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center text-primary shrink-0 border border-blue-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
			<Icon className="w-5 h-5" />
		</div>
		<div>
			<h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1 group-hover:text-primary transition-colors">{title}</h4>
			<p className="text-slate-500 text-sm leading-relaxed">{text}</p>
		</div>
	</div>
);

// --- Main Page ---

const VisitorsAndWatchers = () => {

	return (
		<div className=" bg-slate-50/50 min-h-screen relative font-sans selection:bg-primary/20 selection:text-primary pb-32 pt-24">

			{/* --- Ambient Background Mesh --- */}
			<AmbientBackground variant="light" />

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header Section */}
				<PageHeader
					badgeIcon={Users}
					badgeText="Visitor Center"
					title="Plan Your"
					highlightText="Visit"
					description="We welcome visitors as partners in care. Please review our schedule and guidelines."
				/>

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

					{/* LEFT COLUMN: Sticky Info (4 cols) */}
					<div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

						{/* Clock Widget (Smart Watch Style) */}
						<div className="relative bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-10 overflow-hidden text-center shadow-2xl shadow-blue-900/5 group">
							{/* Glossy Overlay */}
							<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

							<div className="relative z-10 flex flex-col items-center">
								<div className="mb-6 p-3 bg-white rounded-full shadow-sm text-secondary">
									<Clock className="w-6 h-6" />
								</div>

								<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Visiting Hours</h3>
								<div className="text-5xl font-bold text-slate-900 font-heading mb-1 tracking-tight">
									3:00 <span className="text-2xl text-slate-400">PM</span>
								</div>
								<div className="w-px h-8 bg-gradient-to-b from-slate-200 to-transparent my-2" />
								<div className="text-5xl font-bold text-slate-900 font-heading mb-8 tracking-tight">
									6:00 <span className="text-2xl text-slate-400">PM</span>
								</div>

								<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 shadow-sm">
									<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
									Open Daily
								</div>
							</div>
						</div>

						{/* Quick Contacts */}
						<div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
							<h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider text-xs border-b border-slate-100 pb-3">
								<MapPin className="w-4 h-4 text-secondary" /> Locations
							</h4>
							<ul className="space-y-4 text-sm text-slate-600">
								<li className="flex justify-between border-b border-slate-100 pb-2">
									<span>Main Entrance</span>
									<span className="text-slate-900 font-bold">Lobby, G/F</span>
								</li>
								<li className="flex justify-between border-b border-slate-100 pb-2">
									<span>Admitting Section</span>
									<span className="text-slate-900 font-bold">G/F</span>
								</li>
								<li className="flex justify-between">
									<span>Claims Office</span>
									<span className="text-slate-900 font-bold">2nd Floor</span>
								</li>
							</ul>
						</div>

					</div>

					{/* RIGHT COLUMN: Scrolling Content (8 cols) */}
					<div className="lg:col-span-8 space-y-8">

						{/* COVID Alert */}
						<div className="bg-red-50/50 backdrop-blur-sm border border-red-100 rounded-[2.5rem] p-10 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-64 h-64 bg-red-100/50 rounded-full blur-[80px] pointer-events-none" />

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 shadow-sm shadow-red-100">
										<ShieldAlert className="w-6 h-6" />
									</div>
									<h3 className="text-2xl font-bold text-slate-900">Safety Protocols</h3>
								</div>
								<div className="space-y-4">
									<div className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-red-100/50">
										<CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
										<p className="text-slate-700 text-sm font-medium">Negative RT-PCR swab test (5 days validity) required for admission.</p>
									</div>
									<div className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-red-100/50">
										<CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
										<p className="text-slate-700 text-sm font-medium">Face masks are mandatory in all hospital areas.</p>
									</div>
									<div className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-red-100/50">
										<Ban className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
										<p className="text-slate-700 text-sm font-medium">No visitors allowed in Inpatient Units. Strict "One Watcher" policy.</p>
									</div>
								</div>
							</div>
						</div>

						{/* Guidelines Sections */}
						<InfoCard icon={Users} title="Watchers & Companions">
							<GuidelineItem
								icon={Users}
								title="One Watcher Policy"
								text="Only one (1) watcher is allowed per patient. We discourage frequent changing of watchers to minimize exposure."
							/>
							<GuidelineItem
								icon={ShieldAlert}
								title="ICU Regulations"
								text="Watchers are only permitted for restless, stable, and pediatric ICU patients. Please consult the nurse station."
							/>
							<GuidelineItem
								icon={Ban}
								title="NICU Status"
								text="Visiting is temporarily suspended in the NICU. Parents must await official advice from the attending physician."
							/>
						</InfoCard>

						<InfoCard icon={Info} title="Requirements & Restrictions">
							<GuidelineItem
								icon={Info}
								title="Identification"
								text="Please present a valid ID (PWD, HMO, Government) to the admitting staff immediately upon arrival."
							/>
							<GuidelineItem
								icon={Ban}
								title="Age Restriction"
								text="For their safety, children below 12 years old are discouraged from visiting the hospital premises."
							/>
							<GuidelineItem
								icon={Ban}
								title="Prohibited Items"
								text="Pillows and blankets are not allowed unless newly purchased, with receipts presented to security upon entry."
							/>
						</InfoCard>

						<InfoCard icon={Clock} title="Administrative Notes">
							<GuidelineItem
								icon={Clock}
								title="Discharge Cut-Off"
								text="Daily discharge processing cut-off is at 11:00 AM. Please ensure all documents are ready."
							/>
							<GuidelineItem
								icon={Info}
								title="PhilHealth Claims"
								text="Submit all PhilHealth requirements within 72 hours of admission to avoid delays in bill processing."
							/>
							<GuidelineItem
								icon={AlertCircle}
								title="Financial Assistance"
								text="Note: Private rooms and above are not eligible for government financial assistance programs."
							/>
						</InfoCard>

					</div>

				</div>
			</div>
		</div>
	);
};

export default VisitorsAndWatchers;
