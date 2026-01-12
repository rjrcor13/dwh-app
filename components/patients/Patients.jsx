'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
	BedDouble,
	CheckCircle2,
	ChevronRight,
	FileText,
	ShieldAlert,
	AlignLeft,
	ArrowRight
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

// --- Editorial Components ---

const SectionHeader = ({ title, icon: Icon, id }) => (
	<div id={id} className="scroll-mt-32 mb-8 items-center gap-4 border-b border-white/10 pb-6">
		<div className="flex items-center gap-4 mb-2">
			<div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold font-heading shadow-lg shadow-secondary/20">
				<Icon className="w-5 h-5" />
			</div>
			<h2 className="text-3xl md:text-4xl font-bold font-heading text-white">{title}</h2>
		</div>
	</div>
);

const ArticleCard = ({ children, className }) => (
	<div className={cn("bg-white/5 border border-white/10 p-8 rounded-[2rem] mb-8", className)}>
		{children}
	</div>
);

const BulletList = ({ items }) => (
	<ul className="space-y-4">
		{items.map((item, i) => (
			<li key={i} className="flex items-start gap-3">
				<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
				<span className="text-blue-100/70 leading-relaxed text-lg">{item}</span>
			</li>
		))}
	</ul>
);

// --- Main Page ---

const PatientsPage = ({ patientsData }) => {
	const [activeId, setActiveId] = useState('admission');
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	// toc scroll spy
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['admission', 'discharge', 'rooms', 'rights'];
			const scrollPos = window.scrollY + 200;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPos && (element.offsetTop + element.offsetHeight) > scrollPos) {
					setActiveId(section);
				}
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.offsetTop - 120,
				behavior: 'smooth'
			});
		}
	};

	const toc = [
		{ id: 'admission', label: 'Admission Protocol', icon: FileText },
		{ id: 'discharge', label: 'Discharge Process', icon: CheckCircle2 },
		{ id: 'rooms', label: 'Rooms & Rates', icon: BedDouble },
		{ id: 'rights', label: 'Patient Rights', icon: ShieldAlert },
	];

	if (!patientsData) return null;

	return (
		<div className="bg-primary min-h-screen relative font-sans selection:bg-secondary/30 selection:text-white pb-32 pt-24">

			{/* Progress Bar (Reading Indicator) */}
			<motion.div
				className="fixed top-20 left-0 right-0 h-1 bg-secondary origin-left z-40"
				style={{ scaleX }}
			/>

			{/* Background */}
			<div className="fixed inset-0 bg-primary pointer-events-none" />
			<div className="fixed right-0 top-0 w-1/3 h-full bg-white/5 pointer-events-none hidden lg:block border-l border-white/5" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

					{/* LEFT COLUMN: Main Content (8 cols) */}
					<article className="lg:col-span-8 space-y-20 pt-16">

						{/* Title Block */}
						<div className="space-y-6 mb-20">
							<span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
								<AlignLeft className="w-4 h-4" />
								Official Guide
							</span>
							<h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight">
								Patient<br />Handbook.
							</h1>
							<p className="text-xl md:text-2xl text-blue-100/60 font-light max-w-2xl leading-relaxed border-l-4 border-secondary pl-6">
								Your comprehensive resource for a comfortable and informed stay at Divine Word Hospital.
							</p>
						</div>

						{/* 1. Admission Content */}
						<section>
							<SectionHeader id="admission" title="Admission" icon={FileText} />
							<div className="prose prose-invert prose-lg max-w-none text-blue-100/70">
								<p className="lead text-xl text-white font-medium mb-8 block">
									{patientsData.admission.sections[0].paragraphs[0]}
								</p>

								<div className="grid gap-8">
									{patientsData.admission.sections.slice(1).map((sec, idx) => (
										<div key={idx}>
											<h3 className="text-white font-bold text-xl mb-3 flex items-center gap-3">
												{sec.heading}
											</h3>
											<ArticleCard className="bg-gradient-to-br from-white/5 to-transparent">
												{sec.paragraphs.map((p, i) => (
													<p key={i} className="mb-4 last:mb-0 leading-relaxed">{p}</p>
												))}
											</ArticleCard>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* 2. Discharge Content */}
						<section>
							<SectionHeader id="discharge" title="Discharge" icon={CheckCircle2} />
							<ArticleCard className="border-secondary/20 bg-gradient-to-br from-secondary/10 to-blue-900/10">
								<h3 className="text-2xl font-bold text-white mb-6">Process Overview</h3>
								<div className="space-y-8">
									{patientsData.discharge.sections.map((sec, idx) => (
										<div key={idx} className="flex gap-4">
											<div className="w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 mt-1">
												{idx + 1}
											</div>
											<div>
												<h4 className="text-white font-bold text-lg mb-2">{sec.heading}</h4>
												<p className="text-blue-100/70">{sec.paragraphs[0]}</p>
											</div>
										</div>
									))}
								</div>
							</ArticleCard>
						</section>

						{/* 3. Rooms Content */}
						<section>
							<SectionHeader id="rooms" title="Accommodations" icon={BedDouble} />
							<p className="text-xl text-blue-100/60 mb-8">{patientsData.rooms.intro}</p>

							<div className="grid md:grid-cols-2 gap-4">
								{patientsData.rooms.listItems.map((item, idx) => (
									<div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors group">
										<h4 className="text-white font-bold text-lg mb-2 group-hover:text-secondary transition-colors">
											{item.term.replace(':', '')}
										</h4>
										<p className="text-blue-100/60 leading-relaxed text-sm">
											{item.description}
										</p>
									</div>
								))}
							</div>
						</section>

						{/* 4. Rights Content */}
						<section>
							<SectionHeader id="rights" title="Rights & Responsibilities" icon={ShieldAlert} />

							<div className="space-y-12">
								{patientsData.rights.sections.map((sec, sIdx) => (
									<div key={sIdx}>
										<div className="flex items-center gap-3 mb-6">
											<h3 className="text-2xl font-bold text-white uppercase tracking-wide">
												{sec.heading}
											</h3>
											<div className="h-px flex-1 bg-white/10" />
										</div>

										<div className="space-y-6">
											{sec.items.map((item, i) => (
												<div key={i} className="pl-6 border-l-2 border-white/10 hover:border-secondary transition-colors">
													<p className="text-white text-lg leading-relaxed mb-2 font-medium">
														{item.text}
													</p>
													<p className="text-blue-200/40 italic">
														{item.tagalog}
													</p>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</section>

					</article>


					{/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
					<aside className="hidden lg:block lg:col-span-4 relative">
						<div className="sticky top-32">
							<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
								<h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-6">
									On This Page
								</h3>
								<nav className="space-y-1">
									{toc.map((item) => {
										const isActive = activeId === item.id;
										const Icon = item.icon;
										return (
											<button
												key={item.id}
												onClick={() => scrollTo(item.id)}
												className={cn(
													"w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group",
													isActive
														? "bg-secondary text-white shadow-lg shadow-secondary/25"
														: "text-blue-200/50 hover:bg-white/5 hover:text-white"
												)}
											>
												<Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-white/40 group-hover:text-white")} />
												<span className="font-bold text-sm tracking-wide">{item.label}</span>
												{isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
											</button>
										);
									})}
								</nav>

								<div className="mt-8 pt-6 border-t border-white/10">
									<p className="text-blue-200/40 text-xs leading-relaxed mb-4">
										Need assistance? Our admission desk is open 24/7.
									</p>
									<button className="flex items-center gap-2 text-white font-bold text-sm hover:text-secondary transition-colors">
										Contact Support <ArrowRight className="w-4 h-4" />
									</button>
								</div>
							</div>
						</div>
					</aside>

				</div>
			</div>
		</div>
	);
};

export default PatientsPage;
