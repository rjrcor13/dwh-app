'use client';

import { Button } from '@/components/ui/button';
import { BadgeCheck, Briefcase, Clock, MapPin, ChevronRight, ArrowUpRight, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { jobListings } from '@/app/data/jobListings';

export default function CareerDetails() {
    const { id } = useParams();

    // Find the job
    const job = jobListings.find((j) => j.id === id);

    if (!job) {
        return notFound();
    }

    return (
        <main className="bg-white min-h-screen font-sans text-slate-900 pb-32">

            {/* --- BREADCRUMBS (Sticky Top) --- */}
            <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center text-sm font-medium text-slate-500">
                    <Link href="/home" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <Link href="/careers" className="hover:text-primary transition-colors">
                        Careers
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md">
                        {job.title}
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-12">

                {/* --- HEADER SECTION --- */}
                <div className="max-w-4xl mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold uppercase tracking-wider rounded-full">
                            {job.department}
                        </span>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {job.type}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-heading leading-tight mb-6 tracking-tight">
                        {job.title}
                    </h1>

                    <div className="flex items-center gap-6 text-slate-500 text-lg">
                        <span className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-slate-400" /> {job.location}
                        </span>
                        {/* Optional: Add Date Posted or Reference ID here if available */}
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20">

                    {/* --- LEFT COL (Content) --- */}
                    <div className="md:col-span-8 space-y-16">

                        {/* Hero Image (Content Banner) */}
                        <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                            <Image
                                src={job.image}
                                alt={job.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Description */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                                About the Role
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                                {job.description}
                            </p>
                        </section>

                        {/* Requirements */}
                        {job.requirements && (
                            <section>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading">
                                    Requirements
                                </h3>
                                <ul className="space-y-4">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                                            <div className="mt-1 p-1 rounded-full bg-blue-100 text-primary shrink-0">
                                                <BadgeCheck className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 text-lg leading-relaxed">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Timeline Benefits (Preserved) */}
                        {job.benefits && (
                            <section>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">
                                    Compensation & Growth
                                </h3>
                                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-8 md:pl-12 pb-4 space-y-12">
                                    {/* Phase 1 */}
                                    <div className="relative">
                                        <div className="absolute -left-[45px] md:-left-[61px] top-0 p-2 bg-white border-2 border-slate-100 rounded-full shadow-sm text-primary z-10">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <h5 className="font-bold text-slate-900 text-lg mb-4">Phase 1: Upon Hiring</h5>
                                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                            <ul className="divide-y divide-slate-100">
                                                {job.benefits.hiring.map((b, i) => (
                                                    <li key={i} className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                        <span className="text-slate-600 font-medium">
                                                            {b.includes('₱') ? <span className="text-slate-900 font-bold">{b}</span> : b}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Phase 2 */}
                                    <div className="relative">
                                        <div className="absolute -left-[45px] md:-left-[61px] top-0 p-2 bg-white border-2 border-purple-100 rounded-full shadow-sm text-purple-600 z-10">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                        <h5 className="font-bold text-slate-900 text-lg mb-4">Phase 2: Regularization</h5>
                                        <div className="bg-gradient-to-br from-purple-50/50 to-white rounded-2xl border border-purple-100 shadow-sm overflow-hidden">
                                            <ul className="divide-y divide-purple-100/30">
                                                {job.benefits.regularization.map((b, i) => (
                                                    <li key={i} className="p-4 flex items-start gap-4 hover:bg-white transition-colors">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                                        <span className="text-slate-700 font-medium">{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* --- RIGHT COL (Sticky Sidebar) --- */}
                    <div className="md:col-span-4 relative">
                        <div className="sticky top-32 space-y-6">

                            {/* Application Card */}
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8">
                                <h4 className="font-bold text-slate-900 text-xl mb-2 font-heading">
                                    Interested?
                                </h4>
                                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                    This position is currently open. Please review the requirements before applying.
                                </p>

                                <Button className="w-full h-14 bg-primary hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 text-lg transition-all hover:scale-[1.02] mb-6">
                                    Apply Now
                                </Button>

                                <div className="space-y-4 pt-6 border-t border-slate-100">
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Application</div>
                                        <a href={`mailto:${job.contact?.email}`} className="text-primary font-bold hover:underline block truncate">
                                            {job.contact?.email}
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office</div>
                                        <div className="text-slate-700 font-medium text-sm">
                                            {job.contact?.office} <br />
                                            {job.contact?.landline}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Help Box */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h5 className="font-bold text-slate-900 mb-2 text-sm">Need Help?</h5>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    Contact our HR department directly if you have specific questions about this role.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
