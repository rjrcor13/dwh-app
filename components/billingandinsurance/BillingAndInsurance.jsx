'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import BillingSection from './BillingSection';
import HMOsSection from './HMO';
import PhilHealthSection from './PhilHealth';

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

const BillingAndInsurance = () => {
	return (
		<div className="bg-primary min-h-screen relative overflow-hidden font-sans">
			{/* Background Ambience */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50] pointer-events-none" />
			<div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="space-y-24"
				>
					{/* Hero Header */}
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
							Billing & Insurance
						</h1>
						<p className="text-blue-100/70 text-lg leading-relaxed font-light">
							Your resource for understanding billing processes, accepted insurance options, and PhilHealth benefits at Divine Word Hospital.
						</p>
					</div>

					{/* Sections */}
					<BillingSection />
					<Separator className="bg-white/10" />
					<HMOsSection />
					<Separator className="bg-white/10" />
					<PhilHealthSection />
				</motion.div>
			</div>
		</div>
	);
};

export default BillingAndInsurance;
