import BillingAndInsurance from '@/components/billingandinsurance/BillingAndInsurance';
import React from 'react';

export const metadata = {
	title: 'Billing & Insurance | Divine Word Hospital',
	description: 'Understanding hospital billing, accepted HMOs, and PhilHealth benefits at Divine Word Hospital.',
};

const BillingAndInsurancePage = () => {
	return (
		<div>
			<BillingAndInsurance />
		</div>
	);
};

export default BillingAndInsurancePage;
