'use client';

import { useRouter } from 'next/navigation';

export default function ServicesDetailClient({ service }) {
	const router = useRouter();
	const { title, fullContent, slug } = service; // 'service' now contains only serializable data

	if (!fullContent) {
		return (
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<button
					onClick={() => router.back()}
					className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
				>
					← Back
				</button>
				<h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
				<p className="text-gray-700">
					No detailed content available for this service.
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<button
				onClick={() => router.back()}
				className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
			>
				← Back
			</button>

			<h1 className="text-5xl font-bold text-primary mb-6 justify-center items-center justify-self-center">
				{title}
			</h1>

			{/* General Overview */}
			{fullContent.overview && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">Overview</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.overview}
					</p>
				</section>
			)}

			{/* Mission & Vision */}
			{fullContent.mission_vision && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Mission & Vision
					</h2>
					{fullContent.mission_vision.mission && (
						<p className="text-lg text-gray-700 mb-2 leading-relaxed">
							<span className="font-semibold text-primary-dark">Mission:</span>{' '}
							{fullContent.mission_vision.mission}
						</p>
					)}
					{fullContent.mission_vision.vision && (
						<p className="text-lg text-gray-700 leading-relaxed">
							<span className="font-semibold text-primary-dark">Vision:</span>{' '}
							{fullContent.mission_vision.vision}
						</p>
					)}
				</section>
			)}

			{/* Leadership/Staff (Radiology specific) */}
			{fullContent.leadership_staff && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Leadership & Staff
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.leadership_staff}
					</p>
				</section>
			)}

			{/* Advanced Equipment (Radiology specific) */}
			{fullContent.advanced_equipment?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Advanced Imaging Equipment
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.advanced_equipment.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* General Radiography (Radiology specific) */}
			{fullContent.general_radiography && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						General Radiography
					</h2>
					{fullContent.general_radiography.non_contrast?.length > 0 && (
						<div className="mb-4">
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Non-Contrast
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.general_radiography.non_contrast.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
					{fullContent.general_radiography.non_contrast_and_contrast?.length >
						0 && (
						<div>
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Non-Contrast & Contrast
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.general_radiography.non_contrast_and_contrast.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
				</section>
			)}

			{/* Invasive Procedures (Radiology specific) */}
			{fullContent.invasive_procedures?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Invasive Procedures
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.invasive_procedures.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Specialized Diagnostic & Interventional X-Ray Services (Radiology specific) */}
			{fullContent.specialized_services?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Specialized Diagnostic & Interventional X-Ray Services
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.specialized_services.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Dental Panoramic / Cephalometric (Radiology specific) */}
			{fullContent.dental_panoramic_cephalometric?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Dental Panoramic / Cephalometric
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.dental_panoramic_cephalometric.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Services Offered (General for lists of services) */}
			{fullContent.services_offered?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Services Offered
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.services_offered.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Body Composition Monitor (BCM) (Hemodialysis specific) */}
			{fullContent.bcm_info && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						{fullContent.bcm_info.title}
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.bcm_info.description}
					</p>
				</section>
			)}

			{/* Hemodialysis Admission Procedure */}
			{fullContent.admission_procedure && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						{fullContent.admission_procedure.title}
					</h2>
					{fullContent.admission_procedure.new_out_patients?.length > 0 && (
						<div className="mb-4">
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								NEW OUT-PATIENTS:
							</h3>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								{fullContent.admission_procedure.new_out_patients.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
					{fullContent.admission_procedure.regular_patients?.length > 0 && (
						<div>
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								REGULAR PATIENTS:
							</h3>
							<ul className="list-disc list-inside space-y-1 text-gray-700">
								{fullContent.admission_procedure.regular_patients.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
				</section>
			)}

			{/* Hemodialysis Session Schedule */}
			{fullContent.session_schedule && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						{fullContent.session_schedule.title}
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700 mb-2">
						{fullContent.session_schedule.times.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p className="text-sm text-gray-600">
						{fullContent.session_schedule.note}
					</p>
				</section>
			)}

			{/* Patient Support & Team (Pharmacy specific) */}
			{(fullContent.patient_support || fullContent.team) && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						About Our Pharmacy
					</h2>
					{fullContent.patient_support && (
						<p className="text-gray-700 mb-3 leading-relaxed">
							{fullContent.patient_support}
						</p>
					)}
					{fullContent.team && (
						<p className="text-gray-700 leading-relaxed">{fullContent.team}</p>
					)}
				</section>
			)}

			{/* Medication Management Services (Pharmacy specific) */}
			{fullContent.medication_management_services?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Medication Management Services
					</h2>
					<div className="space-y-6">
						{fullContent.medication_management_services.map(
							(serviceItem, index) => (
								<div key={index} className="border-b pb-4 last:border-b-0">
									<h3 className="text-xl font-semibold text-primary-dark mb-2">
										{serviceItem.title}
									</h3>
									<p className="text-gray-700 leading-relaxed">
										{serviceItem.description}
									</p>
								</div>
							)
						)}
					</div>
				</section>
			)}

			{/* Role in Institution & Location/Hours (Pharmacy specific) */}
			{(fullContent.role_in_institution || fullContent.location_hours) && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Institutional Role & Accessibility
					</h2>
					{fullContent.role_in_institution && (
						<p className="text-gray-700 mb-3 leading-relaxed">
							{fullContent.role_in_institution}
						</p>
					)}
					{fullContent.location_hours && (
						<p className="text-gray-700 leading-relaxed">
							{fullContent.location_hours}
						</p>
					)}
				</section>
			)}

			{/* Specialized Tests (Cardio-pulmonary specific) */}
			{fullContent.specialized_tests && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Specialized Tests
					</h2>
					{fullContent.specialized_tests.cardiopulmonary_unit?.length > 0 && (
						<div className="mb-4">
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Cardiopulmonary Unit
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.specialized_tests.cardiopulmonary_unit.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
					{fullContent.specialized_tests.pulmonary_function_test?.length >
						0 && (
						<div>
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Pulmonary Function Test
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.specialized_tests.pulmonary_function_test.map(
									(item, index) => (
										<li key={index}>{item}</li>
									)
								)}
							</ul>
						</div>
					)}
				</section>
			)}

			{/* Capabilities (Emergency Care specific) */}
			{fullContent.capabilities && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Capabilities
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.capabilities}
					</p>
				</section>
			)}

			{/* Availability (Emergency Care specific) */}
			{fullContent.availability && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Availability
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.availability}
					</p>
				</section>
			)}

			{/* Staff (Physical Therapy specific) */}
			{fullContent.staff && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">Our Team</h2>
					<p className="text-gray-700 leading-relaxed">{fullContent.staff}</p>
				</section>
			)}

			{/* Benefits (Physical Therapy specific) */}
			{fullContent.benefits?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Benefits of Physical Therapy
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.benefits.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Sections (Pathology & Laboratory specific) */}
			{fullContent.sections?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Specialized Sections
					</h2>
					<div className="space-y-6">
						{fullContent.sections.map((sectionItem, index) => (
							<div key={index} className="border-b pb-4 last:border-b-0">
								<h3 className="text-xl font-semibold text-primary-dark mb-2">
									{sectionItem.title}
								</h3>
								<ul className="list-disc list-inside space-y-1 text-gray-700">
									{sectionItem.details.map((detail, detailIndex) => (
										<li key={detailIndex}>{detail}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Mission/Goal (TB DOTS specific) */}
			{fullContent.mission_goal && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Mission & Goal
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.mission_goal}
					</p>
				</section>
			)}

			{/* Free Services (TB DOTS specific) */}
			{fullContent.free_services?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Provision of FREE Services
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.free_services.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Needs Addressed (NICU specific) */}
			{fullContent.needs_addressed?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Needs Addressed by NICU
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.needs_addressed.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Staffing (NICU specific) */}
			{fullContent.staffing && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Our Dedicated Team
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.staffing}
					</p>
				</section>
			)}

			{/* Mother-Baby Friendly (NICU specific) */}
			{fullContent.mother_baby_friendly && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Mother-Baby Friendly Initiatives
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.mother_baby_friendly}
					</p>
				</section>
			)}

			{/* Newborn Services Areas (NICU specific) */}
			{fullContent.newborn_services_areas?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Newborn Services Areas
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.newborn_services_areas.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* Staffing Ratio & Bed Capacity (ICU specific) */}
			{(fullContent.staffing_ratio || fullContent.bed_capacity_types) && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						ICU Facilities & Staffing
					</h2>
					{fullContent.staffing_ratio && (
						<p className="text-gray-700 mb-3 leading-relaxed">
							{fullContent.staffing_ratio}
						</p>
					)}
					{fullContent.bed_capacity_types && (
						<p className="text-gray-700 leading-relaxed">
							{fullContent.bed_capacity_types}
						</p>
					)}
				</section>
			)}

			{/* Equipment Monitoring (ICU specific) */}
			{fullContent.equipment_monitoring && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Monitoring Equipment
					</h2>
					<p className="text-gray-700 leading-relaxed">
						{fullContent.equipment_monitoring}
					</p>
				</section>
			)}

			{/* Internal Areas (ICU specific) */}
			{fullContent.internal_areas?.length > 0 && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Internal Areas
					</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700">
						{fullContent.internal_areas.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			)}

			{/* ICU Services (General & Special) */}
			{fullContent.services && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">Services</h2>
					{fullContent.services.general_services?.length > 0 && (
						<div className="mb-4">
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								General Services
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.services.general_services.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					)}
					{fullContent.services.special_services?.length > 0 && (
						<div>
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Special Services
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.services.special_services.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					)}
					{fullContent.services?.length > 0 && (
						<div>
							<h3 className="text-xl font-semibold text-primary-dark mb-2">
								Special Services
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								{fullContent.services.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					)}
				</section>
			)}

			{/* Contact Information (General for all services) */}
			{fullContent.contact && (
				<section className="mb-8 p-6 ">
					<h2 className="text-2xl font-semibold text-primary mb-3">
						Contact Information
					</h2>
					{fullContent.contact.inquiries && (
						<p className="text-gray-700 mb-2">
							{fullContent.contact.inquiries}
						</p>
					)}
					{fullContent.contact.number && (
						<p className="text-gray-700 mb-1">
							<span className="font-semibold">Phone:</span>{' '}
							{fullContent.contact.number}
						</p>
					)}
					{fullContent.contact.email && (
						<p className="text-gray-700 mb-1">
							<span className="font-semibold">Email:</span>{' '}
							<a
								href={`mailto:${fullContent.contact.email}`}
								className="text-blue-600 hover:underline"
							>
								{fullContent.contact.email}
							</a>
						</p>
					)}
					{fullContent.contact.facebook && (
						<p className="text-gray-700 mb-1">
							<span className="font-semibold">Facebook:</span>{' '}
							<a
								href={`https://facebook.com/${fullContent.contact.facebook.replace(
									/\s/g,
									''
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								{fullContent.contact.facebook}
							</a>
						</p>
					)}
				</section>
			)}

			{/* Add more sections here as needed, following the pattern of
                conditional rendering and iterating through arrays or nested objects.
            */}
		</div>
	);
}
