'use client';

import { Calendar, Users, Heart, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const EventsLandingPage = () => {

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
            image: '/assets/events/hospital-hero.jpg' // Placeholder or remove if no images yet
        },
        {
            id: 'makapawa',
            title: 'Makapawa Events',
            description: 'Community outreach programs, medical missions, and charitable initiatives extending our care beyond the hospital walls.',
            icon: Heart,
            href: '/events/makapawa',
            color: 'text-emerald-700',
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
            hoverBorder: 'hover:border-emerald-300',
            gradient: 'from-emerald-600 to-teal-500',
            button: 'text-emerald-700 border-emerald-200 hover:bg-emerald-50',
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
        <div className="min-h-screen bg-slate-50 selection:bg-blue-100/50">
            {/* Hero Section */}
            <div className="relative bg-white pt-24 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-8">
                            <Calendar className="w-4 h-4" />
                            <span>Community & Life</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                            Events at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Divine Word</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Discover the vibrant life of our hospital community. From celebrating milestones and medical missions to nurturing our spiritual foundation.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                        >
                            <Link href={category.href} className="group block h-full">
                                <div className={`h-full bg-white rounded-3xl p-8 border ${category.border} ${category.hoverBorder} shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden`}>

                                    {/* Hover Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="w-7 h-7" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-8">
                                        {category.description}
                                    </p>

                                    <div className={`inline-flex items-center font-bold ${category.color} group-hover:translate-x-2 transition-transform duration-300`}>
                                        Explore Events <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Newsletter / CTA Section (Optional filler for "Modern Premium" feel) */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite]"
                            style={{ background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, white 360deg)' }} />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated with Our Latest Events
                        </h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                            Join our community mailing list to receive updates about upcoming medical missions, celebrations, and hospital news.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-0 font-bold h-14 px-8 rounded-xl shadow-lg shadow-black/20">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/doctors">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 font-bold h-14 px-8 rounded-xl">
                                    Find a Doctor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventsLandingPage;
