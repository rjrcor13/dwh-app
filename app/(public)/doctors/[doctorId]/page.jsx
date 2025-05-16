'use client';

import { doctorsData } from '@/app/data/dummyDoctors';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
	MarsIcon,
	Venus,
	VenusIcon,
} from 'lucide-react';
// import {
// 	CalendarIcon,
// 	ClockIcon,
// 	CreditCardIcon,
// 	GenderFemale,
// 	GenderMale,
// } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const DoctorProfilePage = () => {
	const router = useRouter();
	const { doctorId } = useParams();

	const parsedId = useMemo(() => {
		if (!doctorId) return null;
		return Number(doctorId);
	}, [doctorId]);

	if (!parsedId) {
		return (
			<div className="flex justify-center items-center py-20">
				<p className="text-xl text-gray-500">Loading doctor profile...</p>
			</div>
		);
	}

	const doctor = doctorsData.find((doc) => doc.id === parsedId);

	if (!doctor) {
		return (
			<div className="flex justify-center items-center py-20">
				<p className="text-xl text-red-500">Doctor not found.</p>
			</div>
		);
	}

	return (
		<div className="bg-gray-100  py-18 ">
			<div className="container_ max-w-7xl mx-auto ">
				<Card className="md:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
					<CardContent className="">
						<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6 ">
							<Avatar className="w-32 h-32 md:w-48 md:h-48 shadow-md">
								<AvatarImage
									src={doctor.image}
									alt={doctor.name}
									className="object-cover"
								/>
								<AvatarFallback>
									{doctor.name.substring(0, 2).toUpperCase()}
								</AvatarFallback>
							</Avatar>

							<div className="flex-1 bg-amber-200_ ">
								<h1 className="text-3xl font-bold text-gray-800 mb-2">
									{doctor.name}
								</h1>
								<p className="text-lg font-medium text-primary mb-3">
									{Array.isArray(doctor.specialties) ? (
										doctor.specialties.map((spec, index) => (
											<Badge key={index} className="mr-1">
												{spec}
											</Badge>
										))
									) : (
										<Badge>{doctor.specialties}</Badge>
									)}
								</p>
								<p className="text-gray-600 mb-2">
									<span className="font-semibold">Hospital:</span>{' '}
									{doctor.hospital}
								</p>
								<div className="flex items-center gap-2 text-gray-600">
									<span className="font-semibold">Gender:</span>
									{doctor.gender === 'Male' && <MarsIcon className="h-5 w-5" />}
									{doctor.gender === 'Female' && (
										<VenusIcon className="h-5 w-5" />
									)}
									<span>{doctor.gender}</span>
								</div>
							</div>
						</div>

						<Separator className="mb-6" />

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<CalendarIcon className="h-5 w-5 text-gray-500" />
									<h2 className="font-semibold">Clinic Days</h2>
								</div>
								<p>{doctor.clinicDays.join(', ')}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mb-2">
									<ClockIcon className="h-5 w-5 text-gray-500" />
									<h2 className="font-semibold">Clinic Hours</h2>
								</div>
								<p>{doctor.clinicHours}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mb-2">
									<CreditCardIcon className="h-5 w-5 text-gray-500" />
									<h2 className="font-semibold">Accepted HMOs</h2>
								</div>
								<p>{doctor.hmo.join(', ')}</p>
							</div>
							{/* You can add more details here if available */}
						</div>

						<div className="mt-8">
							<Button
								variant="outline"
								className="w-full md:w-auto"
								onClick={() => router.back()}
							>
								← Go Back
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DoctorProfilePage;
