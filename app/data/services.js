// import {
// 	CrossIcon,
// 	Filter,
// 	HeartIcon,
// 	Microscope,
// 	Monitor,
// 	Radiation,
// 	ShieldCheck,
// 	ShoppingCart,
// 	Syringe,
// 	Tv,
// } from 'lucide-react';
// export const servicesData = [
// 	{
// 		icon: Radiation,
// 		title: 'Radiology',
// 		description: 'Precise Imaging for Accurate Diagnosis',
// 		slug: 'radiology',
// 	},
// 	{
// 		icon: Monitor,
// 		title: 'CT-Scan & MRI',
// 		description: 'Detailed 3D Imaging',
// 		slug: 'ct-scan-mri',
// 	},
// 	{
// 		icon: Syringe,
// 		title: 'Ambulatory Infusion',
// 		description: 'Outpatient infusion services',
// 		slug: 'ambulatory-infusion',
// 	},
// 	{
// 		icon: Filter,
// 		title: 'Hemo-dialysis',
// 		description: 'Kidney Dialysis Center',
// 		slug: 'hemo-dialysis',
// 	},
// 	{
// 		icon: ShoppingCart,
// 		title: 'Pharmacy Service',
// 		description: 'Medications and Consultations',
// 		slug: 'pharmacy-service',
// 	},
// 	{
// 		icon: HeartIcon,
// 		title: 'Cardio-pulmonary',
// 		description: 'Heart & Lung Care',
// 		slug: 'cardio-pulmonary',
// 	},
// 	{
// 		icon: CrossIcon,
// 		title: 'Emergency Care',
// 		description: '24/7 Emergency Services',
// 		slug: 'emergency-care',
// 	},
// 	{
// 		icon: CrossIcon,
// 		title: 'Physical Therapy',
// 		description: 'Rehabilitation Services',
// 		slug: 'physical-therapy',
// 	},
// 	{
// 		icon: Tv,
// 		title: 'Ultrasound',
// 		description: 'Diagnostic Ultrasound Imaging',
// 		slug: 'ultrasound',
// 	},
// 	{
// 		icon: Microscope,
// 		title: 'Pathology & Laboratory',
// 		description: 'Lab Testing',
// 		slug: 'pathology-laboratory',
// 	},
// 	{
// 		icon: Microscope,
// 		title: 'TB DOTS',
// 		description: 'Directly Observed Therapy',
// 		slug: 'tb-dots',
// 	},
// 	{
// 		icon: ShieldCheck,
// 		title: 'Infection Prevention',
// 		description: 'Control Unit',
// 		slug: 'infection-prevention',
// 	},
// ];
import {
	BedIcon, // Added for critical care units
	FileTextIcon, // Used instead of CrossIcon
	Filter,
	Heart,
	HeartPulse, // Used instead of HeartIcon
	Microscope,
	Monitor,
	Radiation,
	ShieldCheck,
	ShoppingCart,
	Syringe,
	Tv,
	X, // Used instead of CrossIcon
} from 'lucide-react';

