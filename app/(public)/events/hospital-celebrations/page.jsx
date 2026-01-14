
import { hospitalCelebrations } from '@/app/data/hospitalCelebrations';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HospitalCelebrationsPage() {
	const renderMediaItemThumbnail = (mediaItem, index, className) => {
		if (mediaItem.type === 'image') {
			return (
				<div key={index} className={`relative w-full ${className}`}>
					<Image
						src={mediaItem.src}
						alt={`Media ${index + 1}`}
						fill
						style={{ objectFit: 'cover' }}
						className="rounded-t-lg transition-transform duration-300 hover:scale-105"
					/>
				</div>
			);
		}
		return (
			<div
				key={index}
				className={`relative w-full ${className} bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-t-lg`}
			>
				<span className="text-sm font-medium">Video available</span>
			</div>
		);
	};

	return (
		<div className="min-h-screen bg-gray-50/50">
			{/* Breadcrumb Section */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<nav className="flex items-center text-sm text-gray-500">
						<Link href="/events" className="hover:text-primary transition-colors">
							Events
						</Link>
						<span className="mx-2">/</span>
						<span className="text-gray-900 font-medium">Hospital Celebrations</span>
					</nav>
				</div>
			</div>

			{/* Hero Section */}
			<section className="bg-white pb-12 pt-8 border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 text-blue-600">
						<CalendarIcon className="w-8 h-8" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Hospital Celebrations
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Commemorate significant milestones, institutional events, and community
                        gatherings that foster our unique hospital culture and family spirit.
					</p>
				</div>
			</section>

            {/* Events Grid Section */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{hospitalCelebrations.map((event) => (
							<Card
								key={event.id}
								className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
							>
								{event.media && event.media.length > 0 ? (
									<div className="relative h-56 w-full overflow-hidden">
										{renderMediaItemThumbnail(event.media[0], 0, 'h-full')}
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
											<span className="text-white font-medium">View Event Details</span>
										</div>
									</div>
								) : (
                                    <div className="h-56 bg-gray-200 w-full flex items-center justify-center">
                                        <span className="text-gray-400">No Image Available</span>
                                    </div>
                                )}
								<CardHeader className="pb-3">
									<div className="flex justify-between items-start">
										<CardTitle className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
											{event.title}
										</CardTitle>
									</div>
									<div className="space-y-2 mt-2">
										<CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
											{event.date}
										</CardDescription>
										<CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<ClockIcon className="w-4 h-4 mr-2 text-blue-500" />
											{event.time}
										</CardDescription>
                                        <CardDescription className="flex items-center text-sm font-medium text-gray-600">
											<MapPinIcon className="w-4 h-4 mr-2 text-blue-500" />
											{event.location}
										</CardDescription>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
										{event.description}
									</p>
								</CardContent>
								<CardFooter className="pt-0 pb-6">
									<Link href={`/events/hospital-celebrations/${event.id}`} className="w-full">
										<Button className="w-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all shadow-sm">
											Read More
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>

					{/* Navigation Links */}
					<div className="mt-20 border-t pt-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
							Explore Other Events
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
							<Link href="/events/eucharistic-celebrations" className="group block h-full">
								<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30">
									<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-purple-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            />
                                        </svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700">
										Eucharistic Celebrations
									</h3>
									<p className="text-gray-600 text-sm">
										Spiritual events and religious celebrations for our hospital
										community.
									</p>
								</div>
							</Link>

							<Link href="/events/makapawa" className="group block h-full">
								<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:border-green-200 bg-gradient-to-br from-white to-green-50/30">
									<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<UsersIcon className="w-6 h-6 text-green-600" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700">
										Makapawa Events
									</h3>
									<p className="text-gray-600 text-sm">
										Community-focused healthcare programs and outreach services.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
