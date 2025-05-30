'use client';

import { departmentsData } from '@/app/data/departments';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Import Tabs components
import { motion } from 'framer-motion';
import {
	Baby,
	Bone,
	Brain,
	Dna,
	Ear,
	Eye,
	Heart,
	Hospital,
	Kidney,
	Lungs,
	Microscope,
	Stethoscope,
	Syringe,
	Users,
	X,
} from 'lucide-react'; // More specific icons
import { useState } from 'react';

// Data for all departments

// Framer Motion variants for section animation
const sectionVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
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

const DepartmentsPage = () => {
	// Set the default tab to the first department's ID
	const [activeTab, setActiveTab] = useState(
		departmentsData[0]?.id || 'anesthesiology'
	);

	// Component to render the content of a single department
	const DepartmentContent = ({ department }) => (
		<Card className="shadow-none border-none h-full flex flex-col ">
			<CardHeader className="">
				<CardTitle className="md:text-3xl text-xl font-bold text-primary flex items-center gap-3">
					{department.icon && (
						<department.icon className="md:w-9 md:h-9 text-primary" />
					)}
					{department.name}
				</CardTitle>
				{department.chairperson && (
					<p className="text-gray-600 mt-2 text-base  ">
						{department.chairperson.title}:{' '}
						<span className="font-medium">{department.chairperson.name}</span>
					</p>
				)}
			</CardHeader>
			<CardContent className="flex-grow space-y-6 text-gray-700 text-justify">
				<p className="leading-relaxed text-base">{department.description}</p>

				{department.vision && (
					<div>
						<h3 className="text-xl font-semibold mb-2 text-primary">Vision</h3>
						<p className="leading-relaxed text-base">{department.vision}</p>
					</div>
				)}

				{department.mission && (
					<div>
						<h3 className="text-xl font-semibold  mb-2 text-primary">
							Mission
						</h3>
						<ul className="list-disc list-inside space-y-1 leading-relaxed text-base">
							{Array.isArray(department.mission) ? (
								department.mission.map((item, i) => <li key={i}>{item}</li>)
							) : (
								<li>{department.mission}</li>
							)}
						</ul>
					</div>
				)}

				{department.objectives && (
					<div>
						<h3 className="text-xl font-semibold text-primary mb-2 ">
							Objectives
						</h3>
						{department.objectives.qualityPatientCare && (
							<div className="mb-4">
								<h4 className="font-medium text-gray-700 mb-1 text-base">
									A. Quality Patient Care
								</h4>
								<ul className="list-disc list-inside space-y-1 leading-relaxed text-base">
									{department.objectives.qualityPatientCare.map((obj, i) => (
										<li key={i}>{obj}</li>
									))}
								</ul>
							</div>
						)}
						{department.objectives.teachingTrainingResearch && (
							<div>
								<h4 className="font-medium text-gray-700 mb-1 text-base">
									B. Teaching, Training and Research
								</h4>
								<ul className="list-disc list-inside space-y-1 leading-relaxed text-base">
									{department.objectives.teachingTrainingResearch.map(
										(obj, i) => (
											<li key={i}>{obj}</li>
										)
									)}
								</ul>
							</div>
						)}
					</div>
				)}

				{department.sections && (
					<div>
						<h3 className="text-xl font-semibold text-primary mb-2">
							Sections
						</h3>
						<ul className="list-disc list-inside space-y-1 leading-relaxed text-base grid grid-cols-1 sm:grid-cols-2">
							{department.sections.map((section, i) => (
								<li key={i}>{section}</li>
							))}
						</ul>
					</div>
				)}

				{department.subspecialties && (
					<div>
						<h3 className="text-xl font-semibold text-primary mb-2">
							Subspecialties
						</h3>
						<ul className="list-disc list-inside space-y-1 leading-relaxed text-base grid grid-cols-1 sm:grid-cols-2">
							{department.subspecialties.map((specialty, i) => (
								<li key={i}>{specialty}</li>
							))}
						</ul>
					</div>
				)}

				{department.services && (
					<div>
						<h3 className="text-xl font-semibold text-primary mb-2">
							Services
						</h3>
						<ul className="list-disc list-inside space-y-1 leading-relaxed text-base">
							{department.services.map((service, i) => (
								<li key={i}>{service}</li>
							))}
						</ul>
					</div>
				)}

				{department.procedures && (
					<div>
						<h3 className="text-xl font-semibold text-primary mb-2">
							Procedures
						</h3>
						<div className="grid grid-cols-2 gap-8">
							{Object.entries(department.procedures).map(
								([category, procs]) => (
									<div key={category} className="mb-4">
										<h4 className="font-medium text-gray-700 capitalize mb-1 text-base">
											{category.replace(/([A-Z])/g, ' $1').trim()}
										</h4>
										<ul className="list-disc list-inside space-y-1 leading-relaxed text-base">
											{procs.map((proc, i) => (
												<li key={i}>{proc}</li>
											))}
										</ul>
									</div>
								)
							)}
						</div>
					</div>
				)}

				{department.specialties && (
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Specialties
						</h3>
						<ul className="list-disc list-inside space-y-1 leading-relaxed text-base grid grid-cols-1 sm:grid-cols-2">
							{department.specialties.map((specialty, i) => (
								<li key={i}>{specialty}</li>
							))}
						</ul>
					</div>
				)}

				{department.concludingStatement && (
					<p className="leading-relaxed mt-4 text-base">
						{department.concludingStatement}
					</p>
				)}
			</CardContent>
		</Card>
	);

	return (
		<div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8_ mt-12_">
			<motion.div
				initial="hidden"
				animate="visible"
				variants={sectionVariants}
				className="max-w-7xl mx-auto"
			>
				{/* Header Section */}
				<motion.div variants={itemVariants} className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight mb-4">
						Our Specialized Departments
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Divine Word Hospital is home to a diverse range of specialized
						departments, each committed to providing exceptional patient care,
						advanced medical training, and innovative research.
					</p>
				</motion.div>

				{/* Desktop Tabbed Departments Section */}
				<div className="hidden md:flex gap-8">
					<aside className="w-64 flex-shrink-0 mt-5">
						<div className="flex flex-col">
							{departmentsData.map((department) => (
								<button
									key={department.id}
									onClick={() => setActiveTab(department.id)}
									className={`py-3 px-4 text-left flex items-center rtransition gap-2 ${
										activeTab === department.id
											? 'bg-primary text-white font-semibold rounded-md'
											: 'hover:bg-muted'
									}`}
								>
									{department.icon && <department.icon className="w-8 h-8" />}
									{department.name}
								</button>
							))}
						</div>
					</aside>

					{/* Right Content Area (TabsContent equivalent) */}
					<div className="flex-1">
						{departmentsData.map(
							(department) =>
								activeTab === department.id && (
									<motion.div
										key={department.id} // Key for motion.div when conditionally rendered
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, ease: 'easeOut' }}
									>
										<DepartmentContent department={department} />
									</motion.div>
								)
						)}
					</div>
				</div>

				{/* Mobile Accordion Section */}
				<div className="block lg:hidden">
					<Accordion
						type="single"
						collapsible
						className="w-full"
						value={activeTab}
						onValueChange={setActiveTab}
					>
						{departmentsData.map((department) => (
							<AccordionItem
								key={department.id}
								value={department.id}
								className="px-4 border-none"
							>
								<AccordionTrigger className="text-left border-b text-md">
									<div
										className={`flex flex-row items-center gap-2 font-semibold text-primary pb-2 transition-all ${
											department.value === activeTab ? 'pl-4' : ''
										}`}
									>
										{department.icon && <department.icon className="w-6 h-6" />}
										{department.name}
									</div>
								</AccordionTrigger>
								<AccordionContent className="p-0">
									<DepartmentContent department={department} />
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</motion.div>
		</div>
	);
};

export default DepartmentsPage;
