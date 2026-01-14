export const menuItems = [
	{
		label: 'Home',
		featured: {
			href: '/home',
		},
	},

	{
		label: 'Expertise',
		featured: {
			title: 'Areas of Care',
			description:
				'Comprehensive medical specialties and services dedicated to treating a wide range of health conditions.',
			href: '/',
			image: '/assets/myimage.jpg', // <-- add image path
		},

		links: [
			{
				title: 'Servicing Units',
				description:
					'Explore the hospital`s medical and diagnostic services available for patient care and treatment.',
				href: '/expertise/services',
			},
			{
				title: 'Departments',
				description:
					'Specialized medical divisions providing expert care, diagnosis, and treatment across various fields of medicine.',
				href: '/expertise/departments',
			},
		],
	},
	{
		label: 'Patients & Visitors Guide',
		featured: {
			title: 'Admissions & Visiting',
			description:
				'Get information on hospital admissions, facilities, discharge procedures, and patient safety measures.',
			href: '/patients-visitors-guide',
			image: '/assets/visiting.jpg',
		},
		links: [
			{
				title: 'Patients',
				description:
					'Information to guide patients through every stage of their hospital stay—from admission to discharge.',
				href: '/patients-visitors-guide/patients',
			},
			{
				title: 'Visitors & Watchers',
				description:
					'Review the guidelines for hospital visitors, watchers, and special visiting protocols including COVID-19 regulations.',
				href: '/patients-visitors-guide/visitors-watchers',
			},
			{
				title: 'Billing & Insurance',
				description:
					'Access information about billing procedures, HMO coverage, PhilHealth, and medical records processing.',
				href: '/patients-visitors-guide/billing-insurance',
			},
		],
	},
	{
		label: 'Religious Services & Hospital Events',
		featured: {
			title: 'Faith & Community',
			description:
				'Learn about our pastoral services, chapel activities, and community outreach programs that support holistic healing.',
			href: '/events/MAKAPAWA',
			image: '/assets/events.jpg',
		},
		links: [
			{
				title: 'Eucharistic Celebrations',
				description:
					'Celebrate the Holy Eucharist through scheduled Masses and spiritual gatherings.',
				href: '/events/eucharistic-celebrations',
			},
			{
				title: 'MAKAPAWA',
				description:
					'Our hospital`s outreach and pastoral ministry aimed at promoting holistic care for the community.',
				href: '/events/makapawa',
			},
			{
				title: 'Hospital Celebrations',
				description:
					'Commemorate significant milestones and institutional events that foster community and hospital culture.',
				href: '/events/hospital-celebrations',
			},
		],
	},
	{
		label: 'About Us',
		featured: {
			href: '/about-us',
		},
	},
	{
		label: 'Careers',
		featured: {
			href: '/careers',
		},
	},
	// {
	// 	label: 'Contact Us',
	// 	featured: {
	// 		href: '/contact',
	// 	},
	// },
];
