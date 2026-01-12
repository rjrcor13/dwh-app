'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Mail, Facebook, Globe } from 'lucide-react';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import { Stethoscope } from 'lucide-react'; // Fallback icon
import { cn } from '@/lib/utils';
// We implement manual scroll below, so no external dependency needed.
import { useEffect, useState } from 'react';

// For simplicity and no external deps dependency if possible, let's implement basic id scrolling.
// But `react-scroll` is standard. If not installed, I'll use standard anchor tags with offset logic or simple `document.getElementById`.
// Let's stick to standard `a href="#id"` with CSS `scroll-margin-top` for now to avoid install errors if not present, 
// OR simpler: `element.scrollIntoView`.

const Section = ({ id, title, children, className }) => (
	<section id={id} className={cn("scroll-mt-32 mb-16", className)}>
		{title && (
			<h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6 border-l-4 border-secondary pl-4">
				{title}
			</h2>
		)}
		<div className="text-lg text-blue-100/80 leading-relaxed font-light space-y-4">
			{children}
		</div>
	</section>
);

const ListItem = ({ children }) => (
	<li className="flex items-start gap-3">
		<CheckCircle2 className="w-5 h-5 text-secondary mt-1 shrink-0" />
		<span>{children}</span>
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
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans pb-32">
			{/* Simple Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary to-[#0f0c29] pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

				{/* Header / Breadcrumb */}
				<div className="flex items-center gap-4 mb-12">
					<button
						onClick={() => router.back()}
						className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
					>
						<ArrowLeft className="w-6 h-6" />
					</button>
					<nav className="flex items-center gap-2 text-sm font-medium text-blue-200/60">
						<span>Expertise</span>
						<ChevronRight className="w-4 h-4" />
						<span>Services</span>
						<ChevronRight className="w-4 h-4" />
						<span className="text-white">{title}</span>
					</nav>
				</div>

				<div className="grid lg:grid-cols-12 gap-12">

					{/* LEFT: MAIN CONTENT (8 cols) */}
					<div className="lg:col-span-8">

						{/* Title Block */}
						<div className="mb-12 flex items-center gap-6">
							<div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0">
								{icon ? (
									<DynamicIcons name={icon} className="w-10 h-10 text-secondary" />
								) : (
									<Stethoscope className="w-10 h-10 text-secondary" />
								)}
							</div>
							<h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight">
								{title}
							</h1>
						</div>

						{/* 1. Overview */}
						{fullContent.overview && (
							<Section id="overview" title="Overview">
								<p>{fullContent.overview}</p>
							</Section>
						)}

						{/* 2. Mission & Vision */}
						{fullContent.mission_vision && (
							<Section id="mission" title="Mission & Vision">
								<div className="grid md:grid-cols-2 gap-6">
									{fullContent.mission_vision.mission && (
										<div className="bg-white/5 p-6 rounded-2xl border border-white/5">
											<h4 className="text-secondary font-bold text-sm uppercase mb-3 tracking-wider">Our Mission</h4>
											<p className="italic">&quot;{fullContent.mission_vision.mission}&quot;</p>
										</div>
									)}
									{fullContent.mission_vision.vision && (
										<div className="bg-white/5 p-6 rounded-2xl border border-white/5">
											<h4 className="text-secondary font-bold text-sm uppercase mb-3 tracking-wider">Our Vision</h4>
											<p className="italic">&quot;{fullContent.mission_vision.vision}&quot;</p>
										</div>
									)}
								</div>
							</Section>
						)}

						{/* 3. Team */}
						{(fullContent.leadership_staff || fullContent.staff || fullContent.team || fullContent.staffing) && (
							<Section id="team" title="Our Team">
								<p>{fullContent.leadership_staff || fullContent.staff || fullContent.team || fullContent.staffing}</p>
							</Section>
						)}

						{/* 4. Services Offered */}
						{(fullContent.services_offered || fullContent.services) && (
							<Section id="services" title="Services Offered">
								<ul className="grid sm:grid-cols-2 gap-4">
									{(fullContent.services_offered || []).map((item, i) => (
										<ListItem key={i}>{item}</ListItem>
									))}
									{/* Handle nested services object if simple array not present */}
									{fullContent.services?.general_services?.map((item, i) => (
										<ListItem key={`gen-${i}`}>{item}</ListItem>
									))}
								</ul>
							</Section>
						)}

						{/* 5. Equipment */}
						{fullContent.advanced_equipment && (
							<Section id="equipment" title="Technology">
								<p className="mb-4">We utilize state-of-the-art technology to ensure precision and safety.</p>
								<ul className="grid sm:grid-cols-2 gap-4">
									{fullContent.advanced_equipment.map((item, i) => (
										<ListItem key={i}>{item}</ListItem>
									))}
								</ul>
							</Section>
						)}

						{/* 6. Specialized / Other */}
						{/* Catch-all for specialized lists not covered above */}
						{fullContent.specialized_tests && (
							<Section id="specialized" title="Specialized Procedures">
								{Object.entries(fullContent.specialized_tests).map(([key, items]) => (
									<div key={key} className="mb-6">
										<h4 className="text-lg font-bold text-white mb-3 capitalize">{key.replace(/_/g, ' ')}</h4>
										<ul className="grid sm:grid-cols-2 gap-4">
											{items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
										</ul>
									</div>
								))}
							</Section>
						)}


						{/* 7. Contact Info (Main Body version) */}
						<Section id="contact" title="Contact Us">
							<div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
								<div className="space-y-2">
									<h4 className="text-xl font-bold text-white">Get in Touch</h4>
									<p className="text-blue-100/70">Reach out to our {title} department directly.</p>
								</div>
								<div className="flex flex-col gap-3">
									{fullContent.contact?.number && (
										<a href={`tel:${fullContent.contact.number}`} className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
											<div className="p-2 bg-white/10 rounded-full"><Phone className="w-4 h-4" /></div>
											<span className="font-medium">{fullContent.contact.number}</span>
										</a>
									)}
									{fullContent.contact?.email && (
										<a href={`mailto:${fullContent.contact.email}`} className="flex items-center gap-3 text-white hover:text-secondary transition-colors">
											<div className="p-2 bg-white/10 rounded-full"><Mail className="w-4 h-4" /></div>
											<span className="font-medium">{fullContent.contact.email}</span>
										</a>
									)}
								</div>
							</div>
						</Section>

					</div>


					{/* RIGHT: STICKY NAVIGATION (4 cols) */}
					<div className="hidden lg:block lg:col-span-4 relative">
						<div className="sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
							<h3 className="text-sm font-bold text-blue-200/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
								On This Page
							</h3>
							<nav className="space-y-1">
								{[
									{ id: 'overview', label: 'Overview', show: !!fullContent.overview },
									{ id: 'mission', label: 'Mission & Vision', show: !!fullContent.mission_vision },
									{ id: 'team', label: 'Leadership & Team', show: !!(fullContent.leadership_staff || fullContent.staff || fullContent.team) },
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
												"w-full text-left py-2 px-4 rounded-lg transition-all text-sm font-medium border-l-2",
												activeSection === item.id
													? "bg-secondary/10 text-secondary border-secondary"
													: "text-blue-200/60 hover:text-white hover:bg-white/5 border-transparent"
											)}
										>
											{item.label}
										</button>
									)
								))}
							</nav>

							{/* Call to Action Box */}
							<div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-secondary to-blue-600 text-white shadow-xl">
								<h4 className="font-bold text-lg mb-2">Need Assistance?</h4>
								<p className="text-sm text-blue-100 mb-4">Our team is ready to help you with your health needs.</p>
								<button className="w-full py-3 rounded-xl bg-white text-primary font-bold text-sm hover:shadow-lg transition-shadow">
									Book Appointment
								</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
