'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BedIcon, FileTextIcon, ShieldAlertIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Separator } from '../ui/separator';
const tabList = [
	{
		value: 'admission',
		label: 'Admission',
		icon: <FileTextIcon className="mr-2 h-4 w-4" />,
	},
	{
		value: 'discharge',
		label: 'Discharge Procedure',
		icon: <FileTextIcon className="mr-2 h-4 w-4" />,
	},
	{
		value: 'rooms',
		label: 'Rooms & Facilities',
		icon: <BedIcon className="mr-2 h-4 w-4" />,
	},
	{
		value: 'rights',
		label: "Patient's Rights & Responsibilities",
		icon: <ShieldAlertIcon className="mr-2 h-4 w-4" />,
	},
];

const PatientsPage = () => {
	// const [activeTab, setActiveTab] = useState('admission');
	const [activeTab, setActiveTab] = useState(tabList[0].value);
	const renderTabContent = () => {
		switch (activeTab) {
			case 'admission':
				return (
					<Card className="shadow-none border-none">
						<CardHeader className="hidden md:block">
							<CardTitle className="text-2xl font-semibold text-left text-primary border-b pb-2 ">
								Admission
							</CardTitle>
						</CardHeader>
						<CardContent className="s text-gray-700 ">
							<div className="space-y-2 mb-6 ">
								<p className="font-semibold">Before Processing of Admission</p>
								<p className="flex text-justify">
									The admitting department is the patients' first stop when they
									enter the DIVINE WORD HOSPITAL. Before admission, patients
									will be requested to present the following:
								</p>
							</div>
							<div className="space-y-6">
								<div className="space-y-2 ">
									<p className="font-semibold text-primary">
										PATIENT ADMISSION FORM
									</p>
									<p className="flex text-justify">
										Fill up the Patient Admission Form completely, legibly, and
										accurately. Accomplish PHILHEALTH forms and comply with all
										requirements needed. This can be obtained from the patient
										either on the day of admission or in advance to avoid
										inconvenience.
									</p>
									<p className="flex text-justify">
										All patients and watchers will receive an ID band, which
										must be worn around the wrist for the entire duration of
										their stay at DIVINE WORD HOSPITAL.
									</p>{' '}
								</div>
								<div className="space-y-2 ">
									<p className="font-semibold text-primary">
										LETTER OF AUTHORIZATION (LOA)
									</p>
									<p className="flex text-justify">
										For the Company of Health Maintenance Organization (HMOs)
										Sponsored Accounts patients should consult with their HMO
										coordinator and present their HMO ID and secure Letter of
										Authorization without LOA will be automatically considered
										as private-paying patients and an initial deposit will be
										required.
									</p>
								</div>
								<div className="space-y-2 ">
									<p className="font-semibold text-primary">CONSENT FORMS</p>
									<p className="flex text-justify">
										The patient will be asked to sign AUTHORIZATION OF ADMISSION
										AND DATA PROCESSING CONSENT forms for the hospital care,
										exclusive supply of medicines, limitation on outside
										diagnostic reports, release of information to insurance
										companies and/or patient’s employer, and waiver of
										responsibility of loss valuables.
									</p>
								</div>
								<div className="space-y-2 ">
									<p className="font-semibold text-primary">
										EMERGENCY ADMISSIONS
									</p>
									<p className="flex text-justify">
										Patients are referred to the Emergency Room (ER) if they do
										not have an admission order sheet from their attending
										physician. In such cases, the ER consultant will ask the
										patient for the name of his/her physician. The ER consultant
										may only assign an attending physician to the patient’s case
										if he or she does not have a personal physician of choice.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			case 'discharge':
				return (
					<Card className="shadow-none border-none">
						<CardHeader className="hidden md:block">
							<CardTitle className="text-2xl font-semibold text-left text-primary border-b pb-2 ">
								Discharge Procedure
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 py-4_ text-gray-700">
							<p className="text-justify">
								To ensure a smooth discharge process, please note the following:
							</p>
							<div className="space-y-6">
								<div className="space-y-2 ">
									<h6 className="font-semibold text-primary">
										FINANCIAL OBLIGATIONS
									</h6>
									<p className="text-justify">
										All financial obligations must be settled in full prior to
										your discharge.
									</p>
								</div>
								<div className="space-y-2 ">
									<h6 className="font-semibold text-primary">
										PHYSICIAN'S DISCHARGE ORDER
									</h6>
									<p className="text-justify">
										A written discharge order from your attending physician is
										required before you can be released from the hospital.
									</p>
								</div>
								<div className="space-y-2 ">
									<h6 className="font-semibold text-primary">
										AUTHORIZATION REQUIREMENTS
									</h6>
									<p className="text-justify">
										Please ensure all necessary authorizations for PhilHealth,
										HMO, and Company affiliations are completed before your
										discharge.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			case 'rooms':
				return (
					<Card className="shadow-none border-none rounded-md">
						<CardHeader className="hidden md:block">
							<CardTitle className="text-2xl font-semibold text-left text-primary border-b pb-2 ">
								Rooms and Facilities
							</CardTitle>
						</CardHeader>
						<CardContent className="py-4_ text-gray-700">
							<p className="mb-2">
								We offer a range of comfortable and well-equipped rooms to cater
								to our patients' diverse needs:
							</p>
							<ul className="list-disc list-inside space-y-2">
								<li>
									<span className="font-semibold text-primary">
										Private Rooms:
									</span>{' '}
									Ensuring maximum privacy and comfort.
								</li>
								<li>
									<span className="font-semibold text-primary">
										Semi-Private Rooms:
									</span>{' '}
									Offering a balance of privacy and a more communal setting.
								</li>
								<li>
									<span className="font-semibold text-primary">
										Executive Rooms:
									</span>{' '}
									Providing enhanced amenities for a more premium stay.
								</li>
								<li>
									<span className="font-semibold text-primary">
										Suite Rooms:
									</span>{' '}
									Featuring spacious layouts and additional facilities.
								</li>
								<li>
									<span className="font-semibold text-primary">
										Semi-Suite Rooms:
									</span>{' '}
									A comfortable option with extra space and features.
								</li>
								<li>
									<span className="font-semibold text-primary">
										Isolation Rooms (e.g., Covid Room):{' '}
									</span>{' '}
									Equipped with necessary safety features for specific medical
									needs.
								</li>
							</ul>
							<p className="mt-4">
								Our facilities are designed to support your recovery and
								well-being.
							</p>
						</CardContent>
					</Card>
				);
			case 'rights':
				return (
					<Card className="shadow-none border-none">
						<CardHeader className="hidden md:block">
							<CardTitle className="text-2xl font-semibold text-left text-primary border-b pb-2">
								Patient's Rights & Responsibilities
							</CardTitle>
						</CardHeader>

						<CardContent className="space-y-6 text-gray-700">
							{/* Patient’s Rights Section */}
							<div>
								<h3 className=" font-semibold text-primary mb-2">
									PATIENT’S RIGHTS
								</h3>

								<div className="space-y-4">
									<p className="text-justify">
										We encourage you to speak openly with your healthcare
										provider, participate in your treatment choices, and protect
										your safety by being well-informed and involved in your
										care. As a patient at Divine Word Hospital, you have the
										following rights;
									</p>
									<div className="bg-gray-50 rounded p-2">
										<span className="italic text-sm text-gray-500">
											Hinihikayat ka naming makipag-usap nang bukas sa iyong
											tagapagbigay ng pangangalagang pangkalusugan, lumahok sa
											iyong mga pagpipilian sa paggamot, at protektahan ang
											iyong kaligtasan sa pamamagitan ng pagiging may sapat na
											kaalaman at kasangkot sa iyong pangangalaga. Bilang
											pasyente sa DIVINE WORD HOSPITAL, mayroon kang mga
											sumusunod na Karapatan;
										</span>
									</div>
								</div>

								<ol className="list-decimal list-outside space-y-8 mt-8">
									<li className="text-justify ">
										You have the right to receive considerate, respectful, and
										compassionate health care in a safe setting regardless of
										age, sex, gender, religion, ethnicity, political
										affiliation, disability, or capacity to pay free from all
										forms of abuse, neglect, or ill-treatment.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May karapatan kang tumanggap ng makonsiderasyon,
												magalang, at mahabagin pangangalagang pangkalusugan sa
												isang ligtas na kapaligiran anuman ang edad, kasarian,
												relihiyon, etnisidad, kaugnayan sa pulitika, kapansanan,
												o kakayahang magbayad nang libre mula sa lahat ng uri ng
												pang-aabuso, kapabayaan, o masamang pagtrato.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to be assigned to a competent
										doctor/resident physician and be told the names of all
										healthcare team members qualified to provide diagnosis,
										treatment, and medical advice. Likewise, you have the right
										to know your hospital and physician fees and receive
										information about the possibility of financial assistance.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May karapatan kang maitalaga sa isang karampatang
												doctor/residente na manggagamot at sasabihin ang mga
												pangalan ng lahat ng miyembro ng pangkat ng healthcare
												na kwalipikado upang magbigay ng diagnosis, paggamot,
												ate medical na payo. Gayundin mayroon kang karapatang
												malaman ang iyong mga bayarin sa ospital at manggagamot
												at makatanggap ng impormasyon tungkol sa posibilidad ng
												tulong pinansyal.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to notify a family member or person of
										your choice and your chosen doctor of your admission to the
										hospital.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang abisuhan ang isang miyembro ng
												pamilya o tao na iyong pinili at iyong piniling doctor
												ng iyong pagpasok sa ospital.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to have someone remain with you during
										your hospital stay unless it compromises your or others’
										rights, safety, or health.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang manatiling kasama mo sa panahon ng
												iyong ospital manatili maliban kung ikompromiso nito ang
												iyong mga Karapatan, kaligtasan, o kalusugan ng iyong o
												ng iba.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to exercise your spiritual and cultural
										beliefs within the capacity and rules of the
										hospital/medical center.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang gamitin ang iyong espiritual at
												kultural na paniniwala sa loob ang kapasidad at mga
												tuntunin ng ospital/medikal na sentro.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to be informed and consent before any
										non-emergency procedure or research/experiment or to refuse
										such.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang maabisuhan at pumayag bago ang
												anumang hindi emergency pamamaraan o
												pananaliksik/eksperimento o tanggihan ang ganoon.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to privacy and confidentiality of your
										medical records according to laws, as well as in care
										discussions, examinations, and treatments, and the right to
										see or get a copy of your medical records except those
										records restricted by law. You may request an escort during
										physical examinations.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan ka sa pagkapribado at pagiging
												kumpidensyal ng iyong mga medikal na record ayon sa mga
												batas, gayundin sa mga talakayan sa pangangalaga,
												pagsusuri, at paggamot, at ang karapatang makita o
												makakuha ng kopya ng iyong mga medikal na rekord maliban
												sa mga talaang pinaghihigpitan ng batas. Maari kang
												humiling ng escort habang mga pisikal na pagsusuri.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to be represented by someone (assignee)
										to decide on your behalf when the circumstances warrant.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang katawanin ng isang tao (assignee) na
												magpapasya sa iyong ngalan kapag ang mga pangyayari ay
												kinakailangan.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You have the right to ask about and be informed of the
										complaint process and express grievances without fear of
										recrimination or reprisal.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												May Karapatan kang magtanong at maabisuhan tungkol sa
												proseso ng reklamo at ipahayag ang mga hinaing nang
												walang takot sa pag rereklamo o paghihiganti.
											</span>
										</div>
									</li>

									<li className="text-justify">
										You are encouraged to speak directly to the healthcare
										provider involved in your care.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Hinihikayat kang makipag-usap nang direkta sa kasangkot
												na tagapagbigay ng pangangalagang pangkalusugan sa iyong
												pangangalaga.
											</span>
										</div>
									</li>
								</ol>
							</div>

							<Separator className="my-6" />

							{/* Patient’s Responsibilities Section */}
							<div>
								<h3 className=" font-semibold text-primary mb-2">
									PATIENT’S RESPONSIBILITY
								</h3>

								<ol className="list-decimal list-outside space-y-6">
									<li className="text-justify">
										Provide to the best of his knowledge accurate and complete
										information about present symptoms, past illnesses and
										hospital admissions, medication usage, and other matters
										relating to his health.
										<br />
										<div className="bg-gray-50 rounded p-2">
											<span className="italic text-sm text-gray-500  ">
												Magbigay ng tumpak at kumpleto sa abot ng kanyang
												kaalaman impormasyon tungkol sa kasalukuyang mga
												sintomas, mga nakaraang sakit at ospital admission,
												paggamit ng gamot, at iba pang mga bagay na may
												kaugnayan sa kanyang kalusugan.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Follow treatment plan as recommended by his physician.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Sundin ang plano ng paggamot gaya ng inirerekomenda ng
												kanyang manggagamot.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Report on expected changes in his medical condition to his
										physician.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												I-ulat ang mga inaasahang pagbabago sa kanyang
												kondisyong medikal sa kanyang manggagamot.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Understand his course of treatment including pain relief
										options as outlined by his physicians, nurses, and other
										health professionals. If he does not understand, he will ask
										his nurse or attending physician.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Unawain ang kanyang kurso ng paggamot kabilang ang mga
												opsyon sa pagtanggal ng sakit na binalangkas ng kanyang
												mga manggagamot, nars, at iba pang propesyonal sa
												kalusugan. Kung hindi niya maintindihan, magtanong siya
												sa kanyang nurse o dadalong manggagamot.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Keep his scheduled appointment with health care providers
										and notify them immediately if he is unable to do so.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Panatilihin ang kanyang nakaiskedyul na appointment sa
												mga tagapagbigay ng pangangalagang pangkalusugan at
												abisuhan sila kaagad kung hindi niya ito magawa.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Take responsibility for consequences if he refuses treatment
										or does not follow his physician’s instructions.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Pananagutan ang mga kahihinatnan kung tumanggi siya sa
												paggamot o hindi sundin ang mga tagubilin ng kanyang
												manggagamot.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Assure that his financial obligations to the hospital and
										his health care providers are fulfilled as promptly as
										possible.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Siguraduhing ang kanyang pinansyal na obligasyon sa
												ospital at mga tagapagbigay ng pangangalaga ay
												natutugunan sa lalong madaling panahon.
											</span>
										</div>
									</li>
									<li className="text-justify">
										Follow hospital rules and regulations.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Sundin ang mga tuntunin at regulasyon ng ospital.
											</span>
										</div>
									</li>

									<li className="text-justify">
										Be considerate of the rights and property of other patients.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Maging makonsiderasyon sa mga karapatan at ari-arian ng
												ibang mga pasyente
											</span>
										</div>
									</li>
									<li className="text-justify">
										Assist in the control of noise and number of visitors.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Tumulong sa pagkontrol ng ingay at bilang ng mga bisita.
											</span>
										</div>
									</li>
									<li className="text-justify">
										Provide the hospital with a copy of his written directive if
										available.
										<br />
										<div className="bg-gray-50 rounded p-2 mt-2">
											<span className="italic text-sm text-gray-500">
												Bigyan ang ospital ng kopya ng kanyang nakasulat na
												direktiba kung mayroon.
											</span>
										</div>
									</li>
								</ol>
							</div>
						</CardContent>
					</Card>
				);
			default:
				return null;
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="max-w-7xl mx-auto py-10 px-4_"
		>
			{/* Desktop Sidebar */}
			<section className="mb-8 text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
					Patients & Visitors Guide
				</h1>
				<h2 className="text-3xl font-semibold text-secondary mb-2">Patients</h2>
				<p className="text-gray-600 px-4">
					Information and guidelines for our patients at Divine Word Hospital.
				</p>
			</section>
			<div className="hidden md:flex gap-8">
				<aside className="w-64 flex-shrink-0">
					<div className="flex flex-col">
						{tabList.map((tab) => (
							<button
								key={tab.value}
								className={`py-3 px-4 text-left flex items-center rounded-l_-xl transition ${
									activeTab === tab.value
										? 'bg-primary text-white font-semibold'
										: 'hover:bg-muted'
								}`}
								onClick={() => setActiveTab(tab.value)}
							>
								{tab.icon}
								{tab.label}
							</button>
						))}
					</div>
				</aside>

				{/* Content next to sidebar */}
				<div className="flex-grow">{renderTabContent()}</div>
			</div>

			{/* Mobile View Accordion */}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.1 }}
				className="block md:hidden"
			>
				<Accordion
					type="single"
					collapsible
					className="w-full"
					value={activeTab}
					onValueChange={(val) => setActiveTab(val)}
				>
					{tabList.map((tab) => (
						<AccordionItem
							key={tab.value}
							value={tab.value}
							className="px-4 border-none"
						>
							<AccordionTrigger className="text-left border-b">
								<div
									className={`flex flex-row items-center  font-semibold text-primary pb-2 transition-all ${
										tab.value === activeTab ? 'pl-4' : ''
									}`}
								>
									<span className="text-xl">{tab.label}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								{tab.value === activeTab && renderTabContent()}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</motion.div>
		</motion.div>
	);
};

export default PatientsPage;
