'use client';
import { patientsData, tabList } from '@/app/data/patients';
import Patients from '@/components/patients/Patients';
import PatientsTest from '@/components/patients/PatientsTest';
import React from 'react';

const PatientsPage = () => {
	return (
		<div className="bg-gray-100_">
			<Patients tabList={tabList} patientsData={patientsData} />
			{/* <PatientsTest /> */}
		</div>
	);
};

export default PatientsPage;
