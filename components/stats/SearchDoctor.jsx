// import { Search } from 'lucide-react'; // Import the Search icon
// import React from 'react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';

// const SearchDoctor = ({ classNames }) => {
// 	return (
// 		<div
// 			className={` ${classNames} absolute top-[-80px] bg-white/95 rounded-lg shadow-md p-4 z-50 w-full`}
// 		>
// 			<div>
// 				<div className="flex flex-col justify-center items-start text-center p-4">
// 					<h1 className="text-2xl font-bold text-gray-800">Find a Doctor</h1>
// 					<p className=" text-gray-500 text-sm">Seach by specialty or name</p>
// 				</div>
// 				<div className="px-4 pb-4 flex flex-row gap-2 items-center">
// 					{' '}
// 					{/* Added items-center */}
// 					<div className="relative w-full">
// 						{' '}
// 						{/* Added a relative wrapper */}
// 						<Input
// 							type="text"
// 							placeholder="Search"
// 							className="pl-10 bg-white h-15" // Add padding to accommodate the icon
// 						/>
// 						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary font-bold" />{' '}
// 						{/* Icon */}
// 					</div>
// 					<Button className="h-15 px-8">Find</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SearchDoctor;
// 'use client';

// import { Search, UserRoundSearch } from 'lucide-react'; // Import the Search icon
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import { Card, CardContent } from '../ui/card';
// import { Input } from '../ui/input';

// const SearchDoctor = ({ classNames }) => {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const router = useRouter(); // Initialize the router

// 	const handleSearch = () => {
// 		if (searchTerm.trim()) {
// 			// Redirect to the doctors page with the search term as a query parameter
// 			router.push(`/doctors?q=${encodeURIComponent(searchTerm.trim())}`);
// 		}
// 	};

// 	const handleInputChange = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	const handleKeyDown = (event) => {
// 		if (event.key === 'Enter') {
// 			handleSearch();
// 		}
// 	};

// 	return (
// 		<Card
// 			className={` ${classNames} absolute top-[-50px] bg-white/95 rounded-lg shadow-md p-4 z-50 w-full`}
// 		>
// 			<CardContent className="space-y-6">
// 				<div className="flex flex-col justify-center items-start text-center p-4">
// 					<h1 className="text-2xl font-bold text-primary flex flex-row items-center gap-1">
// 						<UserRoundSearch size={30} strokeWidth={3} />
// 						Find a Doctor
// 					</h1>
// 					<p className=" text-gray-500 text-md">Search by specialty or name</p>
// 				</div>
// 				<div className="px-4 pb-4 flex flex-row gap-2 items-center">
// 					<div className="relative w-full">
// 						<Input
// 							type="text"
// 							placeholder="Search"
// 							className="pl-10 bg-white h-10" // Add padding to accommodate the icon
// 							value={searchTerm}
// 							onChange={handleInputChange}
// 							onKeyDown={handleKeyDown} // Listen for Enter key press
// 						/>
// 						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary font-bold" />{' '}
// 						{/* Icon */}
// 					</div>
// 					<Button className="h-10 px-5" onClick={handleSearch}>
// 						Find
// 					</Button>
// 				</div>
// 			</CardContent>
// 		</Card>
// 	);
// };

// export default SearchDoctor;
'use client';

import { Search, UserRoundSearch } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';

const SearchDoctor = ({ classNames }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const router = useRouter(); // Initialize the router

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchClick = () => {
		if (searchTerm.trim()) {
			// Redirect to the DoctorsPage with the search term as a query parameter
			router.push(`/doctors?q=${encodeURIComponent(searchTerm.trim())}`);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && searchTerm.trim()) {
			handleSearchClick();
		}
	};

	return (
		<Card
			className={` ${classNames} absolute top-[-80px] bg-white/95 rounded-lg shadow-md p-4_ z-20 w-full`}
		>
			<CardContent className="space-y-6">
				<div className="flex flex-col justify-center items-start text-center p-4_ space-y-2">
					<h1 className="text-2xl font-bold text-primary flex flex-row items-center gap-1">
						<UserRoundSearch size={30} strokeWidth={3} />
						Find a Doctor
					</h1>
					<p className=" text-gray-500 text-sm">Search by specialty or name</p>
				</div>
				<div className="px-4_ pb-4 flex flex-row gap-2 items-center">
					<div className="relative w-full">
						<Input
							type="text"
							placeholder="Search"
							className="pl-10 bg-white h-10"
							value={searchTerm}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary font-bold" />
					</div>
					<Button className="h-10 px-5" onClick={handleSearchClick}>
						Find
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default SearchDoctor;
