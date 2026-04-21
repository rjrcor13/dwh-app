/** @type {import('next').NextConfig} */

// ── Security headers applied to every route ───────────────────────────────────
const securityHeaders = [
	{
		// Prevent clickjacking — only this domain can embed iframes
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		// Stop browsers from MIME-sniffing the response
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		// Force HTTPS for 2 years, include subdomains
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		// Control referrer data sent to external sites
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		// Restrict browser feature access
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
	},
	{
		// DNS prefetch for faster external resource loads
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Content-Security-Policy',
		value: [
			"default-src 'self'",
			"script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
			"font-src 'self' https://fonts.gstatic.com",
			"img-src 'self' data: blob: https://images.unsplash.com https://res.cloudinary.com https://www.google-analytics.com https://avatars.githubusercontent.com https://raw.githubusercontent.com",
			"connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://api.github.com",
			"frame-src 'self' https://www.google.com https://maps.google.com",
			"media-src 'self'",
			"object-src 'none'",
			"base-uri 'self'",
			"form-action 'self'",
			"block-all-mixed-content",
			"upgrade-insecure-requests"
		].join('; '),
	},
];

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'photos.google.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**',
			},
		],
	},

	async headers() {
		return [
			{
				// Apply security headers to ALL routes
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
};

export default nextConfig;

