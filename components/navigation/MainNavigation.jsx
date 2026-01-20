'use client';

import { Search } from 'lucide-react';
import React, { useState } from 'react';
import Brand from '../brand/Brand';
import MobileNavigation from './MobileNavigation';
import MyNavigation from './Navigation';
import SearchCommand from './SearchCommand';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function MainNavigation({ menuItems }) {
	const [searchOpen, setSearchOpen] = useState(false);

	// Simplified for now: Fixed styling with glass effect
	return (
		<>
			<div className="sticky top-0 z-50 w-full bg-[#1F1B99]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/10">
				<div className="max-w-[1440px] container mx-auto flex items-center px-4 sm:px-6 lg:px-8 h-[5.5rem]">
					{/* Left: Brand */}
					<div className="flex-shrink-0 mr-4 lg:mr-8 transition-all duration-300 hover:opacity-90">
						<Brand />
					</div>

					{/* Center: Navigation (Desktop) */}
					<div className="hidden lg:flex flex-1 justify-center items-center">
						<MyNavigation menuItems={menuItems} />
					</div>

					{/* Right: Actions */}
					<div className="flex items-center gap-2 sm:gap-4 ml-auto lg:ml-0 flex-shrink-0">

						{/* Desktop Separator */}
						<div className="hidden lg:block h-6 w-px bg-white/20 mx-2" />

						{/* Search Trigger */}
						<button
							onClick={() => setSearchOpen(true)}
							className="p-2.5 text-blue-100 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group flex items-center gap-2 border border-transparent hover:border-white/20"
							aria-label="Search"
						>
							<Search className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
							<span className="hidden xl:inline-block text-[11px] font-bold tracking-wider text-blue-200/70 border border-blue-200/20 px-1.5 py-0.5 rounded bg-blue-900/40">⌘K</span>
						</button>

						{/* Mobile Menu Toggle (Hidden on LG) */}
						<div className="lg:hidden">
							<MobileNavigation menuItems={menuItems} />
						</div>
					</div>
				</div>
			</div>

			<SearchCommand open={searchOpen} setOpen={setSearchOpen} />
		</>
	);
}
