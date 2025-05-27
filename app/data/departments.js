import { Baby, Brain, ForkKnife, Stethoscope, Users } from 'lucide-react';

// export const departmentsData = [
// 	{
// 		name: 'Department of Anesthesiology',
// 		icon: Brain, // Represents anesthesia and consciousness
// 		description:
// 			'The Anesthesiology Department provides anesthesia and pain management in surgery and specialized procedures provided by Obstetrics and Gynecology, Neurosurgery, Orthopedics, Otolaryngology, Ophthalmology, Interventional Radiology, Oncology, Dental Surgery and Psychiatry. Consultant staff work closely with the Pain Management Services unit.',
// 		vision:
// 			'The members of the anesthesiology department as world-class professionals perusing the mission of the Divine Word Hospital and the Philippine Society of Anesthesiologists.',
// 		mission:
// 			'To promote and ensure patient access to quality and safe anesthesia care, and optimal utilization of hospital facilities.',
// 		chairperson: {
// 			name: 'ANGELINA A. GAPAY, MD, FPSA',
// 			title: 'Chairperson, Department of Anesthesia',
// 		},
// 	},
// 	{
// 		name: 'Department of Internal Medicine',
// 		icon: Stethoscope, // General internal medicine
// 		description:
// 			'The Department of Internal Medicine provides general and specialized outpatient and inpatient care for adult patients (age 19 years old and above). It aims to provide accessible, compassionate, and integrative healthcare services through a comprehensive and integrated multidisciplinary approach.',
// 		vision:
// 			'An organization of Internists and Resident Trainees that adopts the Vision of the Philippine College of Physician in setting the highest standards and ethical ideals in the practice of Internal medicine and provides dynamic leadership in the promotion of health and quality of life in the management of diseases and in the formulation of relevant health policies.',
// 		mission: [
// 			'Providing CME and training of its resident trainees and staff;',
// 			'Providing an environment that promotes ethical, high quality, and cost-effective medical care;',
// 			'Providing stimulus, advice and incentive for research and publication;',
// 			'Producing graduates who are qualified and expected to pass the PSBIM examination;',
// 			'Bringing awareness and understanding of the discipline of patient safety to the Divine word hospital and its role in reducing the incidence of and mitigating the impact of adverse events in healthcare;',
// 			'Providing timely communication and advice to health agencies, governmental, and non-governmental organizations;',
// 			'Being responsive to the changing environment;',
// 			'Putting promotion on excellence;',
// 			'Putting service above gain;',
// 			'Patient safety.',
// 		],
// 		sections: [
// 			'Internal Medicine',
// 			'General Internal Medicine',
// 			'Immunology',
// 			'Cardiology',
// 			'Endocrinology',
// 			'Gastroenterology',
// 			'Hematology',
// 			'Infectious Disease',
// 			'Nephrology',
// 			'Medical Oncology',
// 			'Pulmonology',
// 			'Neurology',
// 			'Neuropsychiatry',
// 			'Dermatology',
// 			'Rheumatology',
// 			'Rehabilitation Medicine',
// 		],
// 		concludingStatement:
// 			'Physicians ensure that a treatment plan is coordinated, cohesive, coherent, and integrated that provides patient care, while continuing education of the medical staff, monitoring and evaluation of clinical outcomes, and the policies of the residency training program of the department.',
// 		chairperson: {
// 			name: 'CORAZON A. RUBIO, MD, FPCP',
// 			title: 'Chairperson, Department of Internal Medicine',
// 		},
// 	},
// 	{
// 		name: 'Department of Obstetrics & Gynecology',
// 		icon: Baby, // Represents OB-GYNE
// 		description:
// 			"The Department of Obstetrics and Gynecology at Divine Word Hospital is dedicated to delivering comprehensive, high-quality patient care across all areas of obstetrics and gynecology, leveraging advanced technology, pioneering research, and rigorous training and education. Our team consists of highly trained professionals who are committed to providing the utmost in personalized reproductive healthcare with excellence, integrity, and compassion. We offer a wide range of women’s healthcare services, including annual check-ups, prenatal care, childbirth deliveries, post-delivery maternal care, and specialized gynecologic treatments and surgeries for specific conditions. At the forefront of women’s health, our department prioritizes the well-being of female patients, ensuring they receive the best possible care for their reproductive health needs. We are equipped with advanced ultrasound machines and supported by exceptional Obstetrics and Gynecology specialists who excel in the evaluation, diagnosis, and management of each patient's unique needs. At Divine Word Hospital, we are dedicated to advancing women’s healthcare through compassionate care, advanced technology, and expertise in obstetrics and gynecology, ensuring every patient receives exceptional treatment tailored to their individual health journey.",
// 		vision:
// 			'The DWH Obstetrics and Gynecology Department is a center of excellence providing a service- oriented and ethical women’s health care, competent in teaching, training, and research.',
// 		mission: [
// 			'To provide a holistic, compassionate, and the highest quality of patient care.',
// 			'To deliver a structured and dynamic residency training program, conforming to the PBOG standards producing globally competent, compassionate and God-fearing Obstetricians and Gynecologists.',
// 		],
// 		objectives: {
// 			qualityPatientCare: [
// 				'To provide holistic, compassionate and quality healthcare to all women of the Region.',
// 				'To provide quality and effective specialized services and facilities in the field of Obstetrics and Gynecology in the Region.',
// 			],
// 			teachingTrainingResearch: [
// 				'To provide a structured and dynamic training program in Obstetrics and Gynecology conforming to the PBOG standards, enabling residents to be competitive in knowledge and skills during training.',
// 				'To train residents committed in carrying out professional responsibilities, who will demonstrate the highest ethical standards in patient care, social accountability and with utmost respect to the profession and POGS.',
// 				'To help residents develop skills in effective scientific paper writing by providing learning opportunities all throughout their 4-year training, allowing them to aim in producing quality research papers.',
// 				'To produce compassionate, competent and board-certified OB-GYN graduates in the different areas of the Region with limited access to quality healthcare.',
// 			],
// 		},
// 		services: [
// 			'FETAL AND MATERNAL MEDICINE',
// 			'GYNECOLOGIC ONCOLOGY',
// 			'REPRODUCTIVE ENDOCRINOLOGY, INFERTILITY, GYNECOLOGIC ENDOSCOPY',
// 			'TROPHOBLASTIC DISEASES',
// 		],
// 		procedures: {
// 			onTheUterus: [
// 				'MYOMECTOMY',
// 				'SUBTOTAL HYSTERECTOMY',
// 				'TOTAL ABDOMINAL HYSTERECTOMY',
// 				'VAGINAL HYSTERECTOMY',
// 				'UTERINE SUSPENSION',
// 			],
// 			onTheOvariesAndAdnexa: [
// 				'OOPHORECTOMY',
// 				'SALPINGO- OOPHORECTOMY',
// 				'OVARIAN CYSTECTOMY/OOPHORO-CYSTECTOMY',
// 				'PARTIAL OOPHORECTOMY',
// 			],
// 			onTheCervix: [
// 				'ENDOCERVICAL BIOPSY',
// 				'ENDOCERVICAL CURETTAGE',
// 				'CONIZATION OF THE CERVIX',
// 				'EXCISION OF CERVICAL POLYP',
// 				'AMPUTATION OF CERVIX',
// 				'CERVICETOMY',
// 				'ENCIRCLEMENT SUTURE/CERCLAGE',
// 				'OTHER REPAIR OF CERVIX',
// 				'LATE REPAIR OF OBSTETRIC LACERATION',
// 				'REPAIR OF NON-OBSTETRIC LOCERATION',
// 				'LEEP',
// 			],
// 			onTheVagina: [
// 				'CULDOCENTESIS',
// 				'INCISION OF THE VAGINA',
// 				'COLPOTOMY',
// 				'CULDOTOMY',
// 				'HYMENOTOMY',
// 				'HYMENECTOMY',
// 				'TOTAL EXCISION OF THE VAGINA',
// 				'COLPECTOMY',
// 				'COLPOCLEISIS',
// 				'REPAIR OF CYSTOCOELE',
// 				'REPAIR OF RECTOCOELE',
// 				'REPAIR OF ENTEROCOLE',
// 			],
// 			otherProcedures: [
// 				'PARTIAL OMENTECTOMY',
// 				'PERITONEAL BIOPSY',
// 				'PERITONEAL FLUID SAMPLING',
// 				'HARTMAN’S PROCEDURE',
// 				'EXPLORATORY LAPAROTOMY ALONE',
// 				'BILATERAL PELVIC LYMPH NODE DISSECTION',
// 				'BILATERAL GROIN NODE DISSECTION',
// 				'VIDEO LAPAROSCOPY (DIAGNOSTIC)',
// 				'VIDEO LAPAROSCOPY (OPERATIVE)',
// 				'HYSTEROGRAMS/HYSTEROSALPINGOGRAPHY',
// 				'HYSTEROSCOPY',
// 				'COLPOSCOPY',
// 				'ENDOSCOPIC DESTRUCTION OR OCCULASION',
// 				'BY CULDOSCOPY',
// 				'BY LAPAROSCOPY',
// 				'ULTRASOUND GUIDED CURETTAGE',
// 				'IUD INSERTION/REMOVAL',
// 				'SALINE INFUSION SONOGRAPHY',
// 			],
// 		},
// 		chairperson: {
// 			name: 'Chicanee M. Alvarina, MD, FPOGS, FSGOP, FPSCPC',
// 			title: 'Chairperson, Department of OB-GYNE',
// 		},
// 	},
// 	{
// 		name: 'Department of Pediatrics',
// 		icon: Users, // Represents children/family
// 		description:
// 			"The Divine Word Hospital's Department of Pediatrics offers excellent care for children from birth to 18 years old. Services include general health check-ups, preventive care, treatment for sick children, developmental assessments, referrals to specialists, and family counseling. The department has modern facilities such as a pediatric unit, intensive care for newborns and children, and an emergency outpatient unit.",
// 		vision:
// 			'A leading pediatric center in eastern Visayas on patient service, training programme and research.',
// 		mission: [
// 			'Render excellent patient services with its upgraded facilities and equipment',
// 			'Offer quality training program to healthcare professionals',
// 			'Develop and enhance research skills among staff',
// 			'Strengthen the community-based partnership towards creating a more suitable community development program.',
// 		],
// 		subspecialties: [
// 			'PEDIACTRIC INTENSIVE CARE',
// 			'GENERAL PEDIATRICS',
// 			'CARDIOLOGY',
// 			'ENDOCRINOLOGY',
// 			'INFECTIOUS',
// 			'NEONATOLOGY',
// 			'NEPHROLOGY',
// 			'NEUROLOGY',
// 			'PULMONOLOGY',
// 			'RHEUMATOLOGY',
// 			'ADULT & PEDIA ALLERGY/ IMMUNOLOGY',
// 			'HEMATOLOGY & ONCOLOGY',
// 			'TOXICOLOGY',
// 			'DEVELOPMENTAL PEDIATRICS',
// 		],
// 		chairperson: {
// 			name: 'Agueda Fe B. Barredo, MD, FPPS',
// 			title: 'Chairperson, Department of Pediatrics',
// 		},
// 	},
// 	{
// 		name: 'Department of Surgery',
// 		icon: ForkKnife, // Represents surgery
// 		description:
// 			'Divine Word Hospital has the updated surgical facilities, staffed by highly qualified and board-certified surgeons and organized into subspecialty groups, dedicated to the advanced treatment of surgical diseases, injuries, and diverse medical conditions. Due to its consistent search for new and modern developments in surgical techniques, the Department of Surgery offers traditional and modern surgical procedures using new technologies performed by highly skilled and well-trained specialists, some of the General surgery procedures may now be done through minimally invasive techniques.',
// 		vision:
// 			'To be Center of Excellence in the teaching and training of General Surgeons in Region VIII.',
// 		mission: [
// 			'To develop professional and ethical standards in surgical education, training and research tour Resident Physicians.',
// 			'To instill the culture of safe surgery and compassionate service to our patients.',
// 			'To be a fully accredited training program in General Surgery by year 2025.',
// 		],
// 		specialties: [
// 			'GENERAL SURGERY',
// 			'LAPAROSCOPIC SURGERY',
// 			'ADVANCED MINIMALLY INVASIVE LAPAROSCOPIC SURGERY',
// 			'PEDIATRIC SURGERY',
// 			'OTORHINOLARYNGOLOGY – EAR, NOSE, THROAT, HEAD AND NECK SURGERY',
// 			'NEUROSURGERY',
// 			'OPHTHALMOLOGY',
// 			'ORTHOPEDICS',
// 			'SPINE SURGERY',
// 			'UROLOGY',
// 			'COLORECTAL SURGERY',
// 			'HEPATOPANCREATOBILIARY SURGERY',
// 			'VASCULAR SURGERY',
// 		],
// 		chairperson: {
// 			name: 'Sherlito T. Siao, MD, DBPS, FPCS, FPSGS, FPALES, FICS, FPAHNS',
// 			title: 'CHAIRPERSON, Department of Surgery',
// 		},
// 	},
// ];
export const departmentsData = [
	{
		name: 'Department of Anesthesiology',
		id: 'anesthesiology', // Unique ID for tab
		icon: Brain, // Represents anesthesia and consciousness
		description:
			'The Anesthesiology Department provides anesthesia and pain management in surgery and specialized procedures provided by Obstetrics and Gynecology, Neurosurgery, Orthopedics, Otolaryngology, Ophthalmology, Interventional Radiology, Oncology, Dental Surgery and Psychiatry. Consultant staff work closely with the Pain Management Services unit.',
		vision:
			'The members of the anesthesiology department as world-class professionals perusing the mission of the Divine Word Hospital and the Philippine Society of Anesthesiologists.',
		mission:
			'To promote and ensure patient access to quality and safe anesthesia care, and optimal utilization of hospital facilities.',
		chairperson: {
			name: 'ANGELINA A. GAPAY, MD, FPSA',
			title: 'Chairperson, Department of Anesthesia',
		},
	},
	{
		name: 'Department of Internal Medicine',
		id: 'internal-medicine', // Unique ID for tab
		icon: Stethoscope, // General internal medicine
		description:
			'The Department of Internal Medicine provides general and specialized outpatient and inpatient care for adult patients (age 19 years old and above). It aims to provide accessible, compassionate, and integrative healthcare services through a comprehensive and integrated multidisciplinary approach.',
		vision:
			'An organization of Internists and Resident Trainees that adopts the Vision of the Philippine College of Physician in setting the highest standards and ethical ideals in the practice of Internal medicine and provides dynamic leadership in the promotion of health and quality of life in the management of diseases and in the formulation of relevant health policies.',
		mission: [
			'Providing CME and training of its resident trainees and staff;',
			'Providing an environment that promotes ethical, high quality, and cost-effective medical care;',
			'Providing stimulus, advice and incentive for research and publication;',
			'Producing graduates who are qualified and expected to pass the PSBIM examination;',
			'Bringing awareness and understanding of the discipline of patient safety to the Divine word hospital and its role in reducing the incidence of and mitigating the impact of adverse events in healthcare;',
			'Providing timely communication and advice to health agencies, governmental, and non-governmental organizations;',
			'Being responsive to the changing environment;',
			'Putting promotion on excellence;',
			'Putting service above gain;',
			'Patient safety.',
		],
		sections: [
			'Internal Medicine',
			'General Internal Medicine',
			'Immunology',
			'Cardiology',
			'Endocrinology',
			'Gastroenterology',
			'Hematology',
			'Infectious Disease',
			'Nephrology',
			'Medical Oncology',
			'Pulmonology',
			'Neurology',
			'Neuropsychiatry',
			'Dermatology',
			'Rheumatology',
			'Rehabilitation Medicine',
		],
		concludingStatement:
			'Physicians ensure that a treatment plan is coordinated, cohesive, coherent, and integrated that provides patient care, while continuing education of the medical staff, monitoring and evaluation of clinical outcomes, and the policies of the residency training program of the department.',
		chairperson: {
			name: 'CORAZON A. RUBIO, MD, FPCP',
			title: 'Chairperson, Department of Internal Medicine',
		},
	},
	{
		name: 'Department of Obstetrics & Gynecology',
		id: 'ob-gyne', // Unique ID for tab
		icon: Baby, // Represents OB-GYNE
		description:
			"The Department of Obstetrics and Gynecology at Divine Word Hospital is dedicated to delivering comprehensive, high-quality patient care across all areas of obstetrics and gynecology, leveraging advanced technology, pioneering research, and rigorous training and education. Our team consists of highly trained professionals who are committed to providing the utmost in personalized reproductive healthcare with excellence, integrity, and compassion. We offer a wide range of women’s healthcare services, including annual check-ups, prenatal care, childbirth deliveries, post-delivery maternal care, and specialized gynecologic treatments and surgeries for specific conditions. At the forefront of women’s health, our department prioritizes the well-being of female patients, ensuring they receive the best possible care for their reproductive health needs. We are equipped with advanced ultrasound machines and supported by exceptional Obstetrics and Gynecology specialists who excel in the evaluation, diagnosis, and management of each patient's unique needs. At Divine Word Hospital, we are dedicated to advancing women’s healthcare through compassionate care, advanced technology, and expertise in obstetrics and gynecology, ensuring every patient receives exceptional treatment tailored to their individual health journey.",
		vision:
			'The DWH Obstetrics and Gynecology Department is a center of excellence providing a service- oriented and ethical women’s health care, competent in teaching, training, and research.',
		mission: [
			'To provide a holistic, compassionate, and the highest quality of patient care.',
			'To deliver a structured and dynamic residency training program, conforming to the PBOG standards producing globally competent, compassionate and God-fearing Obstetricians and Gynecologists.',
		],
		objectives: {
			qualityPatientCare: [
				'To provide holistic, compassionate and quality healthcare to all women of the Region.',
				'To provide quality and effective specialized services and facilities in the field of Obstetrics and Gynecology in the Region.',
			],
			teachingTrainingResearch: [
				'To provide a structured and dynamic training program in Obstetrics and Gynecology conforming to the PBOG standards, enabling residents to be competitive in knowledge and skills during training.',
				'To train residents committed in carrying out professional responsibilities, who will demonstrate the highest ethical standards in patient care, social accountability and with utmost respect to the profession and POGS.',
				'To help residents develop skills in effective scientific paper writing by providing learning opportunities all throughout their 4-year training, allowing them to aim in producing quality research papers.',
				'To produce compassionate, competent and board-certified OB-GYN graduates in the different areas of the Region with limited access to quality healthcare.',
			],
		},
		services: [
			'FETAL AND MATERNAL MEDICINE',
			'GYNECOLOGIC ONCOLOGY',
			'REPRODUCTIVE ENDOCRINOLOGY, INFERTILITY, GYNECOLOGIC ENDOSCOPY',
			'TROPHOBLASTIC DISEASES',
		],
		procedures: {
			onTheUterus: [
				'MYOMECTOMY',
				'SUBTOTAL HYSTERECTOMY',
				'TOTAL ABDOMINAL HYSTERECTOMY',
				'VAGINAL HYSTERECTOMY',
				'UTERINE SUSPENSION',
			],
			onTheOvariesAndAdnexa: [
				'OOPHORECTOMY',
				'SALPINGO- OOPHORECTOMY',
				'OVARIAN CYSTECTOMY/OOPHORO-CYSTECTOMY',
				'PARTIAL OOPHORECTOMY',
			],
			onTheCervix: [
				'ENDOCERVICAL BIOPSY',
				'ENDOCERVICAL CURETTAGE',
				'CONIZATION OF THE CERVIX',
				'EXCISION OF CERVICAL POLYP',
				'AMPUTATION OF CERVIX',
				'CERVICETOMY',
				'ENCIRCLEMENT SUTURE/CERCLAGE',
				'OTHER REPAIR OF CERVIX',
				'LATE REPAIR OF OBSTETRIC LACERATION',
				'REPAIR OF NON-OBSTETRIC LOCERATION',
				'LEEP',
			],
			onTheVagina: [
				'CULDOCENTESIS',
				'INCISION OF THE VAGINA',
				'COLPOTOMY',
				'CULDOTOMY',
				'HYMENOTOMY',
				'HYMENECTOMY',
				'TOTAL EXCISION OF THE VAGINA',
				'COLPECTOMY',
				'COLPOCLEISIS',
				'REPAIR OF CYSTOCOELE',
				'REPAIR OF RECTOCOELE',
				'REPAIR OF ENTEROCOLE',
			],
			otherProcedures: [
				'PARTIAL OMENTECTOMY',
				'PERITONEAL BIOPSY',
				'PERITONEAL FLUID SAMPLING',
				'HARTMAN’S PROCEDURE',
				'EXPLORATORY LAPAROTOMY ALONE',
				'BILATERAL PELVIC LYMPH NODE DISSECTION',
				'BILATERAL GROIN NODE DISSECTION',
				'VIDEO LAPAROSCOPY (DIAGNOSTIC)',
				'VIDEO LAPAROSCOPY (OPERATIVE)',
				'HYSTEROGRAMS/HYSTEROSALPINGOGRAPHY',
				'HYSTEROSCOPY',
				'COLPOSCOPY',
				'ENDOSCOPIC DESTRUCTION OR OCCULASION',
				'BY CULDOSCOPY',
				'BY LAPAROSCOPY',
				'ULTRASOUND GUIDED CURETTAGE',
				'IUD INSERTION/REMOVAL',
				'SALINE INFUSION SONOGRAPHY',
			],
		},
		chairperson: {
			name: 'Chicanee M. Alvarina, MD, FPOGS, FSGOP, FPSCPC',
			title: 'Chairperson, Department of OB-GYNE',
		},
	},
	{
		name: 'Department of Pediatrics',
		id: 'pediatrics', // Unique ID for tab
		icon: Users, // Represents children/family
		description:
			"The Divine Word Hospital's Department of Pediatrics offers excellent care for children from birth to 18 years old. Services include general health check-ups, preventive care, treatment for sick children, developmental assessments, referrals to specialists, and family counseling. The department has modern facilities such as a pediatric unit, intensive care for newborns and children, and an emergency outpatient unit.",
		vision:
			'A leading pediatric center in eastern Visayas on patient service, training programme and research.',
		mission: [
			'Render excellent patient services with its upgraded facilities and equipment',
			'Offer quality training program to healthcare professionals',
			'Develop and enhance research skills among staff',
			'Strengthen the community-based partnership towards creating a more suitable community development program.',
		],
		subspecialties: [
			'PEDIACTRIC INTENSIVE CARE',
			'GENERAL PEDIATRICS',
			'CARDIOLOGY',
			'ENDOCRINOLOGY',
			'INFECTIOUS',
			'NEONATOLOGY',
			'NEPHROLOGY',
			'NEUROLOGY',
			'PULMONOLOGY',
			'RHEUMATOLOGY',
			'ADULT & PEDIA ALLERGY/ IMMUNOLOGY',
			'HEMATOLOGY & ONCOLOGY',
			'TOXICOLOGY',
			'DEVELOPMENTAL PEDIATRICS',
		],
		chairperson: {
			name: 'Agueda Fe B. Barredo, MD, FPPS',
			title: 'Chairperson, Department of Pediatrics',
		},
	},
	{
		name: 'Department of Surgery',
		id: 'surgery', // Unique ID for tab
		icon: Stethoscope, // Represents surgery
		description:
			'Divine Word Hospital has the updated surgical facilities, staffed by highly qualified and board-certified surgeons and organized into subspecialty groups, dedicated to the advanced treatment of surgical diseases, injuries, and diverse medical conditions. Due to its consistent search for new and modern developments in surgical techniques, the Department of Surgery offers traditional and modern surgical procedures using new technologies performed by highly skilled and well-trained specialists, some of the General surgery procedures may now be done through minimally invasive techniques.',
		vision:
			'To be Center of Excellence in the teaching and training of General Surgeons in Region VIII.',
		mission: [
			'To develop professional and ethical standards in surgical education, training and research tour Resident Physicians.',
			'To instill the culture of safe surgery and compassionate service to our patients.',
			'To be a fully accredited training program in General Surgery by year 2025.',
		],
		specialties: [
			'GENERAL SURGERY',
			'LAPAROSCOPIC SURGERY',
			'ADVANCED MINIMALLY INVASIVE LAPAROSCOPIC SURGERY',
			'PEDIATRIC SURGERY',
			'OTORHINOLARYNGOLOGY – EAR, NOSE, THROAT, HEAD AND NECK SURGERY',
			'NEUROSURGERY',
			'OPHTHALMOLOGY',
			'ORTHOPEDICS',
			'SPINE SURGERY',
			'UROLOGY',
			'COLORECTAL SURGERY',
			'HEPATOPANCREATOBILIARY SURGERY',
			'VASCULAR SURGERY',
		],
		chairperson: {
			name: 'Sherlito T. Siao, MD, DBPS, FPCS, FPSGS, FPALES, FICS, FPAHNS',
			title: 'CHAIRPERSON, Department of Surgery',
		},
	},
];
