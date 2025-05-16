// 'use client';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select';
// import { cn } from '@/lib/utils'; // Assuming you have this utility
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
// import {
// 	CalendarIcon,
// 	ClockIcon,
// 	CreditCardIcon,
// 	UserIcon,
// } from 'lucide-react';
// import React, { useState } from 'react';

// // Dummy doctor data (replace with your actual data fetching)
// const doctorsData = [
// 	{
// 		id: 1,
// 		name: 'Dr. Eleanor Vance',
// 		specialty: 'Cardiology',
// 		hospital: 'Tacloban Medical Center',
// 		image: '/assets/doctor-1.jpg', // Replace with image URL
// 		clinicDays: ['Mon', 'Wed', 'Fri'],
// 		clinicHours: '9:00 AM - 5:00 PM',
// 		gender: 'Female',
// 		hmo: ['Maxicare', 'PhilHealth'],
// 	},
// 	{
// 		id: 2,
// 		name: 'Dr. Ben Carter',
// 		specialty: 'Pediatrics',
// 		hospital: 'Eastern Visayas Regional Medical Center',
// 		image: '/assets/doctor-2.jpg', // Replace with image URL
// 		clinicDays: ['Tue', 'Thu', 'Sat'],
// 		clinicHours: '10:00 AM - 6:00 PM',
// 		gender: 'Male',
// 		hmo: ['PhilHealth'],
// 	},
// 	{
// 		id: 3,
// 		name: 'Dr. Sarah Miller',
// 		specialty: 'Neurology',
// 		hospital: 'Divine Word Hospital',
// 		image: '/assets/doctor-3.jpg', // Replace with image URL
// 		clinicDays: ['Mon', 'Tue', 'Thu', 'Fri'],
// 		clinicHours: '8:00 AM - 4:00 PM',
// 		gender: 'Female',
// 		hmo: ['Maxicare'],
// 	},
// 	{
// 		id: 4,
// 		name: 'Dr. Kenji Tanaka',
// 		specialty: 'Oncology',
// 		hospital: 'Tacloban Medical Center',
// 		image: '/assets/doctor-4.jpg', // Replace with image URL
// 		clinicDays: ['Wed', 'Sat'],
// 		clinicHours: '1:00 PM - 7:00 PM',
// 		gender: 'Male',
// 		hmo: ['Maxicare', 'PhilHealth', 'Cignal Health'],
// 	},
// 	// ... more doctors
// ];

// const FindADoctor = () => {
// 	const [searchQuery, setSearchQuery] = useState('');
// 	const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
// 	const [selectedDay, setSelectedDay] = useState('All Days');
// 	const [selectedGender, setSelectedGender] = useState('All Genders');
// 	const [selectedHMO, setSelectedHMO] = useState('All HMOs');
// 	const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

// 	const specialties = [
// 		'All Specialties',
// 		...Array.from(new Set(doctorsData.map((doctor) => doctor.specialty))),
// 	];
// 	const daysOfWeek = [
// 		'All Days',
// 		'Mon',
// 		'Tue',
// 		'Wed',
// 		'Thu',
// 		'Fri',
// 		'Sat',
// 		'Sun',
// 	];
// 	const genders = ['All Genders', 'Male', 'Female', 'Other'];
// 	const hmos = [
// 		'All HMOs',
// 		...Array.from(new Set(doctorsData.flatMap((doctor) => doctor.hmo))),
// 	];

// 	const handleSearch = (event) => {
// 		const query = event.target.value.toLowerCase();
// 		setSearchQuery(query);
// 		filterDoctors(
// 			query,
// 			selectedSpecialty,
// 			selectedDay,
// 			selectedGender,
// 			selectedHMO
// 		);
// 	};

// 	const handleSpecialtyChange = (specialty) => {
// 		setSelectedSpecialty(specialty);
// 		filterDoctors(
// 			searchQuery,
// 			specialty,
// 			selectedDay,
// 			selectedGender,
// 			selectedHMO
// 		);
// 	};

// 	const handleDayChange = (day) => {
// 		setSelectedDay(day);
// 		filterDoctors(
// 			searchQuery,
// 			selectedSpecialty,
// 			day,
// 			selectedGender,
// 			selectedHMO
// 		);
// 	};

