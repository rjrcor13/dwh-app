import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
			{/* <div className="p-4 bg-primary/10 rounded-full shadow-md max-w-md w-96 h-96"> */}
			<h1 className="text-6xl font-bold text-[#1D1E9A] mb-4">404</h1>
			<p className="text-2xl font-semibold mb-2">Page Not Found</p>
			<p className="text-gray-600 mb-6">
				Sorry, the page you’re looking for doesn’t exist or has been moved.
			</p>
			<Link
				href="/"
				className="inline-flex items-center gap-2 bg-[#1D1E9A] text-white px-5 py-2 rounded-full hover:bg-[#2022d0] transition"
			>
				<ArrowLeft className="w-4 h-4" />
				Back to Home
			</Link>
			{/* </div> */}
		</div>
	);
};

export default NotFound;