export const servicesData = [
	{
		icon: Radiation,
		title: 'Radiology',
		description:
			'Precise, high-quality diagnostic imaging & interventional radiology services.',
		slug: 'radiology',
		fullContent: {
			mission_vision: {
				mission:
					'The Department of Radiology is dedicated to delivering precise and high-quality diagnostic imaging and interventional radiology services to all patients. Our team of professionals is committed to providing timely and efficient radiology care infused with compassion.',
				vision:
					'Aligned with DWH’s core values, we aspire to lead the Region in diagnostic imaging and interventional radiology, ensuring that both patients and referring physicians receive comprehensive radiologic evaluations that offer the clearest insights into patient health in the Region.',
			},
			leadership_staff:
				'The Department is led and staffed by board-certified Radiologist, and six (6) active visiting consultants.',
			advanced_equipment: [
				'Computed Tomography (CT) Scan 64 and 32 slices.',
				'1.5-Tesla MRI Scanners',
				'General Radiography',
				'Digital Radiography',
				'Portable (Mobile)',
				'Fluoroscopy',
				'Mobile C-Arm',
				'Mobile Transport',
				'Digital Mammography',
				'Ultrasound',
				'Dental Panoramic / Cephalometric',
			],
			general_radiography: {
				non_contrast: [
					'CHEST FOR HEART & LUNGS',
					'EXTREMITIES',
					'SKULL',
					'VERTEBRAL COLUMN',
					'LOCALIZATION OF FOREIGN BODY',
					'PELVIS',
					'SHOULDER GIRDLE',
					'THORACIC CAGE',
					'ABDOMEN',
				],
				non_contrast_and_contrast: [
					'UPPER G.I. SERIES',
					'SMALL INTESTINAL SERIES',
					'BARIUM ENEMA',
					'HYSTEROSALPINGOGRAPHY',
					'ESOPHAGOGRAPHY (Ba. Swallow)',
					'PELVIMETRY',
					'MYELOGRAPHY',
					'PARANASAL SINUSES',
					'SCOLIOTIC SERIES',
					'SKELETAL SURVEY',
					'IMPERFORATED ANUS',
					'INTRAVENOUS PYELOGRAPHY',
				],
			},
			invasive_procedures: [
				'SINUGRAPHY',
				'FISTULOGRAPHY',
				'SIALOGRAPHY',
				'BRONCHOGRAPHY',
				'RETROGRADE UROGRAPHY',
				'PACEMAKER IMPLANTS',
				'RETROGRADE CYSTOGRAPHY',
				'OPERATIVE & POST-OPERATIVE CHOLANGIOGRAPHY',
				'ENDOSCOPIC RETRO. CHOLANGIO. PANCREATOGRAPHY',
			],
			specialized_services: [
				'COMPUTED TOMOGRAPHY (CT) SCAN -HELICAL SYSTEM (PLAIN & CONTRAST STUDY, GUIDED PROCEDURES)',
				'MAGNETIC RESONANCE IMAGING (MRI)',
				'MAMMOGRAPHY',
			],
			dental_panoramic_cephalometric: [
				'PANORAMIC RADIOGRAPH',
				'CEPHALOMETRIC RADIOGRAPH',
			],
		},
	},
	// {
	// 	icon: Monitor, // Keeping Monitor for CT-Scan & MRI
	// 	title: 'CT-Scan & MRI',
	// 	description:
	// 		'Detailed 3D Imaging for comprehensive diagnostic evaluations.',
	// 	slug: 'ct-scan-mri',
	// 	// Note: Full content for CT-Scan & MRI is integrated into Radiology for now, as it's part of their equipment.
	// 	// If you need a separate detailed section, please provide it.
	// 	fullContent: {
	// 		overview:
	// 			'CT-Scan and MRI services are provided as part of the comprehensive offerings of our Radiology Department. We utilize advanced equipment to deliver detailed 3D imaging for accurate diagnosis.',
	// 		equipment: [
	// 			'Computed Tomography (CT) Scan 64 and 32 slices.',
	// 			'1.5-Tesla MRI Scanners',
	// 		],
	// 		// You can add more specific details here if you have them separate from the general Radiology content
	// 	},
	// },
	{
		icon: Syringe,
		title: 'Ambulatory Infusion',
		description:
			'Dedicated facilities for adult & pediatric chemotherapy and outpatient infusions.',
		slug: 'ambulatory-infusion',
		fullContent: {
			mission_vision: {
				mission:
					'The Adult and Pediatric Ambulatory Infusion Unit provides dedicated facilities designed to deliver chemotherapy in a safe, efficient, and effective manner within a tranquil environment.',
				vision:
					'Our team of competent, experienced, and well-trained medical doctors and oncology nurses is deeply motivated to exceed the needs and expectations of both adult and pediatric cancer patients receiving outpatient chemotherapy.',
			},
			services_offered: [
				'CHEMOTHERAPY',
				'BLOOD TRANSFUSION',
				'PULSETHERAPHY',
				'OPD MINOR INFUSIONS (IRON SUCROSE, OPD ANTIBIOTIC, INFUSION AND MORE.)',
			],
		},
	},
	{
		icon: Filter,
		title: 'Hemo-dialysis',
		description:
			'Comprehensive inpatient & outpatient dialysis services for end-stage kidney disease.',
		slug: 'hemo-dialysis',
		fullContent: {
			mission_vision: {
				mission:
					'The Divine Word Hospital Hemodialysis Unit is equipped to provide comprehensive treatment services for patients who are required long-term or ongoing care.',
				vision:
					'Manned by competent doctors and nurses to ensure utmost comfort and safety for our patients. Our hemodialysis unit delivers inpatient and outpatient dialysis services and follow-up care to patients with end-stage kidney disease, from a standard hemodialysis to continuous ambulatory peritoneal dialysis.',
			},
			bcm_info: {
				title: 'Body Composition Monitor (BCM)',
				description:
					'As part of our commitment to provide quality kidney care and ensure the health and safety of our patients, our staff utilizes BCM to ensure that the patient’s body composition, particularly fluid level, are at a normal level throughout the dialysis.',
			},
			admission_procedure: {
				title: 'HEMODIALYSIS ADMISSION PROCEDURE FOR OUT-PATIENTS',
				new_out_patients: [
					'HD Endorsement Sheet',
					'List of Prescribed Medications',
					'Philhealth Forms (MDR/Philhealth Database (PDD), Proof of Contribution, CF1, CF2, SOA)',
					'Latest Laboratory Result',
					'Blood Composition Monitoring (BCM) Result.',
					'Latest 3 Treatment Sheets (if applicable)',
				],
				regular_patients: [
					'Charge Slip',
					'Prescription for Erythropoietin Injection (if needed)',
					'Monthly Laboratory Results/Prescription',
				],
			},
			session_schedule: {
				title: 'HEMODIALYSIS SESSION SCHEDULE:',
				times: [
					'1st Session: 7:00am – 11:00am',
					'2nd Session: 12:00nn – 4:00pm',
					'3rd Session: 5:00pm – 9:00pm',
					'4th Session: 10:00pm – 2:00am',
				],
				note: 'HD Treatment on Monday to Saturday. NO HD Treatment for Outpatients on SUNDAYS. Strictly follow your respective HD Schedule.',
			},
			contact: {
				inquiries:
					'For inquiries and appointments, please contact and visit us at:',
				facebook: 'Hemodialysis Únit',
				email: 'dwhhemodialysis@gmail.com',
			},
		},
	},
	{
		icon: ShoppingCart,
		title: 'Pharmacy Service',
		description:
			'Comprehensive medication solutions ensuring safe practices and convenient access to essential drug therapies.',
		slug: 'pharmacy-service',
		fullContent: {
			overview:
				'Delivers comprehensive medications solutions for patients facing complex medical conditions. Our primary focus is on ensuring safe medication practices and administering the right drug, in the correct dose, at the right time.',
			patient_support:
				'At DWH Pharmacy Department, we extend patient support services and programs that ensure convenient access to essential drug therapies and comprehensive health information. Our commitment is steadfast in promoting improved health outcomes for all our patients.',
			team: 'Our team consists of licensed pharmacists, a pharmacy assistant and a pharmacy clerk who are dedicated to providing patient-centered, cost-effective pharmaceutical care that is both efficient and economical.',
			medication_management_services: [
				{
					title: 'MEDICAL DISPENSING MAIN PHARMACY IN-PATIENT',
					description:
						'The main pharmacy is mainly responsible for the procurement, storage and distribution of medications to the patients admitted in the facility. Pharmacists dispense medications requested from nurse stations based on doctors’ order.',
				},
				{
					title: 'OUT-PATIENT',
					description:
						'DWH Pharmacy also caters to ambulatory OPD patients from the doctors’ clinic. Pharmacists dispense prescription and over-the-counter medications and provide information on the proper use, dosage, potential side effects and storage of medications.',
				},
				{
					title: 'CLINICAL PHARMACY',
					description:
						'Clinical pharmacists ensure the correctness of medication ordering, transcribing, dispensing of medicines, procedure, and way of administration of medicines and monitoring of medication for potential adverse effects and therapeutic effects.',
				},
				{
					title: 'UNIT-DOSE DISPENSING SYSTEM',
					description:
						'Unit dose medication is defined as those medications which are ordered, packaged, handled, administered and charged in single dose units containing a predetermined amount of drugs sufficient for one regular dose, application or use. This approach significantly results in decreased possibility of medication errors and a more accurate medication billing of patients.',
				},
				{
					title: 'ER SATELLITE PHARMACY',
					description:
						'The hospital has a pharmacy situated inside the emergency unit which primarily caters to patients from the Emergency Room. This offers a more convenient access for medications and medication information for patients and other health care team members in the emergency room.',
				},
				{
					title: 'MEDICATION COUNSELLING',
					description:
						'Our pharmacists provide adequate information to ensure that the patient has the correct understanding of the instructions for use and storage of their medications.',
				},
				{
					title: 'COMPOUNDING',
					description:
						'When medical needs of individual patients cannot be met by the use of a commercial drug product, pharmacists may prepare custom medications to fit the unique needs of the patients such as tablets and capsules that can be made into proper tablet dosage forms and non-sterile tropical products not readily available in the market.',
				},
				{
					title: 'TEACHING AND TRAINING',
					description:
						'DWH Pharmacy accepts mentoring for student interns from pharmacy school for their hospital internship program.',
				},
				{
					title: 'ANTIMICROBIAL STEWARDSHIP',
					description:
						'The pharmacy department is part of the Antimicrobial Stewardship Team which promotes the appropriate use of antimicrobials (including antibiotics), improves patient outcomes, reduces microbial resistance, and decreases the spread of infections caused by multidrug resistant organisms.',
				},
				{
					title: 'DRUG INFORMATION SERVICE',
					description:
						'The Drug Information Service is dedicated to enhancing patient care by providing accurate, unbiased information on medication-related inquiries. The service supports the rational use of medicines, promotes effective prescribing practices, and helps reduce medication errors through expert guidance and knowledge sharing.',
				},
			],
			role_in_institution:
				'The DWH Pharmacy Department plays a crucial role in managing the use of medications throughout the institution. They ensure a continuous supply of safe and effective drugs, collaborating closely with doctors and nurses, to offer expert advice on prescriptions and resolve medication-related issues. Our pharmacy services cater to a range of needs from inpatients to outpatient services and emergency situations.',
			location_hours:
				'The main pharmacy department is located in the DWH OPD Building and includes the Emergency Room pharmacy. We operate 24 hours a day, seven days a week, with our team working on a rotating shift schedule to ensure round-the-clock coverage support.',
		},
	},
	{
		icon: Heart,
		title: 'Cardio-pulmonary',
		description:
			'Exceptional diagnostic services for cardiovascular and pulmonary health.',
		slug: 'cardio-pulmonary',
		fullContent: {
			overview:
				'Our Cardiovascular and Pulmonary unit is committed to delivering exceptional diagnostic services, ensuring a superior experience for all our patients. Utilizing advanced technology and expert analysis, we provide precise results that inform personalized treatment plans. At the heart of every successful diagnosis is our dedicated team of professionals who consistently exceed expectations in patient care. From compassionate cardiologists to skilled technicians, we are here to support you at every stage of your journey.',
			specialized_tests: {
				cardiopulmonary_unit: [
					'ECG ADULT',
					'ECG PEDIA',
					'ECG HOLTER MONITORING',
					'2D ECHO ADULT',
					'2D ECHO PEDIA',
					'2D ECHO WITH BUBBLE CONTRAST',
					'DEEP VEIN THROMBOSIS',
					'CAROTID DUPLEX SCAN',
					'ANKLE BRACHIAL INDEX',
					'VEIN MAPPING',
					'ARTERIAL/VENOUS FISTULA',
					'TREADMILL STRESS TEST',
					'EXERCISE STRESS ECHO',
					'DOBUTAMINE STRESS ECHO',
					'AMBULATORY BLOOD PRESSURE MONITORING',
					'TRANSESOPHAGEAL ECHOCARDIOGRAM (TEE)',
					'ARTERIAL (BILATERAL LOWER EXTREMITY)',
					'VENOUS (BILATERAL LOWER EXTREMITY)',
					'ARTERIAL (BILATERAL UPPER EXTRMITY)',
					'VENOUS (BILATERAL UPPER EXTRIMITY)',
				],
				pulmonary_function_test: [
					'PFT SIMPLE SPIROMETRY',
					'PFT WITH PRE-POST',
					'PFT COMPLETE',
				],
			},
		},
	},
	{
		icon: X, // Using X for CrossIcon
		title: 'Emergency Care',
		description:
			'24/7 comprehensive emergency care for medical, surgical, toxicologic, and obstetric needs.',
		slug: 'emergency-care',
		fullContent: {
			overview:
				'The Divine Word Hospital Emergency Care Services has been serving its local as well as nearby communities for decades. It has evolved simultaneously with the advancement of the emergency care system.',
			capabilities:
				'Our department is well-equipped and manned by a group of adult emergency physicians trained in emergency medicine and pediatric specialists with a background in pediatric emergency, as well as competent staff always ready to deal with the unexpected and render solutions to complex medical needs. It can handle medical, surgical, toxicologic and obstetrics and emergencies in adults and children 24 hours a day. The latest in diagnostic modalities and therapeutics can be made available to patients on a timely basis.',
			availability:
				'For your emergency health care needs, our doors are open 24/7 to serve you.',
		},
	},
	{
		icon: X, // Using X for CrossIcon
		title: 'Physical Therapy',
		description:
			'Aiding individuals to regain mobility and function through tailored physical therapy programs.',
		slug: 'physical-therapy',
		fullContent: {
			overview:
				'Physical therapy is a vital healthcare discipline focused on aiding individuals of all ages coping with medical conditions, illnesses, or injuries that hinder their normal mobility and functionality. Its primary objective is to assess and optimize both the quality of life and movement capabilities across various domains, including promotion, prevention, treatment/intervention, habilitation, and rehabilitation. Through tailored physical therapy programs, individuals are empowered to regain their former levels of function, while also being guided towards activities and lifestyle modifications that can mitigate the risk of future injuries, enhance overall health, and promote well-being.',
			staff:
				'A Physical Therapy treatment or program is given and conducted by Licensed Physical Therapists who are recognized by the Professional Regulation Commission (PRC) in the Philippines.',
			benefits: [
				'Alleviates pain and discomfort.',
				'Enhances respiratory and cardiovascular endurance.',
				'Restores mobility for everyday activities.',
				'Facilitates faster wound healing.',
				'Supports optimal recovery post-surgery, major illnesses, or disabilities.',
				'Educates on the correct use of assistive devices.',
				'Enhances joint flexibility and reduces injury risk.',
				'Offers a non-surgical, non-medication treatment option.',
				'Improves coordination, balance, and muscle strength.',
				'Boosts performance in physical and sports activities.',
				'Reduces joint swelling and inflammation.',
				'Enhances mental well-being.',
			],
			services: [
				'PT MODALITIES + EXERCISE',
				'PT MODALITIES + EX + (CERVICAL OR LUMBAR) TRACTION',
				'PT MODALITIES + EX + CRYOTHERAPY',
				'PT MODALITIES + EX + HI LASER',
				'PT MODALITIES + EX + SHOCKWAVE + CRYOTHERAPY',
				'DYSPHAGIA UNIT',
				'HIGH INTENSITY LASER',
				'TARGETED RADIOFREQUENCY THERAPY (TRT)',
				'SUPER INDUCTIVE SYSTEM (SIS)',
				'SHOCKWAVE THERAPY',
			],
			contact: {
				number: '0948 433 8444',
				email: 'divinewordhospptdept@gmail.com',
			},
		},
	},
	// {
	// 	icon: Tv, // Keeping Tv for Ultrasound
	// 	title: 'Ultrasound',
	// 	description:
	// 		'Diagnostic Ultrasound Imaging for a clearer view of internal structures.',
	// 	slug: 'ultrasound',
	// 	// Note: Full content for Ultrasound is integrated into Radiology for now, as it's part of their equipment.
	// 	// If you need a separate detailed section, please provide it.
	// 	fullContent: {
	// 		overview:
	// 			'Ultrasound imaging is a key diagnostic service provided within our Radiology Department, offering non-invasive visualization of internal body structures.',
	// 		// You can add more specific details here if you have them separate from the general Radiology content
	// 	},
	// },
	{
		icon: Microscope,
		title: 'Pathology & Laboratory',
		description:
			'Routine & advanced laboratory tests with highly qualified medical technologists and sophisticated machines.',
		slug: 'pathology-laboratory',
		fullContent: {
			overview:
				'The Pathology Department offers a wide range of routine and advanced laboratory tests and procedures. Manned by highly qualified Medical Technologists and equipped with sophisticated machines to assist physicians in accurately diagnosing, treating, and managing patients. To ensure efficient data management, improved turnaround time, and enhanced patient privacy and confidentiality, it is supported by the Hospital Management Information System (HMIS) and Laboratory System (LIS). We consistently strive to provide timely laboratory services and holistic patient care to meet the demands of our clients. In addition, the department continues to remain proactive in response to existing and emerging diseases in the region.',
			sections: [
				{
					title: 'I. Clinical Chemistry',
					details: [
						'Performs blood chemistry examinations e.g., Lipid Profile, Blood Urea Nitrogen, Blood Uric Acid, Creatinine, SGPT/ALT, Troponin I, HBA1C, electrolytes, Blood Gas Analysis, and Enzyme analysis.',
						'Machines utilized are Siemens Dimension RXL Max, Siemens Rapidpoint, iSmart, and Elyte.',
					],
				},
				{
					title: 'II. Clinical Microscopy',
					details: [
						'Performs routine urinalysis (physical, chemical and microscopic examination), routine fecalysis, semen analysis, occult blood, pregnancy test, and screens for parasite/ova',
						'Machines utilized are Sysmex UF-4000 and Siemens Clinitek Advantus.',
					],
				},
				{
					title: 'III. Hematology and Coagulation',
					details: [
						'Performs Complete Blood Count (RBC Count, WBC Count, Platelet Count, and RBC Indices), Prothrombin Time, APTT, Clotting/Bleeding Time, ESR, and initial reading of Peripheral Blood Smear.',
						'Machines used are Mindray and Stago.',
					],
				},
				{
					title: 'IV. Blood bank and Transfusion Service',
					details: [
						'Screens, interviews and collects blood from eligible donors, prepares blood components, and performs serologic testing of collected units to ensure safe blood supply.',
						'Performs blood component separation (i.e Packed RBC, Platelet Concentrate, FFP, and Cryoprecipitate), various laboratory examinations (i.e Malarial Parasite Screening, HbsAg detection, HIV, HCV and Syphilis Antibody Screening), and routine blood banking procedures (i.e. ABO and Rh typing, Antibody screening, Compatibility test, Coomb’s test, Weak D Testing)',
						'Carries out proper storage and issuance of blood and blood components.',
						'Machine utilized is Abbott Architect.',
					],
				},
				{
					title: 'V. Immunology-Serology',
					details: [
						'Performs routine tests including Thyroid Function Tests, D-Dimer, CRP, PSA, Ferritin and H. pylori Test; antigen, antibody detection for infectious diseases (Hepatitis and Syphilis), Typhoid and Dengue Tests; autoimmune diseases (ANA Panel, anti-dsDNA, anti-CCP, RF Screen)',
						'Machines used are Siemens Advia Centaur, Biomerieux Mini Vidas, iChroma, Alegria',
					],
				},
				{
					title: 'VI. Microbiology',
					details: [
						'Prepares and performs smears/stains for Gram’s, AFB, KOH, culture media (agar and broth) for culture and biochemical testing and culture and sensitivity testing.',
						'Performs autoclave sterilization of microbiology materials and media, and hazardous wastes.',
						'Machines used are Biomerieux Vitek and Biomerieux BacT/Alert.',
					],
				},
				{
					title: 'VII. Virology (COVID-19) Laboratory',
					details: [
						'Performs SARS-CoV-2 Detection by Real-Time Polymerase Chain Reaction (Nucleic Acid Testing)',
						'Machines used are BioRad CFX 96 and Bioer LineGene/QuantGene.',
					],
				},
			],
		},
	},
	{
		icon: Microscope, // Keeping Microscope for TB DOTS
		title: 'TB DOTS',
		description:
			'DOH-partnered center for TB screening, diagnosis, treatment, and adherence.',
		slug: 'tb-dots',
		fullContent: {
			mission_goal:
				'As a partner of the Department of Health in its vision for a Tuberculosis-Free Philippines, Divine Word Hospital proudly inaugurates its TB DOTS (Tuberculosis Directly Observed Treatment, Short-Course) Center. Dedicated to screening, diagnosing, treating, and ensuring treatment adherence for tuberculosis patients, our center serves as a beacon of hope. Beyond treating patients, DWH’s goal is to use the center as a hub to help encourage people at possible risk to seek consultation and eventually take their medications religiously to stop the spread of the disease.',
			free_services: [
				'Screening, assessment and sputum collection for new and retreatment tb cases.',
				'Sputum examination through GENEXPERT Machine.',
				'Identification and referral of Presumptive, Susceptible and Confirmed Drug Resistant TB patients.',
				'Screening of household contacts for confirmed TB patients.',
				'Provision of pre-treatment evaluation such as Blood Chemistry, Chest X-ray and sputum examinations.',
				'Provision of Patient Initiated Counselling and Testing on TB HIV.',
				'Initiation and supervision of daily treatment through Directly Observed Treatment Short Course (DOTS) or "tutok gamutan" on both regular and Drug Resistant TB.',
				'Regular monitoring occurrences of possible clinical problems during treatment.',
				'Clinical Management for Adverse Drug Reactions and provision of ancillary medications.',
				'Provision of Health Education through monthly Group discussion and General Assembly.',
			],
			services_offered: [
				'Direct Sputum Smear Collection for new and retreatment TB cases.',
				'Sputum screening through a GENEXPERT Machine.',
				'Provision of FREE anti-TB medications for adults and children.',
				'Support and education to help patients and their relatives adhere to the medication and treatment.',
				'Contact tracing of the household for confirmed TB patients.',
			],
		},
	},
	{
		icon: ShieldCheck, // Keeping ShieldCheck for Infection Prevention
		title: 'Infection Prevention',
		description:
			'Control Unit dedicated to maintaining a safe and healthy environment.',
		slug: 'infection-prevention',
		fullContent: {
			overview:
				'The Infection Prevention and Control Unit (IPCU) is dedicated to safeguarding patients, healthcare workers, and visitors from healthcare-associated infections. They implement strict protocols, conduct surveillance, and provide education to ensure a safe and healthy environment within the hospital.',
			// Add more details here if you get specific content for this service
		},
	},
	// NEW SERVICES ADDED:
	{
		icon: HeartPulse, // Using HeartPulse for NICU
		title: 'Neonatal Intensive Care Unit (NICU)',
		description:
			'Highest quality, family-focused neonatal medical care for newborns requiring close monitoring or specialized procedures.',
		slug: 'nicu',
		fullContent: {
			mission_vision: {
				mission:
					'Is to provide the highest quality care to all Neonates cost-effective family focused neonatal medical care to our patients.',
				vision:
					'Our vision is to recognized as: A highest center provider of comprehensive, evidence-based cost effective and family centered neonatal medical care; A provider of excellence in service to our referring physicians; A supportive; equitable and excellence-based group which to practice neonatal-perinatal medicine;',
			},
			overview:
				'Provides initial care of all newborns delivered at the hospital, as well as for managing sick newborns up to 28 days old who may require readmission for close monitoring or specialized procedures. The neonatal team includes pediatricians, pediatric surgeons, neonatologists, pediatric subspecialists, residents, interns, nurses, and other support staff. The DWH Neonatal Intensive Care Unit (NICU) has the capacity of 10 beds for well babies, 4 beds critically ill babies and has 3 beds dedicated to the isolation room for outborns or babies with infections and provides optimal care for non-critical newborns who need observation or stabilization before transitioning to rooming-in or discharge.',
			needs_addressed: [
				'Delivered with difficulty or with low APGAR Score (health test for newborns)',
				'Premature and other high-risk infants',
				'Breathing faster than normal',
				'Assessed to have a significant murmur',
				'Assessed to have multiple chromosomal anomalies',
				'Hypoglycemic (low random blood sugar)',
				'Large/small for gestational age',
				'Less than two (2) kg',
				'Body temperature persistently less than 36oC',
				'With poor suckle at the breast or poor activity',
			],
			staffing:
				'The Newborn Services Complex is manned by highly trained health care professionals (Neonatologists, various Pediatric Subspecialists, Pediatric Residents, Lactation Counsellors, and Registered Nurses) who provide round-the-clock quality care for sick newborns using constantly advanced medical equipment.',
			mother_baby_friendly:
				'As a Mother-Baby Friendly Hospital, DWH also practices and advocates “Unang Yakap” (First Embrace), which involves non-separation (rooming-in) and early initiation of breastfeeding right after delivery of the newborn.',
			services_offered: [
				'Lactation Counsellors and Lactation Consultants to assist mothers in breastfeeding and educate them on proper techniques for breastfeeding, breast care, and pumping of breast milk and to troubleshoot and solve breastfeeding difficulties',
				'Routine Pulse Oximetry, Hearing Screening, and Newborn Screening for the early detection of subtle newborn problems',
				'Extraction method B1 B2 determination test for jaundice. To test the newborn’s bilirubin using a traditional method.',
			],
			newborn_services_areas: [
				'A treatment room where special procedures like neonatal circumcision, intravenous (IV) insertion, among others, are done.',
				'Breastfeeding area where mothers whose newborns are in the NICU can breastfeed. This area can also be used by parents to enjoy some private bonding time with their baby while their baby is not yet ready for rooming-in or discharge.',
				'A milk preparation area where the milk feedings of newborns who are not directly breastfed are prepared and stored. The room has a dedicated refrigerator to ensure that proper milk storage guidelines are followed and maintained.',
				'A discharge area where parents and other caregivers receive discharge health instructions for newborns.',
			],
		},
	},
	{
		icon: HeartPulse, // Using HeartPulse for ICU as well, considering it's critical care
		title: 'Intensive Care Unit (ICU)',
		description:
			'24-hour critical care & life support for severely ill and injured patients requiring constant monitoring.',
		slug: 'icu',
		fullContent: {
			overview:
				'The Intensive Care Unit (ICU) is a special unit designed to deliver 24-hour critical care and life support for patients with severe illnesses and injuries requiring constant monitoring, medication and nursing care. Divine Word Hospital’s ICU is staffed by a multidisciplinary team made up of highly skilled doctors and well-trained nurses working together to provide excellent and compassionate care for critically ill individuals.',
			staffing_ratio:
				'The ICU operates on a (number of bed capacity) with 1:1 or 1:2 nurse-to-patient ratio, complemented by senior-level on-site medical house staff and ICU Physicians to ensure continuous high-quality patient care.',
			bed_capacity_types:
				'ICU or critical care unit has (number of beds) Cardiac, and (number of beds) Medical/Surgical beds; (number of beds) Special ICU (Isolation A and B) beds; and (number of beds) Pediatric beds. The Telemetry unit (TLM) has five intermediate care beds.',
			equipment_monitoring:
				'Each room in the ICU complex, including the nearby Acute Stroke Unit, is equipped with a top-of-the-line multiparameter physiologic monitor linked to a centralized system with dedicated monitoring personnel.',
			internal_areas: [
				'ICU Stock Room for supplies in providing patient care and a nearby Pharmacy for immediate access to emergency and routine medication for our patients. A Clinical Pharmacist also checks on the appropriateness of all the medicines that are prescribed to the patients.',
				'There is a Briefing Room where relatives and the physician meet to hold Patient and Family Conferences.',
				'There is a Waiting Area near the ICU Complex as a reception area for relatives of ICU patients.',
			],
			services: {
				general_services: [
					'Continuous monitoring of the electrocardiogram (with high/low alarms) for all patients',
					'Automated continuous arterial pressure monitoring (noninvasive)',
					'Transcutaneous oxygen monitoring or pulse oximetry for all patients',
					'Equipment to maintain the airway, including laryngoscopes and endotracheal tubes and suction equipment',
					'Equipment to ventilate, including Ambu bags, ventilators, oxygen, and compressed air',
					'Emergency resuscitative equipment, including defibrillation',
					'Transcutaneous and transvenous pacing',
					'Equipment to support hemodynamically unstable patients, including infusion pumps, blood warmers, pressure bags, and blood filters',
					'Beds with removable headboard and adjustable position',
					'Adequate lighting for bedside procedures',
				],
				special_services: [
					'Invasive pressure monitoring: arterial, venous, intra-abdominal and intracranial, as well as derived dynamic indices',
					'Therapeutic hypothermia/target temperature management',
					'Continuous temperature monitoring (intravascular or intra-rectal)',
					'Pulmonary artery catheterization and advanced hemodynamic monitoring',
					'Waveform capnography',
					'Continuous and intermittent dialysis and ultrafiltration',
					'Peritoneal dialysis',
					'Positive and negative pressure isolation rooms',
				],
			},
		},
	},
];
