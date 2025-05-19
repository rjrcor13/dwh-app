// 'use client';
// import { Button } from '@/components/ui/button';
// import { CardContent } from '@/components/ui/card';
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogDescription,
// 	DialogHeader,
// 	DialogTitle,
// } from '@/components/ui/dialog';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const jobListings = [
// 	{
// 		title: 'Registered Nurse',
// 		department: 'Nursing Services',
// 		type: 'Full-Time',
// 		location: 'Tacloban City',
// 		description:
// 			'Provide high-quality patient care and collaborate with a multidisciplinary team. Must be a board passer with updated licenses and trainings.',
// 		image: '/assets/job-listing.webp',
// 		responsibilities: [
// 			'Administer medications and treatments as prescribed.',
// 			'Monitor patient health and progress.',
// 			'Coordinate care with healthcare team.',
// 		],
// 		qualifications: [
// 			'Valid PRC license.',
// 			"Bachelor's degree in Nursing.",
// 			'BLS/ACLS certification preferred.',
// 		],
// 	},
// 	{
// 		title: 'Medical Technologist',
// 		department: 'Laboratory',
// 		type: 'Full-Time',
// 		location: 'Tacloban City',
// 		description:
// 			'Conduct medical laboratory tests, ensure the accuracy of results, and maintain compliance with safety protocols. Experience preferred.',
// 		image: '/assets/job-listing.webp',
// 		responsibilities: [
// 			'Perform laboratory testing accurately and efficiently.',
// 			'Ensure equipment is maintained and calibrated.',
// 			'Document and communicate test results effectively.',
// 		],
// 		qualifications: [
// 			"Bachelor's degree in Medical Technology.",
// 			'Valid PRC license.',
// 			'Experience in clinical lab setting is a plus.',
// 		],
// 	},
// 	{
// 		title: 'HR Assistant',
// 		department: 'Human Resources',
// 		type: 'Part-Time',
// 		location: 'Tacloban City',
// 		description:
// 			'Assist in HR operations including recruitment, documentation, and compliance. Excellent communication skills are a must.',
// 		image: '/assets/job-listing.webp',
// 		responsibilities: [
// 			'Assist in employee onboarding and records management.',
// 			'Support recruitment activities.',
// 			'Coordinate HR events and training sessions.',
// 		],
// 		qualifications: [
// 			'Bachelor’s degree in Psychology, HRDM, or related field.',
// 			'Good organizational and interpersonal skills.',
// 			'Experience in an HR role is an advantage.',
// 		],
// 	},
// ];

// export default function CareersPage() {
// 	const [jobs, setJobs] = useState([]);
// 	const [selectedJob, setSelectedJob] = useState(null);

// 	useEffect(() => {
// 		setJobs(jobListings); // Simulating API fetch
// 	}, []);

// 	return (
// 		<main className="px-4 md:px-10 py-16 max-w-7xl mx-auto">
// 			<section className="text-center space-y-6 mb-16">
// 				<motion.h1
// 					initial={{ opacity: 0, y: -20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.6 }}
// 					className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
// 				>
// 					Join Our Mission of Healing
// 				</motion.h1>
// 				<motion.p
// 					initial={{ opacity: 0, y: 10 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ delay: 0.2, duration: 0.5 }}
// 					className="text-muted-foreground text-lg max-w-2xl mx-auto"
// 				>
// 					Be part of Divine Word Hospital — a compassionate, progressive, and
// 					faith-driven healthcare institution.
// 				</motion.p>
// 			</section>

// 			<section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
// 				{jobs.map((job, index) => (
// 					<motion.div
// 						key={index}
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.4, delay: index * 0.1 }}
// 						className="bg-white rounded-xl overflow-hidden shadow-md border hover:shadow-xl transition"
// 					>
// 						<div className="relative w-full h-48">
// 							<Image
// 								src={job.image}
// 								alt={job.title}
// 								fill
// 								className="object-cover w-full h-full"
// 								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
// 							/>
// 						</div>
// 						<CardContent className="p-6 flex flex-col gap-4">
// 							<div className="space-y-1">
// 								<h3 className="text-xl font-semibold text-primary">
// 									{job.title}
// 								</h3>
// 								<p className="text-sm text-muted-foreground">
// 									{job.department}
// 								</p>
// 								<p className="text-sm text-muted-foreground">
// 									{job.location} • {job.type}
// 								</p>
// 							</div>
// 							<p className="text-sm text-gray-600 flex-grow line-clamp-3">
// 								{job.description}
// 							</p>
// 							<Button
// 								onClick={() => setSelectedJob(job)}
// 								className="w-full mt-4"
// 							>
// 								View Details
// 							</Button>
// 						</CardContent>
// 					</motion.div>
// 				))}
// 			</section>