// 	const handleGenderChange = (gender) => {
// 		setSelectedGender(gender);
// 		filterDoctors(
// 			searchQuery,
// 			selectedSpecialty,
// 			selectedDay,
// 			gender,
// 			selectedHMO
// 		);
// 	};

// 	const handleHMOChange = (hmo) => {
// 		setSelectedHMO(hmo);
// 		filterDoctors(
// 			searchQuery,
// 			selectedSpecialty,
// 			selectedDay,
// 			selectedGender,
// 			hmo
// 		);
// 	};

// 	const filterDoctors = (query, specialty, day, gender, hmo) => {
// 		let results = doctorsData;
// 		if (query) {
// 			results = results.filter(
// 				(doctor) =>
// 					doctor.name.toLowerCase().includes(query) ||
// 					doctor.specialty.toLowerCase().includes(query) ||
// 					doctor.hospital.toLowerCase().includes(query)
// 			);
// 		}
// 		if (specialty !== 'All Specialties') {
// 			results = results.filter((doctor) => doctor.specialty === specialty);
// 		}
// 		if (day !== 'All Days') {
// 			results = results.filter((doctor) => doctor.clinicDays.includes(day));
// 		}
// 		if (gender !== 'All Genders') {
// 			results = results.filter((doctor) => doctor.gender === gender);
// 		}
// 		if (hmo !== 'All HMOs') {
// 			results = results.filter((doctor) => doctor.hmo.includes(hmo));
// 		}
// 		setFilteredDoctors(results);
// 	};

// 	return (
// 		<div className="bg-gray-100 py-12">
// 			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
// 				<h1 className="text-3xl font-bold text-gray-900 mb-6">Find a Doctor</h1>

// 				{/* Filter Section */}
// 				<div className="bg-white rounded-md shadow-sm p-6 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// 					<div>
// 						<Label htmlFor="search">Search</Label>
// 						<div className="relative">
// 							<MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
// 							<Input
// 								type="text"
// 								id="search"
// 								placeholder="Name, Specialty, Hospital"
// 								value={searchQuery}
// 								onChange={handleSearch}
// 								className="pl-8"
// 							/>
// 						</div>
// 					</div>
// 					<div>
// 						<Label htmlFor="specialty">Specialty</Label>
// 						<Select
// 							value={selectedSpecialty}
// 							onValueChange={handleSpecialtyChange}
// 						>
// 							<SelectTrigger className="w-full">
// 								<SelectValue placeholder="All Specialties" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{specialties.map((specialty) => (
// 									<SelectItem key={specialty} value={specialty}>
// 										{specialty}
// 									</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</div>
// 					<div>
// 						<Label htmlFor="day">Clinic Day</Label>
// 						<Select value={selectedDay} onValueChange={handleDayChange}>
// 							<SelectTrigger className="w-full">
// 								<SelectValue placeholder="All Days" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{daysOfWeek.map((day) => (
// 									<SelectItem key={day} value={day}>
// 										{day}
// 									</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</div>
// 					<div>
// 						<Label htmlFor="gender">Gender</Label>
// 						<Select value={selectedGender} onValueChange={handleGenderChange}>
// 							<SelectTrigger className="w-full">
// 								<SelectValue placeholder="All Genders" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{genders.map((gender) => (
// 									<SelectItem key={gender} value={gender}>
// 										{gender}
// 									</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</div>
// 					<div>
// 						<Label htmlFor="hmo">HMO</Label>
// 						<Select value={selectedHMO} onValueChange={handleHMOChange}>
// 							<SelectTrigger className="w-full">
// 								<SelectValue placeholder="All HMOs" />
// 							</SelectTrigger>
// 							<SelectContent>
// 								{hmos.map((hmo) => (
// 									<SelectItem key={hmo} value={hmo}>
// 										{hmo}
// 									</SelectItem>
// 								))}
// 							</SelectContent>
// 						</Select>
// 					</div>
// 					{/* You can add a "Reset Filters" button here if needed */}
// 				</div>

