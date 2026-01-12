'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	Banknote,
	Building2,
	Clock,
	CreditCard,
	Heart,
	Mail,
	Phone,
	Stethoscope,
	Wallet,
	CheckCircle2,
	AlertCircle,
	ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { hmoLogos } from '@/app/data/hmo';

// --- Components ---

const SectionCard = ({ icon: Icon, title, children, className }) => (
	<div className={cn("bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10", className)}>
		<div className="flex items-center gap-4 mb-8">
			<div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20 shrink-0">
				<Icon className="w-6 h-6 text-secondary" />
			</div>
			<h3 className="text-2xl font-bold font-heading text-white">{title}</h3>
		</div>
		<div className="space-y-6">
			{children}
		</div>
	</div>
);

const PaymentMethod = ({ icon: Icon, title, desc }) => (
	<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
		<div className="mt-1 p-2 rounded-lg bg-white/5 text-secondary shrink-0">
			<Icon className="w-5 h-5" />
		</div>
		<div>
			<h4 className="text-white font-bold mb-1">{title}</h4>
			<p className="text-blue-100/60 text-sm leading-relaxed">{desc}</p>
		</div>
	</div>
);

const ProcessStep = ({ step, title, tl }) => (
	<div className="relative pl-8 border-l border-white/10 pb-8 last:pb-0 last:border-0 group">
		<div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-primary border text-xs font-bold flex items-center justify-center z-10 transition-colors border-white/20 text-white/50 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
			{step}
		</div>
		<h4 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">{title}</h4>
		<p className="text-blue-200/50 text-sm italic">"{tl}"</p>
	</div>
);

// --- Main Page ---

const BillingAndInsurance = () => {

	const philHealthReqs = [
		{ label: 'Employed', val: 'Signed CSF (if contributions not updated)' },
		{ label: 'Indigent', val: 'Valid MDR (1-year coverage)' },
		{ label: 'Senior', val: 'Senior Citizen ID' },
		{ label: 'Self-Employed', val: 'Contribution Receipts' },
	];

	return (
		<div className="bg-primary min-h-screen relative font-sans selection:bg-secondary/30 selection:text-white pb-32 pt-32">

			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-primary to-primary pointer-events-none" />
			<div className="fixed top-20 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

					{/* LEFT COLUMN: Sticky Dashboard (4 cols) */}
					<div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

						{/* Header */}
						<div>
							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold tracking-widest uppercase mb-4">
								<Banknote className="w-4 h-4 text-secondary" />
								<span>Finance Center</span>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-4">
								Billing &<br />Insurance
							</h1>
							<p className="text-blue-100/60 text-lg leading-relaxed">
								Your guide to payments, HMO accreditation, and PhilHealth claims.
							</p>
						</div>

						{/* Quick Contacts Widget */}
						<div className="bg-gradient-to-br from-secondary/10 to-blue-900/10 border border-secondary/20 rounded-[2rem] p-6 lg:p-8 backdrop-blur-md">
							<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Quick Contacts</h3>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<Phone className="w-5 h-5 text-secondary mt-1" />
									<div>
										<p className="text-white font-bold text-lg">0919-067-2673</p>
										<p className="text-blue-100/50 text-sm">Billing / Industrial Office</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<Clock className="w-5 h-5 text-secondary mt-1" />
									<div>
										<p className="text-white font-bold">8:00 AM – 5:00 PM</p>
										<p className="text-blue-100/50 text-sm">Monday to Saturday</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<Mail className="w-5 h-5 text-secondary mt-1" />
									<div className="overflow-hidden">
										<p className="text-white font-bold text-sm truncate">hmodivinewordhospital2023@gmail.com</p>
										<p className="text-blue-100/50 text-sm">Email Inquiries</p>
									</div>
								</div>
							</div>
						</div>

						{/* Image Widget */}
						<div className="relative h-64 rounded-[2rem] overflow-hidden border border-white/10 group">
							<Image
								src="/assets/billing.jpg"
								alt="Billing Office"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
								<p className="text-white font-bold flex items-center gap-2">
									<ArrowRight className="w-4 h-4 text-secondary" /> Main Building, G/F
								</p>
							</div>
						</div>

					</div>

					{/* RIGHT COLUMN: Scrolling Feed (8 cols) */}
					<div className="lg:col-span-8 space-y-12">

						{/* 1. Payment Methods */}
						<SectionCard icon={Wallet} title="Ways to Pay">
							<div className="grid md:grid-cols-2 gap-4">
								<PaymentMethod
									icon={CreditCard}
									title="Credit & Debit"
									desc="We accept all major cards at the cashier."
								/>
								<PaymentMethod
									icon={Banknote}
									title="Cash Payment"
									desc="Available at Ground Floor Cashier windows."
								/>
								<PaymentMethod
									icon={Wallet}
									title="E-Wallets"
									desc="GCash and Maya QR codes available."
								/>
								<PaymentMethod
									icon={Building2}
									title="Bank Transfer"
									desc="Coordinate with Billing for bank details."
								/>
							</div>
						</SectionCard>

						{/* 2. HMO Grid */}
						<SectionCard icon={Building2} title="Accredited HMOs">
							<p className="text-blue-100/60 text-sm md:text-base leading-relaxed mb-6">
								We are proud partners with the country's leading Health Maintenance Organizations.
								Please secure a Letter of Authorization (LOA) before admission.
							</p>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
								{hmoLogos.map((logo, idx) => (
									<div
										key={idx}
										className="bg-white p-3 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300 shadow-sm"
									>
										<Image
											src={`/assets/hmos/${logo}`}
											alt={`HMO ${idx}`}
											width={100}
											height={60}
											className="object-contain max-h-12 w-auto"
										/>
									</div>
								))}
							</div>
						</SectionCard>

						{/* 3. PhilHealth Guide */}
						<SectionCard icon={Heart} title="PhilHealth Claims">
							<div className="grid md:grid-cols-2 gap-12">
								<div>
									<h4 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
										<Stethoscope className="w-5 h-5" /> Standard Process
									</h4>
									<div className="pl-2">
										<ProcessStep
											step={1}
											title="Submit Requirements"
											tl="Ibigay ang MDR at CSF sa Claims Office."
										/>
										<ProcessStep
											step={2}
											title="Validation"
											tl="Susuriin ng staff ang inyong eligibility."
										/>
										<ProcessStep
											step={3}
											title="Deduction"
											tl="Ibabawas ang benepisyo sa final bill."
										/>
									</div>
								</div>

								<div className="bg-white/5 rounded-2xl p-6 border border-white/5">
									<h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
										Checklist by Category
									</h4>
									<div className="space-y-4">
										{philHealthReqs.map((req, i) => (
											<div key={i}>
												<div className="flex justify-between items-baseline mb-1">
													<span className="text-secondary font-bold text-sm">{req.label}</span>
												</div>
												<p className="text-blue-100/60 text-xs">{req.val}</p>
											</div>
										))}
									</div>
									<div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2 text-yellow-500/80 text-xs">
										<AlertCircle className="w-4 h-4 shrink-0" />
										<p>Ensure all documents are submitted within 72 hours of admission.</p>
									</div>
								</div>
							</div>
						</SectionCard>

					</div>

				</div>
			</div>
		</div>
	);
};

export default BillingAndInsurance;
