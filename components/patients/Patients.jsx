'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence

import React, { useState } from 'react';

const sectionVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
			staggerChildren: 0.2,
			when: 'beforeChildren',
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// New variants for tab content transition
const contentVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const PatientsPage = ({ tabList, patientsData }) => {
	const [activeTab, setActiveTab] = useState(tabList[0].value);

	const renderContent = (contentKey) => {
		const content = patientsData[contentKey];

		if (!content) {
			return <p>Content not found for this section.</p>;
		}

		if (contentKey === 'admission' || contentKey === 'discharge') {
			return (
				<Card className="shadow-none border-none">
					<CardHeader className="hidden md:block  p-4 ">
						<CardTitle className="text-3xl font-bold text-left text-primary border-b pb-2 ">
							{content.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-gray-700  p-4 rounded-md -mt-8 ">
						{content.intro && <p className="text-justify">{content.intro}</p>}
						<div className="space-y-8">
							{content.sections.map((section, index) => (
								<div key={index} className="space-y-2">
									<p
										className={`font-semibold md:text-xl text-lg normal-case  ${
											section.isPrimaryText ? 'text-primary' : ''
										}`}
									>
										{section.heading}
									</p>
									{section.paragraphs.map((para, pIdx) => (
										<p
											key={pIdx}
											className="flex text-justify text-sm sm:text-base "
										>
											{para}
										</p>
									))}
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			);
		} else if (contentKey === 'rooms') {
			return (
				<Card className="shadow-none border-none">
					<CardHeader className="hidden md:block  p-4 ">
						<CardTitle className="text-3xl font-bold text-left text-primary border-b pb-2 ">
							{content.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-gray-700  p-4 rounded-md -mt-4 ">
						<p className="mb-2 text-sm sm:text-base">{content.intro}</p>
						<ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
							{content.listItems.map((item, index) => (
								<li key={index}>
									<span className="font-semibold text-primary">
										{item.term}
									</span>{' '}
									{item.description}
								</li>
							))}
						</ul>
						{content.concludingParagraph && (
							<p className="mt-4 text-sm sm:text-base">
								{content.concludingParagraph}
							</p>
						)}
					</CardContent>
				</Card>
			);
		} else if (contentKey === 'rights') {
			return (
				<Card className="shadow-none border-none">
					<CardHeader className="hidden md:block  p-4 ">
						<CardTitle className="text-3xl font-bold text-left text-primary border-b pb-2 ">
							{content.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-gray-700  p-4 rounded-md -mt-4 ">
						{content.sections.map((section, sIdx) => (
							<div key={sIdx}>
								<h3 className="font-semibold text-primary mb-2 text-lg sm:text-xl">
									{section.heading}
								</h3>
								{section.intro && (
									<div className="space-y-4">
										<p className="text-justify text-sm sm:text-base">
											{section.intro}
										</p>
										<div className="bg-gray-50 rounded p-2">
											<span className="italic text-xs sm:text-sm text-gray-500">
												{section.introTagalog}
											</span>
										</div>
									</div>
								)}
								<ol className="list-decimal list-outside space-y-6 sm:space-y-8 mt-4 sm:mt-8 pl-5">
									{section.items.map((item, itemIdx) => (
										<li
											key={itemIdx}
											className="text-justify text-sm sm:text-base"
										>
											{item.text} <br />
											<div className="bg-gray-50 rounded p-2 mt-2">
												<span className="italic text-xs sm:text-sm text-gray-500">
													{item.tagalog}
												</span>
											</div>
										</li>
									))}
								</ol>
								{sIdx < content.sections.length - 1 && (
									<Separator className="my-6" />
								)}
							</div>
						))}
					</CardContent>
				</Card>
			);
		}
		return null;
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={sectionVariants}
			className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
		>
			{/* Header Section */}
			<motion.div variants={itemVariants} className="mb-8 text-center">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
					Patients Guide
				</h1>
				{/* <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-2">
					Patients
				</h2> */}
				<p className="text-base sm:text-lg text-gray-600 px-4 max-w-3xl mx-auto">
					Information and guidelines for our patients at Divine Word Hospital.
				</p>
			</motion.div>

			{/* Desktop Sidebar (Tabs-like navigation) */}
			<div className="hidden md:flex gap-6 lg:gap-8">
				<aside className="w-56 lg:w-64 flex-shrink-0 mt-5">
					<div className="flex flex-col">
						{tabList.map((tab) => (
							<motion.button // Apply motion to the button for subtle hover/active effects if desired
								key={tab.value}
								className={`py-3 px-4 text-left flex items-center rounded-md transition text-base lg:text-lg ${
									activeTab === tab.value
										? 'bg-primary text-white font-semibold'
										: 'hover:bg-muted'
								}`}
								onClick={() => setActiveTab(tab.value)}
								whileHover={{ scale: 1.02 }} // Example hover effect
								whileTap={{ scale: 0.98 }} // Example tap effect
							>
								{tab.icon} {tab.label}
							</motion.button>
						))}
					</div>
				</aside>
				{/* Content next to sidebar */}
				<div className="flex-grow">
					{/* Use AnimatePresence to animate components leaving and entering */}
					<AnimatePresence mode="wait">
						{' '}
						{/* 'wait' mode waits for exit animation to complete before new component mounts */}
						<motion.div
							key={activeTab} // Crucial: change key to trigger re-render and animation
							variants={contentVariants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							{renderContent(activeTab)}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>

			{/* Mobile View Accordion */}
			<div className="block md:hidden">
				<Accordion
					type="single"
					collapsible
					className="w-full"
					value={activeTab}
					onValueChange={(val) => setActiveTab(val)}
				>
					{tabList.map((tab) => (
						<AccordionItem
							key={tab.value}
							value={tab.value}
							className="border-b border-gray-200"
						>
							<AccordionTrigger className="flex items-center justify-between gap-3 p-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
								<div
									className={`flex flex-row items-center font-semibold text-primary pb-1 transition-all ${
										tab.value === activeTab ? 'pl-2 font-bold' : ''
									}`}
								>
									{tab.icon}{' '}
									<span className="text-base_ text-xl">{tab.label}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="p-3">
								{/* For AccordionContent, Framer Motion transitions are often handled by the Accordion component itself if it's built with motion, or by wrapping the content inside it. */}
								{/* Since AccordionContent is usually not directly a motion.div for simple animations,
                                    we'll apply the transition directly to the rendered content. */}
								<AnimatePresence mode="wait">
									<motion.div
										key={tab.value + '-accordion-content'} // Unique key for accordion content
										variants={contentVariants}
										initial="initial"
										animate="animate"
										exit="exit"
									>
										{renderContent(tab.value)}
									</motion.div>
								</AnimatePresence>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</motion.div>
	);
};

export default PatientsPage;
