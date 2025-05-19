import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	CheckCircle,
	ClipboardList,
	Clock,
	CreditCard,
	FileText,
	Hospital,
	LifeBuoy,
	ListChecks,
	Mail,
	MapPin,
	Phone,
	Users,
} from 'lucide-react';
import Image from 'next/image';

const HMOsSection = () => (
	<motion.section
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.4, delay: 0.1 }}
	>
		<div className="shadow-none border-0">
			<div className="grid grid-cols-1 md:grid-cols-1 items-center gap-8">
				{/* <div className="hidden md:block pr-6">
					<Image
						src="/assets/HMO.png" // Use relative path for Next.js
						alt="About Us"
						width={1000} // Keep original aspect ratio, set a max width
						height={1000}
						className="w-full h-90 object-fit " // Responsive image, rounded corners
					/>
				</div> */}
				<div className="p-6 space-y-4">
					<div>
						<div className="text-2xl font-semibold text-primary flex items-center">
							<LifeBuoy className="mr-2 h-6 w-6" />
							Health Maintenance Organizations (HMOs)
						</div>
						<CardDescription className="text-gray-500">
							Information regarding accredited HMOs.
						</CardDescription>
					</div>
					<div className="space-y-4 grid grid-cols-1 text-justify items-center gap-4_">
						<p className="text-gray-700">
							To select a doctor through your Health Maintenance Organization
							(HMO), please refer to the list of accredited doctors in our
							Doctor's Directory. If you are a member of an HMO, check below to
							see if your HMO is accredited by Divine Word Hospital.
						</p>
						<p className="text-gray-700">
							Before admission, ensure you coordinate with your HMO provider to
							prepare all necessary pre-authorization documents in advance,
							preventing unnecessary delays and inconvenience at the hospital's
							admitting office.
						</p>
						<div className="bg-gray-50 rounded-md p-4">
							<h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
								<Phone className="mr-2 h-5 w-5" />
								Contact Details
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>
									<span className="font-medium">Email:</span>
									<a
										href="mailto:hmodivinewordhospital2023@gmail.com"
										className="text-blue-500 hover:underline ml-1"
									>
										hmodivinewordhospital2023@gmail.com
									</a>
								</li>
								<li>
									<span className="font-medium">Telephone Number:</span>
									<span className="ml-1">
										0919-0672673 / 053-888-7287 local 147
									</span>
								</li>
								<li className="flex items-start">
									<span className="font-medium">Office Hours:</span>
									<span className="ml-1">
										8:00 AM - 12:00 NN to 1:00 PM - 5:00 PM (Monday - Saturday)
									</span>
								</li>
							</ul>
						</div>
						<p className="text-gray-700">
							Please contact your HMO for inquiries regarding coverage and
							requirements.
						</p>{' '}
					</div>
				</div>
			</div>
			<Image
				src="/assets/HMO.png" // Use relative path for Next.js
				alt="About Us"
				width={500} // Keep original aspect ratio, set a max width
				height={500}
				className="w-full h-90 object-fit " // Responsive image, rounded corners
			/>
		</div>
	</motion.section>
);

export default HMOsSection;
