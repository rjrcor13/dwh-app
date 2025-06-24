// // app/events/page.tsx
// import { Calendar, Clock, MapPin, Users } from 'lucide-react';
// import Link from 'next/link';

// // This would typically come from your API/database
// const eventsData = [
// 	{
// 		id: 1,
// 		title: 'Heart Health Awareness Seminar',
// 		date: '2024-07-15',
// 		time: '10:00 AM - 12:00 PM',
// 		location: 'Main Auditorium',
// 		category: 'Health Education',
// 		attendees: 150,
// 		description:
// 			'Join our cardiology experts for an informative session on maintaining heart health, recognizing warning signs, and preventive care strategies.',
// 	},
// 	{
// 		id: '2',
// 		title: 'Pediatric Care Workshop',
// 		date: '2024-07-20',
// 		time: '2:00 PM - 4:00 PM',
// 		location: 'Conference Room B',
// 		category: 'Medical Training',
// 		attendees: 75,
// 		description:
// 			'Interactive workshop for parents and caregivers on pediatric emergency care and child development milestones.',
// 	},
// 	{
// 		id: 3,
// 		title: 'Mental Health Support Group',
// 		date: '2024-07-25',
// 		time: '6:00 PM - 7:30 PM',
// 		location: 'Wellness Center',
// 		category: 'Support Group',
// 		attendees: 30,
// 		description:
// 			'Weekly support group meeting focusing on stress management and mental wellness strategies.',
// 	},
// ];

// const EventCard = ({ event }) => (
// 	<Link href={`/events/makapawa/${event.id}`} className="block">
// 		<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
// 			<div className="relative h-48 bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-lg">
// 				<div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-lg"></div>
// 				<div className="absolute bottom-4 left-4 text-white">
// 					<span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
// 						{event.category}
// 					</span>
// 				</div>
// 			</div>

// 			<div className="p-6">
// 				<h3 className="text-xl font-semibold text-gray-900 mb-2">
// 					{event.title}
// 				</h3>
// 				<p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

// 				<div className="space-y-2 text-sm text-gray-500">
// 					<div className="flex items-center">
// 						<Calendar className="w-4 h-4 mr-2" />
// 						{new Date(event.date).toLocaleDateString('en-US', {
// 							weekday: 'long',
// 							year: 'numeric',
// 							month: 'long',
// 							day: 'numeric',
// 						})}
// 					</div>
// 					<div className="flex items-center">
// 						<Clock className="w-4 h-4 mr-2" />
// 						{event.time}
// 					</div>
// 					<div className="flex items-center">
// 						<MapPin className="w-4 h-4 mr-2" />
// 						{event.location}
// 					</div>
// 					<div className="flex items-center">
// 						<Users className="w-4 h-4 mr-2" />
// 						{event.attendees} attending
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</Link>
// );

// export default function MakapawaPage() {
// 	return (
// 		<div className="min-h-screen bg-gray-50 py-8 px-4">
// 			<div className="max-w-6xl mx-auto">
// 				<div className="text-center mb-12">
// 					<h1 className="text-4xl font-bold text-gray-900 mb-4">
// 						Upcoming Events
// 					</h1>
// 					<p className="text-xl text-gray-600">
// 						Join us for educational seminars, support groups, and community
// 						health initiatives
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{eventsData.map((event) => (
// 						<EventCard key={event.id} event={event} />
// 					))}
// 				</div>

// 				<div className="text-center mt-12">
// 					<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
// 						View All Events
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
// app/events/makapawa/page.tsx
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

// This would typically come from your API/database
const makapawaEvents = [
	{
		id: 1,
		title: 'Makapawa Health Screening Program',
		date: '2024-07-15',
		time: '8:00 AM - 5:00 PM',
		location: 'Community Center Hall A',
		category: 'Community Health',
		attendees: 200,
		description:
			'Free comprehensive health screening for the community including blood pressure, diabetes, and cholesterol checks.',
	},
	{
		id: 2,
		title: 'Makapawa Nutrition Workshop',
		date: '2024-07-22',
		time: '2:00 PM - 4:00 PM',
		location: 'Main Conference Room',
		category: 'Health Education',
		attendees: 85,
		description:
			'Learn about proper nutrition, meal planning, and healthy cooking techniques for Filipino families.',
	},
	{
		id: 3,
		title: 'Makapawa Senior Care Program',
		date: '2024-07-28',
		time: '9:00 AM - 12:00 PM',
		location: 'Senior Activity Center',
		category: 'Senior Care',
		attendees: 45,
		description:
			'Special healthcare program designed for senior citizens including health monitoring and wellness activities.',
	},
];

const EventCard = ({ event }) => (
	<Link href={`/events/makapawa/${event.id}`} className="block">
		<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
			<div className="relative h-48 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-lg">
				<div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-lg"></div>
				<div className="absolute bottom-4 left-4 text-white">
					<span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
						{event.category}
					</span>
				</div>
				<div className="absolute top-4 right-4">
					<span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
						MAKAPAWA
					</span>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-semibold text-gray-900 mb-2">
					{event.title}
				</h3>
				<p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

				<div className="space-y-2 text-sm text-gray-500">
					<div className="flex items-center">
						<Calendar className="w-4 h-4 mr-2" />
						{new Date(event.date).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</div>
					<div className="flex items-center">
						<Clock className="w-4 h-4 mr-2" />
						{event.time}
					</div>
					<div className="flex items-center">
						<MapPin className="w-4 h-4 mr-2" />
						{event.location}
					</div>
					<div className="flex items-center">
						<Users className="w-4 h-4 mr-2" />
						{event.attendees} attending
					</div>
				</div>
			</div>
		</div>
	</Link>
);

export default function MakapawaEventsPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Breadcrumb */}
				<nav className="mb-6">
					<Link href="/events" className="text-blue-600 hover:text-blue-800">
						Events
					</Link>
					<span className="mx-2 text-gray-500">/</span>
					<span className="text-gray-700">Makapawa Events</span>
				</nav>

				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
						<span className="text-green-600 font-bold text-xl">M</span>
					</div>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Makapawa Events
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Community-focused healthcare programs designed to serve and support
						our local Makapawa community with accessible health services and
						education.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{makapawaEvents.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>

				<div className="text-center mt-12">
					<button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
						View All Makapawa Events
					</button>
				</div>

				{/* Other Event Categories */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
					<Link href="/events/eucharistic-celebrations" className="block">
						<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Eucharistic Celebrations
							</h3>
							<p className="text-gray-600">
								Spiritual events and religious celebrations for our hospital
								community.
							</p>
						</div>
					</Link>

					<Link href="/events/hospital-celebrations" className="block">
						<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Hospital Celebrations
							</h3>
							<p className="text-gray-600">
								Special occasions, anniversaries, and milestone celebrations.
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
