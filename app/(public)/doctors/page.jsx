import FindADoctor from '@/components/doctors/FindADoctor';
import DoctorGridSkeleton from '@/components/doctors/DoctorSkeleton';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { Suspense } from 'react';

export const metadata = {
	title: 'Find a Doctor | Divine Word Hospital',
	description: 'Search our directory of highly skilled medical professionals, surgeons, and specialists dedicated to your health at Divine Word Hospital.',
};

import { getDocuments } from 'outstatic/server';

const DoctorsPage = async () => {
	const doctorsData = await getDocuments('doctors', ['title', 'slug', 'specialties', 'hospital', 'clinicDays', 'clinicHours', 'gender', 'hmo', 'image', 'content', 'clinicRoom', 'contactNumber']);
	// Deduplicate by slug to prevent key errors
	const uniqueDoctors = Array.from(new Map(doctorsData.map(d => [d.slug, d])).values());
	const doctors = uniqueDoctors.map(d => ({ ...d, name: d.title }));

	return (
		<ErrorBoundary>
			<Suspense fallback={
				<div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<DoctorGridSkeleton count={8} />
				</div>
			}>
				<FindADoctor doctors={doctors} />
			</Suspense>
		</ErrorBoundary>
	);
};

export default DoctorsPage;
