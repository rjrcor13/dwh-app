import { aboutUsContent } from '@/app/data/aboutUs';
import AboutUs from '@/components/aboutus/AboutUs';
import React from 'react';

const AboutUsPage = () => {
	return (
		<div>
			<AboutUs data={aboutUsContent} />
		</div>
	);
};

export default AboutUsPage;
