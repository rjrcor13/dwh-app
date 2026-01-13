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
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div className="flex flex-col gap-2">
				<Label htmlFor="search" className="text-blue-100 text-sm font-medium ml-1">Search</Label>
				<div className="relative group">
					<MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-blue-300/50 group-focus-within:text-secondary transition-colors" />
					<Input
						type="text"
						id="search"
						placeholder="Name, Specialty, Hospital"
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-blue-300/30 focus-visible:ring-secondary/50 focus-visible:border-secondary/50 rounded-xl h-11 transition-all"
					/>
				</div>
			</div>
			{/* Helper to style React Select for Dark Glassmorphism */}
			{[
				{ label: 'Specialty', id: 'specialty', options: specialtyOptions, value: selectedSpecialties, onChange: onSpecialtyChange, placeholder: 'All Specialties' },
				{ label: 'Clinic Day', id: 'day', options: dayOptions, value: selectedDays, onChange: onDayChange, placeholder: 'Any Day' },
				{ label: 'Gender', id: 'gender', options: genderOptions, value: selectedGenders, onChange: onGenderChange, placeholder: 'Any Gender' },
				// { label: 'HMO', id: 'hmo', options: hmoOptions, value: selectedHMOs, onChange: onHMOChange, placeholder: 'All HMOs' }, 
			].map((field, i) => (
				<div key={i} className="flex flex-col gap-2">
					<Label htmlFor={field.id} className="text-blue-100 text-sm font-medium ml-1">{field.label}</Label>
					<Select
						isMulti
						id={field.id}
						options={field.options}
						value={field.value}
						onChange={field.onChange}
						className="basic-multi-select"
						classNamePrefix="select"
						placeholder={field.placeholder}
						styles={{
							control: (base, state) => ({
								...base,
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								borderColor: state.isFocused ? 'rgba(245, 158, 11, 0.5)' : 'rgba(255, 255, 255, 0.1)',
								borderRadius: '0.75rem',
								minHeight: '2.75rem',
								boxShadow: state.isFocused ? '0 0 0 1px rgba(245, 158, 11, 0.5)' : 'none',
								'&:hover': { borderColor: 'rgba(255, 255, 255, 0.2)' },
								color: 'white',
							}),
							menu: (base) => ({
								...base,
								backgroundColor: '#0f172a', // Slate 900
								border: '1px solid rgba(255,255,255,0.1)',
								borderRadius: '1rem',
								overflow: 'hidden',
								boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
								zIndex: 50,
							}),
							option: (base, state) => ({
								...base,
								backgroundColor: state.isFocused ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
								color: state.isFocused ? '#F59E0B' : '#e2e8f0', // Secondary or Slate 200
								cursor: 'pointer',
								':active': {
									backgroundColor: 'rgba(245, 158, 11, 0.2)',
								},
							}),
							multiValue: (base) => ({
								...base,
								backgroundColor: 'rgba(245, 158, 11, 0.1)',
								borderRadius: '0.5rem',
							}),
							multiValueLabel: (base) => ({
								...base,
								color: '#F59E0B', // Secondary
								fontWeight: 600,
							}),
							multiValueRemove: (base) => ({
								...base,
								color: '#F59E0B',
								':hover': {
									backgroundColor: 'rgba(245, 158, 11, 0.2)',
									color: '#F59E0B',
								},
							}),
							input: (base) => ({ ...base, color: 'white' }),
							placeholder: (base) => ({ ...base, color: 'rgba(147, 197, 253, 0.3)' }), // blue-300/30
							singleValue: (base) => ({ ...base, color: 'white' }),
						}}
					/>
				</div>
			))}
			
			<div className="flex flex-col gap-2">
				<Label htmlFor="hmo" className="text-blue-100 text-sm font-medium ml-1">HMO</Label>
					<Select
						isMulti
						id="hmo"
						options={hmoOptions}
						value={selectedHMOs}
						onChange={onHMOChange}
						className="basic-multi-select"
						classNamePrefix="select"
						placeholder="Select HMOs"
						styles={{
							control: (base, state) => ({
								...base,
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								borderColor: state.isFocused ? 'rgba(245, 158, 11, 0.5)' : 'rgba(255, 255, 255, 0.1)',
								borderRadius: '0.75rem',
								minHeight: '2.75rem',
								boxShadow: state.isFocused ? '0 0 0 1px rgba(245, 158, 11, 0.5)' : 'none',
								'&:hover': { borderColor: 'rgba(255, 255, 255, 0.2)' },
								color: 'white',
							}),
							menu: (base) => ({
								...base,
								backgroundColor: '#0f172a', // Slate 900
								border: '1px solid rgba(255,255,255,0.1)',
								borderRadius: '1rem',
								overflow: 'hidden',
								boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
								zIndex: 50,
							}),
							option: (base, state) => ({
								...base,
								backgroundColor: state.isFocused ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
								color: state.isFocused ? '#F59E0B' : '#e2e8f0', // Secondary or Slate 200
								cursor: 'pointer',
								':active': {
									backgroundColor: 'rgba(245, 158, 11, 0.2)',
								},
							}),
							multiValue: (base) => ({
								...base,
								backgroundColor: 'rgba(245, 158, 11, 0.1)',
								borderRadius: '0.5rem',
							}),
							multiValueLabel: (base) => ({
								...base,
								color: '#F59E0B', // Secondary
								fontWeight: 600,
							}),
							multiValueRemove: (base) => ({
								...base,
								color: '#F59E0B',
								':hover': {
									backgroundColor: 'rgba(245, 158, 11, 0.2)',
									color: '#F59E0B',
								},
							}),
							input: (base) => ({ ...base, color: 'white' }),
							placeholder: (base) => ({ ...base, color: 'rgba(147, 197, 253, 0.3)' }), // blue-300/30
							singleValue: (base) => ({ ...base, color: 'white' }),
						}}
					/>
			</div>

		</div>
	);
};

export default FilterDoctor;
