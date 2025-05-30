'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import React from 'react';
import { Separator } from '../ui/separator';

// Placeholder image URL (replace with a more relevant one)
const visitorImage =
	'https://placehold.co/800x600/EEE/31343C?text=Hospital+Visitors&font=Montserrat';

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 40, opacity: 0, scale: 0.9 },
	visible: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 15,
			duration: 0.5,
		},
	},
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: 'easeInOut',
		},
	},
};

const VisitorsAndWatchers = () => {
	return (
		<motion.div
			className="max-w-7xl mx-auto px-6 py-16 space-y-12"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
		>
			<motion.div className="text-center" variants={itemVariants}>
				<h1 className="text-4xl md:text-5xl  font-bold text-primary">
					Visitors & Watchers
				</h1>
				<p className="text-gray-600 text-lg mt-4">
					Visiting and Watchers Policies
				</p>
			</motion.div>

			<motion.div
				className="grid grid-cols-1  gap-12 items-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
			>
				<div className="space-y-6">
					<h2 className="text-2xl font-semibold text-primary">
						Visiting Guidelines
					</h2>
					<p className="text-gray-700 leading-relaxed">
						DWH Management strengthens the protective measures that we put in
						place to protect patients, healthcare practitioners, and employees
						from the unnecessary transmission of viruses.
					</p>
					<ul className="list-disc list-inside_ space-y-4 text-gray-700 list-inside indent-4_ text-justify  bg-gray-50 p-4 rounded-lg">
						<li>
							<span className="font-semibold text-primary">
								Visiting Hours:
							</span>
							<Badge
								variant="outline"
								className="ml-2 bg-blue-100/50 text-primary border-blue-200"
							>
								3:00 PM – 6:00 PM
							</Badge>
						</li>
						<li>
							<span className="font-semibold text-primary">Watchers: </span>
							Only{' '}
							<Badge
								variant="secondary"
								className="ml-2 bg-blue-100/50 text-primary border-blue-200"
							>
								ONE (1)
							</Badge>{' '}
							watcher is allowed per patient, according to the patient's
							condition. Changing the watcher every now and then is not allowed.
							As much as possible, the patient must have a watcher while
							admitted.
						</li>
						<li>
							<span className="font-semibold text-primary">ICU Watchers: </span>
							Only ONE (1) watcher will be allowed for restless, stable, and
							pediatric patients. The ICU staff will contact the immediate
							family if needed.
						</li>
						<li>
							<span className="font-semibold text-primary">NICU: </span>
							Visiting or viewing is temporarily cancelled. Parents should wait
							for the advice of the doctor on when to see their baby.
						</li>
						<li>
							<span className="font-semibold text-primary">
								HMO and PWD ID:{' '}
							</span>
							Please present the ID at the admitting staff upon admission.
						</li>
						<li>
							<span className="font-semibold text-primary">
								Financial Assistance:{' '}
							</span>
							Private room accommodations and above are{' '}
							<Badge
								variant="destructive"
								className="ml-2 bg-red-100/50 text-red-700 border-red-200"
							>
								NOT ELIGIBLE
							</Badge>{' '}
							FOR ANY FINANCIAL ASSISTANCE.
						</li>
						<li>
							<span className="font-semibold text-primary">
								Pillow & Blanket:{' '}
							</span>
							Bringing of PILLOW & BLANKET are not allowed except if newly
							purchased, present the receipt at the guard upon entering.
						</li>
						<li>
							<span className="font-semibold text-primary">Children: </span>
							Children below 12 years of age are discouraged from visiting
							confined patients.
						</li>
						<li>
							<span className="font-semibold text-primary">PhilHealth: </span>
							PHILHEALTH papers should be submitted 72 hours after admission to
							avoid delays and problems during discharge. GET YOUR PHILHEALTH
							PAPERS CHECKED AT OUR CLAIMS OFFICE, located across from the main
							lobby.
						</li>
						<li>
							<span className="font-semibold text-primary">
								Discharge Time:{' '}
							</span>
							The discharge cut-off time for going-home patients is 11:00 am.
						</li>
						<li>
							<span className="font-semibold text-primary">
								Photos/Videos:{' '}
							</span>
							Taking, posting, or any further processing of photos or videos
							without the consent of our staff in charge at the unit or medical
							staff is STRICTLY PROHIBITED, and it is a violation under the Data
							Privacy Act of 2012.
						</li>
					</ul>
				</div>
			</motion.div>
			<Separator />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
			>
				<div className=" border-0 n">
					<h1 className="text-2xl font-semibold text-red-700 flex items-center">
						<AlertCircle className="mr-2 h-6 w-6 text-red-500" />
						COVID-19 Guidelines
					</h1>
					<p className="text-gray-600  my-2">
						Guidelines to minimize virus transmission.
					</p>

					<div className=" space-y-4">
						<Alert
							variant="destructive"
							className="bg-red-50/50 text-red-800 border-red-200 shadow-md mt-4"
						>
							<AlertCircle className="h-4 w-4" />
							<AlertTitle>Important Notice</AlertTitle>
							<AlertDescription>
								To protect everyone, the following COVID-19 guidelines are in
								effect.
							</AlertDescription>
						</Alert>
						<ul className="list-disc list-inside space-y-4 text-gray-700 bg-gray-50 p-4 rounded">
							<li>
								<span className="font-semibold text-red-600">Visitation:</span>{' '}
								NO VISITORS ARE ALLOWED in all inpatient care units.
							</li>
							<li>
								<span className="font-semibold text-red-600">Testing:</span>{' '}
								Negative RT-PCR swab test results are required for both patients
								and their companions before elective Inpatient admission. The
								test results must be dated at most five days from the time of
								admission. Both patient and companions must keep themselves
								within their bubbles or unexposed to other people with confirmed
								or suspected COVID-19 and asymptomatic at the day of
								confinement. Patients’ companions must remain the same
								throughout confinement; otherwise, a five-day old RT-PCR test
								result is required for each new companion.
							</li>
							<li>
								<span className="font-semibold text-red-600">
									Face Coverings:
								</span>{' '}
								All patients, both Inpatients and Outpatients, and their
								companions must WEAR FACE MASK AND FACE SHIELD AT ALL TIMES
								while in the hospital premises and even within their private
								rooms, unless medically justified by their attending Physician.
								This is to protect both patients and staff from infecting others
								and getting infected by others.
							</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default VisitorsAndWatchers;
