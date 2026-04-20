import FindADoctor from '@/components/doctors/FindADoctor';
import DoctorGridSkeleton from '@/components/doctors/DoctorSkeleton';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { Suspense } from 'react';

export const metadata = {
	title: 'Find a Doctor | Divine Word Hospital',
	description: 'Search our directory of highly skilled medical professionals, surgeons, and specialists dedicated to your health at Divine Word Hospital.',
};

const DoctorsPage = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={
				<div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
					<DoctorGridSkeleton count={8} />
				</div>
			}>
				<FindADoctor />
			</Suspense>
		</ErrorBoundary>
	);
};

export default DoctorsPage;
