'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Brand from '../brand/Brand';
import MobileNavigation from './MobileNavigation';
import MyNavigation from './Navigation';

export default function MainNavigation({ menuItems }) {
	// Simplified for now: Fixed styling with glass effect
	return (
		<div className="sticky top-0 z-50 w-full bg-[#1F1B99]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/10">
			<div className="max-w-7xl container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[5.5rem]">
				<div className="flex-shrink-0">
					<Brand />
				</div>

				<div className="hidden lg:block ml-auto">
					<MyNavigation menuItems={menuItems} />
				</div>

				<div className="lg:hidden ml-auto">
					<MobileNavigation menuItems={menuItems} />
				</div>
			</div>
		</div>
	);
}
