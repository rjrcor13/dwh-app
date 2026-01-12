// 'use client';

// import { Button } from '@/components/ui/button';
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetTitle,
// 	SheetTrigger,
// } from '@/components/ui/sheet';
// import { cn } from '@/lib/utils';
// import { Menu, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import Brand from '../brand/Brand';

// const MobileNavigation = ({ menuItems }) => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<>
// 			<Sheet open={isOpen} onOpenChange={setIsOpen} className="bg-white">
// 				<SheetTrigger asChild className=" absolute top-7 right-4 ">
// 					<div className="lg:hidden  p-1 cursor-pointer text-white ">
// 						<Menu size={30} onClick={() => setIsOpen(true)} />
// 					</div>
// 					{/* <Menu size={30} onClick={() => setIsOpen(true)} /> */}
// 					{/* <Button
// 						variant="ghost"
// 						size="icon"
// 						className="lg:hidden text-primary text-2xl "
// 						onClick={() => setIsOpen(true)} // Ensure setIsOpen(true) when clicked
// 					>
// 						<Menu size={60} />
// 						<span className="sr-only">Open menu</span>
// 					</Button> */}
// 				</SheetTrigger>
// 				<SheetContent
// 					side="left"
// 					className="w-full sm:w-[400px] bg-white text-foreground "
// 				>
// 					<SheetTitle className="sr-only">Navigation</SheetTitle>
// 					<div className="flex flex-col h-full">
// 						<div className="flex items-center justify-between p-4 border-b bg-primary">
// 							<Brand />
// 							{/* <Button
// 								variant="ghost"
// 								size="icon"
// 								onClick={() => setIsOpen(false)}
// 								className="text-gray-700"
// 							>
// 								<X className="h-6 w-6" />
// 								<span className="sr-only">Close menu</span>
// 							</Button> */}
// 						</div>
// 						<div className="flex-1 overflow-y-auto p-4 space-y-4">
// 							<ul className="space-y-2">
// 								{menuItems.map((item) => (
// 									<li key={item.label}>
// 										{item.links ? (
// 											<>
// 												<Button
// 													variant="ghost"
// 													className="w-full justify-start"
// 													onClick={() => {}}
// 												>
// 													{item.label}
// 												</Button>
// 												<div className="ml-4 space-y-2">
// 													{item.links.map((link, i) => (
// 														<Link
// 															key={i}
// 															href={link.href}
// 															className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// 															onClick={() => setIsOpen(false)}
// 														>
// 															{link.title}
// 														</Link>
// 													))}
// 												</div>
// 											</>
// 										) : (
// 											<Link
// 												href={item.featured?.href || '/'}
// 												className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-100 font-semibold text-sm"
// 												onClick={() => setIsOpen(false)}
// 											>
// 												{item.label}
// 											</Link>
// 										)}
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>
// 				</SheetContent>
// 			</Sheet>
// 			<div className="lg:hidden">{/* Mobile Navigation Placeholder */}</div>
// 		</>
// 	);
// };

// export default MobileNavigation;
'use client';

import {
	Sheet,
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
				>
					<SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
					<div className="flex flex-col h-full">
						{/* Header with Brand and Close Button */}
						<div className="flex items-center justify-between p-6 border-b border-white/10">
							<Brand />
							<button
								onClick={() => setIsOpen(false)}
								className="text-white/50 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
							>
								<X className="h-6 w-6" />
								<span className="sr-only">Close menu</span>
							</button>
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
