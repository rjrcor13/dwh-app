import { Lato, Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';

// Initialize the fonts
const lato = Lato({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lato',
	weight: ['300', '400', '700', '900'],
});

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair',
	weight: ['400', '500', '600', '700'],
});

export const metadata = {
	title: {
		template: '%s | Divine Word Hospital',
		default: 'Divine Word Hospital - Premier Healthcare in Tacloban',
	},
	description: 'Divine Word Hospital provides world-class medical care with a compassionate Christian touch in Tacloban City. Offering 24/7 emergency services, specialized centers, and holistic healing since 1965.',
	keywords: ['hospital tacloban', 'healthcare leyte', 'emergency room tacloban', 'divine word hospital', 'medical specialists', 'compassionate care'],
	openGraph: {
		title: 'Divine Word Hospital - Premier Healthcare in Tacloban',
		description: 'World-class medical care with a compassionate touch. Serving Region VIII since 1965.',
		url: 'https://dwh.ph',
		siteName: 'Divine Word Hospital',
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${lato.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}
				suppressHydrationWarning={true}
			>
				{children}
			</body>
		</html>
	);
}
