
'use client';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Brand from '../brand/Brand';

const MobileNavigation = ({ menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [openSubmenu, setOpenSubmenu] = useState(null);

	const handleLinkClick = () => {
		setIsOpen(false);
		setOpenSubmenu(null);
	};

	const handleSubmenuToggle = (label) => {
		setOpenSubmenu(openSubmenu === label ? null : label);
	};

	return (
		<>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<div className="lg:hidden cursor-pointer text-white hover:text-white/80 transition-all duration-300 p-2">
						<Menu className="w-8 h-8" strokeWidth={1.5} />
					</div>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="w-full sm:max-w-xs bg-[#0f0c50]/95 backdrop-blur-3xl border-r border-white/10 p-0 shadow-2xl"
					closeClassName="hidden"
				>
					<SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
					<div className="flex flex-col h-full">
						{/* Header with Brand and Close Button */}
						<div className="flex items-center justify-between p-6 border-b border-white/10">
							<Brand />
							<SheetClose className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all">
								<X className="w-8 h-8" strokeWidth={2.5} />
								<span className="sr-only">Close</span>
							</SheetClose>
						</div>

						{/* Navigation Links */}
						<div className="flex-1 overflow-y-auto p-6 space-y-2">
							<ul className="space-y-1">
								{menuItems.map((item) => (
									<li key={item.label}>
										{item.links ? (
											<div className="space-y-1">
												<div
													onClick={() => handleSubmenuToggle(item.label)}
													className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 ${openSubmenu === item.label
														? 'bg-white/10 text-white'
														: 'text-blue-100 hover:bg-white/5 hover:text-white'
														}`}
												>
													<span className="text-base font-bold font-heading">
														{item.label}
													</span>
													<motion.div
														animate={{
															rotate: openSubmenu === item.label ? -180 : 0,
														}}
														transition={{ duration: 0.3 }}
														className={openSubmenu === item.label ? 'text-white' : 'text-blue-200'}
													>
														<ChevronDown className="h-5 w-5" />
													</motion.div>
												</div>
												<AnimatePresence>
													{openSubmenu === item.label && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: 'auto', opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.3, ease: "circOut" }}
															className="overflow-hidden"
														>
															<ul className="space-y-1 pl-4 pt-1 pb-2">
																{item.links.map((link) => (
																	<li key={link.title}>
																		<Link
																			href={link.href}
																			className="block py-2.5 px-4 text-sm font-medium text-blue-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
																			onClick={handleLinkClick}
																		>
																			{link.title}
																		</Link>
																	</li>
																))}
															</ul>
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										) : (
											<Link
												href={item.featured?.href || '/'}
												className="block py-3 px-4 text-base font-bold font-heading text-blue-100 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
												onClick={handleLinkClick}
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
		</>
	);
};

export default MobileNavigation;
