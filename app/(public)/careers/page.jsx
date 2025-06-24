import { jobListings } from '@/app/data/jobListings';
import Careers from '@/components/careers/Careers';
import React from 'react';

const CareersPage = () => {
	return (
		<div>
			<Careers jobListings={jobListings} />
		</div>
	);
};

export default CareersPage;
