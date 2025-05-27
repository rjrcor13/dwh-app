import { BedIcon, FileTextIcon, ShieldAlertIcon } from 'lucide-react';

export const patientsData = {
	admission: {
		title: 'Admission',
		sections: [
			{
				heading: 'Before Processing of Admission',
				paragraphs: [
					"The admitting department is the patients' first stop when they enter the DIVINE WORD HOSPITAL. Before admission, patients will be requested to present the following:",
				],
			},
			{
				heading: 'PATIENT ADMISSION FORM',
				isPrimaryText: true, // Custom flag for styling
				paragraphs: [
					'Fill up the Patient Admission Form completely, legibly, and accurately. Accomplish PHILHEALTH forms and comply with all requirements needed. This can be obtained from the patient either on the day of admission or in advance to avoid inconvenience.',
					'All patients and watchers will receive an ID band, which must be worn around the wrist for the entire duration of their stay at DIVINE WORD HOSPITAL.',
				],
			},
			{
				heading: 'LETTER OF AUTHORIZATION (LOA)',
				isPrimaryText: true,
				paragraphs: [
					'For the Company of Health Maintenance Organization (HMOs) Sponsored Accounts patients should consult with their HMO coordinator and present their HMO ID and secure Letter of Authorization without LOA will be automatically considered as private-paying patients and an initial deposit will be required.',
				],
			},
			{
				heading: 'CONSENT FORMS',
				isPrimaryText: true,
				paragraphs: [
					'The patient will be asked to sign AUTHORIZATION OF ADMISSION AND DATA PROCESSING CONSENT forms for the hospital care, exclusive supply of medicines, limitation on outside diagnostic reports, release of information to insurance companies and/or patient’s employer, and waiver of responsibility of loss valuables.',
				],
			},
			{
				heading: 'EMERGENCY ADMISSIONS',
				isPrimaryText: true,
				paragraphs: [
					'Patients are referred to the Emergency Room (ER) if they do not have an admission order sheet from their attending physician. In such cases, the ER consultant will ask the patient for the name of his/her physician. The ER consultant may only assign an attending physician to the patient’s case if he or she does not have a personal physician of choice.',
				],
			},
		],
	},
	discharge: {
		title: 'Discharge Procedure',
		intro: 'To ensure a smooth discharge process, please note the following:',
		sections: [
			{
				heading: 'FINANCIAL OBLIGATIONS',
				isPrimaryText: true,
				paragraphs: [
					'All financial obligations must be settled in full prior to your discharge.',
				],
			},
			{
				heading: "PHYSICIAN'S DISCHARGE ORDER",
				isPrimaryText: true,
				paragraphs: [
					'A written discharge order from your attending physician is required before you can be released from the hospital.',
				],
			},
			{
				heading: 'AUTHORIZATION REQUIREMENTS',
				isPrimaryText: true,
				paragraphs: [
					'Please ensure all necessary authorizations for PhilHealth, HMO, and Company affiliations are completed before your discharge.',
				],
			},
		],
	},
	rooms: {
		title: 'Rooms and Facilities',
		intro:
			"We offer a range of comfortable and well-equipped rooms to cater to our patients' diverse needs:",
		listItems: [
			{
				term: 'Private Rooms:',
				description: 'Ensuring maximum privacy and comfort.',
			},
			{
				term: 'Semi-Private Rooms:',
				description:
					'Offering a balance of privacy and a more communal setting.',
			},
			{
				term: 'Executive Rooms:',
				description: 'Providing enhanced amenities for a more premium stay.',
			},
			{
				term: 'Suite Rooms:',
				description: 'Featuring spacious layouts and additional facilities.',
			},
			{
				term: 'Semi-Suite Rooms:',
				description: 'A comfortable option with extra space and features.',
			},
			{
				term: 'Isolation Rooms (e.g., Covid Room):',
				description:
					'Equipped with necessary safety features for specific medical needs.',
			},
		],
		concludingParagraph:
			'Our facilities are designed to support your recovery and well-being.',
	},
	rights: {
		title: "Patient's Rights & Responsibilities",
		sections: [
			{
				type: 'rights', // Custom type to differentiate structure
				heading: 'PATIENT’S RIGHTS',
				intro:
					'We encourage you to speak openly with your healthcare provider, participate in your treatment choices, and protect your safety by being well-informed and involved in your care. As a patient at Divine Word Hospital, you have the following rights;',
				introTagalog:
					'Hinihikayat ka naming makipag-usap nang bukas sa iyong tagapagbigay ng pangangalagang pangkalusugan, lumahok sa iyong mga pagpipilian sa paggamot, at protektahan ang iyong kaligtasan sa pamamagitan ng pagiging may sapat na kaalaman at kasangkot sa iyong pangangalaga. Bilang pasyente sa DIVINE WORD HOSPITAL, mayroon kang mga sumusunod na Karapatan;',
				items: [
					{
						text: 'You have the right to receive considerate, respectful, and compassionate health care in a safe setting regardless of age, sex, gender, religion, ethnicity, political affiliation, disability, or capacity to pay free from all forms of abuse, neglect, or ill-treatment.',
						tagalog:
							'May karapatan kang tumanggap ng makonsiderasyon, magalang, at mahabagin pangangalagang pangkalusugan sa isang ligtas na kapaligiran anuman ang edad, kasarian, relihiyon, etnisidad, kaugnayan sa pulitika, kapansanan, o kakayahang magbayad nang libre mula sa lahat ng uri ng pang-aabuso, kapabayaan, o masamang pagtrato.',
					},
					{
						text: 'You have the right to be assigned to a competent doctor/resident physician and be told the names of all healthcare team members qualified to provide diagnosis, treatment, and medical advice. Likewise, you have the right to know your hospital and physician fees and receive information about the possibility of financial assistance.',
						tagalog:
							'May karapatan kang maitalaga sa isang karampatang doctor/residente na manggagamot at sasabihin ang mga pangalan ng lahat ng miyembro ng pangkat ng healthcare na kwalipikado upang magbigay ng diagnosis, paggamot, ate medical na payo. Gayundin mayroon kang karapatang malaman ang iyong mga bayarin sa ospital at manggagamot at makatanggap ng impormasyon tungkol sa posibilidad ng tulong pinansyal.',
					},
					{
						text: 'You have the right to notify a family member or person of your choice and your chosen doctor of your admission to the hospital.',
						tagalog:
							'May Karapatan kang abisuhan ang isang miyembro ng pamilya o tao na iyong pinili at iyong piniling doctor ng iyong pagpasok sa ospital.',
					},
					{
						text: 'You have the right to have someone remain with you during your hospital stay unless it compromises your or others’ rights, safety, or health.',
						tagalog:
							'May Karapatan kang manatiling kasama mo sa panahon ng iyong ospital manatili maliban kung ikompromiso nito ang iyong mga Karapatan, kaligtasan, o kalusugan ng iyong o ng iba.',
					},
					{
						text: 'You have the right to exercise your spiritual and cultural beliefs within the capacity and rules of the hospital/medical center.',
						tagalog:
							'May Karapatan kang gamitin ang iyong espiritual at kultural na paniniwala sa loob ang kapasidad at mga tuntunin ng ospital/medikal na sentro.',
					},
					{
						text: 'You have the right to be informed and consent before any non-emergency procedure or research/experiment or to refuse such.',
						tagalog:
							'May Karapatan kang maabisuhan at pumayag bago ang anumang hindi emergency pamamaraan o pananaliksik/eksperimento o tanggihan ang ganoon.',
					},
					{
						text: 'You have the right to privacy and confidentiality of your medical records according to laws, as well as in care discussions, examinations, and treatments, and the right to see or get a copy of your medical records except those records restricted by law. You may request an escort during physical examinations.',
						tagalog:
							'May Karapatan ka sa pagkapribado at pagiging kumpidensyal ng iyong mga medikal na record ayon sa mga batas, gayundin sa mga talakayan sa pangangalaga, pagsusuri, at paggamot, at ang karapatang makita o makakuha ng kopya ng iyong mga medikal na rekord maliban sa mga talaang pinaghihigpitan ng batas. Maari kang humiling ng escort habang mga pisikal na pagsusuri.',
					},
					{
						text: 'You have the right to be represented by someone (assignee) to decide on your behalf when the circumstances warrant.',
						tagalog:
							'May Karapatan kang katawanin ng isang tao (assignee) na magpapasya sa iyong ngalan kapag ang mga pangyayari ay kinakailangan.',
					},
					{
						text: 'You have the right to ask about and be informed of the complaint process and express grievances without fear of recrimination or reprisal.',
						tagalog:
							'May Karapatan kang magtanong at maabisuhan tungkol sa proseso ng reklamo at ipahayag ang mga hinaing nang walang takot sa pag rereklamo o paghihiganti.',
					},
					{
						text: 'You are encouraged to speak directly to the healthcare provider involved in your care.',
						tagalog:
							'Hinihikayat kang makipag-usap nang direkta sa kasangkot na tagapagbigay ng pangangalagang pangkalusugan sa iyong pangangalaga.',
					},
				],
			},
			{
				type: 'responsibilities', // Custom type
				heading: 'PATIENT’S RESPONSIBILITY',
				items: [
					{
						text: 'Provide to the best of his knowledge accurate and complete information about present symptoms, past illnesses and hospital admissions, medication usage, and other matters relating to his health.',
						tagalog:
							'Magbigay ng tumpak at kumpleto sa abot ng kanyang kaalaman impormasyon tungkol sa kasalukuyang mga sintomas, mga nakaraang sakit at ospital admission, paggamit ng gamot, at iba pang mga bagay na may kaugnayan sa kanyang kalusugan.',
					},
					{
						text: 'Follow treatment plan as recommended by his physician.',
						tagalog:
							'Sundin ang plano ng paggamot gaya ng inirerekomenda ng kanyang manggagamot.',
					},
					{
						text: 'Report on expected changes in his medical condition to his physician.',
						tagalog:
							'I-ulat ang mga inaasahang pagbabago sa kanyang kondisyong medikal sa kanyang manggagamot.',
					},
					{
						text: 'Understand his course of treatment including pain relief options as outlined by his physicians, nurses, and other health professionals. If he does not understand, he will ask his nurse or attending physician.',
						tagalog:
							'Unawain ang kanyang kurso ng paggamot kabilang ang mga opsyon sa pagtanggal ng sakit na binalangkas ng kanyang mga manggagamot, nars, at iba pang propesyonal sa kalusugan. Kung hindi niya maintindihan, magtanong siya sa kanyang nurse o dadalong manggagamot.',
					},
					{
						text: 'Keep his scheduled appointment with health care providers and notify them immediately if he is unable to do so.',
						tagalog:
							'Panatilihin ang kanyang nakaiskedyul na appointment sa mga tagapagbigay ng pangangalagang pangkalusugan at abisuhan sila kaagad kung hindi niya ito magawa.',
					},
					{
						text: 'Take responsibility for consequences if he refuses treatment or does not follow his physician’s instructions.',
						tagalog:
							'Pananagutan ang mga kahihinatnan kung tumanggi siya sa paggamot o hindi sundin ang mga tagubilin ng kanyang manggagamot.',
					},
					{
						text: 'Assure that his financial obligations to the hospital and his health care providers are fulfilled as promptly as possible.',
						tagalog:
							'Siguraduhing ang kanyang pinansyal na obligasyon sa ospital at mga tagapagbigay ng pangangalaga ay natutugunan sa lalong madaling panahon.',
					},
					{
						text: 'Follow hospital rules and regulations.',
						tagalog: 'Sundin ang mga tuntunin at regulasyon ng ospital.',
					},
					{
						text: 'Be considerate of the rights and property of other patients.',
						tagalog:
							'Maging makonsiderasyon sa mga karapatan at ari-arian ng ibang mga pasyente',
					},
					{
						text: 'Assist in the control of noise and number of visitors.',
						tagalog: 'Tumulong sa pagkontrol ng ingay at bilang ng mga bisita.',
					},
					{
						text: 'Provide the hospital with a copy of his written directive if available.',
						tagalog:
							'Bigyan ang ospital ng kopya ng kanyang nakasulat na direktiba kung mayroon.',
					},
				],
			},
		],
	},
};

export const tabList = [
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
