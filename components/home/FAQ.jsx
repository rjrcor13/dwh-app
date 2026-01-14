'use client';

import { contactInfo } from '@/app/data/contactInfo';
import { doctorsData } from '@/app/data/dummyDoctors';
import { servicesData } from '@/app/data/services';
import {
	Activity,
	ArrowRight,
	Calendar,
	ChevronRight,
	HelpCircle,
	Info,
	MapPin,
	Search,
	Sparkles,
	Stethoscope,
	User,
	X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

// Static FAQs
const staticFaqs = [
	{
		question: "What are your operating hours?",
		answer: "We are open 24/7. Outpatient services are available 8:00 AM - 5:00 PM.",
		keywords: "time, open, close, schedule"
	},
	{
		question: "Where are you located?",
		answer: "Avenida Veteranos Street, Tacloban City, Leyte, 6500.",
		keywords: "address, map, location, directions"
	},
	{
		question: "Do you accept walk-ins?",
		answer: "Yes! Emergency is 24/7. For specialists, we recommend booking, but walk-ins are welcome.",
		keywords: "appointment, booking, emergency"
	},
	{
		question: "Do you accept health insurance?",
		answer: "We accept Maxicare, PhilHealth, and most major providers. Contact billing for specifics.",
		keywords: "hmo, payment, card, insurance"
	},
	{
		question: "How do I get my medical records?",
		answer: "Request them at our HIMD (Health Information) department or download the form online.",
		keywords: "records, result, lab, history"
	},
	{
		question: "Do you offer MRI and CT Scans?",
		answer: "Yes, our Radiology center offers 24/7 X-rays, CT Scans, and MRI services.",
		keywords: "diagnostic, xray, scan, ultrasound"
	},
	{
		question: "Can I visit a patient?",
		answer: "Visiting hours are 9:00 AM - 11:00 AM and 4:00 PM - 8:00 PM daily.",
		keywords: "visitor, guest, ward, room"
	},
	{
		question: "Is there parking available?",
		answer: "Yes, we have a dedicated parking lot for patients and visitors behind the main building.",
		keywords: "car, park, vehicle"
	},
	{
		question: "Do you have a cafeteria?",
		answer: "Our cafeteria is located on the ground floor and serves healthy meals from 6:00 AM to 8:00 PM.",
		keywords: "food, eat, lunch, dinner"
	},
];

const FAQSection = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isThinking, setIsThinking] = useState(false);

	// AI "Knowledge Base" Aggregation
	const knowledgeBase = useMemo(() => {
		let kb = [];

		// 1. Index Doctors
		doctorsData.forEach(doc => {
			kb.push({
				type: 'doctor',
				title: doc.name,
				subtitle: Array.isArray(doc.specialties) ? doc.specialties.join(', ') : doc.specialties,
				content: `Specialist at ${doc.hospital}. Clinics on ${doc.clinicDays.join(', ')}.`,
				data: doc,
				matchString: `${doc.name} ${doc.specialties} doctor physician specialist`.toLowerCase()
			});
		});

		// 2. Index Services
		servicesData.forEach(svc => {
			// Handle Lucide icon (component) vs String
			let iconLabel = 'Service';
			// Simple check if it's a function (component) or string

			kb.push({
				type: 'service',
				title: svc.title,
				subtitle: 'Medical Service',
				content: svc.description,
				data: svc,
				matchString: `${svc.title} ${svc.description} service treatment`.toLowerCase()
			});
		});

		// 3. Index FAQs
		staticFaqs.forEach(faq => {
			kb.push({
				type: 'faq',
				title: faq.question,
				subtitle: 'Common Question',
				content: faq.answer,
				data: faq,
				matchString: `${faq.question} ${faq.answer} ${faq.keywords} help info`.toLowerCase()
			});
		});

		// 4. Index Contact
		contactInfo.forEach(info => {
			kb.push({
				type: 'contact',
				title: info.title,
				subtitle: 'Contact Information',
				content: info.text,
				data: info,
				matchString: `${info.title} ${info.text} contact call email address`.toLowerCase()
			});
		});

		return kb;
	}, []);

	// Search Logic
	const searchResults = useMemo(() => {
		if (!searchQuery || searchQuery.length < 2) return [];

		const terms = searchQuery.toLowerCase().split(' ');

		return knowledgeBase.filter(item => {
			return terms.every(term => item.matchString.includes(term));
		}).slice(0, 6); // Limit results
	}, [searchQuery, knowledgeBase]);

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		if (e.target.value.length > 2) {
			setIsThinking(true);
			setTimeout(() => setIsThinking(false), 300); // Fake AI "thinking" delay
		}
	};

	return (
		<section className="py-16 md:py-24 bg-primary relative overflow-hidden" id="faq">
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />
			{/* Background Atmosphere */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
				<div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Modern Header */}
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-sm mb-6 backdrop-blur-md">
						<Sparkles className="w-4 h-4 text-secondary fill-secondary" />
						<span className="text-xs font-bold uppercase tracking-widest text-blue-100">Smart Assistance</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
						How can we help?
					</h2>
					<p className="text-blue-100/80 text-xl leading-relaxed">
						Ask us anything. Our smart assistant can find doctors, services, policies, and more.
					</p>
				</div>

				{/* AI Search Bar */}
				<div className="relative max-w-3xl mx-auto mb-20 transform transition-all duration-300 hover:-translate-y-1">
					<div className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary z-10 pointer-events-none">
						{isThinking ? (
							<div className="w-6 h-6 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
						) : (
							<Search className="w-6 h-6" />
						)}
					</div>
					<input
						type="text"
						placeholder="Ask about cardiology, visiting hours, or check-ups..."
						value={searchQuery}
						onChange={handleSearch}
						className="w-full pl-16 pr-14 py-6 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl shadow-black/20 focus:bg-white/15 focus:ring-4 focus:ring-white/10 focus:border-white/30 outline-none transition-all placeholder:text-blue-200/50 text-white text-xl font-medium"
					/>
					{searchQuery && (
						<button
							onClick={() => setSearchQuery('')}
							className="absolute right-6 top-1/2 -translate-y-1/2 text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition-colors"
						>
							<X className="w-4 h-4" />
						</button>
					)}
				</div>

				{/* CONTENT AREA: Results OR Grid */}
				<div className="min-h-[400px]">
					{searchQuery.length > 1 ? (
						// --- SEARCH RESULTS ---
						<div className="max-w-4xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
							<div className="flex items-center gap-2 mb-4 text-blue-200 text-sm font-medium px-4">
								<Sparkles className="w-4 h-4" />
								{searchResults.length} results found
							</div>

							{searchResults.length > 0 ? (
								searchResults.map((item, index) => (
									<SearchResultCard key={index} item={item} />
								))
							) : (
								<div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-white/10 border-dashed backdrop-blur-sm">
									<HelpCircle className="mx-auto h-16 w-16 text-white/20 mb-4" />
									<p className="text-blue-100 text-xl font-medium">No matches found.</p>
									<p className="text-blue-300">Try asking differently, e.g., "Heart doctor" or "X-ray"</p>
								</div>
							)}
						</div>
					) : (
						// --- DEFAULT KNOWLEDGE GRID (Top 9 FAQs) ---
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
							{staticFaqs.map((faq, index) => (
								<div
									key={index}
									className="group bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex flex-col items-start h-full"
								>
									<div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
										<Info className="w-5 h-5" />
									</div>
									<h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-secondary transition-colors">
										{faq.question}
									</h3>
									<p className="text-blue-100/70 text-base leading-relaxed">
										{faq.answer}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

// Sub-component for individual search results matches
const SearchResultCard = ({ item }) => {
	switch (item.type) {
		case 'doctor':
			return (
				<div className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all cursor-pointer">
					<div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden shrink-0 border-2 border-white/20 shadow-sm">
						{/* Fallback avatar if no image */}
						<div className="w-full h-full flex items-center justify-center text-white/50">
							<User className="w-8 h-8" />
						</div>
					</div>
					<div className="flex-grow">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded-md">Doctor</span>
						</div>
						<h4 className="text-xl font-bold font-heading text-white">{item.title}</h4>
						<p className="text-blue-200">{item.subtitle}</p>
					</div>
					<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-secondary group-hover:text-white transition-colors">
						<ArrowRight className="w-5 h-5" />
					</div>
				</div>
			);
		case 'service':
			return (
				<div className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all cursor-pointer">
					<div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
						<Stethoscope className="w-8 h-8" />
					</div>
					<div className="flex-grow">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-1 rounded-md">Service</span>
						</div>
						<h4 className="text-xl font-bold font-heading text-white">{item.title}</h4>
						<p className="text-blue-200/70 line-clamp-1">{item.content}</p>
					</div>
					<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-secondary group-hover:text-white transition-colors">
						<ChevronRight className="w-5 h-5" />
					</div>
				</div>
			);
		case 'faq':
			return (
				<div className="group p-6 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all cursor-default">
					<div className="flex items-start gap-4">
						<div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-secondary shrink-0">
							<HelpCircle className="w-4 h-4" />
						</div>
						<div>
							<h4 className="text-lg font-bold font-heading text-white mb-2">{item.title}</h4>
							<p className="text-blue-100/80 leading-relaxed">{item.content}</p>
						</div>
					</div>
				</div>
			);
		default:
			return (
				<div className="group p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:shadow-xl transition-all">
					<h4 className="text-lg font-bold text-white">{item.title}</h4>
					<p className="text-blue-100">{item.content}</p>
				</div>
			);
	}
}

export default FAQSection;
