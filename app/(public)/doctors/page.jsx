'use client';
import FindADoctor from '@/components/doctors/FindADoctor';
import { Suspense } from 'react';

const DoctorsPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<FindADoctor />
		</Suspense>
	);
};

export default DoctorsPage;
