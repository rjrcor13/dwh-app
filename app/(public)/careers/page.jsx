import { jobListings } from '@/app/data/jobListings';
import Careers from '@/components/careers/Careers';
import React from 'react';

export const metadata = {
	title: 'Careers | Join Our Team',
	description: 'Explore job opportunities at Divine Word Hospital in Tacloban City. We are hiring nurses, physicians, and allied health professionals. Build your career with us.',
	alternates: { canonical: 'https://dwh.ph/careers' },
	openGraph: {
		title: 'Careers at Divine Word Hospital — Join Our Team',
		description: 'We are hiring dedicated healthcare professionals in Tacloban City. View open positions and apply today.',
		url: 'https://dwh.ph/careers',
	},
};

const CareersPage = () => {
	return (
		<div>
			<Careers jobListings={jobListings} />
		</div>
	);
};

export default CareersPage;

