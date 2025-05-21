import {
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
export const contactInfo = [
	{
		icon: EnvelopeIcon,
		title: 'Email',
		text: 'dwh.marketing@dwh.com',
		subText: 'Send us an email today',
	},
	{
		icon: PhoneIcon,
		title: 'Phone',
		text: '+63 909 123 3340',
		subText: 'Call us for more information',
	},
	{
		icon: MapPinIcon,
		title: 'Location',
		text: 'Avenida Veteranos Street, Tacloban City, Leyte, 6500',
		subText: 'Get Direction',
		isLink: true, // New property to indicate it's a link
		href: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA', // Add a placeholder for the link
	},
];
