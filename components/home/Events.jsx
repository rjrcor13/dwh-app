'use client';

import React from 'react';

const featuredBlog = {
	date: '03 Mar 2025',
	title:
		'Introducing our advanced new machine for HYSTEROSCOPY and LAPAROSCOPY',
	excerpt:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
	tags: ['Health', 'Hysteroscopy', 'Laparoscopy'],
	imageUrl: '/assets/featured-blog.jpg', // Replace with your image URL
	link: '/blog/featured',
};

const smallerBlogs = [
	{
		date: '03 Mar 2025',
		title:
			'Introducing our advanced new machine for HYSTEROSCOPY and LAPAROSCOPY',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: ['Health', 'Technology'],
		imageUrl: '/assets/blog-1.jpg', // Replace with your image URL
		link: '/blog/1',
	},
	{
		date: '03 Mar 2025',
		title:
			'Introducing our advanced new machine for HYSTEROSCOPY and LAPAROSCOPY',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: ['Health', 'Medical'],
		imageUrl: '/assets/blog-2.jpg', // Replace with your image URL
		link: '/blog/2',
	},
	{
		date: '03 Mar 2025',
		title:
			'Introducing our advanced new machine for HYSTEROSCOPY and LAPAROSCOPY',
		excerpt:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		tags: ['Science', 'Research'],
		imageUrl: '/assets/blog-3.jpg', // Replace with your image URL
		link: '/blog/3',
	},
];

