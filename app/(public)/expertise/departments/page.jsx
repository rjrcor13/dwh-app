import Department from '@/components/departments/Departments';
import React from 'react';

export const metadata = {
	title: 'Specialized Departments',
	description: 'Discover our specialized medical departments including Anesthesiology, Internal Medicine, OB-GYNE, Pediatrics, and Surgery. Committed to excellence in patient care.',
	openGraph: {
		title: 'Departments | Divine Word Hospital',
		description: 'Leading the region in specialized medical care, training, and research.',
	},
};

const DepartmentPage = () => {
	return (
		<div>
			<Department />
		</div>
	);
};

export default DepartmentPage;
