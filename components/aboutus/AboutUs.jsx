'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
const AboutUs = () => {
	return (
		<div className="container_ max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<Image
				src="/assets/about-us.webp" // Use relative path for Next.js
				alt="About Us"
				width={500} // Keep original aspect ratio, set a max width
				height={200}
				className="w-full h-70 object-cover -mt-15 " // Responsive image, rounded corners
			/>
			<motion.section
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center mb-16"
			>
				<h1 className="text-4xl md:text-5xl font-bold text-primary my-4">
					Divine Word Hospital
				</h1>
				<p className="text-muted-foreground text-lg">
					A place of welcome committed to quality health care.
				</p>
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="mb-16 text-justify"
			>
				<h2 className="text-2xl font-semibold text-primary mb-6 text-left">
					Our History
				</h2>
				<p className=" text-gray-700 mb-4 ">
					Divine Word Hospital is a Catholic tertiary, Level 3, 179 bed hospital
					located in Tacloban City, Leyte. Region VIll or Eastern Visayas has a
					population of 4,089,734 (as of year 2010) with 78% of population
					living in the rural area and 21.8% in the cities. Of the 70% living in
					the cities about 547,000 live below poverty line.
				</p>
				<div className="space-y-6 text-gray-600 ">
					<p>
						In 1964, Father Earnest Hoerdemann, SVD, rector of the Divine Word
						College took up the plan for a Catholic Hospital in Region VIII.
						With the help of German government and German Bishops, missionaries
						and other generous benefactors, the Society of the Divine Word (SVD)
						Fathers in collaboration with the Missionary Benedictine Sisters of
						Tutzing (MBS), Germany, established a 100 bed Hospital equipped with
						modern facilities. The hospital became the training hospital for the
						College of Nursing, Medical Technology, Medicine and other
						paramedical courses of Divine Word College that later became Divine
						Word University (DWU).
					</p>
					<p>
						On February 7, 1965, the hospital was blessed and inaugurated. The
						following day, patients were admitted. The SVD Fathers who owned the
						DWU gave full administration of the Divine Word hospital (DWH) to
						the Philippine Province of the MBS of Tutzing, Germany.
					</p>
					<p>
						Divine Word Hospital has been at the forefront in offering new
						services. It was the first to open a Dizziness, Hearing and Voice
						Center and a Neurosciences Unit; and also, the first to offer
						Hemodialysis, CT scan, Digital Mammography and Magnetic Resonance
						Imaging (MRI) in Region VIII.
					</p>
					<p>
						The diagnostic services of the hospital are among the best equipped
						in the Region.
					</p>
					<p>
						The Residency Training Programs of the Department of Medicine and
						the Department of Pediatrics are accredited by their respective
						Specialty Societies. At present, the hospital is working towards the
						accreditation of the Residency Training Program of the Department of
						Obstetrics and Gynecology and the Department of Surgery
					</p>
					<p>
						At present the hospital with 179 bed capacity has 17 service beds
						assigned to indigent patients. Currently it has over 400 employees.
					</p>
					<p>
						The hospital has a competent staff with active and visiting
						consultants, resident physicians, nurses, other personnel who are
						responsible for efficient and effective care of patients. The
						patient regardless of race, creed, and status in life is treated as
						someone sacred, any person who suffers is sacred to us, because of
						Him whom he/she resembles. Any person who nurses or helps someone to
						his feet, who consoles or heals is even more completely the image of
						Christ.
					</p>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="mb-10 text-justify"
			>
				<h2 className="text-2xl font-semibold  text-primary mb-4 text-center">
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
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="mb-10 text-justify"
			>
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
			</motion.section>
		</div>
	);
};

export default AboutUs;

//'use client';
// import { Card, CardContent } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { motion } from 'framer-motion';

