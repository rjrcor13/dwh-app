
import ContactView from '@/components/contact/ContactView';

export const metadata = {
    title: 'Contact Us | Divine Word Hospital',
    description: 'Get in touch with Divine Word Hospital. Find our location, contact numbers, and operating hours, or send us a message directly.',
    openGraph: {
        title: 'Contact Us | Divine Word Hospital',
        description: 'We are here to help. Contact our team for inquiries, appointments, and support.',
    },
};

export default function ContactPage() {
    return <ContactView />;
}
