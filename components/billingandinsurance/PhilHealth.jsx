import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	CheckCircle,
	ClipboardList,
	Clock,
	CreditCard,
	FileText,
	Hospital,
	LifeBuoy,
	ListChecks,
	Mail,
	MapPin,
	Phone,
	Users,
} from 'lucide-react';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const PhilHealthSection = () => {
	const PhilHealthSteps = ({ title, steps }) => (
		<div className="bg-gray-50 rounded-md p-4">
			<h4 className="text-md font-semibold text-blue-600 mb-2 flex items-center">
				<ClipboardList className="mr-2 h-5 w-5" />
				{title}
			</h4>
			<ol className="list-decimal list-inside space-y-2 text-gray-700">
				{steps.map((step, index) => (
					<li key={index}>{step}</li>
				))}
			</ol>
		</div>
	);

	const MemberCategoryInfo = () => (
		<div className="bg-gray-50 rounded-md p-4">
			<h4 className="text-md font-semibold text-blue-600 mb-2 flex items-center">
				<Users className="mr-2 h-5 w-5" />
				Para sa Pangkalahatang Impormasyon (Kategorya ng Miyembro)
			</h4>
			<ul className="list-disc list-inside space-y-2 text-gray-700">
				<li>
					<span className="font-medium">Government/Private Employed:</span>{' '}
					Kinakailangan ang pirma ng employer kung hindi updated ang
					kontribusyon ng miyembro/pasyente.
				</li>
				<li>
					<span className="font-medium">
						Self-Employed/Self-Earning Individual:
					</span>{' '}
					Ipakita ang resibo ng kontribusyon sa Claims Office Staff-in-Charge
					para sa validation ng status ng kontribusyon ng pasyente.
				</li>
				<li>
					<span className="font-medium">
						Sponsored/Indigent/Point of Service:
					</span>{' '}
					Magpresenta ng updated na Member Data Record (MDR) sa Claims Office
					Staff-in-Charge (hal., Jan-Dec 2024). Ito ay may isang taong validity.
				</li>
				<li>
					<span className="font-medium">Senior Citizen:</span> Magpresenta ng
					PhilHealth ID o anumang valid ID para sa validation at verification ng
					record.
				</li>
			</ul>
		</div>
	);

	return (
		<motion.section variants={itemVariants}>
			<Card className="shadow-none border-0">
				<CardHeader>
					<CardTitle className="text-2xl font-semibold text-blue-600 flex items-center">
						<Hospital className="mr-2 h-6 w-6" />
						PhilHealth
					</CardTitle>
					<CardDescription className="text-gray-500">
						Information about PhilHealth services.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-gray-700 ">
						Divine Word Hospital's Claims office (PhilHeath) ensures accurate
						benefit computation and timely service for qualified PhilHealth
						members. We prioritize excellent customer service by addressing
						client queries during hospital visits. We assess all PhilHealth
						documents and compute benefits for both inpatient and outpatient
						cases. To maintain quality improvement and patient safety, DWH
						follows process and procedure for PhilHealth benefit application:
					</p>

					<h3 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
						<CheckCircle className="mr-2 h-5 w-5" />
						Steps in Accomplishing PhilHealth Requirements kindly accomplish the
						following:
					</h3>

					<div className="space-y-4">
						<PhilHealthSteps
							title="For In-Patient"
							steps={[
								'Go to the Claims Office (3rd floor, main building), request a Claim Signature Form (CSF), and fill in the required information for validation or verification. Pumunta sa Claims Office (3rd floor, main building), humingi ng Claim Signature Form (CSF), at punan ang kinakailangang impormasyon para sa validation o verification.',
								'Siguraduhing tama ang lahat ng detalyeng isinulat sa CSF form at tugma sa impormasyon ng pasyente sa Member Data Record (MDR).',
								'Isumite ang CSF form sa Claims Office para sa checking at review.',
							]}
						/>

						<PhilHealthSteps
							title="Para sa mga Out-Patient"
							steps={[
								'Pumunta sa Claims Office (3rd floor, main building), humingi ng Claim Signature Form (CSF), at punan ang kinakailangang impormasyon para sa validation o verification.',
								'Siguraduhing tama ang lahat ng detalyeng isinulat sa CSF form at tugma sa impormasyon ng pasyente sa Member Data Record (MDR).',
								'Dapat alam ng pasyente ang eksaktong petsa ng operasyon o minor surgery para sa online registration.',
								'Kapag na-approve na ito ng Claims Office Staff-in-Charge, bibigyan ang pasyente ng Operative Technique Form, CF4 Form, o CS2 back page form para sa diagnosis ng doktor pagkatapos ng operasyon.',
								'Dapat isumite o ibigay ng pasyente at nurse ang form sa Claims Office Staff-in-Charge upang ito ay magawan ng Statement of Account (SOA).',
								'Kung ang pasyente ay may SOA na at kung may natitira pang dapat bayaran na hindi sakop ng PhilHealth, ang bantay ng pasyente ay dapat magpunta sa cashier upang ito ay mabayaran at pagkatapos ipakita ang resibo sa Claims Office para ma-record ang OR number ng resibo.  Pero kung wala nang dapat bayaran at sakop lahat ng PhilHealth, ang pasyente ay maari nang makauwi o ma-discharge.',
							]}
						/>

						<PhilHealthSteps
							title="Para sa Maternity at Newborn"
							steps={[
								'Siguraduhing nakarehistro ang Certificate of Live Birth ng sanggol sa Local City Registrar at idineklara ang sanggol bilang dependent sa updated na MDR ng magulang.',
								'Pumunta sa Health Information Management Division (HIMD) o Medical Records Section (3rd floor, main building) upang iproseso ang Certificate of Live Birth ng sanggol, punan ang kinakailangang detalye, at siguraduhing tama ang lahat ng impormasyon sa Newborn Record Form.',
								'Isumite ang Newborn Record Form sa Medical Records Staff-in-Charge upang maproseso ang Birth Certificate ng sanggol.',
								'Suriing mabuti at siguraduhing may lagda ng medical record staff, magulang at doktor ng sanggol bago ito irehistro sa Local City Registrar (LCR).',
								'Pagkatapos mairehistro ang Certificate of Live Birth ng sanggol, maaaring magpatuloy ang tagapag-alaga ng pasyente sa punong tanggapan ng PhilHealth upang punan ang PhilHealth Member Record Form (PMRF) kasama ang photocopy ng rehistradong Certificate of Live Birth upang i-update ang status ng magulang at ideklara ang sanggol bilang dependent.',
								'Isumite ang updated na MDR ng magulang sa Claims Office ng ospital upang makuha ang mga benepisyo ng PhilHealth.',
							]}
						/>
						<MemberCategoryInfo />
					</div>

					<p className="text-gray-700 mt-4">
						Kapag ang mga nabanggit na dokumento ay nakumpleto, nilagdaan at
						suportado, magpatuloy sa Seksyon ng Paniningil at isumite ang mga
						kinakailangan sa Billing Officer upang kalkulahin at ibawas ang
						iyong mga benepisyo sa PhilHealth mula sa iyong bayarin sa ospital.
					</p>
				</CardContent>
			</Card>
		</motion.section>
	);
};