// export default function AboutUs() {
// 	return (
// 		<div className="max-w-6xl mx-auto px-6 py-12">
// 			<motion.section
// 				initial={{ opacity: 0, y: -20 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.5 }}
// 				className="text-center mb-16"
// 			>
// 				<h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
// 					About Divine Word Hospital
// 				</h1>
// 				<p className="text-muted-foreground text-lg">
// 					A place of welcome committed to quality health care.
// 				</p>
// 			</motion.section>

// 			<motion.section
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ delay: 0.2 }}
// 				className="mb-16"
// 			>
// 				<Card className="shadow-md rounded-xl overflow-hidden">
// 					<CardContent className="prose prose-neutral lg:prose-lg px-6 py-8">
// 						<h2 className="text-2xl font-semibold text-primary mb-4">
// 							Our History
// 						</h2>
// 						<p>
// 							Divine Word Hospital is a Catholic tertiary, Level 3, 179-bed
// 							hospital located in Tacloban City, Leyte. Eastern Visayas, Region
// 							VIII, has a population of over 4 million (as of 2010), with the
// 							majority residing in rural areas. Among those in urban areas, a
// 							significant number live below the poverty line.
// 						</p>
// 						<p>
// 							In 1964, Father Earnest Hoerdemann, SVD, then rector of Divine
// 							Word College, envisioned a Catholic hospital in the region.
// 							Through support from the German government, bishops, missionaries,
// 							and generous benefactors, the Society of the Divine Word partnered
// 							with the Missionary Benedictine Sisters of Tutzing (MBS) to bring
// 							this vision to life.
// 						</p>
// 						<p>
// 							The hospital, initially with 100 beds, opened on February 7, 1965,
// 							and served as a training center for the paramedical programs of
// 							Divine Word College (later Divine Word University).
// 						</p>
// 						<p>
// 							DWH has since pioneered medical services in Region VIII, offering
// 							the first Hemodialysis, CT Scan, Digital Mammography, MRI, and
// 							specialized care units. It is recognized for its excellence in
// 							diagnostics and its accredited residency programs in Internal
// 							Medicine and Pediatrics.
// 						</p>
// 						<p>
// 							Today, with 179 beds, 17 of which serve indigent patients, the
// 							hospital employs over 400 staff members. With dedication and
// 							compassion, it upholds the sacredness of every patient and
// 							reflects the healing ministry of Christ.
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</motion.section>

// 			<motion.section
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ delay: 0.3 }}
// 				className="grid gap-6 md:grid-cols-3"
// 			>
// 				<Card className="rounded-xl shadow-md">
// 					<CardContent className="p-6">
// 						<h3 className="text-lg font-bold text-primary mb-2">Vision</h3>
// 						<p className="text-muted-foreground">
// 							A Catholic Institution of Holistic Wellness and Quality Health
// 							Care.
// 						</p>
// 					</CardContent>
// 				</Card>

// 				<Card className="rounded-xl shadow-md">
// 					<CardContent className="p-6">
// 						<h3 className="text-lg font-bold text-primary mb-2">Mission</h3>
// 						<ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
// 							<li>To proclaim God’s healing love to all.</li>
// 							<li>To uphold Christian Values.</li>
// 							<li>To provide quality tertiary health care.</li>
// 							<li>
// 								To train medical, nursing, and paramedical students and enhance
// 								professional development.
// 							</li>
// 							<li>
// 								To support medical and paramedical professionals in Region 8
// 								with adequate facilities.
// 							</li>
// 						</ul>
// 					</CardContent>
// 				</Card>

// 				<Card className="rounded-xl shadow-md">
// 					<CardContent className="p-6">
// 						<h3 className="text-lg font-bold text-primary mb-2">
// 							Quality Policy
// 						</h3>
// 						<p className="text-muted-foreground text-sm">
// 							We commit to meeting the health needs and expectations of the
// 							people of Region 8 by delivering equitable, efficient, and
// 							effective healthcare services. We emphasize ongoing training,
// 							research, and continuous improvement to achieve excellence in
// 							quality healthcare.
// 						</p>
// 					</CardContent>
// 				</Card>
// 			</motion.section>
// 		</div>
// 	);
// }
