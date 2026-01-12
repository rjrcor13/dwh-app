import { aboutUsContent } from '@/app/data/aboutUs';
import AboutUs from '@/components/aboutus/AboutUs';
import React from 'react';

export const metadata = {
	title: 'About Us',
	description: 'Learn about Divine Word Hospital\'s rich history, mission, and commitment to compassionate healthcare in Tacloban City since 1964.',
	openGraph: {
		title: 'About Divine Word Hospital | Serving, Caring & Healing',
		description: 'A place of welcome committed to quality health care. Discover our history and vision for Region VIII.',
	},
};

const AboutUsPage = () => {
	return (
		<div>
			<AboutUs data={aboutUsContent} />
		</div>
	);
};

export default AboutUsPage;