// 			<Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
// 				{selectedJob && (
// 					<DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
// 						<DialogHeader>
// 							<DialogTitle>{selectedJob.title}</DialogTitle>
// 							<DialogDescription className="text-sm text-muted-foreground">
// 								{selectedJob.department} • {selectedJob.location} •{' '}
// 								{selectedJob.type}
// 							</DialogDescription>
// 						</DialogHeader>
// 						<div className="relative w-full h-96 rounded-md overflow-hidden mb-4">
// 							<Image
// 								src={selectedJob.image}
// 								alt={selectedJob.title}
// 								fill
// 								className="object-cover"
// 							/>
// 						</div>
// 						<div className="space-y-4">
// 							<div>
// 								<h4 className="text-md font-semibold text-primary">
// 									Key Responsibilities
// 								</h4>
// 								<ul className="list-disc list-inside text-sm text-gray-700">
// 									{selectedJob.responsibilities.map((item, idx) => (
// 										<li key={idx}>{item}</li>
// 									))}
// 								</ul>
// 							</div>
// 							<div>
// 								<h4 className="text-md font-semibold text-primary">
// 									Qualifications
// 								</h4>
// 								<ul className="list-disc list-inside text-sm text-gray-700">
// 									{selectedJob.qualifications.map((item, idx) => (
// 										<li key={idx}>{item}</li>
// 									))}
// 								</ul>
// 							</div>
// 							<div className="border-t pt-4 text-sm text-muted-foreground">
// 								<p>
// 									Submit your resume to:{' '}
// 									<a
// 										href="mailto:hr@divinewordhospital.com"
// 										className="text-primary underline"
// 									>
// 										hr@divinewordhospital.com
// 									</a>
// 								</p>
// 								<p>
// 									Or hand-deliver your application at:{' '}
// 									<span className="text-primary">
// 										Divine Word Hospital HR Department, Tacloban City
// 									</span>
// 								</p>
// 							</div>
// 						</div>
// 					</DialogContent>
// 				)}
// 			</Dialog>
// 		</main>
// 	);
// }
'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';

