'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Brand from '../brand/Brand';
const MobileNavigation = ({ menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild className=" absolute top-10 right-4">
					<div className="lg:hidden  p-2 hover:bg-gray-100 rounded-md cursor-pointer text-primary bg-gray-50">
						<Menu size={30} onClick={() => setIsOpen(true)} />
					</div>
					{/* <Menu size={30} onClick={() => setIsOpen(true)} /> */}
					{/* <Button
						variant="ghost"
						size="icon"
						className="lg:hidden text-primary text-2xl "
						onClick={() => setIsOpen(true)} // Ensure setIsOpen(true) when clicked
					>
						<Menu size={60} />
						<span className="sr-only">Open menu</span>
					</Button> */}
				</SheetTrigger>
				<SheetContent
					side="left"
					className="w-full sm:w-[300px] bg-background text-foreground"
				>
					<SheetTitle className="sr-only">Navigation</SheetTitle>
					<div className="flex flex-col h-full">
						<div className="flex items-center justify-between p-4 border-b">
							<Brand />
							{/* <Button
								variant="ghost"
								size="icon"
								onClick={() => setIsOpen(false)}
								className="text-gray-700"
							>
								<X className="h-6 w-6" />
								<span className="sr-only">Close menu</span>
							</Button> */}
						</div>
						<div className="flex-1 overflow-y-auto p-4 space-y-4">
							<ul className="space-y-2">
								{menuItems.map((item) => (
									<li key={item.label}>
										{item.links ? (
											<>
												<Button
													variant="ghost"
													className="w-full justify-start"
													onClick={() => {}}
												>
													{item.label}
												</Button>
												<div className="ml-4 space-y-2">
													{item.links.map((link, i) => (
														<Link
															key={i}
															href={link.href}
															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
															onClick={() => setIsOpen(false)}
														>
															{link.title}
														</Link>
													))}
												</div>
											</>
										) : (
											<Link
												href={item.featured?.href || '/'}
												className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-100 font-semibold text-sm"
												onClick={() => setIsOpen(false)}
											>
												{item.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</SheetContent>
			</Sheet>
			<div className="lg:hidden">{/* Mobile Navigation Placeholder */}</div>
		</>
	);
};

export default MobileNavigation;
