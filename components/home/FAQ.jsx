'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Search, MessageCircleQuestion, HelpCircle } from 'lucide-react';
import React, { useState } from 'react';

const faqData = [
	{
		question: "What are your hospital's operating hours?",
		answer:
			'Our hospital is open 24/7, with outpatient services available from 8:00 AM to 5:00 PM.',
	},
	{
		question: 'Where is your hospital located?',
		answer:
			'Our hospital is located at Avenida Veteranos Street, Tacloban City, Leyte, 6500. Please refer to our Contact Us page for a map and detailed directions.',
	},
	{
		question: 'Do I need an appointment, or do you accept walk-ins?',
		answer:
			'For most specialist consultations, appointments are recommended. However, our emergency department is open 24/7 for walk-in emergencies.',
	},
	{
		question: 'What medical specialties do you offer?',
		answer:
			'We offer a wide range of medical specialties including cardiology, neurology, pediatrics, oncology, and more. Please see our Services page for a comprehensive list.',
	},
	{
		question: 'Do you have emergency services?',
		answer:
			'Yes, our emergency department is open 24 hours a day, 7 days a week to handle all medical emergencies.',
	},
	{
		question: 'Do you provide diagnostic tests like X-rays, MRIs, or lab work?',
		answer:
			'Yes, we have a comprehensive diagnostic center offering X-rays, MRI scans, CT scans, ultrasound, and a full range of laboratory services.',
	},
	{
		question: 'Do you accept health insurance?',
		answer:
			'We accept a wide range of health insurance plans. Please check with our billing department or your insurance provider to confirm coverage.',
	},
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept cash, credit cards (Visa, Mastercard, American Express), and debit cards. Please inquire about other payment options at our billing counter.',
	},
	{
		question: 'How do I request a copy of my medical records?',
		answer:
			'You can request a copy of your medical records by filling out a Medical Records Release Form, available on our website or at our Health Information Management department.',
	},
];

const FAQSection = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredFaqs = faqData.filter(item =>
		item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
		item.answer.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
			{/* Background Blobs for Atmosphere */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
				<div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] bg-primary/2 rounded-full blur-3xl" />
				<div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-secondary/3 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Centered Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6 border border-slate-100">
						<HelpCircle className="w-6 h-6 text-primary" />
					</div>
					<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
						FAQ
					</h2>
					<h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
						How can we help you?
					</h2>
					<p className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto">
						Find answers to common questions about our services, admissions, and policies.
					</p>
				</div>

				{/* Centered Search Bar */}
				<div className="relative max-w-2xl mx-auto mb-16">
					<div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
						<Search className="w-6 h-6" />
					</div>
					<input
						type="text"
						placeholder="Search for answers..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full pl-16 pr-6 py-5 rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-700 text-lg"
					/>
				</div>

				{/* Floating Bubble Accordion */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="space-y-4"
				>
					{filteredFaqs.length > 0 ? (
						<Accordion type="single" collapsible className="space-y-4">
							{filteredFaqs.map((item, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="group bg-white rounded-[2rem] border border-slate-100 px-2 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
								>
									<AccordionTrigger className="px-6 py-6 font-bold font-heading text-slate-800 hover:text-primary text-xl text-left hover:no-underline [&[data-state=open]]:text-primary transition-colors">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed text-lg pt-0">
										<div className="pt-4 border-t border-slate-50">
											{item.answer}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					) : (
						<div className="text-center py-16 bg-white rounded-[2rem] border border-slate-200 border-dashed">
							<MessageCircleQuestion className="mx-auto h-16 w-16 text-slate-300 mb-4" />
							<p className="text-slate-500 text-xl font-medium">No matching questions found.</p>
							<button
								onClick={() => setSearchQuery('')}
								className="text-primary font-bold mt-2 hover:underline text-lg"
							>
								Clear search
							</button>
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
