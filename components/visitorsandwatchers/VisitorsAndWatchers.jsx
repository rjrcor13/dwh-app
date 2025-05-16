import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const VisitorsAndWatchers = () => {
	return (
		<Card className="w-full max-w-3xl mx-auto shadow-md rounded-lg border">
			<CardHeader className="py-4">
				<h4 className="font-semibold text-xl text-gray-900">
					Visitors & Watchers Information
				</h4>
				<p className="text-sm text-gray-500">
					Important guidelines for the comfort and safety of our patients.
				</p>
			</CardHeader>
			<CardContent className="py-4">
				<div className="mb-6">
					<h6 className="font-semibold text-lg text-gray-800 mb-2">
						Visiting Guidelines
					</h6>
					<p className="text-base text-gray-700 mb-2">
						To ensure a healing environment, DWH Management has implemented
						these guidelines to minimize the transmission of viruses and
						prioritize patient well-being.
					</p>
					<p className="font-semibold text-base text-blue-600">
						Visiting Hours: 3:00 PM – 6:00 PM Daily
					</p>
				</div>

				<Separator className="my-4" />

				<div className="mb-6">
					<h6 className="font-semibold text-lg text-gray-800 mb-2">
						Watchers Policies
					</h6>
					<p className="text-base text-gray-700 mb-2">
						For the comfort and care of our patients, please adhere to the
						following policies regarding watchers:
					</p>
					<ol className="list-decimal list-inside text-gray-700 space-y-2">
						<li>
							<p className="text-base">
								<span className="font-semibold">One Watcher Per Patient:</span>{' '}
								Only one (1) watcher is permitted per patient, based on their
								medical condition. Consistent care is best, so changing watchers
								frequently is discouraged. A watcher is recommended for the
								duration of the patient's admission whenever possible.
								<ul className="list-disc list-inside mt-2 space-y-1">
									<li>
										<p className="text-base">
											<span className="font-semibold text-blue-600">
												ICU Watchers:
											</span>{' '}
											For restless, stable, and pediatric patients in the
											Intensive Care Unit, only one (1) watcher will be allowed.
											The ICU staff will contact the immediate family if
											necessary.
										</p>
									</li>
									<li>
										<p className="text-base">
											<span className="font-semibold text-blue-600">NICU:</span>{' '}
											Visiting or viewing in the Neonatal Intensive Care Unit is
											temporarily cancelled. Parents should await the medical
											team's advice on when they can see their baby.
										</p>
									</li>
								</ul>
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold">Identification:</span> Please
								present your HMO or PWD ID to the admitting staff upon the
								patient's admission.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold text-yellow-600">
									Financial Assistance:
								</span>{' '}
								Please note that private room accommodations and above are NOT
								ELIGIBLE for any financial assistance.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold">Personal Items:</span> Bringing
								personal pillows and blankets is not allowed unless they are
								newly purchased. In such cases, please present the receipt to
								the security guard upon entry.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold text-yellow-600">
									Children Visitors:
								</span>{' '}
								Children under 12 years of age are discouraged from visiting
								confined patients to protect both the child and the patient.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold">PhilHealth Requirements:</span>{' '}
								To avoid delays during discharge, please submit all necessary
								PhilHealth documents within 72 hours of admission. You can have
								your PhilHealth papers checked at our Claims Office, located
								across from the main lobby.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold">Discharge Time:</span> The
								standard discharge cut-off time for patients going home is 11:00
								am.
							</p>
						</li>
						<li>
							<p className="text-base">
								<span className="font-semibold text-red-600">
									Photography and Videography:
								</span>{' '}
								Taking, posting, or any further processing of photos or videos
								without the explicit consent of the attending staff or medical
								personnel is STRICTLY PROHIBITED and constitutes a violation of
								the Data Privacy Act of 2012.
							</p>
						</li>
					</ol>
				</div>
			</CardContent>
		</Card>
	);
};

export default VisitorsAndWatchers;
