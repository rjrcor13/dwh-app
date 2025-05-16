// 'use client';
// import { motion } from 'framer-motion';
// import {
// 	CalendarIcon,
// 	ClockIcon,
// 	CreditCardIcon,
// 	UserIcon,
// } from 'lucide-react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { Button } from '../ui/button';
// import { Card, CardContent } from '../ui/card';
// const cardVariants = {
// 	initial: { opacity: 0, scale: 0.95 },
// 	animate: { opacity: 1, scale: 1 },
// };

// const DoctorCard = ({ doctor }) => {
// 	const router = useRouter(); // Initialize the router

// 	const handleViewProfile = () => {
// 		console.log('Doctor ID being passed:', doctor.id);
// 		router.push(`/doctors/${doctor.id}`); // Navigate to the doctor's profile page
// 	};

// 	return (
// 		<motion.div
// 			variants={cardVariants}
// 			initial="initial"
// 			animate="animate"
// 			transition={{ duration: 0.3 }}
// 		>
// 			<Card className="mt-10">
// 				<CardContent className="">
// 					<div className="relative ">
// 						<div className="flex flex-row gap-4">
// 							<Image
// 								src={doctor.image}
// 								alt={doctor.name}
// 								height={150}
// 								width={150}
// 								className="rounded-lg relative  top-[-60px] border-white border-10 shadow-lg "
// 							/>
// 							<div className="">
// 								<h3 className="text-lg font-semibold text-primary mb-1">
// 									{doctor.name}
// 								</h3>
// 								<div className="text-sm text-blue-700 mb-2 flex flex-wrap gap-1">
// 									{Array.isArray(doctor.specialties)
// 										? doctor.specialties.map((specialty, index) => (
// 												<span
// 													key={index}
// 													className="bg-gray-100 px-1 rounded-lg border border-gray-200"
// 												>
// 													{specialty}
// 												</span>
// 										  ))
// 										: doctor.specialties && (
// 												<span className="bg-gray-100 px-1 rounded-lg border border-gray-200">
// 													{doctor.specialties}
// 												</span>
// 										  )}
// 								</div>
// 							</div>
// 						</div>
// 						<div className="mt-[-40px] flex flex-col gap-1">
// 							<p className="text-sm text-gray-600 flex items-center mb-1">
// 								<CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
// 								{doctor.clinicDays.join(', ')}
// 							</p>
// 							<p className="text-sm text-gray-600 flex items-center mb-2">
// 								<ClockIcon className="h-4 w-4 mr-1 text-gray-500" />
// 								{doctor.clinicHours}
// 							</p>
// 							{doctor.hmo && doctor.hmo.length > 0 && (
// 								<div className="flex items-center space-x-1 mb-2">
// 									<CreditCardIcon className="h-4 w-4 text-gray-500" />
// 									<span className="text-sm text-gray-600">
// 										HMO: {(doctor.hmo || []).join(', ')}
// 									</span>
// 								</div>
// 							)}
// 							<p className="text-sm text-gray-600 flex items-center mb-1">
// 								<UserIcon className="h-4 w-4 mr-1 text-gray-500" />
// 								{doctor.gender}
// 							</p>
// 						</div>
// 						<Button
// 							variant="outline"
// 							className="w-full"
// 							onClick={handleViewProfile}
// 						>
// 							View Profile
// 						</Button>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</motion.div>
// 	);
// };

// export default DoctorCard;
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
	MarsIcon,
	UserIcon,
	VenusIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const cardVariants = {
	initial: { opacity: 0, y: 10, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	hover: { scale: 1.02, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)' },
	tap: { scale: 0.98 },
};

const DoctorCard = ({ doctor }) => {
	const router = useRouter();

	const handleViewProfile = () => {
		console.log('Doctor ID being passed:', doctor.id);
		router.push(`/doctors/${doctor.id}`);
	};

	return (
		<motion.div
			variants={cardVariants}
			initial="initial"
			animate="animate"
			whileHover="hover"
			whileTap="tap"
			transition={{ duration: 0.2, ease: 'easeInOut' }}
		>
			<Card className=" rounded-lg shadow-md overflow-hidden">
				<CardContent className="p-6_">
					<div className="flex items-start space-x-4">
						<Avatar className="w-16 h-16 rounded-full overflow-hidden">
							<AvatarImage
								src={doctor.image}
								alt={doctor.name}
								className="object-cover"
							/>
							<AvatarFallback>
								{doctor.name.substring(0, 2).toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<h3 className="text-lg font-semibold text-gray-900 mb-1">
								{doctor.name}
							</h3>
							<div className="mb-2">
								{Array.isArray(doctor.specialties)
									? doctor.specialties.map((specialty, index) => (
											<Badge key={index} className="mr-1 text-xs">
												{specialty}
											</Badge>
									  ))
									: doctor.specialties && (
											<Badge className="text-xs">{doctor.specialties}</Badge>
									  )}
							</div>
						</div>
					</div>
					<div className="mt-4 space-y-2 text-sm text-gray-600">
						<p className="flex items-center">
							<CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
							{doctor.clinicDays.join(', ')}
						</p>
						<p className="flex items-center">
							<ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
							{doctor.clinicHours}
						</p>
						{doctor.hmo && doctor.hmo.length > 0 && (
							<p className="flex items-center">
								<CreditCardIcon className="h-4 w-4 mr-2 text-gray-500" />
								HMO: {doctor.hmo.join(', ')}
							</p>
						)}
						<p className="text-sm text-gray-600 flex items-center mb-1">
							{/* <UserIcon className="h-4 w-4 mr-1 text-gray-500" />
							{doctor.gender} */}
							<span className="font-semibold">Gender:</span>
							{doctor.gender === 'Male' && <MarsIcon className="h-5 w-5" />}
							{doctor.gender === 'Female' && <VenusIcon className="h-5 w-5" />}
							<span>{doctor.gender}</span>
						</p>
					</div>
					<Button
						variant="outline"
						className="w-full mt-4 rounded-md"
						onClick={handleViewProfile}
					>
						View Profile
					</Button>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default DoctorCard;
