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
	MapPin
} from 'lucide-react';
import React from 'react';

// --- Components ---

const InfoCard = ({ icon: Icon, title, children, className }) => (
	<div className={cn("bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8", className)}>
		<div className="flex items-center gap-3 mb-4">
			<div className="p-2 rounded-lg bg-white/5 text-secondary">
				<Icon className="w-5 h-5" />
			</div>
			<h3 className="font-bold text-lg text-white">{title}</h3>
		</div>
		<div className="text-blue-100/70 leading-relaxed text-sm md:text-base space-y-4">
			{children}
		</div>
	</div>
);

const GuidelineItem = ({ icon: Icon, title, text }) => (
	<div className="flex gap-4 items-start p-4 hover:bg-white/5 rounded-2xl transition-colors">
		<div className="mt-1 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
			<Icon className="w-4 h-4" />
		</div>
		<div>
			<h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">{title}</h4>
			<p className="text-blue-100/60 text-sm leading-relaxed">{text}</p>
		</div>
	</div>
);

// --- Main Page ---

const VisitorsAndWatchers = () => {

	return (
		<div className="bg-primary min-h-screen relative font-sans selection:bg-secondary/30 selection:text-white pb-32 pt-32">

			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary to-primary pointer-events-none" />
			<div className="fixed top-20 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

					{/* LEFT COLUMN: Sticky Info (4 cols) */}
					<div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">

						{/* Header */}
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold tracking-widest uppercase mb-4">
								<Users className="w-4 h-4 text-secondary" />
								<span>Visitor Center</span>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-4">
								Plan Your<br />Visit
							</h1>
							<p className="text-blue-100/60 text-lg">
								We welcome visitors as partners in care. Please review our schedule and guidelines.
							</p>
						</div>

						{/* Clock Widget */}
						<div className="bg-gradient-to-br from-secondary/20 to-blue-900/10 border border-secondary/30 rounded-[2.5rem] p-8 relative overflow-hidden text-center">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/20 rounded-full blur-[50px] pointer-events-none" />

							<div className="relative z-10 flex flex-col items-center">
								<h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Visiting Hours</h3>
								<div className="text-5xl font-bold text-white font-heading mb-1 tracking-tight">
									3:00 <span className="text-2xl text-white/50">PM</span>
								</div>
								<div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent my-2" />
								<div className="text-5xl font-bold text-white font-heading mb-6 tracking-tight">
									6:00 <span className="text-2xl text-white/50">PM</span>
								</div>

								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
									<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
									Open Daily
								</div>
							</div>
						</div>

						{/* Quick Contacts */}
						<div className="bg-white/5 border border-white/10 rounded-3xl p-6">
							<h4 className="font-bold text-white mb-4 flex items-center gap-2">
								<MapPin className="w-4 h-4 text-secondary" /> Locations
							</h4>
							<ul className="space-y-4 text-sm text-blue-100/60">
								<li className="flex justify-between border-b border-white/5 pb-2">
									<span>Main Entrance</span>
									<span className="text-white">Lobby, Ground Floor</span>
								</li>
								<li className="flex justify-between border-b border-white/5 pb-2">
									<span>Admitting Section</span>
									<span className="text-white">Ground Floor</span>
								</li>
								<li className="flex justify-between">
									<span>Claims Office</span>
									<span className="text-white">2nd Floor</span>
								</li>
							</ul>
						</div>

					</div>

					{/* RIGHT COLUMN: Scrolling Content (7 cols) */}
					<div className="lg:col-span-7 space-y-8">

						{/* COVID Alert */}
						<div className="bg-red-950/30 border border-red-500/20 rounded-[2rem] p-8">
							<div className="flex items-center gap-3 mb-6">
								<ShieldAlert className="w-6 h-6 text-red-500" />
								<h3 className="text-2xl font-bold text-white">Safety Protocols</h3>
							</div>
							<div className="space-y-4">
								<div className="flex gap-4">
									<CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-1" />
									<p className="text-red-100/70 text-sm">Negative RT-PCR swab test (5 days validity) required for admission.</p>
								</div>
								<div className="flex gap-4">
									<CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-1" />
									<p className="text-red-100/70 text-sm">Face masks are mandatory in all hospital areas.</p>
								</div>
								<div className="flex gap-4">
									<Ban className="w-5 h-5 text-red-500 shrink-0 mt-1" />
									<p className="text-red-100/70 text-sm">No visitors allowed in Inpatient Units. Strict "One Watcher" policy.</p>
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
