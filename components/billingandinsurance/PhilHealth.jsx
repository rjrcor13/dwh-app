'use client';

import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Baby, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const stepSections = [
	{
		title: "For In-Patients",
		icon: <Stethoscope className="w-6 h-6" />,
		steps: [
			{
				en: 'Go to the Claims Office (3rd floor, main building), request a Claim Signature Form (CSF), and fill in the required information for validation or verification.',
				tl: 'Pumunta sa Claims Office (ikatlong palapag, main building), humingi ng Claim Signature Form (CSF), at punan ito upang ma-validate o ma-verify.'
			},
			{
				en: 'Ensure that all details written on the CSF form are correct and match the patient’s information in the Member Data Record (MDR).',
				tl: 'Siguraduhing tama ang mga detalye sa CSF at tugma ito sa impormasyon ng pasyente sa Member Data Record (MDR).'
			},
			{
				en: 'Submit the CSF form to the Claims Office for checking and review.',
				tl: 'Ibigay ang CSF sa Claims Office upang masuri at ma-review.'
			}
		]
	},
	{
		title: "For Out-Patients",
		icon: <Users className="w-6 h-6" />,
		steps: [
			{
				en: 'Same procedure as for in-patients: go to Claims Office, get CSF, and validate information.',
				tl: 'Parehong proseso sa naka-admit: pumunta sa Claims Office, kumuha ng CSF, at ipasuri ang impormasyon.'
			},
			{
				en: 'Ensure all details match the MDR.',
				tl: 'Siguraduhing tumutugma ang lahat ng detalye sa MDR.'
			},
			{
				en: 'Know the exact schedule or date of operation.',
				tl: 'Alamin ang eksaktong petsa o iskedyul ng operasyon.'
			},
			{
				en: 'Once approved, you will be given the CSF and required forms to be presented after the operation.',
				tl: 'Kapag naaprubahan, ibibigay sa pasyente ang CSF at mga kailangang dokumento na ipapakita pagkatapos ng operasyon.'
			},
			{
				en: 'Submit the forms to Billing for SOA preparation.',
				tl: 'Isumite ang mga dokumento sa Billing para sa paggawa ng Statement of Account (SOA).'
			},
			{
				en: 'Settle balance and proceed to discharge.',
				tl: 'Bayaran ang natitirang balanse at magtungo sa discharge area.'
			}
		]
	},
	{
		title: "Maternity & Newborn",
		icon: <Baby className="w-6 h-6" />,
		steps: [
			{
				en: 'Make sure the newborn is registered and included in the MDR of the parent.',
				tl: 'Siguraduhing naka-rehistro ang sanggol at nakalista sa MDR ng magulang.'
			},
			{
				en: 'Go to HIMD to process newborn documentation.',
				tl: 'Pumunta sa HIMD upang asikasuhin ang dokumento ng sanggol.'
			},
			{
				en: 'Submit the Newborn Record Form.',
				tl: 'Ibigay ang Newborn Record Form sa HIMD.'
			},
			{
				en: 'Review the Birth Certificate and ensure it has the required signatures.',
				tl: 'Suriin ang Birth Certificate at tiyaking may pirma ng doktor at ng magulang.'
			},
			{
				en: 'Register the newborn with the LCR and update PMRF.',
				tl: 'Irehistro ang sanggol sa LCR at mag-update ng PMRF sa PhilHealth.'
			},
			{
				en: 'Submit the updated MDR to the Claims Office.',
				tl: 'Ibigay ang updated MDR sa Claims Office.'
			}
		]
	}
];

const generalRequirements = [
	{
		label: 'Employed (Gov/Private)',
		desc: 'If contribution is not updated, CSF must be signed by the employer.',
		tl: 'Kung hindi updated ang kontribusyon, kailangang may pirma ng employer ang CSF.'
	},
	{
		label: 'Self-Employed',
		desc: 'Present contribution payment receipts.',
		tl: 'Magpakita ng resibo ng hulog sa PhilHealth.'
	},
	{
		label: 'Indigent / Sponsored',
		desc: 'Present an updated MDR with 1-year validity.',
		tl: 'Magpakita ng updated MDR na may bisa ng isang taon.'
	},
	{
		label: 'Senior Citizen',
		desc: 'Present PhilHealth ID or valid ID for verification.',
		tl: 'Magpresenta ng PhilHealth ID o ibang valid ID.'
	}
];

export default function PhilHealthSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="scroll-mt-32 space-y-12"
			id="philhealth"
		>
			<div className="max-w-4xl">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/20">
						<Heart className="w-6 h-6 text-secondary" />
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-white">PhilHealth Benefits</h2>
				</div>
				<p className="text-blue-100/80 leading-relaxed text-lg font-light">
					Divine Word Hospital’s Claims Office ensures accurate benefit computation and timely service for qualified PhilHealth members. We are here to guide you through the process.
				</p>
			</div>

			<div className="grid lg:grid-cols-3 gap-6">
				{stepSections.map((section, idx) => (
					<div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 hover:bg-white/10 transition-colors">
						<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
							<div className="text-secondary">{section.icon}</div>
							<h3 className="text-xl font-bold text-white">{section.title}</h3>
						</div>
						<ul className="space-y-6">
							{section.steps.map((step, sIdx) => (
								<li key={sIdx} className="relative pl-6 border-l border-white/10">
									<div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-secondary" />
									<p className="text-white/90 text-[15px] font-medium mb-1 leading-snug">{step.en}</p>
									<p className="text-blue-200/50 text-xs italic">{step.tl}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="bg-gradient-to-r from-blue-900/20 to-secondary/10 border border-white/10 rounded-[2rem] p-8 md:p-10">
				<h3 className="text-xl font-bold text-white mb-6">Membership Category Requirements</h3>
				<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
					{generalRequirements.map((req, idx) => (
						<div key={idx} className="flex gap-4">
							<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0 text-sm">
								{idx + 1}
							</div>
							<div>
								<h4 className="font-bold text-secondary mb-1">{req.label}</h4>
								<p className="text-white/80 text-sm mb-1">{req.desc}</p>
								<p className="text-blue-200/40 text-xs italic">{req.tl}</p>
							</div>
						</div>
					))}
				</div>
			</div>

		</motion.section>
	);
}
