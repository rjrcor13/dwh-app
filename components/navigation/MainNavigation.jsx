'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import Brand from '../brand/Brand';
import MobileNavigation from './MobileNavigation';
import MyNavigation from './Navigation';

export default function MainNavigation({ menuItems }) {
	return (
		<div className=" bg-white p-4">
			<div className="max-w-7xl container_  mx-auto flex w-full h-32_ items-center_ lg:justify-between justify-start p-2_  lg:flex-row flex-col">
				<div className="flex justify-left align-middle items-center">
					<Brand />
				</div>
				<MyNavigation menuItems={menuItems} />
				{/* <div classNames="hidden lg:block bg-green-200 items-baseline align-baseline justify-baseline align-bottom"></div> */}
				{/* <div className=""></div> */}

				<MobileNavigation menuItems={menuItems} />
			</div>
		</div>
	);
}
