'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, ClockIcon, MapPinIcon, Home, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const EventCategoryLayout = ({
    title,
    titleHighlight,
    description,
    badgeText,
    icon: Icon,
    themeColor = 'blue', // blue, green, purple
    events = [],
    breadcrumbLabel,
    relatedLinks = []
}) => {

    // Theme Color configurations
    const themes = {
        blue: {
            bg: 'bg-slate-50',
            text: 'text-primary',
            border: 'border-slate-200',
            hoverBorder: 'hover:border-primary/30',
            iconBg: 'bg-blue-50 text-primary',
            gradient: 'from-primary via-blue-700 to-blue-600',
            linkText: 'text-primary group-hover:text-blue-700',
            arrowBorder: 'border-blue-200',
            arrowText: 'text-primary',
            blob: 'bg-primary/20'
        },
        green: {
            bg: 'bg-slate-50',
            text: 'text-emerald-800',
            border: 'border-emerald-100',
            hoverBorder: 'hover:border-emerald-500/30',
            iconBg: 'bg-emerald-50 text-emerald-700',
            gradient: 'from-emerald-700 to-teal-600',
            linkText: 'text-emerald-700 group-hover:text-emerald-900',
            arrowBorder: 'border-emerald-200',
            arrowText: 'text-emerald-700',
            blob: 'bg-emerald-500/10'
        },
        purple: {
            bg: 'bg-slate-50',
            text: 'text-violet-900',
            border: 'border-violet-100',
            hoverBorder: 'hover:border-violet-500/30',
            iconBg: 'bg-violet-50 text-violet-700',
            gradient: 'from-violet-800 to-purple-600',
            linkText: 'text-violet-700 group-hover:text-violet-900',
            arrowBorder: 'border-violet-200',
            arrowText: 'text-violet-700',
            blob: 'bg-violet-500/10'
        }
    };

    const theme = themes[themeColor] || themes.blue;

    const renderMediaItemThumbnail = (mediaItem, index, className) => {
        if (!mediaItem) return (
            <div className="h-full w-full bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 text-sm">No Preview</span>
            </div>
        );

        if (mediaItem.type === 'image') {
            return (
                <div className={`relative w-full ${className}`}>
                    <Image
                        src={mediaItem.src}
                        alt={`Media ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            );
        }
        return (
            <div className={`relative w-full ${className} bg-slate-800 flex items-center justify-center`}>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Video Content</span>
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-white selection:bg-slate-100">

            {/* Sticky Breadcrumb */}
            <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center text-sm font-medium text-slate-500">
                    <Link href="/home" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <Link href="/events" className="hover:text-primary transition-colors">
                        Events
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <span className="text-slate-900 font-bold">
                        {breadcrumbLabel}
                    </span>
                </div>
            </div>

            {/* Hero Header */}
            <section className="relative pt-24 pb-20 overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        {/* Custom Pill Badge Style */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg shadow-blue-900/5 ring-1 ring-black/5">
                            <Icon className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold tracking-widest uppercase text-blue-900">
                                {badgeText || 'Community & Life'}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 mb-8 tracking-tighter leading-[0.9]"
                    >
                        {title} {titleHighlight && <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>{titleHighlight}</span>}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light px-4"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Ambient Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/50 to-indigo-50/20 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Events Grid */}
            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link href={`/events/${breadcrumbLabel.toLowerCase().replace(/ /g, '-')}/${event.id}`} className="block h-full">
                                    <div className="group h-full bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">

                                        {/* Image Container */}
                                        <div className="relative h-72 overflow-hidden">
                                            {renderMediaItemThumbnail(event.media?.[0], 0, 'h-full')}

                                            {/* Gradient Overlay on Hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                            {/* Date Badge */}
                                            <div className={`absolute top-4 right-4 ${theme.bg} ${theme.text} ring-1 ring-black/5 text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-md`}>
                                                {event.date}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col h-full relative">
                                            {/* Decorative top sheen */}
                                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                                            <h3 className={`text-2xl font-bold font-heading text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:${theme.text} transition-colors`}>
                                                {event.title}
                                            </h3>

                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center text-sm font-medium text-slate-500">
                                                    <ClockIcon className={`w-4 h-4 mr-3 shrink-0 ${theme.text} opacity-70`} />
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center text-sm font-medium text-slate-500">
                                                    <MapPinIcon className={`w-4 h-4 mr-3 shrink-0 ${theme.text} opacity-70`} />
                                                    {event.location}
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center gap-2 font-bold text-sm tracking-wide transition-all duration-300 group-hover:gap-3 cursor-pointer">
                                                <span className={`${theme.linkText} transition-colors duration-300`}>Read More</span>
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${theme.arrowBorder} ${theme.arrowText} group-hover:bg-current group-hover:text-white transition-all duration-300`}>
                                                    <ArrowRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-32 border-t border-slate-200/60 pt-20">
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 block">Discover More</span>
                            <h3 className="text-3xl font-bold text-slate-900 font-heading">
                                Explore Other Categories
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {relatedLinks.map((link, idx) => (
                                <Link key={idx} href={link.href} className="group block">
                                    <div className="bg-white/50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center gap-6 h-full backdrop-blur-sm">
                                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${link.bgColor} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                            <link.icon className={`w-8 h-8 ${link.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                                                {link.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                                {link.description}
                                            </p>
                                        </div>
                                        <div className={`ml-auto w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:${link.color} group-hover:border-current transition-colors`}>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default EventCategoryLayout;
