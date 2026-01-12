import { servicesData } from '@/app/data/services';
import OurServicesSection from '@/components/home/Services';
import Services from '@/components/services/Services';
import React from 'react';

export const metadata = {
	title: 'Servicing Units',
	description: 'Explore our wide range of medical services including Radiology, ICU, NICU, Dialysis, and more. Committed to quality healthcare in Region VIII.',
	openGraph: {
		title: 'Our Medical Services | Divine Word Hospital',
		description: 'Comprehensive healthcare services for you and your family. From Critical Care into Diagnostic Imaging.',
	},
};

const ServicingUnitsPage = () => {
	return (
		<div>
			<Services
				title="Servicing Units"
				description="We offer a wide range of medical services to provide you and your family with the best possible care."
				servicesData={servicesData}
				titleColor="text-primary"
			/>
		</div>
	);
};

export default ServicingUnitsPage;
