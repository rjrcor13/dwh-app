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

import { motion } from 'framer-motion';
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
			<ul className="flex items-center space-x-2">
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
									className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold font-heading transition-colors hover:text-primary focus:outline-none cursor-pointer text-slate-700 ${openMenu === item.label ? 'text-primary bg-primary/5' : ''}`}
								>
									{item.label}
									<motion.div
										variants={caretVariants}
										animate={openMenu === item.label ? 'hover' : 'rest'}
										className="ml-1 text-primary/70"
									>
										<ChevronDown className="h-4 w-4" />
									</motion.div>
								</div>
								{openMenu === item.label && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										transition={{ duration: 0.2 }}
										className="absolute left-0 top-full pt-2"
									>
										<div className="w-[350px] rounded-xl border border-slate-200/60 bg-white/95 backdrop-blur-xl p-4 shadow-xl ring-1 ring-black/5">
											<ul className="grid gap-2">
												{item.links.map((link) => (
													<ListItem
														key={link.title}
														href={link.href}
														title={link.title}
													>
														<span className="text-sm">{link.description}</span>
													</ListItem>
												))}
											</ul>
										</div>
									</motion.div>
								)}
							</>
						) : (
							<Link href={item.featured?.href || '#'} passHref>
								<span className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold font-heading text-slate-700 transition-colors hover:bg-primary/5 hover:text-primary">
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
				<div className={`${listItemStyle} flex flex-col`}>
					<div className="text-sm font-semibold leading-none">{title}</div>
					<p className="text-sm leading-snug text-gray-600 line-clamp-5">
						{children}
					</p>
				</div>
			</Link>
		</li>
	);
}
