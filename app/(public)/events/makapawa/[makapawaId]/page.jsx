// // app/events/[id]/page.tsx

// import MediaViewer from '@/components/events/EventViewer';
// import { Calendar, ChevronLeft, Clock, MapPin, Users } from 'lucide-react';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';

// // This would typically come from your API/database
// async function getEvent(id) {
// 	const eventsData = [
// 		{
// 			id: 1,
// 			title: 'Heart Health Awareness Seminar',
// 			date: '2024-07-15',
// 			time: '10:00 AM - 12:00 PM',
// 			location: 'Main Auditorium',
// 			category: 'Health Education',
// 			attendees: 150,
// 			description:
// 				'Join our cardiology experts for an informative session on maintaining heart health, recognizing warning signs, and preventive care strategies.',
// 			fullDescription:
// 				'This comprehensive seminar will cover the latest developments in cardiovascular health, including dietary recommendations, exercise protocols, and early detection methods. Our panel of experienced cardiologists will share insights from recent research and answer your questions about maintaining optimal heart health throughout your lifetime.',
// 			images: [
// 				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
// 				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
// 				'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
// 			],
// 			videos: [
// 				{
// 					url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
// 					thumbnail:
// 						'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
// 				},
// 			],
// 		},
// 		{
// 			id: '2',
// 			title: 'Pediatric Care Workshop',
// 			date: '2024-07-20',
// 			time: '2:00 PM - 4:00 PM',
// 			location: 'Conference Room B',
// 			category: 'Medical Training',
// 			attendees: 75,
// 			description:
// 				'Interactive workshop for parents and caregivers on pediatric emergency care and child development milestones.',
// 			fullDescription:
// 				'This hands-on workshop provides essential knowledge for parents and caregivers, covering emergency first aid for children, recognizing developmental delays, and understanding when to seek medical attention. Includes practical demonstrations and Q&A sessions with pediatric specialists.',
// 			images: [
// 				'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
// 				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
// 			],
// 			videos: [],
// 		},
// 		{
// 			id: 3,
// 			title: 'Mental Health Support Group',
// 			date: '2024-07-25',
// 			time: '6:00 PM - 7:30 PM',
// 			location: 'Wellness Center',
// 			category: 'Support Group',
// 			attendees: 30,
// 			description:
// 				'Weekly support group meeting focusing on stress management and mental wellness strategies.',
// 			fullDescription:
// 				'Join our supportive community for open discussions about mental health challenges, coping strategies, and wellness techniques. Led by licensed therapists, this group provides a safe space for sharing experiences and learning from others on similar journeys.',
// 			images: [
// 				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
// 			],
// 			videos: [
// 				{
// 					url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
// 					thumbnail:
// 						'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
// 				},
// 			],
// 		},
// 	];

// 	const event = eventsData.find((e) => e.id === parseInt(id));
// 	return event;
// }

// export default async function EventDetailsPage(params) {
// 	const event = await getEvent(params.id);

// 	if (!event) {
// 		notFound();
// 	}

// 	return (
// 		<div className="min-h-screen bg-gray-50 py-8 px-4">
// 			<div className="max-w-4xl mx-auto">
// 				<Link
// 					href="/events"
// 					className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
// 				>
// 					<ChevronLeft className="w-5 h-5 mr-1" />
// 					Back to Events
// 				</Link>

// 				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
// 					<div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8">
// 						<span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">
// 							{event.category}
// 						</span>
// 						<h1 className="text-3xl font-bold mt-4 mb-2">{event.title}</h1>
// 						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
// 							<div className="flex items-center">
// 								<Calendar className="w-5 h-5 mr-2" />
// 								{new Date(event.date).toLocaleDateString('en-US', {
// 									weekday: 'long',
// 									year: 'numeric',
// 									month: 'long',
// 									day: 'numeric',
// 								})}
// 							</div>
// 							<div className="flex items-center">
// 								<Clock className="w-5 h-5 mr-2" />
// 								{event.time}
// 							</div>
// 							<div className="flex items-center">
// 								<MapPin className="w-5 h-5 mr-2" />
// 								{event.location}
// 							</div>
// 						</div>
// 					</div>

