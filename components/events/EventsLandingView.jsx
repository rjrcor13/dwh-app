'use client';

import { Calendar, Users, Heart, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PremiumBadge from '@/components/ui/PremiumBadge';
import AmbientBackground from '@/components/ui/AmbientBackground';

export default function EventsLandingView() {

    const categories = [
        {
            id: 'hospital',
            title: 'Hospital Celebrations',
            description: 'Major institutional milestones, anniversaries, and corporate events celebrating our shared history and achievements.',
            icon: Calendar,
            href: '/events/hospital-celebrations',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'border-blue-100',
            hoverBorder: 'hover:border-blue-300',
            gradient: 'from-blue-600 to-cyan-500',
            button: 'text-blue-600 border-blue-200 hover:bg-blue-50',
            image: '/assets/events/hospital-hero.jpg'
        },
        {
            id: 'makapawa',
            title: 'Makapawa Events',
            description: 'Community outreach programs, medical missions, and charitable initiatives extending our care beyond the hospital walls.',
            icon: Heart,
            href: '/events/makapawa',
            color: 'text-rose-600',
            bg: 'bg-rose-50',
            border: 'border-rose-100',
            hoverBorder: 'hover:border-rose-300',
            gradient: 'from-rose-600 to-pink-500',
            button: 'text-rose-600 border-rose-200 hover:bg-rose-50',
            image: '/assets/events/makapawa-hero.jpg'
        },
        {
            id: 'eucharistic',
            title: 'Eucharistic Celebrations',
            description: 'Spiritual gatherings, daily masses, and religious observances that nourish the soul of our Catholic institution.',
            icon: Star,
            href: '/events/eucharistic-celebrations',
            color: 'text-violet-700',
            bg: 'bg-violet-50',
            border: 'border-violet-100',
            hoverBorder: 'hover:border-violet-300',
            gradient: 'from-violet-600 to-purple-500',
            button: 'text-violet-700 border-violet-200 hover:bg-violet-50',
            image: '/assets/events/eucharistic-hero.jpg'
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50/50 selection:bg-blue-100/50 relative font-sans overflow-hidden" role="main" aria-label="Events Overview">

            {/* Light Mode Ambient Background - Enhanced */}
            <div className="fixed inset-0 pointer-events-none">
                <AmbientBackground variant="light" />
                {/* Extra floating blobs for interest (Optional, if you want to match Careers) */}
                <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" aria-labelledby="events-heading">
                <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block"
                    >
                        <PremiumBadge text="Community & Life" icon={Calendar} className="mb-6 md:mb-8" />

                        <h1 id="events-heading" className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-slate-900 mb-6 md:mb-8 tracking-tight leading-[0.9]">
                            Events at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">Divine Word</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light px-2">
                            Discover the vibrant life of our hospital community. From celebrating milestones and medical missions to nurturing our spiritual foundation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-[1440px] mx-auto px-6 mb-20 md:mb-32 relative z-10" aria-label="Event Categories">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            role="article"
                        >
                            <Link href={category.href} className="group block h-full focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-[2.5rem] transition-shadow" aria-label={`View ${category.title}`}>
                                <div className={`h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 relative overflow-hidden flex flex-col hover:-translate-y-2`}>

                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />

                                    {/* Decor Circle */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110`} />

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-white/50 relative z-10`} aria-hidden="true">
                                        <category.icon className="w-8 h-8" strokeWidth={2} />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors relative z-10">
                                        {category.title}
                                    </h2>

                                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 flex-grow relative z-10">
                                        {category.description}
                                    </p>

                                    <div className={`mt-auto inline-flex items-center text-sm font-bold uppercase tracking-wider ${category.color} group-hover:translate-x-2 transition-transform duration-300 relative z-10`} aria-hidden="true">
                                        Explore Events <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="max-w-[1440px] mx-auto px-6 pb-24 md:pb-32 relative z-10" aria-labelledby="newsletter-heading">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
                >
                    {/* Background Animation */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]"
                            style={{ background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, white 360deg)' }} />
                    </div>

                    {/* Floating Blobs behind CTA */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 id="newsletter-heading" className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 tracking-tight">
                            Stay Updated with Our Latest Events
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 px-4">
                            Join our community mailing list to receive updates about upcoming medical missions, celebrations, and hospital news.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" tabIndex={-1}>
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-0 text-base md:text-lg font-bold h-14 px-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-black/20 focus:ring-4 focus:ring-white/50 transition-all hover:scale-105">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/doctors" tabIndex={-1}>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white font-bold h-14 px-8 rounded-xl focus:ring-4 focus:ring-white/50 transition-all text-base md:text-lg">
                                    Find a Doctor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

        </main>
    );
};