// 				{/* Doctors List */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// 					{filteredDoctors.map((doctor) => (
// 						<Card key={doctor.id}>
// 							<CardContent className="p-6">
// 								<div className="relative rounded-md overflow-hidden mb-4">
// 									<img
// 										src={doctor.image}
// 										alt={doctor.name}
// 										className="w-full h-48 object-cover"
// 									/>
// 								</div>
// 								<h3 className="text-lg font-semibold text-gray-900 mb-1">
// 									{doctor.name}
// 								</h3>
// 								<p className="text-sm text-indigo-600 mb-2">
// 									{doctor.specialty}
// 								</p>
// 								<p className="text-sm text-gray-600 flex items-center mb-1">
// 									<UserIcon className="h-4 w-4 mr-1 text-gray-500" />{' '}
// 									{doctor.gender}
// 								</p>
// 								<p className="text-sm text-gray-600 flex items-center mb-1">
// 									<CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />{' '}
// 									{doctor.clinicDays.join(', ')}
// 								</p>
// 								<p className="text-sm text-gray-600 flex items-center mb-2">
// 									<ClockIcon className="h-4 w-4 mr-1 text-gray-500" />{' '}
// 									{doctor.clinicHours}
// 								</p>
// 								{doctor.hmo && doctor.hmo.length > 0 && (
// 									<div className="flex items-center space-x-1 mb-2">
// 										<CreditCardIcon className="h-4 w-4 text-gray-500" />
// 										<span className="text-sm text-gray-600">
// 											HMO: {doctor.hmo.join(', ')}
// 										</span>
// 									</div>
// 								)}
// 								<Button variant="outline" className="w-full">
// 									View Profile
// 								</Button>
// 							</CardContent>
// 						</Card>
// 					))}
// 				</div>

// 				{/* Pagination (Example - Adapt to your needs with Shadcn UI components) */}
// 				{filteredDoctors.length > 9 && (
// 					<div className="mt-8 flex justify-center space-x-2">
// 						<Button variant="outline">Previous</Button>
// 						<span className="text-sm text-gray-500">
// 							1-9 of {doctorsData.length}
// 						</span>
// 						<Button variant="outline">Next</Button>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default FindADoctor;

// 'use client';

// import { Button } from '@/components/ui/button'; // Keeping Shadcn Button for consistency

// import { useRouter, useSearchParams } from 'next/navigation';
// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import DoctorCard from './DoctorCard';
// import FilterDoctor from './FilterDoctor';

// // Dummy doctor data (replace with your actual data fetching)
// const doctorsData = [
// 	{
// 		id: 1,
// 		name: 'Dr. Eleanor Vance',
// 		specialty: 'Cardiology',
// 		hospital: 'Tacloban Medical Center',
// 		image: '/assets/doctor-1.jpg', // Replace with image URL
// 		clinicDays: ['Mon', 'Wed', 'Fri'],
// 		clinicHours: '9:00 AM - 5:00 PM',
// 		gender: 'Female',
// 		hmo: ['Maxicare', 'PhilHealth'],
// 	},
// 	{
// 		id: 2,
// 		name: 'Dr. Ben Carter',
// 		specialty: 'Pediatrics',
// 		hospital: 'Eastern Visayas Regional Medical Center',
// 		image: '/assets/doctor-2.jpg', // Replace with image URL
// 		clinicDays: ['Tue', 'Thu', 'Sat'],
// 		clinicHours: '10:00 AM - 6:00 PM',
// 		gender: 'Male',
// 		hmo: ['PhilHealth'],
// 	},
// 	{
// 		id: 3,
// 		name: 'Dr. Sarah Miller',
// 		specialty: 'Neurology',
// 		hospital: 'Divine Word Hospital',
// 		image: '/assets/doctor-3.jpg', // Replace with image URL
// 		clinicDays: ['Mon', 'Tue', 'Thu', 'Fri'],
// 		clinicHours: '8:00 AM - 4:00 PM',
// 		gender: 'Female',
// 		hmo: ['Maxicare'],
// 	},
// 	{
// 		id: 4,
// 		name: 'Dr. Kenji Tanaka',
// 		specialty: 'Oncology',
// 		hospital: 'Tacloban Medical Center',
// 		image: '/assets/doctor-4.jpg', // Replace with image URL
// 		clinicDays: ['Wed', 'Sat'],
// 		clinicHours: '1:00 PM - 7:00 PM',
// 		gender: 'Male',
// 		hmo: ['Maxicare', 'PhilHealth', 'Cignal Health'],
// 	},
// 	// ... more doctors
// ];

