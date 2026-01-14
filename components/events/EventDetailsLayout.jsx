'use client';

import { Calendar, Clock, MapPin, ChevronLeft, Home, Share2, Info, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const EventDetailsLayout = ({
    event,
    themeColor = 'blue',
    parentHref,
    parentLabel
}) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: event.title,
            text: `Check out this event: ${event.title}`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    // Theme configurations
    const themes = {
        blue: {
            text: 'text-primary',
            bg: 'bg-blue-50',
            button: 'bg-primary hover:bg-blue-800',
            accent: 'text-blue-600',
            iconBg: 'bg-blue-100 text-primary',
            border: 'border-blue-100',
            blob: 'bg-blue-500/10'
        },
        green: {
            text: 'text-emerald-800',
            bg: 'bg-emerald-50',
            button: 'bg-emerald-700 hover:bg-emerald-800',
            accent: 'text-emerald-700',
            iconBg: 'bg-emerald-100 text-emerald-800',
            border: 'border-emerald-100',
            blob: 'bg-emerald-500/10'
        },
        purple: {
            text: 'text-violet-900',
            bg: 'bg-violet-50',
            button: 'bg-violet-700 hover:bg-violet-800',
            accent: 'text-violet-700',
            iconBg: 'bg-violet-100 text-violet-800',
            border: 'border-violet-100',
            blob: 'bg-violet-500/10'
        }
    };

    const theme = themes[themeColor] || themes.blue;

    return (
        <main className="min-h-screen bg-white selection:bg-slate-100" aria-label={`${event.title} Details`}>
            {/* Sticky Breadcrumb */}
            <nav className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-100" aria-label="Breadcrumb">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center text-sm font-medium text-slate-500">
                    <Link href="/home" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" aria-hidden="true" />
                    <Link href="/events" className="hover:text-primary transition-colors">
                        Events
                    </Link>
                    <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" aria-hidden="true" />
                    <Link href={parentHref} className="hover:text-primary transition-colors">
                        {parentLabel}
                    </Link>
                    <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" aria-hidden="true" />
                    <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md" aria-current="page">
                        {event.title}
                    </span>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8">

                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${theme.bg} ${theme.text}`}>
                                {event.category || 'Event'}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 leading-tight mb-6">
                                {event.title}
                            </h1>
                        </motion.div>

                        {/* Featured Image */}
                        {event.media && event.media[0] && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 mb-12"
                            >
                                {event.media[0].type === 'image' ? (
                                    <Image
                                        src={event.media[0].src}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                        <span className="text-white font-bold">Video Content</span>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg prose-slate max-w-none"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">About the Event</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {event.fullDescription || event.description}
                            </p>
                        </motion.div>

                        {/* Additional Media Grid if exists */}
                        {event.media && event.media.length > 1 && (
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {event.media.slice(1).map((item, idx) => (
                                        <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden">
                                            {item.type === 'image' && (
                                                <Image src={item.src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Event Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 sticky top-32"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Info className={`w-5 h-5 ${theme.accent}`} />
                                Event Details
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl shrink-0 ${theme.iconBg}`}>
                                        <Calendar className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Date</p>
                                        <time className="font-semibold text-slate-900">{event.date}</time>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl shrink-0 ${theme.iconBg}`}>
                                        <Clock className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Time</p>
                                        <time className="font-semibold text-slate-900">{event.time}</time>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl shrink-0 ${theme.iconBg}`}>
                                        <MapPin className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                        <address className="font-semibold text-slate-900 not-italic">{event.location}</address>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-8 border-slate-100" />

                            <div className="space-y-4">
                                <Button className={`w-full py-6 text-base font-bold rounded-xl shadow-lg shadow-blue-900/10 ${theme.button}`}>
                                    Contact Organizer
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={handleShare}
                                    className="w-full py-6 text-base font-bold rounded-xl border-slate-200 hover:bg-slate-50 text-slate-600 transition-all duration-300"
                                >
                                    {isCopied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2 text-emerald-600" />
                                            <span className="text-emerald-600">Link Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Share2 className="w-4 h-4 mr-2" /> Share Event
                                        </>
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Blob */}
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] ${theme.blob} rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none`} />
        </main>
    );
};

export default EventDetailsLayout;
