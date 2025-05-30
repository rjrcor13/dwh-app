'use client';
import { servicesData } from '@/app/data/services';
import OurServicesSection from '@/components/home/Services';
import Services from '@/components/services/Services';
import React from 'react';

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