export default PhilHealthSection;
// 'use client';

// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';

// export default function PhilHealthPage() {
// 	return (
// 		<ScrollArea className="h-full w-full p-4">
// 			<div className="max-w-7xl mx-auto space-y-6">
// 				<Card>
// 					<CardHeader>
// 						<h1 className="text-3xl font-bold">PhilHealth</h1>
// 						<p className="text-sm text-muted-foreground">
// 							Divine Word Hospital’s Claims Office ensures accurate benefit
// 							computation and timely service for qualified PhilHealth members.
// 						</p>
// 						<p className="text-sm text-muted-foreground italic">
// 							Tinitiyak ng Claims Office ng Divine Word Hospital ang tamang
// 							pagkukwenta ng benepisyo at maagap na serbisyo para sa mga
// 							kwalipikadong miyembro ng PhilHealth.
// 						</p>
// 					</CardHeader>

// 					<CardContent className="space-y-6">
// 						<p>
// 							We prioritize excellent customer service by addressing client
// 							queries during hospital visits. We assess all PhilHealth documents
// 							and compute benefits for both inpatient and outpatient cases.
// 						</p>
// 						<p className="italic">
// 							Binibigyang-priyoridad namin ang mahusay na serbisyo sa customer
// 							sa pamamagitan ng pagsagot sa mga katanungan ng kliyente habang
// 							nasa ospital. Sinusuri namin ang lahat ng dokumento ng PhilHealth
// 							at kinakalkula ang mga benepisyo para sa parehong naka-admit at
// 							hindi naka-admit na pasyente.
// 						</p>

