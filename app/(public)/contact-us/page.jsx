
import ContactView from '@/components/contact/ContactView';

export const metadata = {
    title: 'Contact Us | Get in Touch',
    description: 'Get in touch with Divine Word Hospital. Find our location, contact numbers, and operating hours, or send us a message directly.',
    alternates: { canonical: 'https://dwh.ph/contact-us' },
    openGraph: {
        title: 'Contact Divine Word Hospital',
        description: 'We are here to help. Contact our team for inquiries, appointments, and support.',
        url: 'https://dwh.ph/contact-us',
    },
};

export default function ContactPage() {
    return <ContactView />;
}
