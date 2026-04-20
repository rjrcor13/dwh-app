import { Lato, Poppins, Playfair_Display } from 'next/font/google';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
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
	metadataBase: new URL('https://dwh.ph'),
	title: {
		template: '%s | Divine Word Hospital',
		default: 'Divine Word Hospital — Premier Healthcare in Tacloban City',
	},
	description:
		'Divine Word Hospital provides world-class medical care with a compassionate Christian touch in Tacloban City. Offering 24/7 emergency services, specialized centers, and holistic healing since 1965.',
	keywords: [
		'hospital tacloban', 'divine word hospital', 'dwh tacloban',
		'healthcare leyte', 'emergency room tacloban', 'medical specialists',
		'region viii hospital', 'eastern visayas healthcare', 'compassionate care',
		'philhealth accredited hospital',
	],
	authors: [{ name: 'Divine Word Hospital', url: 'https://dwh.ph' }],
	creator: 'Divine Word Hospital',
	publisher: 'Divine Word Hospital',
	category: 'health',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://dwh.ph',
	},
	openGraph: {
		title: 'Divine Word Hospital — Premier Healthcare in Tacloban',
		description: 'World-class medical care with a compassionate touch. Serving Region VIII since 1965.',
		url: 'https://dwh.ph',
		siteName: 'Divine Word Hospital',
		locale: 'en_PH',
		type: 'website',
		images: [
			{
				url: '/assets/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Divine Word Hospital — Tacloban City',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Divine Word Hospital — Premier Healthcare in Tacloban',
		description: 'World-class medical care with a compassionate touch. Serving Region VIII since 1965.',
		images: ['/assets/og-image.jpg'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1F1B99' },
		],
	},
	manifest: '/site.webmanifest',
	// ── Verification tags ──────────────────────────────────────────────────────
	// Add your verification codes from Google Search Console & Bing Webmaster.
	// verification: {
	//     google: 'PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
	//     yandex: 'PASTE_YOUR_YANDEX_CODE_HERE',
	//     bing:   'PASTE_YOUR_BING_CODE_HERE',
	// },
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${lato.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}
				suppressHydrationWarning={true}
			>
				<GoogleAnalytics />
				{children}
			</body>
		</html>
	);
}
