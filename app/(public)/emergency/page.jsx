import EmergencyClient from './EmergencyClient';

export const metadata = {
	title: '24/7 Emergency Services | Divine Word Hospital',
	description: 'Immediate, compassionate, and expert care when every second counts. Our Emergency Room in Tacloban is open 24 hours a day, 7 days a week.',
	openGraph: {
		title: '24/7 Emergency Services | Divine Word Hospital',
		description: 'Call us immediately for ambulance assistance or trauma care. Our Level 3 facility handles critical injuries.',
	}
};

const EmergencyPage = () => {
    return <EmergencyClient />;
};

export default EmergencyPage;
