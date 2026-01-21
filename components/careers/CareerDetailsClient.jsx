'use client';

import { Button } from '@/components/ui/button';
import { BadgeCheck, Briefcase, Clock, MapPin, ChevronRight, ArrowUpRight, Home, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CareerDetailsClient({ job }) {
    if (!job) {
        return notFound();
    }

    return (
        <main className="bg-slate-50 min-h-screen font-sans text-slate-900 pb-32 relative selection:bg-blue-100/50">

            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-70" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
            </div>

            {/* --- BREADCRUMBS (Sticky Top) --- */}
            <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center text-sm font-medium text-slate-500">
                    <Link href="/home" className="hover:text-primary transition-colors flex items-center gap-2 group">
                        <Home className="w-4 h-4 group-hover:text-secondary transition-colors" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <Link href="/careers" className="hover:text-primary transition-colors">
                        Careers
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md bg-white/50 px-3 py-1 rounded-full border border-white/50">
                        {job.title}
                    </span>
                </div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-12">

                {/* --- HEADER SECTION --- */}
                <div className="max-w-5xl mb-16">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-white border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                            <Briefcase className="w-3.5 h-3.5 text-secondary" /> {job.department}
                        </span>
                        <span className="px-4 py-1.5 bg-white border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-emerald-500" /> {job.type}
                        </span>
                        <span className="px-4 py-1.5 bg-white border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-purple-500" /> {job.location}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 font-heading leading-tight mb-8 tracking-tight drop-shadow-sm">
                        {job.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl">
                        Become a key part of our {job.department} team and help us deliver compassionate care to the community.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20">

                    {/* --- LEFT COL (Content) --- */}
                    <div className="md:col-span-8 space-y-16">

                        {/* Hero Image (Content Banner) */}
                        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 ring-1 ring-black/5 group">
                            <Image
                                src={job.image}
                                alt={job.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                        </div>

                        {/* Description */}
                        <section className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100/50">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-50 rounded-2xl text-primary">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                                    About the Role
                                </h3>
                            </div>
                            <p className="text-slate-600 text-lg leading-loose font-light">
                                {job.description}
                            </p>
                        </section>

                        {/* Requirements */}
                        {job.requirements && (
                            <section>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading px-4">
                                    Requirements
                                </h3>
                                <ul className="grid gap-4">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx} className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                                            <div className="mt-1 p-2 rounded-xl bg-blue-50 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <BadgeCheck className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 text-lg leading-relaxed pt-0.5">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Timeline Benefits */}
                        {job.benefits && (
                            <section className="relative">
                                <h3 className="text-2xl font-bold text-slate-900 mb-10 font-heading px-4">
                                    Compensation & Growth
                                </h3>
                                <div className="absolute left-10 md:left-12 top-20 bottom-10 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent" />

                                <div className="space-y-12">
                                    {/* Phase 1 */}
                                    <div className="relative pl-24 md:pl-28">
                                        <div className="absolute left-4 md:left-6 top-0 p-3 bg-white border-4 border-blue-50 rounded-full shadow-sm text-primary z-10">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <h5 className="font-bold text-slate-900 text-xl mb-6">Phase 1: Upon Hiring</h5>
                                        <div className="bg-white rounded-[2rem] border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                            <ul className="divide-y divide-slate-50">
                                                {job.benefits.hiring.map((b, i) => (
                                                    <li key={i} className="p-6 flex items-start gap-4 hover:bg-blue-50/30 transition-colors">
                                                        <div className="mt-2.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                                        <span className="text-slate-600 font-medium text-lg">
                                                            {b.includes('₱') ? <span className="text-slate-900 font-bold bg-yellow-50 px-2 py-0.5 rounded-md -ml-2">{b}</span> : b}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Phase 2 */}
                                    <div className="relative pl-24 md:pl-28">
                                        <div className="absolute left-4 md:left-6 top-0 p-3 bg-white border-4 border-purple-50 rounded-full shadow-sm text-purple-600 z-10">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                        <h5 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-3">
                                            Phase 2: Regularization
                                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">Milestone</span>
                                        </h5>
                                        <div className="bg-gradient-to-br from-purple-50/80 to-white rounded-[2rem] border border-purple-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                            <ul className="divide-y divide-purple-100/50">
                                                {job.benefits.regularization.map((b, i) => (
                                                    <li key={i} className="p-6 flex items-start gap-4 hover:bg-white/80 transition-colors">
                                                        <div className="mt-2.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                                                        <span className="text-slate-700 font-medium text-lg">{b}</span>
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
                        <div className="sticky top-32 space-y-8">

                            {/* Application Card */}
                            <div className="bg-white rounded-[2rem] border border-white shadow-2xl shadow-blue-900/10 p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-slate-900 text-xl font-heading">
                                            Interested?
                                        </h4>
                                        <span className="flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                        </span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                        This position is currently <span className="text-emerald-600 font-bold">Open</span>. applying is simple and secure.
                                    </p>

                                    <Button className="w-full h-14 bg-gradient-to-r from-primary to-blue-700 hover:to-blue-800 text-white font-bold rounded-2xl shadow-lg shadow-blue-900/20 text-lg transition-all hover:scale-[1.02] hover:shadow-xl mb-6 relative overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Apply Now <ChevronRight className="w-5 h-5" />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform" />
                                    </Button>

                                    <div className="space-y-5 pt-6 border-t border-slate-100">
                                        <div className="group/item">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover/item:text-blue-500 transition-colors">Email Application</div>
                                            <Link href={`mailto:${job.contact?.email}`} className="text-slate-700 font-bold hover:text-primary transition-colors flex items-center gap-2 truncate">
                                                <span className="p-1.5 bg-slate-50 rounded-lg group-hover/item:bg-blue-50 transition-colors"><Briefcase className="w-4 h-4" /></span>
                                                {job.contact?.email}
                                            </Link>
                                        </div>
                                        <div className="group/item">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover/item:text-blue-500 transition-colors">Office</div>
                                            <div className="text-slate-700 font-medium text-sm flex items-start gap-2">
                                                <span className="p-1.5 bg-slate-50 rounded-lg group-hover/item:bg-blue-50 transition-colors mt-0.5"><MapPin className="w-4 h-4" /></span>
                                                <div>
                                                    {job.contact?.office} <br />
                                                    <span className="text-slate-400 text-xs">{job.contact?.landline}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Help Box */}
                            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                                <h5 className="font-bold text-slate-900 mb-2 text-base flex items-center gap-2">
                                    <span className="p-1.5 bg-blue-100 text-primary rounded-lg group-hover:scale-110 transition-transform"><Briefcase className="w-4 h-4" /></span>
                                    Need Help?
                                </h5>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    Contact our HR department directly if you have specific questions about this role.
                                </p>
                                <Link href="/contact-us" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                                    Contact Support <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
