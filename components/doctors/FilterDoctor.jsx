// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import Select from 'react-select';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';

// // Define the FilterComponent
// const FilterDoctor = ({
// 	searchQuery,
// 	selectedSpecialties,
// 	selectedDays,
// 	selectedGenders,
// 	selectedHMOs,
// 	specialtyOptions,
// 	dayOptions,
// 	genderOptions,
// 	hmoOptions,
// 	onSearchChange,
// 	onSpecialtyChange,
// 	onDayChange,
// 	onGenderChange,
// 	onHMOChange,
// }) => {
// 	const customStyles = {
// 		control: (provided, state) => ({
// 			...provided,
// 			borderColor: state.isFocused ? '#6366f1' : '#d1d5db',
// 			boxShadow: state.isFocused ? '0 0 0 1px #6366f1' : null,
// 			'&:hover': {
// 				borderColor: '#6366f1',
// 			},
// 		}),
// 	};

// 	return (
// 		<div className="bg-white rounded-md shadow-sm p-6 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// 			<div>
// 				<Label htmlFor="search">Search</Label>
// 				<div className="relative">
// 					<MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
// 					<Input
// 						type="text"
// 						id="search"
// 						placeholder="Name, Specialty, Hospital"
// 						value={searchQuery}
// 						onChange={onSearchChange}
// 						className="pl-8"
// 					/>
// 				</div>
// 			</div>
// 			<div>
// 				<Label htmlFor="specialty">Specialty</Label>
// 				<Select
// 					isMulti
// 					id="specialty"
// 					options={specialtyOptions}
// 					value={selectedSpecialties}
// 					onChange={onSpecialtyChange}
// 					styles={customStyles}
// 					className="basic-multi-select"
// 					classNamePrefix="select"
// 					placeholder="Select Specialties"
// 				/>
// 			</div>
// 			<div>
// 				<Label htmlFor="day">Clinic Day</Label>
// 				<Select
// 					isMulti
// 					id="day"
// 					options={dayOptions}
// 					value={selectedDays}
// 					onChange={onDayChange}
// 					styles={customStyles}
// 					className="basic-multi-select"
// 					classNamePrefix="select"
// 					placeholder="Select Days"
// 				/>
// 			</div>
// 			<div>
// 				<Label htmlFor="gender">Gender</Label>
// 				<Select
// 					isMulti
// 					id="gender"
// 					options={genderOptions}
// 					value={selectedGenders}
// 					onChange={onGenderChange}
// 					styles={customStyles}
// 					className="basic-multi-select"
// 					classNamePrefix="select"
// 					placeholder="Select Genders"
// 				/>
// 			</div>
// 			<div>
// 				<Label htmlFor="hmo">HMO</Label>
// 				<Select
// 					isMulti
// 					id="hmo"
// 					options={hmoOptions}
// 					value={selectedHMOs}
// 					onChange={onHMOChange}
// 					styles={customStyles}
// 					className="basic-multi-select"
// 					classNamePrefix="select"
// 					placeholder="Select HMOs"
// 				/>
// 			</div>
// 			{/* You can add a "Reset Filters" button here if needed */}
// 		</div>
// 	);
// };

// export default FilterDoctor;
// components/doctors/FilterDoctor.jsx
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Select from 'react-select';

const FilterDoctor = ({
	searchQuery,
	selectedSpecialties,
	selectedDays,
	selectedGenders,
	selectedHMOs,
	specialtyOptions,
	dayOptions,
	genderOptions,
	hmoOptions,
	onSearchChange,
	onSpecialtyChange,
	onDayChange,
	onGenderChange,
	onHMOChange,
}) => {
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderColor: state.isFocused ? '#1E419D' : '#E4E4E7',
			boxShadow: state.isFocused ? '0 0 0 3px #8D9BC6' : null,
			'&:hover': {
				borderColor: '#1E419D',
			},
			// borderRadius: '16px',
		}),
	};

	return (
		<div className="bg-white rounded-md shadow-sm p-6 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="search">Search</Label>
				<div className="relative">
					<MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
					<Input
						type="text"
						id="search"
						placeholder="Name, Specialty, Hospital"
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-8"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="specialty">Specialty</Label>
				<Select
					isMulti
					id="specialty"
					options={specialtyOptions}
					value={selectedSpecialties}
					onChange={onSpecialtyChange}
					styles={customStyles}
					className="basic-multi-select rounded-xl"
					classNamePrefix="select"
					placeholder="Select Specialties"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="day">Clinic Day</Label>
				<Select
					isMulti
					id="day"
					options={dayOptions}
					value={selectedDays}
					onChange={onDayChange}
					styles={customStyles}
					className="basic-multi-select"
					classNamePrefix="select"
					placeholder="Select Days"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="gender">Gender</Label>
				<Select
					isMulti
					id="gender"
					options={genderOptions}
					value={selectedGenders}
					onChange={onGenderChange}
					styles={customStyles}
					className="basic-multi-select"
					classNamePrefix="select"
					placeholder="Select Genders"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="hmo">HMO</Label>
				<Select
					isMulti
					id="hmo"
					options={hmoOptions}
					value={selectedHMOs}
					onChange={onHMOChange}
					styles={customStyles}
					className="basic-multi-select"
					classNamePrefix="select"
					placeholder="Select HMOs"
				/>
			</div>
		</div>
	);
};

export default FilterDoctor;
