import React from 'react';

const AboutUs = () => {
	return (
		<div className="container_ max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<section className="mb-10">
				<h2 className="text-3xl font-bold text-primary mb-6 text-center">
					Our Story: A Legacy of Care
				</h2>
				<p className="text-lg text-gray-700 mb-4">
					At Divine Word Hospital, our commitment to providing quality
					healthcare in Eastern Visayas is deeply rooted in a history of
					compassion and dedication.
				</p>
				<div className="space-y-6 text-gray-600">
					<p>
						The vision for a Catholic hospital in Region VIII began in 1964 with
						Father Earnest Hoerdemann, SVD, then rector of the Divine Word
						College. His aspiration, supported by the German government, German
						Bishops, dedicated missionaries, and numerous generous benefactors,
						led to the establishment of a 100-bed hospital equipped with modern
						facilities. This significant endeavor was a collaborative effort
						between the Society of the Divine Word (SVD) Fathers and the
						Missionary Benedictine Sisters of Tutzing (MBS), Germany.
					</p>
					<p>
						From its inception, Divine Word Hospital played a crucial role in
						the education of future healthcare professionals, serving as the
						training hospital for the College of Nursing, Medical Technology,
						Medicine, and other paramedical courses of Divine Word College,
						which later evolved into Divine Word University (DWU).
					</p>
					<p>
						On February 7, 1965, a significant milestone was reached with the
						blessing and inauguration of the hospital. The very next day, we
						opened our doors to patients, marking the beginning of our enduring
						commitment to the community. Shortly thereafter, the SVD Fathers
						entrusted the full administration of Divine Word Hospital (DWH) to
						the Philippine Province of the Missionary Benedictine Sisters of
						Tutzing, Germany.
					</p>
					<p>
						Divine Word Hospital has consistently been at the forefront of
						healthcare innovation in Region VIII. We proudly pioneered several
						essential services, including the first Dizziness, Hearing and Voice
						Center, a dedicated Neurosciences Unit, and the introduction of
						Hemodialysis, CT scan, Digital Mammography, and Magnetic Resonance
						Imaging (MRI) to the region. Our diagnostic services continue to be
						among the most advanced available.
					</p>
					<p>
						Our dedication to excellence extends to medical education. The
						Residency Training Programs in the Departments of Medicine and
						Pediatrics have earned accreditation from their respective Specialty
						Societies. We are currently working diligently towards the
						accreditation of the Residency Training Programs in the Departments
						of Obstetrics and Gynecology, and Surgery, further solidifying our
						commitment to training highly skilled medical professionals.
					</p>
					<p>
						Today, Divine Word Hospital operates with a 179-bed capacity,
						including 17 service beds specifically allocated for indigent
						patients. Our dedicated team comprises over 400 employees, including
						competent consultants, resident physicians, nurses, and other
						essential personnel, all working collaboratively to provide
						efficient and effective patient care.
					</p>
					<p className="font-semibold">
						At the heart of our philosophy is a profound respect for every
						individual. We believe that every patient, regardless of their
						background or status, deserves to be treated with dignity and
						compassion. This core value is inspired by our faith, recognizing
						the inherent sacredness in every person, especially those who are
						suffering. We strive to embody the healing love of Christ in all our
						interactions.
					</p>
				</div>
			</section>

			<section className="mb-10">
				<h2 className="text-2xl font-bold text-primary mb-4 text-center">
					Our Guiding Principles
				</h2>
				<div className="bg-gray-50 rounded-lg p-6">
					<h3 className="text-xl font-semibold text-secondary mb-2">
						Quality Policy
					</h3>
					<p className="text-gray-600">
						Divine Word Hospital is committed to meeting the health needs and
						expectations of the people in Region 8 by providing equitable,
						efficient, and effective healthcare services, training, and
						research. We strive for professional and caring personnel and the
						continual improvement of our services to achieve excellence in
						quality healthcare.
					</p>
				</div>
			</section>

			<section className="mb-10">
				<h2 className="text-2xl font-bold text-primary mb-4 text-center">
					Our Vision & Mission
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-gray-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-secondary mb-2">
							Vision
						</h3>
						<ul className="list-disc list-inside text-gray-600">
							<li>
								A Catholic Institution of Holistic Wellness and Quality Health
								Care.
							</li>
						</ul>
					</div>
					<div className="bg-gray-50 rounded-lg p-6">
						<h3 className="text-xl font-semibold text-secondary mb-2">
							Mission
						</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>To proclaim God’s healing love to all.</li>
							<li>To uphold Christian Values.</li>
							<li>To provide quality tertiary health care.</li>
							<li>
								To train medical, nursing, and paramedical students and organize
								activities for practitioners to improve the quality of health
								service.
							</li>
							<li>
								To provide adequate facilities to support the practice of
								medical and paramedical professionals in Region 8.
							</li>
						</ul>
					</div>
				</div>
			</section>

			<div className="text-center text-gray-500 text-sm mt-8">
				Located in Tacloban City, Eastern Visayas, Philippines.
			</div>
		</div>
	);
};

export default AboutUs;
