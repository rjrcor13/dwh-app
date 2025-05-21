// 'use client';

// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';

// export default function PhilHealthPage() {
// 	return (
// 		<div className="h-full w-full p-4">
// 			<div className="max-w-7xl mx-auto space-y-6">
// 				<Card>
// 					<CardHeader>
// 						<h1 className="text-3xl font-bold">PhilHealth</h1>
// 						<p className="text-sm text-muted-foreground">
// 							Divine Word Hospital’s Claims Office ensures accurate benefit
// 							computation and timely service for qualified PhilHealth members.
// 						</p>
// 					</CardHeader>

// 					<CardContent className="space-y-6">
// 						<p>
// 							We prioritize excellent customer service by addressing client
// 							queries during hospital visits. We assess all PhilHealth documents
// 							and compute benefits for both inpatient and outpatient cases.
// 						</p>

// 						<p>
// 							To maintain quality improvement and patient safety, DWH follows a
// 							process and procedure for PhilHealth benefit application.
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
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Pumunta sa Claims Office (ikatlong palapag, main
// 											building), humingi ng Claim Signature Form (CSF), at punan
// 											ito upang ma-validate o ma-verify.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Ensure that all details written on the CSF form are correct
// 									and match the patient’s information in the Member Data Record
// 									(MDR).
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Siguraduhing tama ang mga detalye sa CSF at tugma ito sa
// 											impormasyon ng pasyente sa Member Data Record (MDR).
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Submit the CSF form to the Claims Office for checking and
// 									review.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Ibigay ang CSF sa Claims Office upang masuri at ma-review.
// 										</span>
// 									</div>
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
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Parehong proseso sa naka-admit: pumunta sa Claims Office,
// 											kumuha ng CSF, at ipasuri ang impormasyon.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Ensure all details match the MDR.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Siguraduhing tumutugma ang lahat ng detalye sa MDR.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Know the exact schedule or date of operation.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Alamin ang eksaktong petsa o iskedyul ng operasyon.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Once approved, you will be given the CSF and required forms to
// 									be presented after the operation.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Kapag naaprubahan, ibibigay sa pasyente ang CSF at mga
// 											kailangang dokumento na ipapakita pagkatapos ng operasyon.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Submit the forms to Billing for SOA preparation.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Isumite ang mga dokumento sa Billing para sa paggawa ng
// 											Statement of Account (SOA).
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Settle balance and proceed to discharge.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Bayaran ang natitirang balanse at magtungo sa discharge
// 											area.
// 										</span>
// 									</div>
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
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Siguraduhing naka-rehistro ang sanggol at nakalista sa MDR
// 											ng magulang.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Go to HIMD to process newborn documentation.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Pumunta sa HIMD upang asikasuhin ang dokumento ng sanggol.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Submit the Newborn Record Form.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Ibigay ang Newborn Record Form sa HIMD.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Review the Birth Certificate and ensure it has the required
// 									signatures.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Suriin ang Birth Certificate at tiyaking may pirma ng
// 											doktor at ng magulang.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Register the newborn with the LCR and update PMRF.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Irehistro ang sanggol sa LCR at mag-update ng PMRF sa
// 											PhilHealth.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									Submit the updated MDR to the Claims Office.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Ibigay ang updated MDR sa Claims Office.
// 										</span>
// 									</div>
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
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Kung hindi updated ang kontribusyon, kailangang may pirma
// 											ng employer ang CSF.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									<strong>Self-Employed:</strong> Present contribution payment
// 									receipts.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Magpakita ng resibo ng hulog sa PhilHealth.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									<strong>Sponsored/Indigent/Point of Service:</strong> Present
// 									an updated MDR with 1-year validity.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Magpakita ng updated MDR na may bisa ng isang taon.
// 										</span>
// 									</div>
// 								</li>
// 								<li>
// 									<strong>Senior Citizen:</strong> Present a PhilHealth ID or
// 									any valid ID for record validation and verification.
// 									<br />
// 									<div className="bg-gray-50 rounded p-2 mt-2">
// 										<span className="italic text-sm text-gray-500">
// 											Magpresenta ng Philhealth ID or Valid ID para ma
// 											i-validate o ma i-verify ang record ng pasyente
// 										</span>
// 									</div>
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
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</div>
// 	);
// }
'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
export default function PhilHealthPage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
			className="h-full w-full p-4"
		>
			<div className="max-w-7xl mx-auto space-y-8">
				<div>
					<div>
						<h1 className="text-4xl font-bold text-primary">PhilHealth</h1>
						<p className="text-gray-800  mt-2">
							Divine Word Hospital’s Claims Office ensures accurate benefit
							computation and timely service for qualified PhilHealth members.
						</p>
					</div>

					<div className="space-y-8 text-[15px] leading-relaxed text-gray-800">
						<p>
							We prioritize excellent customer service by addressing client
							queries during hospital visits. We assess all PhilHealth documents
							and compute benefits for both inpatient and outpatient cases.
						</p>

						<p>
							To maintain quality improvement and patient safety, DWH follows a
							process and procedure for PhilHealth benefit application.
						</p>

						<Separator />

						<section>
							<h2 className="text-2xl font-semibold">
								Steps in Accomplishing PhilHealth Requirements
							</h2>

							{/* For In-Patients */}
							<div className="mt-6">
								<h3 className="text-lg font-medium text-primary">
									For In-Patients
								</h3>
								<ol className="list-decimal text-gray-800 pl-6 space-y-4 mt-2">
									{[
										[
											'Go to the Claims Office (3rd floor, main building), request a Claim Signature Form (CSF), and fill in the required information for validation or verification.',
											'Pumunta sa Claims Office (ikatlong palapag, main building), humingi ng Claim Signature Form (CSF), at punan ito upang ma-validate o ma-verify.',
										],
										[
											'Ensure that all details written on the CSF form are correct and match the patient’s information in the Member Data Record (MDR).',
											'Siguraduhing tama ang mga detalye sa CSF at tugma ito sa impormasyon ng pasyente sa Member Data Record (MDR).',
										],
										[
											'Submit the CSF form to the Claims Office for checking and review.',
											'Ibigay ang CSF sa Claims Office upang masuri at ma-review.',
										],
									].map(([step, translation], index) => (
										<li key={index}>
											{step}
											<div className=" rounded-md bg-gray-50  p-2 text-sm italic text-muted-foreground">
												{translation}
											</div>
										</li>
									))}
								</ol>
							</div>

							{/* For Out-Patients */}
							<div className="mt-8">
								<h3 className="text-lg font-medium text-primary">
									For Out-Patients
								</h3>
								<ol className="list-decimal text-gray-800 pl-6 space-y-4 mt-2">
									{[
										[
											'Same procedure as for in-patients: go to Claims Office, get CSF, and validate information.',
											'Parehong proseso sa naka-admit: pumunta sa Claims Office, kumuha ng CSF, at ipasuri ang impormasyon.',
										],
										[
											'Ensure all details match the MDR.',
											'Siguraduhing tumutugma ang lahat ng detalye sa MDR.',
										],
										[
											'Know the exact schedule or date of operation.',
											'Alamin ang eksaktong petsa o iskedyul ng operasyon.',
										],
										[
											'Once approved, you will be given the CSF and required forms to be presented after the operation.',
											'Kapag naaprubahan, ibibigay sa pasyente ang CSF at mga kailangang dokumento na ipapakita pagkatapos ng operasyon.',
										],
										[
											'Submit the forms to Billing for SOA preparation.',
											'Isumite ang mga dokumento sa Billing para sa paggawa ng Statement of Account (SOA).',
										],
										[
											'Settle balance and proceed to discharge.',
											'Bayaran ang natitirang balanse at magtungo sa discharge area.',
										],
									].map(([step, translation], index) => (
										<li key={index}>
											{step}
											<div className=" rounded-md bg-gray-50  p-2 text-sm italic text-muted-foreground">
												{translation}
											</div>
										</li>
									))}
								</ol>
							</div>

							{/* For Maternity & Newborn */}
							<div className="mt-8">
								<h3 className="text-lg font-medium text-primary">
									For Maternity & Newborn
								</h3>
								<ol className="list-decimal pl-6 text-gray-800 space-y-4 mt-2">
									{[
										[
											'Make sure the newborn is registered and included in the MDR of the parent.',
											'Siguraduhing naka-rehistro ang sanggol at nakalista sa MDR ng magulang.',
										],
										[
											'Go to HIMD to process newborn documentation.',
											'Pumunta sa HIMD upang asikasuhin ang dokumento ng sanggol.',
										],
										[
											'Submit the Newborn Record Form.',
											'Ibigay ang Newborn Record Form sa HIMD.',
										],
										[
											'Review the Birth Certificate and ensure it has the required signatures.',
											'Suriin ang Birth Certificate at tiyaking may pirma ng doktor at ng magulang.',
										],
										[
											'Register the newborn with the LCR and update PMRF.',
											'Irehistro ang sanggol sa LCR at mag-update ng PMRF sa PhilHealth.',
										],
										[
											'Submit the updated MDR to the Claims Office.',
											'Ibigay ang updated MDR sa Claims Office.',
										],
									].map(([step, translation], index) => (
										<li key={index}>
											{step}
											<div className=" rounded-md bg-gray-50  p-2 text-sm italic text-muted-foreground">
												{translation}
											</div>
										</li>
									))}
								</ol>
							</div>
						</section>

						{/* Member Category Info */}
						<section className="mt-10">
							<h3 className="text-lg font-medium text-primary">
								For General Information (Member Category)
							</h3>
							<ul className="list-disc pl-6 space-y-4 mt-2 text-gray-800">
								{[
									[
										'Government/Private Employed: If the PhilHealth contribution is not updated, the CSF must be signed by the employer.',
										'Kung hindi updated ang kontribusyon, kailangang may pirma ng employer ang CSF.',
									],
									[
										'Self-Employed: Present contribution payment receipts.',
										'Magpakita ng resibo ng hulog sa PhilHealth.',
									],
									[
										'Sponsored/Indigent/Point of Service: Present an updated MDR with 1-year validity.',
										'Magpakita ng updated MDR na may bisa ng isang taon.',
									],
									[
										'Senior Citizen: Present a PhilHealth ID or any valid ID for record validation and verification.',
										'Magpresenta ng PhilHealth ID o ibang valid ID para sa record verification.',
									],
								].map(([info, translation], index) => (
									<li key={index}>
										{info}
										<div className=" rounded-md bg-gray-50  p-2 text-sm italic text-muted-foreground">
											{translation}
										</div>
									</li>
								))}
							</ul>
						</section>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
