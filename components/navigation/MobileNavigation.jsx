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
					<div className="lg:hidden absolute top-6 right-4 cursor-pointer text-slate-900 hover:text-primary transition-colors p-2 glass rounded-full">
						<Menu size={24} />
					</div>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="w-full sm:max-w-xs bg-slate-900/95 backdrop-blur-xl text-white border-r border-slate-700/50 p-0"
				>
					<SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
					<div className="flex flex-col h-full">
						{/* Header with Brand and Close Button */}
						<div className="flex items-center justify-between p-6 border-b border-gray-700">
							<Brand />
							<button
								onClick={() => setIsOpen(false)}
								className="text-gray-400 hover:text-white transition-colors"
							>
								{/* <X className="h-6 w-6" /> */}
								<span className="sr-only">Close menu</span>
							</button>
						</div>

						{/* Navigation Links */}
						<div className="flex-1 overflow-y-auto p-6 space-y-2">
							<ul className="space-y-2">
								{menuItems.map((item) => (
									<li key={item.label}>
										{item.links ? (
											<div>
												<div
													onClick={() => handleSubmenuToggle(item.label)}
													className="flex items-center justify-between py-2 px-4 rounded-md cursor-pointer hover:bg-accent transition-colors"
												>
													<span className="text-lg font-medium">
														{item.label}
													</span>
													<motion.div
														animate={{
															rotate: openSubmenu === item.label ? -180 : 0,
														}}
														transition={{ duration: 0.3 }}
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
															transition={{ duration: 0.3 }}
															className="overflow-hidden mt-2"
														>
															<ul className="space-y-1 pl-6 border-l border-white/20 ml-4">
																{item.links.map((link) => (
																	<li key={link.title}>
																		<Link
																			href={link.href}
																			className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-accent rounded-md transition-colors"
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
												className="block py-2 px-4 text-lg font-medium rounded-md hover:bg-accent transition-colors"
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