const EventsSection = () => {
	return (
		<div className="py-12 bg-white">
			<div className="max-w-7xl container_ mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h5 className="text-sm text-indigo-500 font-semibold">
							What's new?
						</h5>
						<h2 className="text-2xl font-bold text-gray-800">
							Our latest blogs
						</h2>
						<p className="text-gray-500 text-sm">
							Explore the latest innovations in healthcare and medical
							technology
						</p>
					</div>
					<a
						href="/blogs"
						className="text-indigo-500 hover:text-indigo-700 font-semibold text-sm"
					>
						View all blogs <span aria-hidden="true">&rarr;</span>
					</a>
				</div>

				{/* Featured Blog */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
					<div className="rounded-lg overflow-hidden shadow-md">
						<img
							src={featuredBlog.imageUrl}
							alt={featuredBlog.title}
							className="w-full h-auto object-cover"
							style={{ minHeight: '200px' }}
						/>
					</div>
					<div>
						<p className="text-gray-500 text-sm mb-2">{featuredBlog.date}</p>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							{featuredBlog.title}
						</h3>
						<p className="text-gray-600 mb-4">{featuredBlog.excerpt}</p>
						<div className="flex items-center space-x-2 mb-4">
							{featuredBlog.tags.map((tag) => (
								<span
									key={tag}
									className="bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1"
								>
									{tag}
								</span>
							))}
						</div>
						<a
							href={featuredBlog.link}
							className="text-indigo-500 hover:text-indigo-700 font-semibold text-sm"
						>
							Read blog <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>

				{/* Smaller Blogs */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{smallerBlogs.map((blog, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden"
						>
							<img
								src={blog.imageUrl}
								alt={blog.title}
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<p className="text-gray-500 text-sm mb-2">{blog.date}</p>
								<h4 className="text-lg font-semibold text-gray-800 mb-2">
									{blog.title}
								</h4>
								<p className="text-gray-600 text-sm mb-3 line-clamp-2">
									{blog.excerpt}
								</p>
								<div className="flex items-center space-x-2 mb-3">
									{blog.tags.map((tag) => (
										<span
											key={tag}
											className="bg-gray-100 text-gray-500 text-xs rounded-full px-2 py-1"
										>
											{tag}
										</span>
									))}
								</div>
								<a
									href={blog.link}
									className="text-indigo-500 hover:text-indigo-700 font-semibold text-sm"
								>
									Read blog <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventsSection;
// 'use client';

// import { CalendarIcon } from '@heroicons/react/20/solid';
// import React from 'react';

// const EventsSection = () => {
// 	const featuredEvent = {
// 		title: 'Annual Health Awareness Week',
// 		date: 'July 10 - July 14, 2025',
// 		description:
// 			'Participate in our annual Health Awareness Week, featuring workshops on disease prevention, mental health sessions, fitness demos, and expert talks. Empower yourself with knowledge for a healthier life!',
// 		link: '/events/health-awareness-2025',
// 		imageUrl: '/assets/featured-awareness.jpg', // Replace with your image URL
// 	};

// 	const eventCategories = [
// 		{
// 			title: 'Eucharistic Celebrations',
// 			events: ['Daily Holy Mass Schedule', 'Makapawa'],
// 		},
// 		{
// 			title: 'Hospital Celebrations',
// 			events: [
// 				'Outreach Programs',
// 				'Catechetical Formation',
// 				'Socio Pastoral Apostolate',
// 				'Community Health Workers (BSHT)',
// 			],
// 		},
// 		// Add more categories and events as needed
// 	];

// 	const primaryColor = 'text-[#1E409C]';
// 	const primaryBg = 'bg-[#1E409C]';
// 	const textPrimary = 'text-gray-900';
// 	const textSecondary = 'text-gray-700';
// 	const categoryBg = 'bg-white';
// 	const categoryBorder = 'border-gray-200';

// 	return (
// 		<div className="bg-gray-100 py-24">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<h2
// 					className={`text-4xl font-bold ${textPrimary} tracking-tight text-center mb-12`}
// 				>
// 					Explore Our Events & Services
// 				</h2>

// 				{/* Featured Event Section */}
// 				<div className="mb-16 rounded-xl shadow-lg overflow-hidden">
// 					<div className="md:grid md:grid-cols-2 md:gap-8">
// 						<div className="relative">
// 							<img
// 								src={featuredEvent.imageUrl}
// 								alt={featuredEvent.title}
// 								className="w-full h-full object-cover"
// 								style={{ minHeight: '350px' }}
// 							/>
// 							<div
// 								className={`absolute top-6 left-6 ${primaryBg} text-white text-sm font-semibold rounded-full px-3 py-1`}
// 							>
// 								Spotlight
// 							</div>
// 						</div>
// 						<div className="p-8 flex flex-col justify-center">
// 							<h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>
// 								{featuredEvent.title}
// 							</h3>
// 							<p
// 								className={`text-sm ${primaryColor} font-medium mb-3 flex items-center`}
// 							>
// 								<CalendarIcon className="h-5 w-5 mr-2" /> {featuredEvent.date}
// 							</p>
// 							<p className={`text-gray-600 text-sm mb-6`}>
// 								{featuredEvent.description}
// 							</p>
// 							<a
// 								href={featuredEvent.link}
// 								className={`inline-block ${primaryBg} text-white font-semibold rounded-md px-5 py-3 hover:bg-[#153172]`}
// 							>
// 								Discover More
// 							</a>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Event Categories Section */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
// 					{eventCategories.map((category) => (
// 						<div
// 							key={category.title}
// 							className={`${categoryBg} rounded-xl shadow-md border ${categoryBorder}`}
// 						>
// 							<div className="p-8">
// 								<h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>
// 									{category.title}
// 								</h3>
// 								<ul className="list-none space-y-3 text-gray-600">
// 									{category.events.map((event, index) => (
// 										<li key={index} className={`pb-2`}>
// 											{event}
// 										</li>
// 									))}
// 								</ul>
// 								{category.events.length > 3 && (
// 									<a
// 										href={`/events/category/${category.title
// 											.toLowerCase()
// 											.replace(/ /g, '-')}`}
// 										className={`inline-block mt-4 ${primaryColor} font-semibold hover:underline`}
// 									>
// 										View All {category.title}
// 									</a>
// 								)}
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default EventsSection;
