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
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div className="flex flex-col gap-2">
				<Label htmlFor="search" className="text-slate-700 text-sm font-bold ml-1">Search</Label>
				<div className="relative group">
					<MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
					<Input
						type="text"
						id="search"
						placeholder="Name, Specialty, Hospital"
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-10 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-primary/20 focus-visible:border-primary rounded-xl h-11 transition-all shadow-sm"
					/>
				</div>
			</div>
			{/* Helper to style React Select for Light Glassmorphism */}
			{[
				{ label: 'Specialty', id: 'specialty', options: specialtyOptions, value: selectedSpecialties, onChange: onSpecialtyChange, placeholder: 'All Specialties' },
				{ label: 'Clinic Day', id: 'day', options: dayOptions, value: selectedDays, onChange: onDayChange, placeholder: 'Any Day' },
				{ label: 'Gender', id: 'gender', options: genderOptions, value: selectedGenders, onChange: onGenderChange, placeholder: 'Any Gender' },
				// { label: 'HMO', id: 'hmo', options: hmoOptions, value: selectedHMOs, onChange: onHMOChange, placeholder: 'All HMOs' }, 
			].map((field, i) => (
				<div key={i} className="flex flex-col gap-2">
					<Label htmlFor={field.id} className="text-slate-700 text-sm font-bold ml-1">{field.label}</Label>
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
								borderColor: state.isFocused ? '#1F1B99' : '#E2E8F0',
								borderRadius: '0.75rem',
								minHeight: '2.75rem',
								boxShadow: state.isFocused ? '0 0 0 1px #1F1B99' : 'none',
								'&:hover': { borderColor: '#1F1B99' },
								color: '#0f172a',
							}),
							menu: (base) => ({
								...base,
								backgroundColor: 'white',
								border: '1px solid #E2E8F0',
								borderRadius: '1rem',
								overflow: 'hidden',
								boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
								zIndex: 50,
							}),
							option: (base, state) => ({
								...base,
								backgroundColor: state.isFocused ? '#EFF6FF' : 'transparent', // Blue-50
								color: state.isFocused ? '#1F1B99' : '#64748b', // Primary or Slate-500
								cursor: 'pointer',
								fontWeight: 500,
								':active': {
									backgroundColor: '#DBEAFE', // Blue-100
								},
							}),
							multiValue: (base) => ({
								...base,
								backgroundColor: '#EFF6FF',
								borderRadius: '0.5rem',
								border: '1px solid #DBEAFE',
							}),
							multiValueLabel: (base) => ({
								...base,
								color: '#1F1B99', // Primary
								fontWeight: 600,
							}),
							multiValueRemove: (base) => ({
								...base,
								color: '#1F1B99',
								':hover': {
									backgroundColor: '#DBEAFE',
									color: '#1E40AF',
								},
							}),
							input: (base) => ({ ...base, color: '#0f172a' }),
							placeholder: (base) => ({ ...base, color: '#94a3b8' }), // Slate-400
							singleValue: (base) => ({ ...base, color: '#0f172a' }),
						}}
					/>
				</div>
			))}

			<div className="flex flex-col gap-2">
				<Label htmlFor="hmo" className="text-slate-700 text-sm font-bold ml-1">HMO</Label>
				<Select
					isMulti
					instanceId="hmo-select"
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
							backgroundColor: 'white',
							borderColor: state.isFocused ? '#1F1B99' : '#E2E8F0',
							borderRadius: '0.75rem',
							minHeight: '2.75rem',
							boxShadow: state.isFocused ? '0 0 0 1px #1F1B99' : 'none',
							'&:hover': { borderColor: '#1F1B99' },
							color: '#0f172a',
						}),
						menu: (base) => ({
							...base,
							backgroundColor: 'white',
							border: '1px solid #E2E8F0',
							borderRadius: '1rem',
							overflow: 'hidden',
							boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
							zIndex: 50,
						}),
						option: (base, state) => ({
							...base,
							backgroundColor: state.isFocused ? '#EFF6FF' : 'transparent',
							color: state.isFocused ? '#1F1B99' : '#64748b',
							cursor: 'pointer',
							fontWeight: 500,
							':active': {
								backgroundColor: '#DBEAFE',
							},
						}),
						multiValue: (base) => ({
							...base,
							backgroundColor: '#EFF6FF',
							borderRadius: '0.5rem',
							border: '1px solid #DBEAFE',
						}),
						multiValueLabel: (base) => ({
							...base,
							color: '#1F1B99',
							fontWeight: 600,
						}),
						multiValueRemove: (base) => ({
							...base,
							color: '#1F1B99',
							':hover': {
								backgroundColor: '#DBEAFE',
								color: '#1E40AF',
							},
						}),
						input: (base) => ({ ...base, color: '#0f172a' }),
						placeholder: (base) => ({ ...base, color: '#94a3b8' }),
						singleValue: (base) => ({ ...base, color: '#0f172a' }),
					}}
				/>
			</div>

		</div>
	);
};

export default FilterDoctor;