const CareersPage = () => {
	const [selectedJob, setSelectedJob] = useState(null);

	const jobListings = [
		{
			title: 'Apply to be DWH Consultant',
			description: 'List of requirements for consultant application.',
			image: '/assets/job-listing.webp', // Added image path
			requirements: [
				'Application Letter Addressed to: Sister Sarah R. Gocela, Hospital Administrator',
				'Curriculum Vitae',
				'Letter of Recommendation (training institution or place of work)',
				'Transcript of Records',
				'Photocopy of Diploma as a Medical Doctor',
				'Photocopy of Certificate of Internship',
				'Photocopy of PRC Certificate of Registration as a Doctor',
				'Photocopy of Certificate of Completion of Residency Training',
				'Photocopy of Certificate of Diplomate/ Fellow (authenticated by the issuing agency)',
				'Photocopy of updated PRC License',
				'Photocopy of BIR TIN Card',
				'Photocopy of Certificate of Registration for BIR',
				'Photocopy of PhilHealth Membership card as a Professional Health Care Provider',
			],
			contact: {
				office: 'DWH Admin Office',
				landline: '(053) 832-7287',
				email: 'divinewordhospitaltacloban@gmail.com',
			},
		},
		{
			title: 'Residency Training Application',
			description: 'List of requirements for residency training application.',
			image: '/assets/job-listing.webp', // Added image path
			requirements: [
				'Application Letter Addressed to: Sister Sarah R. Gocela, OSB, Hospital Administrator; Dr. Corazon A. Rubio MD, FPCP, Medical Director',
				'For Department of Internal Medicine: Thru: Gemma R. Udtujan, MD, FPCP, FPSHBT, FPCHTM, Chairperson - Internal Medicine',
				'For Department of Surgery: Thru: Sherlito T. Siao, MD, DBPS, FPCS, FPSGS, FPALES, FICS, FPAHNS, Chairperson - Department of Surgery',
				'For Department of Obstetrics and Gynecology: Thru: Chicanee M. Alvarina, MD, FPOGS, FSGOP, FPSCPC Chairperson, Department of OB-GYNE',
				'For Department of Pediatrics: Thru: Agueda Fe B. Barredo, MD, FPPS Department of Pediatrics',
				'2x2 Colored ID Picture',
				'Curriculum Vitae',
				'Transcript of Records',
				'Photocopy of Diploma as a Medical Doctor',
				'Photocopy of Certificate of Internship',
				'Photocopy of PRC Certificate of Registration as a Doctor',
				'Photocopy of BIR TIN Card',
				'Photocopy of SSS Number',
				'Photocopy of PAG-IBIG Number',
				'Photocopy of PhilHealth Membership card as a Professional Health Care Provider',
				'Photocopy Birth Certificate',
				'Marriage Contract (if Married)',
			],
			contact: {
				office: 'DWH Admin Office',
				landline: '(053) 832-7287',
				email: 'divinewordhospitaltacloban@gmail.com',
			},
		},
		{
			title: 'Nurses',
			description: 'Benefits Upon Hiring and Regularization',
			image: '/assets/job-listing.webp', // Added image path
			benefits: {
				hiring: [
					'Basic Salary - ₱19,000',
					'Hazard Pay - ₱1,000',
					'Monthly Rice Allowance - ₱2,000',
					'Uniform Allowance - ₱2,000',
					'Free Medical Exam for the Applicants',
					'Free X-ray & Laboratories (For Parents/Guardian)',
					'Free Training (In-Service/With Service Agreement)',
					'Discounted Hospitalization Benefits',
					'Holiday Pay',
					'Night Differential',
					'Overtime Pay (Hourly)',
					'Special Area Incentives',
					'Qualified to join the association of employees wherein you can avail loans, discounts and dividends.',
					'Mortuary Aid',
					'Staff Development',
				],
				regularization: [
					'Salary increase after 2 years',
					'Uniform Allowance Increase',
					'Bonuses Increases',
					'Vacation Leave for 15 days w/pay',
					'Upgraded bonuses after 1 year of regularization',
					'New Year Bonus',
					'Foundation Anniversary Bonus',
					'Educational Bonus',
					'St. Benedict Bonus',
					'13th Month Pay',
					'Christmas Bonus + Gift Cheque',
				],
				mandated: [
					'Maternity Leave',
					'Paternity Leave',
					'Parental Leave for Solo Parent',
					'Leave for Victims of VAWC',
					'Special Leave Benefit for Women and Children',
					'Employment Compensation',
					'SSS',
					'PHIC',
					'Pag-ibig (HDMF)',
					'Retirement Benefit',
				],
			},
		},
	];

	return (
		<main className="px-4 md:px-10 py-16 max-w-7xl mx-auto">
			<section className="text-center space-y-6 mb-16">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
				>
					Join Our Mission of Healing
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-muted-foreground text-lg max-w-2xl mx-auto"
				>
					Be part of Divine Word Hospital — a compassionate, progressive, and
				</motion.p>
			</section>

			<section className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
				{jobListings.map((job, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className="bg-white rounded-xl overflow-hidden shadow-md border hover:shadow-xl transition"
					>
						<div className="relative w-full h-64">
							<Image
								src={job.image}
								alt={job.title}
								fill
								className="object-cover w-full h-full"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<CardContent className="p-6 flex flex-col gap-4">
							<div className="space-y-1">
								<h3 className="text-xl font-semibold text-primary">
									{job.title}
								</h3>
								<p className="text-sm text-gray-600 flex-grow line-clamp-3">
									{job.description}
								</p>
							</div>
							<Button
								onClick={() => setSelectedJob(job)}
								className="w-full mt-4"
							>
								View Details
							</Button>
						</CardContent>
					</motion.div>
				))}
			</section>

			<Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
				{selectedJob && (
					<DialogContent className="md:max-w-5xl max-w-2xl max-h-[90vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle className="text-primary text-2xl">
								{selectedJob.title}
							</DialogTitle>
							<DialogDescription className="text-sm text-muted-foreground">
								{selectedJob.description}
							</DialogDescription>
						</DialogHeader>
						<div className="grid md:grid-cols-2 gap-6 grid-cols-1 text-justify">
							<div className="relative w-full h-96 md:h-full rounded-md overflow-hidden mb-4">
								<Image
									src={selectedJob.image}
									alt={selectedJob.title}
									fill
									className="object-cover"
								/>
							</div>
							<ScrollArea className="space-y-6 md:max-h-[70vh] max-h-full pr-4">
								{selectedJob.requirements && (
									<div className="mb-4">
										<h4 className="text-md font-semibold text-primary mb-2">
											Requirements
										</h4>
										<ul className="list-decimal list-inside text-sm text-gray-700 space-y-2">
											{selectedJob.requirements.map((req, idx) => (
												<li key={idx}>{req}</li>
											))}
										</ul>
									</div>
								)}

								{selectedJob.contact && (
									<div>
										<h4 className="text-md font-semibold text-primary mb-2">
											Contact Information
										</h4>
										<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
											<li>Office: {selectedJob.contact.office}</li>
											<li>Landline: {selectedJob.contact.landline}</li>
											<li>Email: {selectedJob.contact.email}</li>
										</ul>
									</div>
								)}

								{selectedJob.benefits && (
									<div>
										<h4 className="text-md font-semibold text-primary mb-2">
											Benefits
										</h4>
										<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
											<div>
												<h5 className="font-semibold">Upon Hiring</h5>
												<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
													{selectedJob.benefits.hiring.map((benefit, idx) => (
														<li key={idx}>{benefit}</li>
													))}
												</ul>
											</div>
											<div>
												<h5 className="font-semibold">Upon Regularization</h5>
												<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
													{selectedJob.benefits.regularization.map(
														(benefit, idx) => (
															<li key={idx}>{benefit}</li>
														)
													)}
												</ul>
											</div>
											<div>
												<h5 className="font-semibold">
													Other Benefits/Mandated
												</h5>
												<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
													{selectedJob.benefits.mandated.map((benefit, idx) => (
														<li key={idx}>{benefit}</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								)}
							</ScrollArea>
						</div>
					</DialogContent>
				)}
			</Dialog>
		</main>
	);
};

export default CareersPage;
