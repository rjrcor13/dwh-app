
import { hospitalCelebrations } from '@/app/data/hospitalCelebrations';
import MediaViewer from '@/components/events/EventViewer';
import { Calendar, ChevronLeft, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	return hospitalCelebrations.map((event) => ({
		celebrationId: event.id.toString(),
	}));
}

export default async function HospitalCelebrationDetailsPage({ params }) {
    const { celebrationId } = await params;
	const event = hospitalCelebrations.find((e) => e.id.toString() === celebrationId);

	if (!event) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6">
			<div className="max-w-5xl mx-auto">
				<Link
					href="/events/hospital-celebrations"
					className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors"
				>
					<ChevronLeft className="w-5 h-5 mr-1" />
					Back to Hospital Celebrations
				</Link>

				<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Header */}
					<div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>
                        
						<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 relative z-10">
                            <div className="flex items-center gap-3">
							    <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">
								    {event.category}
							    </span>
                            </div>
						</div>
						
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 leading-tight">
                            {event.title}
                        </h1>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
							<div className="flex items-center bg-black/10 backdrop-blur-sm rounded-lg p-3">
								<Calendar className="w-5 h-5 mr-3 text-blue-200" />
                                <div>
                                    <p className="text-xs text-blue-100 uppercase font-semibold">Date</p>
								    <p className="font-medium">
                                        {event.date}
                                    </p>
                                </div>
							</div>
							<div className="flex items-center bg-black/10 backdrop-blur-sm rounded-lg p-3">
								<Clock className="w-5 h-5 mr-3 text-blue-200" />
                                <div>
                                    <p className="text-xs text-blue-100 uppercase font-semibold">Time</p>
								    <p className="font-medium">{event.time}</p>
                                </div>
							</div>
							<div className="flex items-center bg-black/10 backdrop-blur-sm rounded-lg p-3">
								<MapPin className="w-5 h-5 mr-3 text-blue-200" />
                                <div>
                                    <p className="text-xs text-blue-100 uppercase font-semibold">Location</p>
								    <p className="font-medium">{event.location}</p>
                                </div>
							</div>
						</div>
					</div>

					<div className="p-8 md:p-12">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
							    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    About This Celebration
                                </h2>
							    <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
								    <p>{event.fullDescription || event.description}</p>
							    </div>
                                
                                {event.attendees && (
                                    <div className="flex items-center text-gray-500 bg-gray-50 p-4 rounded-lg inline-flex mb-8">
                                        <Users className="w-5 h-5 mr-3 text-blue-600" />
                                        <span className="font-medium">{event.attendees} people attending</span>
                                    </div>
                                )}

							    <MediaViewer event={event} />
                            </div>

                            <div className="lg:col-span-1">
						        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-8">
							        <h3 className="text-xl font-bold text-gray-900 mb-4">
								        Details
							        </h3>
							        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
								        For more information about this event, please contact the hospital administration office.
							        </p>
							        <button className="w-full bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 active:translate-y-0 text-center">
								        Contact Us
							        </button>
						        </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
}
