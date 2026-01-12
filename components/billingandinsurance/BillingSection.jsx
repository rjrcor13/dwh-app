import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Banknote, CreditCard } from 'lucide-react';
import Image from 'next/image';

const BillingSection = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="scroll-mt-32"
			id="billing"
		>
			<div className="grid lg:grid-cols-2 gap-12 items-center">

				{/* Text Content */}
				<div className="order-2 lg:order-1 space-y-8">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20">
							<Banknote className="w-6 h-6 text-secondary" />
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-white">Billing Information</h2>
					</div>

					<div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 space-y-6 backdrop-blur-sm">
						<p className="text-blue-100/80 leading-relaxed text-lg font-light">
							We are committed to providing transparent and efficient billing services. Our dedicated billing office
							is available to assist you with any questions regarding your statement of account or payment options.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
								<CreditCard className="w-5 h-5 text-secondary" />
								<span className="text-white text-sm font-medium">Multiple Payment Options</span>
							</div>
							<div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
								<Banknote className="w-5 h-5 text-secondary" />
								<span className="text-white text-sm font-medium">Transparent Pricing</span>
							</div>
						</div>
					</div>
				</div>

				{/* Visual */}
				<div className="order-1 lg:order-2 relative group">
					<div className="absolute inset-0 bg-secondary/20 blur-[60px] opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
					<div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
						<Image
							src="/assets/billing.jpg"
							alt="Billing Information"
							width={600}
							height={400}
							className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
						/>
						{/* Overlay for depth */}
						<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none" />
					</div>
				</div>

			</div>
		</motion.section>
	);
};

export default BillingSection;
