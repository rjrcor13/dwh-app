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
	Banknote,
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

const BillingSection = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.1 }}
		>
			<div className="shadow-none border-0 p-6 ">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
					<div className=" space-y-4">
						<div>
							<div className="text-3xl font-semibold text-primary flex items-center">
								<Banknote className="mr-3 h-8 w-8 text-primary/80 mt-1" />
								Billing Information
							</div>
							<div className="text-gray-600">
								Your guide to hospital billing and payments.
							</div>
						</div>
						<div>
							<p className="text-gray-800 leading-relaxed">
								We are committed to providing transparent and efficient billing
								services. Our dedicated billing office is available to assist
								you with any questions.
							</p>
							<div className="mt-6">
								<Button
									variant="outline"
									className="bg-indigo-100/50 text-primary hover:bg-indigo-100 hover:text-indigo-800 border-indigo-200"
								>
									View Billing Details
								</Button>
							</div>
						</div>
					</div>
					<div className="hidden md:block pr-6">
						<Image
							src="/assets/HMO.png" // Use relative path for Next.js
							alt="About Us"
							width={500} // Keep original aspect ratio, set a max width
							height={500}
							className="w-full h-90 object-fit " // Responsive image, rounded corners
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
};
export default BillingSection;
