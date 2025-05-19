import { doctorsData } from '@/app/data/dummyDoctors';
import DoctorProfileWrapper from '../../../../components/doctors/DoctorWrapper';

export const generateStaticParams = async () => {
	return doctorsData.map((doctor) => ({
		doctorId: doctor.id.toString(),
	}));
};

export default function DoctorProfilePage() {
	return <DoctorProfileWrapper />;
}