// 						<p>
// 							To maintain quality improvement and patient safety, DWH follows a
// 							process and procedure for PhilHealth benefit application.
// 						</p>
// 						<p className="italic">
// 							Para mapanatili ang kalidad at kaligtasan ng pasyente, sinusunod
// 							ng DWH ang mga proseso at pamamaraan sa aplikasyon ng benepisyo
// 							mula sa PhilHealth.
// 						</p>

// 						<Separator />

// 						<h2 className="text-xl font-semibold">
// 							Steps in Accomplishing PhilHealth Requirements
// 						</h2>

// 						{/* For In-Patients */}
// 						<div>
// 							<h3 className="text-lg font-medium mt-4">For In-Patients</h3>
// 							<ol className="list-decimal pl-6 space-y-3">
// 								<li>
// 									Go to the Claims Office (3rd floor, main building), request a
// 									Claim Signature Form (CSF), and fill in the required
// 									information for validation or verification.
// 									<br />
// 									<em>
// 										Pumunta sa Claims Office (ikatlong palapag, main building),
// 										humingi ng Claim Signature Form (CSF), at punan ito upang
// 										ma-validate o ma-verify.
// 									</em>
// 								</li>
// 								<li>
// 									Ensure that all details written on the CSF form are correct
// 									and match the patient’s information in the Member Data Record
// 									(MDR).
// 									<br />
// 									<em>
// 										Siguraduhing tama ang mga detalye sa CSF at tugma ito sa
// 										impormasyon ng pasyente sa Member Data Record (MDR).
// 									</em>
// 								</li>
// 								<li>
// 									Submit the CSF form to the Claims Office for checking and
// 									review.
// 									<br />
// 									<em>
// 										Ibigay ang CSF sa Claims Office upang masuri at ma-review.
// 									</em>
// 								</li>
// 							</ol>
// 						</div>

// 						{/* For Out-Patients */}
// 						<div>
// 							<h3 className="text-lg font-medium mt-6">For Out-Patients</h3>
// 							<ol className="list-decimal pl-6 space-y-3">
// 								<li>
// 									Same procedure as for in-patients: go to Claims Office, get
// 									CSF, and validate information.
// 									<br />
// 									<em>
// 										Parehong proseso sa naka-admit: pumunta sa Claims Office,
// 										kumuha ng CSF, at ipasuri ang impormasyon.
// 									</em>
// 								</li>
// 								<li>
// 									Ensure all details match the MDR.
// 									<br />
// 									<em>Siguraduhing tumutugma ang lahat ng detalye sa MDR.</em>
// 								</li>
// 								<li>
// 									Know the exact schedule or date of operation.
// 									<br />
// 									<em>Alamin ang eksaktong petsa o iskedyul ng operasyon.</em>
// 								</li>
// 								<li>
// 									Once approved, you will be given the CSF and required forms to
// 									be presented after the operation.
// 									<br />
// 									<em>
// 										Kapag naaprubahan, ibibigay sa pasyente ang CSF at mga
// 										kailangang dokumento na ipapakita pagkatapos ng operasyon.
// 									</em>
// 								</li>
// 								<li>
// 									Submit the forms to Billing for SOA preparation.
// 									<br />
// 									<em>
// 										Isumite ang mga dokumento sa Billing para sa paggawa ng
// 										Statement of Account (SOA).
// 									</em>
// 								</li>
// 								<li>
// 									Settle balance and proceed to discharge.
// 									<br />
// 									<em>
// 										Bayaran ang natitirang balanse at magtungo sa discharge
// 										area.
// 									</em>
// 								</li>
// 							</ol>
// 						</div>