// const FindADoctor = () => {
// 	const searchParams = useSearchParams(); // Get access to URL query parameters
// 	const initialSearchTerm = searchParams.get('q') || ''; // Get the 'q' parameter, default to empty string
// 	const [searchQuery, setSearchQuery] = useState(initialSearchTerm);
// 	const [selectedSpecialties, setSelectedSpecialties] = useState([]);
// 	const [selectedDays, setSelectedDays] = useState([]);
// 	const [selectedGenders, setSelectedGenders] = useState([]);
// 	const [selectedHMOs, setSelectedHMOs] = useState([]);
// 	const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

// 	const specialtyOptions = useMemo(
// 		() =>
// 			Array.from(new Set(doctorsData.map((doctor) => doctor.specialty))).map(
// 				(s) => ({ value: s, label: s })
// 			),
// 		[doctorsData]
// 	);
// 	const dayOptions = useMemo(
// 		() =>
// 			['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => ({
// 				value: d,
// 				label: d,
// 			})),
// 		[]
// 	);
// 	const genderOptions = useMemo(
// 		() => ['Male', 'Female', 'Other'].map((g) => ({ value: g, label: g })),
// 		[]
// 	);
// 	const hmoOptions = useMemo(
// 		() =>
// 			Array.from(new Set(doctorsData.flatMap((doctor) => doctor.hmo))).map(
// 				(h) => ({ value: h, label: h })
// 			),
// 		[doctorsData]
// 	);
// 	const filterDoctors = useCallback(
// 		(query, specialties, days, genders, hmos) => {
// 			let results = doctorsData;
// 			if (query) {
// 				const lowerCaseQuery = query.toLowerCase();
// 				results = results.filter(
// 					(doctor) =>
// 						doctor.name.toLowerCase().includes(lowerCaseQuery) ||
// 						doctor.specialty.toLowerCase().includes(lowerCaseQuery) ||
// 						doctor.hospital.toLowerCase().includes(lowerCaseQuery)
// 				);
// 			}
// 			// ... (rest of the filtering logic)
// 			setFilteredDoctors(results);
// 		},
// 		[doctorsData]
// 	);

// 	const handleSearchChange = useCallback(
// 		(event) => {
// 			const query = event.target.value.toLowerCase();
// 			setSearchQuery(query);
// 			filterDoctors(
// 				query,
// 				selectedSpecialties.map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		},
// 		[
// 			selectedSpecialties,
// 			selectedDays,
// 			selectedGenders,
// 			selectedHMOs,
// 			filterDoctors,
// 		]
// 	);

// 	const handleSpecialtyChange = useCallback(
// 		(selectedOptions) => {
// 			setSelectedSpecialties(selectedOptions || []);
// 			filterDoctors(
// 				searchQuery,
// 				(selectedOptions || []).map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		},
// 		[searchQuery, selectedDays, selectedGenders, selectedHMOs, filterDoctors]
// 	);

// 	const handleDayChange = useCallback(
// 		(selectedOptions) => {
// 			setSelectedDays(selectedOptions || []);
// 			filterDoctors(
// 				searchQuery,
// 				selectedSpecialties.map((s) => s.value),
// 				(selectedOptions || []).map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		},
// 		[
// 			searchQuery,
// 			selectedSpecialties,
// 			selectedGenders,
// 			selectedHMOs,
// 			filterDoctors,
// 		]
// 	);

// 	const handleGenderChange = useCallback(
// 		(selectedOptions) => {
// 			setSelectedGenders(selectedOptions || []);
// 			filterDoctors(
// 				searchQuery,
// 				selectedSpecialties.map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				(selectedOptions || []).map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		},
// 		[
// 			searchQuery,
// 			selectedSpecialties,
// 			selectedDays,
// 			selectedHMOs,
// 			filterDoctors,
// 		]
// 	);

// 	const handleHMOChange = useCallback(
// 		(selectedOptions) => {
// 			setSelectedHMOs(selectedOptions || []);
// 			filterDoctors(
// 				searchQuery,
// 				selectedSpecialties.map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				(selectedOptions || []).map((h) => h.value)
// 			);
// 		},
// 		[
// 			searchQuery,
// 			selectedSpecialties,
// 			selectedDays,
// 			selectedGenders,
// 			filterDoctors,
// 		]
// 	);

