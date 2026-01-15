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

import PremiumBadge from '@/components/ui/PremiumBadge';

// --- Components ---

const SectionCard = ({ icon: Icon, title, children, className }) => (
	<div className={cn("bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500", className)}>
		<div className="flex items-center gap-4 mb-8">
			<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-primary border border-blue-100 shrink-0 shadow-sm">
				<Icon className="w-6 h-6" />
			</div>
			<h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">{title}</h3>
		</div>
		<div className="space-y-6">
			{children}
		</div>
	</div>
);

const PaymentMethod = ({ icon: Icon, title, desc }) => (
	<div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 border border-white/60 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
		<div className="mt-1 p-2.5 rounded-xl bg-white shadow-sm text-secondary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
			<Icon className="w-5 h-5" />
		</div>
		<div>
			<h4 className="text-slate-900 font-bold mb-1 group-hover:text-primary transition-colors">{title}</h4>
			<p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
		</div>
	</div>
);

const ProcessStep = ({ step, title, tl }) => (
	<div className="relative pl-8 border-l-2 border-slate-100 pb-10 last:pb-0 last:border-0 group">
		<div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-100 text-xs font-bold flex items-center justify-center z-10 transition-colors text-slate-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white shadow-sm">
			{step}
		</div>
		<h4 className="text-lg font-bold text-slate-700 mb-2 group-hover:text-primary transition-colors">{title}</h4>
		<p className="text-slate-500 text-sm italic border-l-2 border-slate-100 pl-3">"{tl}"</p>
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
		<div className="bg-slate-50/50 min-h-screen relative font-sans selection:bg-primary/20 selection:text-primary pb-32 pt-32">

			{/* --- Ambient Background Mesh --- */}
			<div className="fixed inset-0 pointer-events-none">
				{/* Top Left: Soft Blue Blob */}
				<div className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-blue-100/30 to-indigo-50/30 rounded-full blur-[120px]" />
				{/* Bottom Right: Clean White/Gold Glow */}
				<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-amber-50/40 to-white/40 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

					{/* LEFT COLUMN: Sticky Dashboard (4 cols) */}
					<div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">

						{/* Header */}
						<div>
							<PremiumBadge text="Finance Center" icon={Banknote} className="mb-4" />
							<h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight mb-4 tracking-tight">
								Billing &<br />Insurance
							</h1>
							<p className="text-slate-600 text-lg leading-relaxed font-light">
								Your guide to payments, HMO accreditation, and PhilHealth claims.
							</p>
						</div>

						{/* Quick Contacts Widget */}
						<div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">Quick Contacts</h3>

							<div className="space-y-6">
								<div className="flex items-start gap-4 group">
									<div className="p-2 rounded-xl bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
										<Phone className="w-5 h-5" />
									</div>
									<div>
										<p className="text-slate-900 font-bold text-lg">0919-067-2673</p>
										<p className="text-slate-500 text-sm">Billing / Industrial Office</p>
									</div>
								</div>

								<div className="flex items-start gap-4 group">
									<div className="p-2 rounded-xl bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
										<Clock className="w-5 h-5" />
									</div>
									<div>
										<p className="text-slate-900 font-bold text-lg">8:00 AM – 5:00 PM</p>
										<p className="text-slate-500 text-sm">Monday to Saturday</p>
									</div>
								</div>

								<div className="flex items-start gap-4 group">
									<div className="p-2 rounded-xl bg-blue-50 text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
										<Mail className="w-5 h-5" />
									</div>
									<div className="overflow-hidden">
										<p className="text-slate-900 font-bold text-sm truncate">hmodivinewordhospital2023@gmail.com</p>
										<p className="text-slate-500 text-sm">Email Inquiries</p>
									</div>
								</div>
							</div>
						</div>

						{/* Image Widget */}
						<div className="relative h-64 rounded-[2.5rem] overflow-hidden border border-white/50 shadow-md group">
							<Image
								src="/assets/billing.jpg"
								alt="Billing Office"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
								<p className="text-white font-bold flex items-center gap-2 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
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
							<p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
								We are proud partners with the country's leading Health Maintenance Organizations.
								Please secure a Letter of Authorization (LOA) before admission.
							</p>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
								{hmoLogos.map((logo, idx) => (
									<div
										key={idx}
										className="bg-white p-4 rounded-2xl flex items-center justify-center h-24 hover:scale-105 transition-all duration-300 border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md"
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
									<h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
											<Stethoscope className="w-4 h-4" />
										</div>
										Standard Process
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

								<div className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100">
									<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
										Checklist by Category
									</h4>
									<div className="space-y-5">
										{philHealthReqs.map((req, i) => (
											<div key={i}>
												<div className="flex justify-between items-baseline mb-1">
													<span className="text-primary font-bold text-sm">{req.label}</span>
												</div>
												<p className="text-slate-600 text-xs font-medium">{req.val}</p>
											</div>
										))}
									</div>
									<div className="mt-8 pt-6 border-t border-slate-200 flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
										<AlertCircle className="w-5 h-5 shrink-0 text-amber-500" />
										<p className="text-xs text-slate-600 leading-relaxed font-medium">Please ensure all required documents are submitted within <span className="text-amber-600 font-bold">72 hours</span> of admission to avoid delays.</p>
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
