// 'use client';

// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';
// import Link from 'next/link';
// import * as React from 'react';

// import {
// 	NavigationMenu,
// 	NavigationMenuContent,
// 	NavigationMenuItem,
// 	NavigationMenuLink,
// 	NavigationMenuList,
// 	NavigationMenuTrigger,
// 	navigationMenuTriggerStyle,
// } from '@/components/ui/navigation-menu';

// export default function NavigationMenuDemo({ menuItems, myClass }) {
// 	return (
// 		<NavigationMenu
// 			viewport={false}
// 			className={`${myClass} " hidden lg:flex space-y-4_ items-end_ text-white bg-primary align-middle"`}
// 		>
// 			<NavigationMenuList className="">
// 				{menuItems.map((item) => (
// 					<NavigationMenuItem key={item.label}>
// 						{item.links ? (
// 							<>
// 								<NavigationMenuTrigger className="text-white ">
// 									{item.label}
// 								</NavigationMenuTrigger>
// 								<NavigationMenuContent>
// 									<div className="grid w-[300px] grid-cols-[250px_1fr]_ gap-4 p-4">
// 										{/* Featured column (left) */}
// 										{/* {item.featured && (
// 											<div className="flex flex-col gap-2 rounded-md bg-muted p-4">
// 												{item.featured.image && (
// 													<img
// 														src={item.featured.image}
// 														alt={item.featured.title || item.label}
// 														className="h-32 w-full rounded-md object-cover"
// 													/>
// 												)}
// 												<Link href={item.featured.href}>
// 													{item.featured.title && (
// 														<div className="text-lg font-medium">
// 															{item.featured.title}
// 														</div>
// 													)}
// 													{item.featured.description && (
// 														<p className="text-sm text-muted-foreground">
// 															{item.featured.description}
// 														</p>
// 													)}
// 												</Link>
// 											</div>
// 										)} */}

// 										{/* Links column (right) */}
// 										<ul className="grid gap-4 bg-gray-100 hover:text-white text-black">
// 											{item.links.map((link) => (
// 												<ListItem
// 													className="hover:text-white text-black"
// 													key={link.title}
// 													href={link.href}
// 													title={link.title}
// 												>
// 													<span className="text-sm">{link.description}</span>
// 												</ListItem>
// 											))}
// 										</ul>
// 									</div>
// 								</NavigationMenuContent>
// 							</>
// 						) : (
// 							// Simple menu item without dropdown
// 							<NavigationMenuLink
// 								asChild
// 								className={navigationMenuTriggerStyle()}
// 							>
// 								<Link href={item.featured.href}>{item.label}</Link>
// 							</NavigationMenuLink>
// 						)}
// 					</NavigationMenuItem>
// 				))}
// 			</NavigationMenuList>
// 		</NavigationMenu>
// 	);
// }

// function ListItem({ title, children, href, ...props }) {
// 	return (
// 		<li {...props}>
// 			<NavigationMenuLink asChild className="hover:text-white flex align-top">
// 				<Link href={href}>
// 					<div className="text-sm font-semibold leading-none align-top">
// 						{title}
// 					</div>
// 					<p className="text-sm leading-snug text-whtie line-clamp-5">
// 						{children}
// 					</p>
// 				</Link>
// 			</NavigationMenuLink>
// 		</li>
// 	);
// }
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
	ChevronDown,
	CircleCheckIcon,
	CircleHelpIcon,
	CircleIcon,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useRef, useState } from 'react';

const navigationTriggerStyle =
	'inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10';

const listItemStyle =
	'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 focus:bg-gray-200';

const caretVariants = {
	rest: { rotate: 0, transition: { duration: 0.3 } },
	hover: { rotate: -180, transition: { duration: 0.3 } },
};

export default function NavigationMenuDemo({ menuItems, myClass }) {
	const [openMenu, setOpenMenu] = useState(null);
	const timeoutRef = useRef(null);

	const handleMenuHover = (label) => {
		// Clear any existing timeout to prevent the menu from closing
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setOpenMenu(label);
	};

	const handleMenuLeave = () => {
		// Set a timeout to close the menu after 500ms
		timeoutRef.current = setTimeout(() => {
			setOpenMenu(null);
		}, 300);
	};

	return (
		<nav
			className={`${myClass} hidden lg:flex items-center space-x-1`}
		>
			<ul className="flex items-center space-x-1">
				{menuItems.map((item) => (
					<li
						key={item.label}
						className="relative"
						onMouseEnter={() => handleMenuHover(item.label)}
						onMouseLeave={handleMenuLeave}
					>
						{item.links ? (
							<>
								<div
									className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold font-heading transition-all duration-300 cursor-pointer ${openMenu === item.label
										? 'text-primary bg-slate-100/60'
										: 'text-slate-600 hover:text-primary hover:bg-slate-50'
										}`}
								>
									{item.label}
									<motion.div
										variants={caretVariants}
										animate={openMenu === item.label ? 'hover' : 'rest'}
										className={`ml-1.5 w-4 h-4 transition-colors ${openMenu === item.label ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
											}`}
									>
										<ChevronDown className="w-full h-full opacity-60 group-hover:opacity-100" strokeWidth={2} />
									</motion.div>
								</div>
								<AnimatePresence>
									{openMenu === item.label && (
										<motion.div
											initial={{ opacity: 0, y: 8, scale: 0.98 }}
											animate={{ opacity: 1, y: 0, scale: 1 }}
											exit={{ opacity: 0, y: 8, scale: 0.98 }}
											transition={{ duration: 0.2, ease: "circOut" }}
											className="absolute left-0 top-full pt-3 z-50"
										>
											<div className="w-[340px] rounded-xl border border-slate-200/60 bg-white/95 backdrop-blur-3xl p-3 shadow-xl ring-1 ring-slate-900/5">
												<ul className="grid gap-1">
													{item.links.map((link) => (
														<ListItem
															key={link.title}
															href={link.href}
															title={link.title}
														>
															<span className="text-xs text-slate-500 font-medium tracking-wide">{link.description}</span>
														</ListItem>
													))}
												</ul>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</>
						) : (
							<Link href={item.featured?.href || '#'} passHref>
								<span className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold font-heading text-slate-600 transition-all duration-300 hover:text-primary hover:bg-slate-50">
									{item.label}
								</span>
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}

function ListItem({ title, children, href, ...props }) {
	return (
		<li {...props}>
			<Link href={href} passHref>
				<div className="group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary">
					<div className="text-sm font-bold leading-none text-slate-800 group-hover:text-primary transition-colors">{title}</div>
					<p className="line-clamp-2 text-xs leading-snug text-slate-500 group-hover:text-slate-600">
						{children}
					</p>
				</div>
			</Link>
		</li>
	);
}
