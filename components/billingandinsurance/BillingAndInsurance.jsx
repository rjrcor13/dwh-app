'use client';
import { motion } from 'framer-motion';

import BillingSection from './BillingSection';
import HMOsSection from './HMO';
import PhilHealthSection from './PhilHealth';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Stagger the appearance of children
		},
	},
};

// --- Billing Section ---

// --- HMOs Section ---

// --- PhilHealth Section ---

// --- Main Component ---
const BillingAndInsurance = () => {
	return (
		<div className="bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="space-y-8"
				>
					<h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
						Billing & Insurance
					</h1>
					<p className="text-gray-600 text-center text-lg mb-24">
						Your resource for understanding billing processes and insurance
						options at Divine Word Hospital.
					</p>

					<BillingSection />
					<HMOsSection />
					<PhilHealthSection />
				</motion.div>
			</div>
		</div>
	);
};

export default BillingAndInsurance;
