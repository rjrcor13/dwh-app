/** @type {import('next').NextConfig} */
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
		// domains: [
		// 	'images.unsplash.com', // Add this line
		// 	'unsplash.com',
		// 	'photos.google.com',
		// 	'res.cloudinary.com',
		// 	// Add any other external image domains you use, e.g., 'cdn.example.com'
		// ],
	},
};

export default nextConfig;
