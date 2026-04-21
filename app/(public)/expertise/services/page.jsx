import { getDocuments } from 'outstatic/server';
import Services from '@/components/services/Services';
import React from 'react';

export const metadata = {
	title: 'Medical Services & Servicing Units',
	description: 'Explore our wide range of medical services including Radiology, ICU, NICU, Dialysis, and more at Divine Word Hospital, Tacloban City.',
	alternates: { canonical: 'https://dwh.ph/expertise/services' },
	openGraph: {
		title: 'Medical Services — Divine Word Hospital',
		description: 'Comprehensive healthcare services for you and your family. From Critical Care to Diagnostic Imaging.',
		url: 'https://dwh.ph/expertise/services',
	},
};

const ServicingUnitsPage = async () => {
	const servicesData = await getDocuments('services', ['title', 'slug', 'description', 'icon', 'content']);
	
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
