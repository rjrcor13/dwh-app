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
	title: 'Divine Word Hospital',
	description: 'Divine Word Hospital - Serving, Caring & Healing',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${lato.variable} ${poppins.variable} ${playfair.variable} antialiased font-sans`}
			>
				{children}
			</body>
		</html>
	);
}