// 	// Trigger initial filter based on the URL query parameter
// 	useEffect(() => {
// 		if (initialSearchTerm) {
// 			setSearchQuery(initialSearchTerm);
// 			filterDoctors(
// 				initialSearchTerm,
// 				selectedSpecialties.map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		} else {
// 			// If no initial search term, apply filters based on the current selections
// 			filterDoctors(
// 				searchQuery,
// 				selectedSpecialties.map((s) => s.value),
// 				selectedDays.map((d) => d.value),
// 				selectedGenders.map((g) => g.value),
// 				selectedHMOs.map((h) => h.value)
// 			);
// 		}
// 	}, [
// 		initialSearchTerm,
// 		searchQuery,
// 		selectedSpecialties,
// 		selectedDays,
// 		selectedGenders,
// 		selectedHMOs,
// 		filterDoctors,
// 	]);

// 	return (
// 		<div className="bg-gray-100 py-12">
// 			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
// 				<h1 className="text-3xl font-bold text-gray-900 mb-6">Find a Doctor</h1>

// 				{/* Filter Section */}
// 				<FilterDoctor
// 					searchQuery={searchQuery}
// 					selectedSpecialties={selectedSpecialties}
// 					selectedDays={selectedDays}
// 					selectedGenders={selectedGenders}
// 					selectedHMOs={selectedHMOs}
// 					specialtyOptions={specialtyOptions}
// 					dayOptions={dayOptions}
// 					genderOptions={genderOptions}
// 					hmoOptions={hmoOptions}
// 					onSearchChange={handleSearchChange}
// 					onSpecialtyChange={handleSpecialtyChange}
// 					onDayChange={handleDayChange}
// 					onGenderChange={handleGenderChange}
// 					onHMOChange={handleHMOChange}
// 				/>

// 				{/* Doctors List */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// 					{filteredDoctors.map((doctor) => (
// 						<DoctorCard key={doctor.id} doctor={doctor} />
// 					))}
// 				</div>

// 				{/* Pagination (Example - Adapt to your needs with Shadcn UI components) */}
// 				{filteredDoctors.length > 9 && (
// 					<div className="mt-8 flex justify-center space-x-2">
// 						<Button variant="outline">Previous</Button>
// 						<span className="text-sm text-gray-500">
// 							1-9 of {doctorsData.length}
// 						</span>
// 						<Button variant="outline">Next</Button>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default FindADoctor;
'use client';

import { Button } from '@/components/ui/button'; // Keeping Shadcn Button for consistency

import { doctorsData } from '@/app/data/dummyDoctors';
import debounce from 'lodash.debounce';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DoctorCard from './DoctorCard';
import FilterDoctor from './FilterDoctor';

// Dummy doctor data (replace with your actual data fetching)

