'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
	ChevronDown,
	ArrowRight,
	Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { useRef, useState } from 'react';

const caretVariants = {
	rest: { rotate: 0, transition: { duration: 0.3 } },
	hover: { rotate: -180, transition: { duration: 0.3 } },
};

const menuVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		scale: 0.98,
		transition: { duration: 0.2 }
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "circOut",
			staggerChildren: 0.05,
			delayChildren: 0.1
		}
	},
	exit: {
		opacity: 0,
		y: 10,
		scale: 0.98,
		transition: { duration: 0.2 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

export default function NavigationMenuDemo({ menuItems, myClass }) {
	const pathname = usePathname();
	const [openMenu, setOpenMenu] = useState(null);
	const timeoutRef = useRef(null);

	const handleMenuHover = (label) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setOpenMenu(label);
	};

	const handleMenuLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenMenu(null);
		}, 300);
	};

	return (
		<nav className={`${myClass} hidden lg:flex items-center space-x-2`}>
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
								<button
									type="button"
									onClick={() => openMenu === item.label ? setOpenMenu(null) : handleMenuHover(item.label)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											openMenu === item.label ? setOpenMenu(null) : handleMenuHover(item.label);
										}
									}}
									aria-expanded={openMenu === item.label}
									aria-haspopup="true"
									className={`group inline-flex h-10 w-max items-center justify-center rounded-full px-3.5 xl:px-5 py-2 text-sm font-semibold font-heading transition-all duration-300 cursor-pointer ${openMenu === item.label
										? 'text-white bg-white/15'
										: 'text-blue-100 hover:text-white hover:bg-white/10'
										}`}
								>
									{item.label}
									<motion.div
										variants={caretVariants}
										animate={openMenu === item.label ? 'hover' : 'rest'}
										className={`ml-1.5 w-4 h-4 transition-colors ${openMenu === item.label ? 'text-white' : 'text-blue-200 group-hover:text-white'
											}`}
									>
										<ChevronDown className="w-full h-full opacity-80 group-hover:opacity-100" strokeWidth={2.5} />
									</motion.div>
								</button>
								<AnimatePresence>
									{openMenu === item.label && (
										<motion.div
											variants={menuVariants}
											initial="hidden"
											animate="visible"
											exit="exit"
											className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 w-max"
										>
											<div className="flex w-[650px] overflow-hidden rounded-[2rem] border border-slate-100 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(30,58,138,0.15)] ring-1 ring-black/5">

												{/* Left Column: Featured Section */}
												<div className="w-[260px] bg-slate-50/80 p-6 flex flex-col justify-between relative overflow-hidden group/featured border-r border-slate-100">
													<div className="relative z-10">
														{item.featured?.image ? (
															<div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 shadow-sm group-hover/featured:shadow-md transition-shadow">
																<img
																	src={item.featured.image}
																	alt={item.featured.title}
																	className="w-full h-full object-cover transform group-hover/featured:scale-105 transition-transform duration-500"
																/>
																<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
																<div className="absolute bottom-2 left-2 right-2">
																	<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
																		<Sparkles className="w-4 h-4" />
																	</div>
																</div>
															</div>
														) : (
															<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm text-primary">
																<Sparkles className="w-5 h-5 fill-primary/10" />
															</div>
														)}

														<h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
															{item.featured?.title || item.label}
														</h3>
														<p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
															{item.featured?.description || "Explore our comprehensive services and expert care."}
														</p>
													</div>

													<Link
														href={item.featured?.href || '#'}
														className="relative z-10 mt-6 inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary hover:text-blue-700 transition-colors"
													>
														View Overview <ArrowRight className="ml-2 w-3 h-3" />
													</Link>
												</div>

												{/* Right Column: Links List */}
												<div className="flex-1 p-6 bg-transparent">
													<div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 px-3">
														Quick Links
													</div>
													<ul className="grid grid-cols-1 gap-1">
														{item.links.map((link) => (
															<motion.li key={link.title} variants={itemVariants}>
																<Link href={link.href} passHref>
																	<div className="group/item flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-blue-50/80 hover:shadow-sm border border-transparent hover:border-blue-100/50">
																		<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-primary transition-colors" />
																		<div>
																			<div className="text-sm font-bold text-slate-700 group-hover/item:text-primary transition-colors leading-none mb-1.5">
																				{link.title}
																			</div>
																			<p className="text-xs text-slate-500 leading-snug group-hover/item:text-slate-600 line-clamp-2">
																				{link.description}
																			</p>
																		</div>
																	</div>
																</Link>
															</motion.li>
														))}
													</ul>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</>
						) : (
							<Link href={item.featured?.href || '#'} passHref>
								{pathname === item.featured?.href ? (
									<span className="inline-flex h-10 items-center justify-center rounded-full px-5 xl:px-6 py-2 text-sm font-bold font-heading bg-gradient-to-r from-white to-blue-50 text-primary shadow-lg shadow-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:from-white hover:to-white">
										{item.label}
									</span>
								) : (
									<span className="inline-flex h-10 w-max items-center justify-center rounded-full px-3.5 xl:px-5 py-2 text-sm font-semibold font-heading text-blue-100 transition-all duration-300 hover:text-white hover:bg-white/10">
										{item.label}
									</span>
								)}
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
