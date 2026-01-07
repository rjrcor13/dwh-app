// 'use client';

// import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'; // Example icon library
// import React, { useState } from 'react';

// const faqData = [
// 	{
// 		question: "What are your hospital's operating hours?",
// 		answer:
// 			'Our hospital is open 24/7, with outpatient services available from 8:00 AM to 5:00 PM.',
// 	},
// 	{
// 		question: 'Where is your hospital located?',
// 		answer:
// 			'Our hospital is located at [Your Hospital Address]. Please refer to our Contact Us page for a map and detailed directions.',
// 	},
// 	{
// 		question: 'Do I need an appointment, or do you accept walk-ins?',
// 		answer:
// 			'For most specialist consultations, appointments are recommended. However, our emergency department is open 24/7 for walk-in emergencies.',
// 	},
// 	{
// 		question: 'What medical specialties do you offer?',
// 		answer:
// 			'We offer a wide range of medical specialties including cardiology, neurology, pediatrics, oncology, and more. Please see our Services page for a comprehensive list.',
// 	},
// 	{
// 		question: 'Do you have emergency services?',
// 		answer:
// 			'Yes, our emergency department is open 24 hours a day, 7 days a week to handle all medical emergencies.',
// 	},
// 	{
// 		question: 'Do you provide diagnostic tests like X-rays, MRIs, or lab work?',
// 		answer:
// 			'Yes, we have a comprehensive diagnostic center offering X-rays, MRI scans, CT scans, ultrasound, and a full range of laboratory services.',
// 	},
// 	{
// 		question: 'Do you accept health insurance?',
// 		answer:
// 			'We accept a wide range of health insurance plans. Please check with our billing department or your insurance provider to confirm coverage.',
// 	},
// 	{
// 		question: 'What payment methods do you accept?',
// 		answer:
// 			'We accept cash, credit cards (Visa, Mastercard, American Express), and debit cards. Please inquire about other payment options at our billing counter.',
// 	},
// 	{
// 		question: 'How do I request a copy of my medical records?',
// 		answer:
// 			'You can request a copy of your medical records by filling out a Medical Records Release Form, available on our website or at our Health Information Management department.',
// 	},
// ];

// const FAQSection = () => {
// 	const [expandedIndex, setExpandedIndex] = useState(null);

// 	const toggleAccordion = (index) => {
// 		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
// 	};

// 	const cn = (...classes) => {
// 		return classes.filter(Boolean).join(' ');
// 	};

// 	return (
// 		<div className="py-16 bg-blue-50">
// 			{' '}
// 			{/* Main container with padding and light blue background */}
// 			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// 				<h2 className="text-2xl font-bold text-gray-800 mb-2">
// 					Frequently Asked Questions
// 				</h2>
// 				<p className="text-gray-600 mb-8">Quick Answers to Your Questions.</p>

// 				<div className="space-y-4">
// 					{faqData.map((item, index) => (
// 						<div key={index} className="bg-white rounded-md shadow-sm">
// 							<button
// 								className="w-full flex items-center justify-between py-3 px-4 font-semibold text-gray-700 focus:outline-none"
// 								onClick={() => toggleAccordion(index)}
// 							>
// 								<span>{item.question}</span>
// 								{expandedIndex === index ? (
// 									<MinusIcon className="h-5 w-5 text-gray-500" />
// 								) : (
// 									<PlusIcon className="h-5 w-5 text-gray-500" />
// 								)}
// 							</button>
// 							<div
// 								className={cn(
// 									'px-4 py-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden',
// 									expandedIndex === index ? 'block' : 'hidden'
// 								)}
// 							>
// 								{item.answer}
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default FAQSection;
'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Search, MessageCircleQuestion } from 'lucide-react';
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

const FAQSectionShadcn = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const filteredFaqs = faqData.filter(item =>
		item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
		item.answer.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section className="py-24 bg-slate-50" id="faq">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
					{/* Left Sticky Side - Header & Search */}
					<div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<span className="p-2 bg-secondary/20 rounded-lg text-primary">
									<MessageCircleQuestion className="w-6 h-6" />
								</span>
								<h2 className="text-secondary font-bold tracking-wide uppercase text-sm">
									FAQ
								</h2>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4 leading-tight">
								Common Questions & Answers
							</h2>
							<p className="text-slate-600 text-lg leading-relaxed">
								Can't find what you're looking for? Use the search bar or contact our support team.
							</p>
						</div>

						{/* Search Bar */}
						<div className="relative">
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
							<input
								type="text"
								placeholder="Search questions..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-700"
							/>
						</div>
					</div>

					{/* Right Side - Accordion List */}
					<div className="lg:w-2/3">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							{filteredFaqs.length > 0 ? (
								<Accordion type="single" collapsible className="space-y-4">
									{filteredFaqs.map((item, index) => (
										<AccordionItem
											key={index}
											value={`item-${index}`}
											className="bg-white rounded-xl border border-slate-200 px-2 overflow-hidden"
										>
											<AccordionTrigger className="px-4 py-5 font-semibold text-slate-800 hover:text-primary text-lg text-left hover:no-underline [&[data-state=open]]:text-primary active:text-primary transition-colors">
												{item.question}
											</AccordionTrigger>
											<AccordionContent className="px-4 pb-5 text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4">
												{item.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							) : (
								<div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
									<MessageCircleQuestion className="mx-auto h-12 w-12 text-slate-300 mb-3" />
									<p className="text-slate-500 text-lg">No matching questions found.</p>
									<button
										onClick={() => setSearchQuery('')}
										className="text-primary font-semibold mt-2 hover:underline"
									>
										Clear search
									</button>
								</div>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSectionShadcn;
