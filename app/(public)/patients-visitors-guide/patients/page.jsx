import { patientsData, tabList } from '@/app/data/patients';
import Patients from '@/components/patients/Patients';

export const metadata = {
	title: 'Patients Guide | Divine Word Hospital',
	description: 'Information and guidelines for admission, discharge, patient rights, and room rates at Divine Word Hospital.',
};

export default function PatientsPage() {
	return <Patients tabList={tabList} patientsData={patientsData} />;
}
