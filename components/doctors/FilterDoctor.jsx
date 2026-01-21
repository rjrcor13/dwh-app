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
			borderColor: state.isFocused ? '#1F1B99' : '#E2E8F0',
			boxShadow: state.isFocused ? '0 0 0 3px rgba(31, 27, 153, 0.1)' : null,
			'&:hover': {
				borderColor: '#1F1B99',
			},
			// borderRadius: '16px',
		}),
	};

	return (
		<div className="flex flex-col gap-6">
			{/* Search Section - Full Width */}
			<div className="w-full">
				<Label htmlFor="search" className="sr-only">Search</Label>
				<div className="relative group">
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<MagnifyingGlassIcon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-300" />
					</div>
					<Input
						type="text"
						id="search"
						placeholder="Search doctors by name, specialty, or hospital..."
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-11 h-12 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:border-blue-600 rounded-2xl transition-all shadow-sm hover:border-slate-300"
					/>
				</div>
			</div>

			{/* Filters Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{[
					{ label: 'Specialty', id: 'specialty', options: specialtyOptions, value: selectedSpecialties, onChange: onSpecialtyChange, placeholder: 'All Specialties' },
					{ label: 'Clinic Day', id: 'day', options: dayOptions, value: selectedDays, onChange: onDayChange, placeholder: 'Any Day' },
					{ label: 'Gender', id: 'gender', options: genderOptions, value: selectedGenders, onChange: onGenderChange, placeholder: 'Any Gender' },
					{ label: 'HMO', id: 'hmo', options: hmoOptions, value: selectedHMOs, onChange: onHMOChange, placeholder: 'All HMOs' },
				].map((field, i) => (
					<div key={i} className="flex flex-col gap-1.5">
						<Label htmlFor={field.id} className="text-slate-600 text-xs font-bold ml-1 uppercase tracking-wider">{field.label}</Label>
						<Select
							isMulti
							instanceId={field.id}
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
									backgroundColor: 'white',
									borderColor: state.isFocused ? '#2563eb' : '#e2e8f0', // blue-600 : slate-200
									borderRadius: '1rem',
									minHeight: '3rem',
									boxShadow: state.isFocused ? '0 0 0 4px rgba(37, 99, 235, 0.1)' : 'none',
									'&:hover': { borderColor: state.isFocused ? '#2563eb' : '#cbd5e1' }, // blue-600 : slate-300
									transition: 'all 0.2s ease',
								}),
								menu: (base) => ({
									...base,
									backgroundColor: 'white',
									border: '1px solid #e2e8f0',
									borderRadius: '1rem',
									overflow: 'hidden',
									boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
									zIndex: 50,
									marginTop: '0.5rem',
								}),
								option: (base, state) => ({
									...base,
									backgroundColor: state.isFocused ? '#eff6ff' : 'transparent', // blue-50
									color: state.isFocused ? '#1e40af' : '#64748b', // blue-800 : slate-500
									cursor: 'pointer',
									padding: '0.75rem 1rem',
									fontSize: '0.875rem',
									fontWeight: 500,
									':active': {
										backgroundColor: '#dbeafe', // blue-100
									},
								}),
								multiValue: (base) => ({
									...base,
									backgroundColor: '#eff6ff', // blue-50
									borderRadius: '0.5rem',
									border: '1px solid #dbeafe', // blue-100
									margin: '0.125rem',
								}),
								multiValueLabel: (base) => ({
									...base,
									color: '#1e40af', // blue-800
									fontWeight: 600,
									fontSize: '0.75rem',
									paddingRight: '0.25rem',
								}),
								multiValueRemove: (base) => ({
									...base,
									color: '#3b82f6', // blue-500
									borderRadius: '0.25rem',
									':hover': {
										backgroundColor: '#dbeafe',
										color: '#1d4ed8', // blue-700
									},
								}),
								input: (base) => ({ ...base, color: '#0f172a' }), // slate-900
								placeholder: (base) => ({ ...base, color: '#94a3b8', fontSize: '0.875rem' }), // slate-400
								singleValue: (base) => ({ ...base, color: '#0f172a' }),
								indicatorSeparator: () => ({ display: 'none' }),
								dropdownIndicator: (base, state) => ({
									...base,
									color: state.isFocused ? '#3b82f6' : '#cbd5e1',
									'&:hover': { color: '#3b82f6' },
									transition: 'color 0.2s',
									padding: '0 0.75rem',
								}),
								clearIndicator: (base) => ({
									...base,
									color: '#cbd5e1',
									'&:hover': { color: '#ef4444' },
									padding: '0 0.5rem',
								}),
								valueContainer: (base) => ({
									...base,
									padding: '0.25rem 0.75rem',
								}),
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterDoctor;
