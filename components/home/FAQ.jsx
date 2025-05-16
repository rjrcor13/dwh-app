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
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
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
			'Our hospital is located at [Your Hospital Address]. Please refer to our Contact Us page for a map and detailed directions.',
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
	return (
		<div className="py-16 bg-blue-50">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					Frequently Asked Questions
				</h2>
				<p className="text-gray-600 mb-8">Quick Answers to Your Questions.</p>

				<Accordion type="single" collapsible>
					{faqData.map((item, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-white rounded-lg my-2 shadow-md"
						>
							<AccordionTrigger className="w-full flex items-left justify-between py-3 px-4 font-semibold text-gray-700 focus:outline-none">
								<span>{item.question}</span>

								<span className="sr-only">Toggle</span>
							</AccordionTrigger>
							<AccordionContent className="px-4 py-3 text-gray-600">
								{item.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQSectionShadcn;
