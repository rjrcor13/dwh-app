'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const events = [
	{
		id: 1,
		title: 'Annual Free Medical Mission 2024',
		date: 'Oct 15, 2024',
		day: '15',
		month: 'OCT',
		image: '/assets/events.jpg',
		category: 'Community',
		excerpt:
			'Providing free consultations, dental services, and minor surgeries to over 500 beneficiaries in Tacloban.',
		slug: 'medical-mission-2024',
	},
	{
		id: 2,
		title: 'Blood Donation Drive: Give Blood, Save Lives',
		date: 'Nov 02, 2024',
		day: '02',
		month: 'NOV',
		image: '/assets/events.jpg', // Using placeholder if specific one not available
		category: 'Health Campaign',
		excerpt:
			'Join us in our quarterly blood letting activity in partnership with the Red Cross.',
		slug: 'blood-donation-drive',
	},
	{
		id: 3,
		title: 'Mental Health Awareness Seminar',
		date: 'Nov 10, 2024',
		day: '10',
		month: 'NOV',
		image: '/assets/events.jpg',
		category: 'Education',
		excerpt:
			'A seminar focusing on workplace mental health and stress management for healthcare professionals.',
		slug: 'mental-health-seminar',
	},
];

const Events = () => {

	const [visibleEvents, setVisibleEvents] = useState(3);

	const loadMore = () => {
		setVisibleEvents((prev) => prev + 3);
	};

	return (
		<section className="py-24 bg-white border-t border-slate-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">
							Hospital News
						</h2>
						<h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
							Latest Events & Updates
						</h2>
					</div>
					<Button variant="outline" asChild className="hidden md:flex">
						<Link href="/events">View All News</Link>
					</Button>
				</div>

				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
					{events.slice(0, visibleEvents).map((event, idx) => (
						<motion.article
							key={event.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="group flex flex-col h-full bg-white"
						>
							<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-300">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

								{/* Date Block */}
								<div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-slate-900 rounded-xl p-3 text-center min-w-[70px] shadow-lg">
									<span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{event.month}</span>
									<span className="block text-2xl font-bold font-heading text-primary leading-none">{event.day}</span>
								</div>

								<div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
									{event.category}
								</div>
							</div>

							<div className="flex flex-col flex-grow">
								<h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
									<Link href={`/events/${event.slug}`}>
										{event.title}
									</Link>
								</h3>
								<p className="text-slate-500 line-clamp-3 mb-4 flex-grow leading-relaxed">
									{event.excerpt}
								</p>
								<Link
									href={`/events/${event.slug}`}
									className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors mt-auto group/link"
								>
									Read Full Story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
								</Link>
							</div>
						</motion.article>
					))}
				</div>

				<div className="mt-12 text-center md:hidden">
					<Button variant="outline" asChild className="w-full">
						<Link href="/events">View All News</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Events;
