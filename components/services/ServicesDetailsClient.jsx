'use client';

import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Mail, Stethoscope, ArrowRight, Brain, Heart, Wrench, Microscope, Clock, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import { cn } from '@/lib/utils';
import AmbientBackground from '@/components/ui/AmbientBackground';

// Reusable Section Component
const Section = ({ id, title, children, className }) => (
	<section id={id} className={cn("scroll-mt-32 mb-16", className)}>
		{title && (
			<h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4 flex items-center gap-3">
				{title}
			</h2>
		)}
		<div className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
			{children}
		</div>
	</section>
);

const ListItem = ({ children }) => (
	<li className="flex items-start gap-3">
		<CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
		<span className="text-sm md:text-base text-slate-700 font-medium">{children}</span>
	</li>
);

export default function ServicesDetailClient({ service }) {
	const router = useRouter();
	const { title, fullContent, icon } = service;
	const [activeSection, setActiveSection] = useState('overview');

	// Scroll Spy Logic
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['overview', 'mission', 'team', 'services', 'equipment', 'specialized', 'contact'];
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top >= 0 && rect.top <= 300) {
						setActiveSection(section);
						break;
					}
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 120; // sticky header height
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
			setActiveSection(id);
		}
	};

	if (!fullContent) return null;

	return (
		<div className="bg-slate-50/50 min-h-screen relative font-sans pb-32">

			{/* --- Ambient Background Mesh --- */}
			<div className="fixed inset-0 pointer-events-none">
				<AmbientBackground variant="light" />
			</div>

			{/* --- BREADCRUMBS (Sticky Top) --- */}
			<div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all mb-12">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center text-sm font-medium text-slate-500">
					<Link href="/home" className="hover:text-primary transition-colors flex items-center gap-2 group">
						<Home className="w-4 h-4 group-hover:text-secondary transition-colors" />
						<span className="hidden sm:inline">Home</span>
					</Link>
					<ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
					<Link href="/expertise" className="hover:text-primary transition-colors">
						Expertise
					</Link>
					<ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
					<Link href="/expertise/services" className="hover:text-primary transition-colors">
						Services
					</Link>
					<ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
					<span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md bg-white/50 px-3 py-1 rounded-full border border-white/50">
						{title}
					</span>
				</div>
			</div>

			<div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">

				<div className="grid lg:grid-cols-12 gap-12 items-start">

					{/* LEFT: STICKY NAVIGATION (4 cols) */}
					<div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">

						{/* Mobile Title */}
						<div className="lg:hidden mb-8">
							<div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase mb-2 border border-blue-100">
								Service Unit
							</div>
							<h1 className="text-4xl font-bold font-heading text-slate-900 leading-tight">
								{title}
							</h1>
						</div>

						<div className="p-6 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm relative overflow-hidden group">
							{/* Icon Background */}
							<div className="absolute -right-4 -top-4 opacity-10 scale-150 rotate-12 transition-transform duration-700 group-hover:rotate-45">
								{icon ? (
									<DynamicIcons name={icon} className="w-32 h-32 text-primary" />
								) : (
									<Stethoscope className="w-32 h-32 text-primary" />
								)}
							</div>

							<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">
								On This Page
							</h3>

							<nav className="space-y-1 relative z-10">
								{[
									{ id: 'overview', label: 'Overview', show: !!fullContent.overview },
									{ id: 'mission', label: 'Mission & Vision', show: !!fullContent.mission_vision },
									{ id: 'team', label: 'Leadership & Team', show: !!(fullContent.leadership_staff || fullContent.staff || fullContent.team || fullContent.staffing) },
									{ id: 'services', label: 'Services Offered', show: !!(fullContent.services_offered || fullContent.services) },
									{ id: 'equipment', label: 'Technology', show: !!fullContent.advanced_equipment },
									{ id: 'specialized', label: 'Specialized Procedures', show: !!fullContent.specialized_tests },
									{ id: 'contact', label: 'Contact Info', show: true },
								].map((item) => (
									item.show && (
										<button
											key={item.id}
											onClick={() => scrollToSection(item.id)}
											className={cn(
												"w-full text-left py-2.5 px-4 rounded-xl transition-all text-sm font-bold flex items-center justify-between",
												activeSection === item.id
													? "bg-white text-primary shadow-sm ring-1 ring-slate-100"
													: "text-slate-500 hover:text-slate-900 hover:bg-white/50"
											)}
										>
											{item.label}
											{activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
										</button>
									)
								))}
							</nav>
						</div>

						{/* Call to Action Box */}
						<div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-blue-800 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
							<div className="relative z-10">
								<h4 className="font-bold text-2xl mb-2 font-heading">Need Assistance?</h4>
								<p className="text-sm text-blue-100 mb-6 leading-relaxed">
									Our team is ready to help you with your health needs.
								</p>
								<button className="w-full py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
									Book Appointment <ArrowRight className="w-4 h-4" />
								</button>
							</div>

							{/* Decor */}
							<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
						</div>

					</div>

					{/* RIGHT: MAIN CONTENT (8 cols) */}
					<div className="lg:col-span-8">

						{/* Title Block (Desktop) */}
						<div className="hidden lg:flex mb-12 flex-col md:flex-row gap-6 md:items-center">
							<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
								{icon ? (
									<DynamicIcons name={icon} className="w-10 h-10 text-primary" />
								) : (
									<Stethoscope className="w-10 h-10 text-primary" />
								)}
							</div>
							<div>
								<div className="inline-block px-3 py-1 rounded-full bg-white border border-blue-100 text-primary text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
									Service Unit
								</div>
								<h1 className="text-5xl font-bold font-heading text-slate-900 leading-tight tracking-tight">
									{title}
								</h1>
							</div>
						</div>

						{/* 1. Overview */}
						{fullContent.overview && (
							<Section id="overview" title="Overview">
								<div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/60 shadow-sm">
									<p className="text-slate-700">{fullContent.overview}</p>
								</div>
							</Section>
						)}

						{/* 2. Mission & Vision */}
						{fullContent.mission_vision && (
							<Section id="mission" title="Mission & Vision">
								<div className="grid md:grid-cols-2 gap-6">
									{fullContent.mission_vision.mission && (
										<div className="bg-white/60 p-8 rounded-[2rem] border border-white/60 shadow-sm">
											<h4 className="text-primary font-bold text-sm uppercase mb-4 tracking-wider flex items-center gap-2">
												<Heart className="w-4 h-4" /> Our Mission
											</h4>
											<p className="italic text-slate-700 font-medium">"{fullContent.mission_vision.mission}"</p>
										</div>
									)}
									{fullContent.mission_vision.vision && (
										<div className="bg-gradient-to-br from-indigo-50/50 to-white p-8 rounded-[2rem] border border-indigo-50 shadow-sm">
											<h4 className="text-primary font-bold text-sm uppercase mb-4 tracking-wider flex items-center gap-2">
												<Brain className="w-4 h-4" /> Our Vision
											</h4>
											<p className="italic text-slate-700 font-medium">"{fullContent.mission_vision.vision}"</p>
										</div>
									)}
								</div>
							</Section>
						)}

						{/* 3. Team */}
						{(fullContent.leadership_staff || fullContent.staff || fullContent.team || fullContent.staffing) && (
							<Section id="team" title="Our Team">
								<div className="bg-white/60 p-8 rounded-[2rem] border border-white/50 shadow-sm">
									<p className="text-slate-700 leading-relaxed whitespace-pre-line">
										{fullContent.leadership_staff || fullContent.staff || fullContent.team || fullContent.staffing}
									</p>
								</div>
							</Section>
						)}

						{/* 4. Services Offered */}
						{(fullContent.services_offered || fullContent.services) && (
							<Section id="services" title="Services Offered">
								<div className="bg-white/60 p-8 rounded-[2rem] border border-white/50">
									<ul className="grid sm:grid-cols-2 gap-4">
										{(fullContent.services_offered || []).map((item, i) => (
											<ListItem key={i}>{item}</ListItem>
										))}
										{fullContent.services?.general_services?.map((item, i) => (
											<ListItem key={`gen-${i}`}>{item}</ListItem>
										))}
									</ul>
								</div>
							</Section>
						)}

						{/* 5. Equipment */}
						{fullContent.advanced_equipment && (
							<Section id="equipment" title="Technology">
								<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
									<div className="flex items-center gap-3 mb-6">
										<div className="p-2 bg-blue-50 text-primary rounded-lg">
											<Wrench className="w-5 h-5" />
										</div>
										<p className="text-slate-900 font-bold">State-of-the-art Equipment</p>
									</div>
									<ul className="grid sm:grid-cols-2 gap-4">
										{fullContent.advanced_equipment.map((item, i) => (
											<ListItem key={i}>{item}</ListItem>
										))}
									</ul>
								</div>
							</Section>
						)}

						{/* 6. Specialized / Other */}
						{fullContent.specialized_tests && (
							<Section id="specialized" title="Specialized Procedures">
								<div className="grid gap-6">
									{Object.entries(fullContent.specialized_tests).map(([key, items]) => (
										<div key={key} className="bg-white/60 p-8 rounded-[2rem] border border-white/50 shadow-sm">
											<h4 className="text-lg font-bold text-slate-900 mb-6 capitalize border-b border-white/50 pb-3 flex items-center gap-2">
												<Microscope className="w-5 h-5 text-secondary" />
												{key.replace(/_/g, ' ')}
											</h4>
											<ul className="grid sm:grid-cols-2 gap-4">
												{items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
											</ul>
										</div>
									))}
								</div>
							</Section>
						)}


						{/* 7. Contact Info */}
						<Section id="contact" title="Contact Us">
							<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden group">
								{/* Decor */}
								<div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

								<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
									<div className="space-y-2">
										<h4 className="text-2xl font-bold font-heading">Get in Touch</h4>
										<p className="text-slate-300 font-light max-w-xs">Reach out to our {title} department directly.</p>
									</div>
									<div className="flex flex-col gap-4 w-full md:w-auto">
										{fullContent.contact?.number && (
											<a href={`tel:${fullContent.contact.number}`} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all group/link">
												<div className="p-2 bg-white rounded-lg text-slate-900"><Phone className="w-5 h-5" /></div>
												<span className="font-bold text-lg">{fullContent.contact.number}</span>
											</a>
										)}
										{fullContent.contact?.email && (
											<a href={`mailto:${fullContent.contact.email}`} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all group/link">
												<div className="p-2 bg-white rounded-lg text-slate-900"><Mail className="w-5 h-5" /></div>
												<span className="font-bold text-lg">{fullContent.contact.email}</span>
											</a>
										)}
									</div>
								</div>
							</div>
						</Section>

					</div>

				</div>
			</div>
		</div>
	);
}
