'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Brand from '../brand/Brand';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export default function MyNavigation({ menuItems, myClass }) {
	return (
		<>
			<NavigationMenu
				className={`${myClass} " hidden lg:flex space-y-4_ items-end text-primary bg-white_ align-baseline"`}
			>
				<NavigationMenuList>
					{menuItems.map((item) => (
						<NavigationMenuItem key={item.label}>
							{item.links ? (
								<>
									<NavigationMenuTrigger>
										<p className="text-md">{item.label}</p>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
											{item.featured && (
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<Link
															href={item.featured.href}
															className="flex h-full w-full select-none flex-col justify-end rounded-md_ bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
														>
															{item.featured.image && (
																<Image
																	src={item.featured.image}
																	alt={item.featured.title || 'featured image'}
																	width={200}
																	height={100}
																	className="mb-3 max-h-42 w-full rounded object-cover"
																/>
															)}
															{item.featured.title && (
																<p className="mb-2 text-md font-medium">
																	{item.featured.title}
																</p>
															)}
															{item.featured.description && (
																<span className="text-sm leading-tight text-muted-foreground">
																	{item.featured.description}
																</span>
															)}
														</Link>
													</NavigationMenuLink>
												</li>
											)}
											{item.links.map((link, i) => (
												<ListItem
													key={i}
													title={<p className="text-md">{link.title}</p>}
													href={link.href}
													className="text-md"
												>
													<span className="text-md">{link.description}</span>
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</>
							) : (
								<Link
									href={item.featured?.href || '/'}
									className={navigationMenuTriggerStyle()}
								>
									<p className="text-md"> {item.label}</p>
								</Link>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}

const ListItem = React.forwardRef(
	({ className, title, children, href, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						href={href}
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm_ leading-snug text-muted-foreground">
							{children}
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
		);
	}
);

ListItem.displayName = 'ListItem';
