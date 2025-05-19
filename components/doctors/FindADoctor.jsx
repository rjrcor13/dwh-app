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