const FindADoctor = () => {
	const searchParams = useSearchParams(); // Get access to URL query parameters
	const router = useRouter();
	const initialSearchTerm = searchParams.get('q') || ''; // Get the 'q' parameter, default to empty string
	const [searchQuery, setSearchQuery] = useState(initialSearchTerm);
	const [selectedSpecialties, setSelectedSpecialties] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);
	const [selectedGenders, setSelectedGenders] = useState([]);
	const [selectedHMOs, setSelectedHMOs] = useState([]);
	const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

	// const specialtyOptions = useMemo(
	// 	() =>
	// 		Array.from(new Set(doctorsData.map((doctor) => doctor.specialties))).map(
	// 			(s) => ({ value: s, label: s })
	// 		),
	// 	[doctorsData]
	// );
	const specialtyOptions = useMemo(() => {
		// First, extract all specialties into a single array
		const allSpecialties = doctorsData.flatMap(
			(doctor) => doctor.specialties || []
		);

		// Get unique specialties using a Set
		const uniqueSpecialties = Array.from(new Set(allSpecialties));

		// Map the unique specialties to the format expected by react-select
		return uniqueSpecialties.map((s) => ({ value: s, label: s }));
	}, [doctorsData]);
	const dayOptions = useMemo(
		() =>
			['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => ({
				value: d,
				label: d,
			})),
		[]
	);
	const genderOptions = useMemo(
		() => ['Male', 'Female', 'Other'].map((g) => ({ value: g, label: g })),
		[]
	);
	const hmoOptions = useMemo(
		() =>
			Array.from(new Set(doctorsData.flatMap((doctor) => doctor.hmo))).map(
				(h) => ({ value: h, label: h })
			),
		[doctorsData]
	);

	const filterDoctors = useCallback(
		(query, specialties, days, genders, hmos) => {
			let results = doctorsData;
			if (query) {
				const lowerCaseQuery = query.toLowerCase();
				results = results.filter(
					(doctor) =>
						doctor.name.toLowerCase().includes(lowerCaseQuery) ||
						(Array.isArray(doctor.specialties)
							? doctor.specialties.some((spec) =>
									spec.toLowerCase().includes(lowerCaseQuery)
							  )
							: doctor.specialty &&
							  doctor.specialty.toLowerCase().includes(lowerCaseQuery)) ||
						doctor.hospital.toLowerCase().includes(lowerCaseQuery)
				);
			}
			if (specialties.length > 0) {
				results = results.filter((doctor) =>
					Array.isArray(doctor.specialties)
						? doctor.specialties.some((spec) => specialties.includes(spec))
						: doctor.specialty && specialties.includes(doctor.specialty)
				);
			}
			if (days.length > 0) {
				results = results.filter((doctor) =>
					doctor.clinicDays.some((d) => days.includes(d))
				);
			}
			if (genders.length > 0) {
				results = results.filter((doctor) => genders.includes(doctor.gender));
			}
			if (hmos.length > 0) {
				results = results.filter((doctor) =>
					doctor.hmo.some((h) => hmos.includes(h))
				);
			}
			setFilteredDoctors(results);
		},
		[doctorsData]
	);

	// Debounced filter function
	const debouncedFilter = useCallback(
		debounce((query, specialties, days, genders, hmos) => {
			filterDoctors(query, specialties, days, genders, hmos);
			// Update URL with the debounced query
			const newSearchParams = new URLSearchParams(searchParams.toString());
			if (query) {
				newSearchParams.set('q', query);
			} else {
				newSearchParams.delete('q');
			}
			router.push(`/doctors?${newSearchParams.toString()}`, { shallow: true });
		}, 300), // Adjust the delay (in milliseconds) as needed
		[searchParams, router, filterDoctors]
	);

	const handleSearchChange = useCallback(
		(query) => {
			setSearchQuery(query);
			debouncedFilter(
				query,
				selectedSpecialties.map((s) => s.value),
				selectedDays.map((d) => d.value),
				selectedGenders.map((g) => g.value),
				selectedHMOs.map((h) => h.value)
			);
		},
		[
			debouncedFilter,
			selectedSpecialties,
			selectedDays,
			selectedGenders,
			selectedHMOs,
		]
	);

	const handleSpecialtyChange = useCallback(
		(selectedOptions) => {
			setSelectedSpecialties(selectedOptions || []);
			// Update URL for specialties immediately
			const newSearchParams = new URLSearchParams(searchParams.toString());
			if (selectedOptions && selectedOptions.length > 0) {
				newSearchParams.set(
					'specialties',
					selectedOptions.map((opt) => opt.value).join(',')
				);
			} else {
				newSearchParams.delete('specialties');
			}
			router.push(`/doctors?${newSearchParams.toString()}`, { shallow: true });
			filterDoctors(
				searchQuery,
				(selectedOptions || []).map((s) => s.value),
				selectedDays.map((d) => d.value),
				selectedGenders.map((g) => g.value),
				selectedHMOs.map((h) => h.value)
			);
		},
		[
			searchQuery,
			searchParams,
			router,
			selectedDays,
			selectedGenders,
			selectedHMOs,
			filterDoctors,
		]
	);

	const handleDayChange = useCallback(
		(selectedOptions) => {
			setSelectedDays(selectedOptions || []);
			// Update URL for days immediately
			const newSearchParams = new URLSearchParams(searchParams.toString());
			if (selectedOptions && selectedOptions.length > 0) {
				newSearchParams.set(
					'days',
					selectedOptions.map((opt) => opt.value).join(',')
				);
			} else {
				newSearchParams.delete('days');
			}
			router.push(`/doctors?${newSearchParams.toString()}`, { shallow: true });
			filterDoctors(
				searchQuery,
				selectedSpecialties.map((s) => s.value),
				(selectedOptions || []).map((d) => d.value),
				selectedGenders.map((g) => g.value),
				selectedHMOs.map((h) => h.value)
			);
		},
		[
			searchQuery,
			searchParams,
			router,
			selectedSpecialties,
			selectedGenders,
			selectedHMOs,
			filterDoctors,
		]
	);

	const handleGenderChange = useCallback(
		(selectedOptions) => {
			setSelectedGenders(selectedOptions || []);
			// Update URL for genders immediately
			const newSearchParams = new URLSearchParams(searchParams.toString());
			if (selectedOptions && selectedOptions.length > 0) {
				newSearchParams.set(
					'genders',
					selectedOptions.map((opt) => opt.value).join(',')
				);
			} else {
				newSearchParams.delete('genders');
			}
			router.push(`/doctors?${newSearchParams.toString()}`, { shallow: true });
			filterDoctors(
				searchQuery,
				selectedSpecialties.map((s) => s.value),
				selectedDays.map((d) => d.value),
				(selectedOptions || []).map((g) => g.value),
				selectedHMOs.map((h) => h.value)
			);
		},
		[
			searchQuery,
			searchParams,
			router,
			selectedSpecialties,
			selectedDays,
			selectedHMOs,
			filterDoctors,
		]
	);

	const handleHMOChange = useCallback(
		(selectedOptions) => {
			setSelectedHMOs(selectedOptions || []);
			// Update URL for HMOs immediately
			const newSearchParams = new URLSearchParams(searchParams.toString());
			if (selectedOptions && selectedOptions.length > 0) {
				newSearchParams.set(
					'hmos',
					selectedOptions.map((opt) => opt.value).join(',')
				);
			} else {
				newSearchParams.delete('hmos');
			}
			router.push(`/doctors?${newSearchParams.toString()}`, { shallow: true });
			filterDoctors(
				searchQuery,
				selectedSpecialties.map((s) => s.value),
				selectedDays.map((d) => d.value),
				selectedGenders.map((g) => g.value),
				(selectedOptions || []).map((h) => h.value)
			);
		},
		[
			searchQuery,
			searchParams,
			router,
			selectedSpecialties,
			selectedDays,
			selectedGenders,
			filterDoctors,
		]
	);

	// Update local state from URL parameters on initial load and when URL changes
	useEffect(() => {
		const q = searchParams.get('q') || '';
		setSearchQuery(q);

		const specialtiesParam = searchParams.get('specialties');
		setSelectedSpecialties(
			specialtiesParam
				? specialtiesParam.split(',').map((s) => ({ value: s, label: s }))
				: []
		);

		const daysParam = searchParams.get('days');
		setSelectedDays(
			daysParam ? daysParam.split(',').map((d) => ({ value: d, label: d })) : []
		);

		const gendersParam = searchParams.get('genders');
		setSelectedGenders(
			gendersParam
				? gendersParam.split(',').map((g) => ({ value: g, label: g }))
				: []
		);

		const hmosParam = searchParams.get('hmos');
		setSelectedHMOs(
			hmosParam ? hmosParam.split(',').map((h) => ({ value: h, label: h })) : []
		);

		filterDoctors(
			q,
			specialtiesParam ? specialtiesParam.split(',') : [],
			daysParam ? daysParam.split(',') : [],
			gendersParam ? gendersParam.split(',') : [],
			hmosParam ? hmosParam.split(',') : []
		);
	}, [searchParams, filterDoctors]);

	return (
		<div className="bg-gray-100 py-12">
			<div className="container_ max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-6">Find a Doctor</h1>

				{/* Filter Section */}
				<FilterDoctor
					searchQuery={searchQuery}
					selectedSpecialties={selectedSpecialties}
					selectedDays={selectedDays}
					selectedGenders={selectedGenders}
					selectedHMOs={selectedHMOs}
					specialtyOptions={specialtyOptions}
					dayOptions={dayOptions}
					genderOptions={genderOptions}
					hmoOptions={hmoOptions}
					onSearchChange={handleSearchChange} // Use the new handleSearchChange
					onSpecialtyChange={handleSpecialtyChange}
					onDayChange={handleDayChange}
					onGenderChange={handleGenderChange}
					onHMOChange={handleHMOChange}
				/>

				{/* Doctors List */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
					{filteredDoctors.map((doctor) => (
						<DoctorCard key={doctor.id} doctor={doctor} />
					))}
				</div>

				{/* Pagination (Example - Adapt to your needs with Shadcn UI components) */}
				{filteredDoctors.length > 9 && (
					<div className="mt-8 flex justify-center space-x-2">
						<Button variant="outline">Previous</Button>
						<span className="text-sm text-gray-500">
							1-9 of {doctorsData.length}
						</span>
						<Button variant="outline">Next</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default FindADoctor;