// 						{/* For Maternity & Newborn */}
// 						<div>
// 							<h3 className="text-lg font-medium mt-6">
// 								For Maternity & Newborn
// 							</h3>
// 							<ol className="list-decimal pl-6 space-y-3">
// 								<li>
// 									Make sure the newborn is registered and included in the MDR of
// 									the parent.
// 									<br />
// 									<em>
// 										Siguraduhing naka-rehistro ang sanggol at nakalista sa MDR
// 										ng magulang.
// 									</em>
// 								</li>
// 								<li>
// 									Go to HIMD to process newborn documentation.
// 									<br />
// 									<em>
// 										Pumunta sa HIMD upang asikasuhin ang dokumento ng sanggol.
// 									</em>
// 								</li>
// 								<li>
// 									Submit the Newborn Record Form.
// 									<br />
// 									<em>Ibigay ang Newborn Record Form sa HIMD.</em>
// 								</li>
// 								<li>
// 									Review the Birth Certificate and ensure it has the required
// 									signatures.
// 									<br />
// 									<em>
// 										Suriin ang Birth Certificate at tiyaking may pirma ng doktor
// 										at ng magulang.
// 									</em>
// 								</li>
// 								<li>
// 									Register the newborn with the LCR and update PMRF.
// 									<br />
// 									<em>
// 										Irehistro ang sanggol sa LCR at mag-update ng PMRF sa
// 										PhilHealth.
// 									</em>
// 								</li>
// 								<li>
// 									Submit the updated MDR to the Claims Office.
// 									<br />
// 									<em>Ibigay ang updated MDR sa Claims Office.</em>
// 								</li>
// 							</ol>
// 						</div>

// 						{/* Member Category Info */}
// 						<div>
// 							<h3 className="text-lg font-medium mt-6">
// 								For General Information (Member Category)
// 							</h3>
// 							<ul className="list-disc pl-6 space-y-3">
// 								<li>
// 									<strong>Government/Private Employed:</strong> If the
// 									PhilHealth contribution is not updated, the CSF must be signed
// 									by the employer.
// 									<br />
// 									<em>
// 										Kung hindi updated ang kontribusyon, kailangang may pirma ng
// 										employer ang CSF.
// 									</em>
// 								</li>
// 								<li>
// 									<strong>Self-Employed:</strong> Present contribution payment
// 									receipts.
// 									<br />
// 									<em>Magpakita ng resibo ng hulog sa PhilHealth.</em>
// 								</li>
// 								<li>
// 									<strong>Sponsored/Indigent/Point of Service:</strong> Present
// 									an updated MDR with 1-year validity.
// 									<br />
// 									<em>Magpakita ng updated MDR na may bisa ng isang taon.</em>
// 								</li>
// 								<li>
// 									<strong>Senior Citizen:</strong> Present PhilHealth ID or any
// 									valid ID.
// 									<br />
// 									<em>Magpakita ng PhilHealth ID o alinmang valid ID.</em>
// 								</li>
// 							</ul>
// 						</div>

// 						<Separator />

// 						<p>
// 							Once all documents are properly filled out, signed, and complete,
// 							proceed to the Billing Section and submit them to the Billing
// 							Officer so your PhilHealth benefits can be deducted from your
// 							bill.
// 						</p>
// 						<p className="italic">
// 							Kapag kumpleto na ang lahat ng dokumento at may lagda, pumunta sa
// 							Billing Section at ibigay ito sa Billing Officer upang maibawas
// 							ang benepisyo ng PhilHealth sa iyong bayarin.
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</ScrollArea>
// 	);
// }