// 					<div className="p-8">
// 						<div className="mb-8">
// 							<h2 className="text-2xl font-semibold mb-4">About This Event</h2>
// 							<p className="text-gray-700 leading-relaxed">
// 								{event.fullDescription}
// 							</p>
// 							<div className="mt-4 flex items-center text-gray-500">
// 								<Users className="w-5 h-5 mr-2" />
// 								{event.attendees} people attending
// 							</div>
// 						</div>

// 						<MediaViewer event={event} />

// 						<div className="bg-gray-50 rounded-lg p-6">
// 							<h3 className="text-xl font-semibold mb-4">
// 								Register for This Event
// 							</h3>
// 							<p className="text-gray-600 mb-4">
// 								Secure your spot at this upcoming event. Registration is free
// 								and open to all community members.
// 							</p>
// 							<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
// 								Register Now
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// // Generate static params for static generation (optional)
// export async function generateStaticParams() {
// 	return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }
// app/events/makapawa/[makapawaId]/page.tsx

import MediaViewer from '@/components/events/EventViewer';
import { Calendar, ChevronLeft, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from your API/database
async function getMakapawaEvent(id) {
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
			fullDescription:
				'Our Makapawa Health Screening Program offers comprehensive health assessments for community members of all ages. This free program includes blood pressure monitoring, diabetes screening, cholesterol testing, BMI calculation, and basic vision screening. Our medical team will provide personalized health recommendations and referrals when necessary. No appointment needed - walk-ins are welcome throughout the day.',
			images: [
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
			],
			videos: [
				{
					url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
					thumbnail:
						'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
				},
			],
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
			fullDescription:
				'This interactive nutrition workshop is specifically designed for Filipino families in the Makapawa community. Learn about balanced meal planning using locally available ingredients, budget-friendly healthy recipes, and traditional Filipino dishes with a healthy twist. Our registered dietitians will provide practical tips for managing diabetes, hypertension, and other common health conditions through proper nutrition.',
			images: [
				'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
			],
			videos: [],
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
			fullDescription:
				'Our Senior Care Program is tailored specifically for elderly members of the Makapawa community. This program includes health monitoring, medication management education, fall prevention exercises, and social activities to promote overall wellness. Family members are encouraged to attend to learn how to better support their elderly loved ones at home.',
			images: [
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
			],
			videos: [
				{
					url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
					thumbnail:
						'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
				},
			],
		},
	];

	const event = makapawaEvents.find((e) => e.id === parseInt(id));
	return event;
}

export default async function MakapawaEventDetailsPage({ params }) {
	const event = await getMakapawaEvent(params.makapawaId);

	if (!event) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-4xl mx-auto">
				<Link
					href="/events/makapawa"
					className="flex items-center text-green-600 hover:text-green-800 mb-6"
				>
					<ChevronLeft className="w-5 h-5 mr-1" />
					Back to Makapawa Events
				</Link>

				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8">
						<div className="flex items-center justify-between mb-4">
							<span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">
								{event.category}
							</span>
							<span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
								MAKAPAWA EVENT
							</span>
						</div>
						<h1 className="text-3xl font-bold mt-4 mb-2">{event.title}</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
							<div className="flex items-center">
								<Calendar className="w-5 h-5 mr-2" />
								{new Date(event.date).toLocaleDateString('en-US', {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</div>
							<div className="flex items-center">
								<Clock className="w-5 h-5 mr-2" />
								{event.time}
							</div>
							<div className="flex items-center">
								<MapPin className="w-5 h-5 mr-2" />
								{event.location}
							</div>
						</div>
					</div>

					<div className="p-8">
						<div className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">About This Event</h2>
							<p className="text-gray-700 leading-relaxed">
								{event.fullDescription}
							</p>
							<div className="mt-4 flex items-center text-gray-500">
								<Users className="w-5 h-5 mr-2" />
								{event.attendees} people attending
							</div>
						</div>

						<MediaViewer event={event} />

						<div className="bg-gray-50 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4">
								Register for This Event
							</h3>
							<p className="text-gray-600 mb-4">
								Secure your spot at this upcoming event. Registration is free
								and open to all community members.
							</p>
							<button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
								Register Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
	return [{ makapawaId: '1' }, { makapawaId: '2' }, { makapawaId: '3' }];
}
