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

// export default function Careers() {
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

const Careers = ({ jobListings }) => {
	const [selectedJob, setSelectedJob] = useState(null);

	return (
		<main className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Dynamic Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />

			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-20" />
				<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-10" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
				<section className="text-center space-y-6 mb-20">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-block"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
							<span>Join Our Team</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
							Join Our Mission of Healing
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="text-blue-100/70 text-lg max-w-2xl mx-auto font-light leading-relaxed"
					>
						Be part of Divine Word Hospital — a compassionate, progressive, and faith-driven healthcare institution committed to excellence.
					</motion.p>
				</section>

				<section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{jobListings.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ y: -8 }}
							className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-black/20 hover:border-white/20 transition-all duration-300 flex flex-col"
						>
							{/* Hover Gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/0 group-hover:to-primary/20 transition-colors duration-500 pointer-events-none" />

							<div className="relative w-full h-56 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
								<Image
									src={job.image}
									alt={job.title}
									fill
									className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute bottom-4 left-6 right-6 z-20">
									<p className="text-secondary font-bold text-xs tracking-widest uppercase mb-1 drop-shadow-md">
										{job.department}
									</p>
									<h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight group-hover:text-secondary transition-colors duration-300 font-heading">
										{job.title}
									</h3>
								</div>
							</div>

							<CardContent className="p-8 flex flex-col flex-grow relative z-10">
								<div className="space-y-4 mb-6 flex-grow">
									<div className="flex items-center gap-4 text-xs font-medium text-blue-200/80">
										<span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/10">
											📍 {job.location}
										</span>
										<span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/10">
											🕒 {job.type}
										</span>
									</div>
									<p className="text-blue-100/70 text-sm leading-relaxed line-clamp-3 font-light">
										{job.description}
									</p>
								</div>

								<Button
									onClick={() => setSelectedJob(job)}
									className="w-full bg-secondary hover:bg-white hover:text-primary text-primary font-bold py-6 rounded-xl transition-all duration-300 shadow-lg shadow-secondary/20"
								>
									View Opportunities
								</Button>
							</CardContent>
						</motion.div>
					))}
				</section>

				<Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
					{selectedJob && (
						<DialogContent className="md:max-w-5xl max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/10 text-white p-0 overflow-hidden rounded-2xl">
							<div className="relative w-full h-64 md:h-80">
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
								<Image
									src={selectedJob.image}
									alt={selectedJob.title}
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-6 left-6 right-6 z-20">
									<DialogTitle className="text-3xl md:text-5xl font-bold text-white font-heading mb-2">
										{selectedJob.title}
									</DialogTitle>
									<DialogDescription className="text-blue-200 text-lg">
										{selectedJob.department} • {selectedJob.location} • {selectedJob.type}
									</DialogDescription>
								</div>
							</div>

							<div className="p-6 md:p-10 space-y-8 bg-slate-900">
								<ScrollArea className="h-[400px] w-full pr-4">
								<div className="space-y-8">
									<div>
										<h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
											Overview
										</h4>
										<p className="text-slate-300 leading-relaxed">
											{selectedJob.description}
										</p>
									</div>

									{selectedJob.requirements && (
										<div>
											<h4 className="text-xl font-bold text-secondary mb-4">
												Requirements
											</h4>
											<ul className="grid gap-3 sm:grid-cols-2">
												{selectedJob.requirements.map((req, idx) => (
													<li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
														<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
														{req}
													</li>
												))}
											</ul>
										</div>
									)}

									{selectedJob.benefits && (
										<div>
											<h4 className="text-xl font-bold text-secondary mb-4">
												Benefits
											</h4>
											<div className="grid md:grid-cols-2 gap-6">
												<div className="bg-white/5 p-4 rounded-xl border border-white/10">
													<h5 className="font-semibold text-white mb-3">Upon Hiring</h5>
													<ul className="space-y-2">
														{selectedJob.benefits.hiring.map((benefit, idx) => (
															<li key={idx} className="text-sm text-slate-300 text-xs">✓ {benefit}</li>
														))}
													</ul>
												</div>
												<div className="bg-white/5 p-4 rounded-xl border border-white/10">
													<h5 className="font-semibold text-white mb-3">Upon Regularization</h5>
													<ul className="space-y-2">
														{selectedJob.benefits.regularization.map((benefit, idx) => (
															<li key={idx} className="text-sm text-slate-300 text-xs">✓ {benefit}</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									)}

									{selectedJob.contact && (
										<div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/20">
											<h4 className="text-lg font-bold text-white mb-2">
												Ready to Apply?
											</h4>
											<div className="text-slate-300 space-y-1 text-sm">
												<p>Submit your resume to:</p>
												<p className="text-secondary font-medium">{selectedJob.contact.email}</p>
												<p className="mt-2 text-xs opacity-70">
													Or visit us at: {selectedJob.contact.office} ({selectedJob.contact.landline})
												</p>
											</div>
										</div>
									)}
								</div>
								</ScrollArea>
							</div>
						</DialogContent>
					)}
				</Dialog>
			</div>
		</main>
	);
};

export default Careers;
