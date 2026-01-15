'use client';

import { contactInfo } from '@/app/data/contactInfo';
import AmbientBackground from '@/components/ui/AmbientBackground';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertCircle, Ambulance, Clock, MapPin, Phone, ShieldAlert } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EmergencyPage = () => {
    const phoneInfo = contactInfo.find((info) => info.title === 'Phone');
    const addressInfo = contactInfo.find((info) => info.title === 'Location');

    // Using the phone number from contact info, but stripping non-digits for tel: link
    const phoneNumber = phoneInfo?.text || '+63 909 123 3340';
    const telLink = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 relative font-sans selection:bg-red-100 pb-20">
            {/* Custom Red/White Ambient Background for Emergency context */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="relative z-10 pt-28 md:pt-40 px-4 md:px-8 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Hero Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm tracking-wide uppercase mb-6 shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        24/7 Emergency Services
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 mb-8 leading-[0.9]">
                        Emergency <span className="text-red-600">Response</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Immediate, compassionate, and expert care when every second counts.
                        Our Emergency Room is open 24 hours a day, 7 days a week.
                    </motion.p>
                </div>

                {/* Main Action Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                    {/* Hotline Card */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-red-100 shadow-2xl shadow-red-900/5 p-8 md:p-12 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-red-500/20">
                            <Phone className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Emergency Hotline</h2>
                        <p className="text-slate-500 mb-8">Call us immediately for ambulance or emergency assistance.</p>

                        <a href={telLink} className="text-4xl md:text-6xl font-black text-red-600 font-mono tracking-tighter hover:scale-105 transition-transform cursor-pointer">
                            {phoneNumber}
                        </a>

                        <Button asChild size="lg" className="mt-8 bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 h-12 md:h-14 text-lg font-bold shadow-lg shadow-red-600/30">
                            <a href={telLink}>Call Now</a>
                        </Button>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white shadow-2xl p-0 group">
                        {/* Map Background Overlay */}
                        <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhc0ffdNwCDMR7Alq8Y_bEqA&key=YOUR_API_KEY_HERE_IF_NEEDED_OTHERWISE_USE_LINK_BELOW"
                                className="w-full h-full object-cover pointer-events-none"
                                title="Map Background"
                            />
                            {/* Fallback visual if iframe fails or looks bad */}
                            <div className="absolute inset-0 bg-[url('/assets/map-pattern.png')] bg-cover bg-center" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />

                        <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end">
                            <div className="mb-auto">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                                    <MapPin className="w-3 h-3" /> Location
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 leading-tight">Divine Word Hospital <br /> Emergency Entrance</h2>
                            <p className="text-slate-300 text-lg mb-8 max-w-md">{addressInfo?.text || 'Avenida Veteranos Street, Tacloban City, Leyte'}</p>

                            <Button asChild variant="outline" size="lg" className="bg-white text-slate-900 border-none hover:bg-blue-50 w-full md:w-auto rounded-xl h-12 md:h-14 font-bold">
                                <a href={addressInfo?.href || "https://maps.google.com"} target="_blank" rel="noopener noreferrer">
                                    Get Directions
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Information Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: Ambulance,
                            title: "Ambulance Service",
                            desc: "Fully equipped ambulances ready for patient transport and onboard life support."
                        },
                        {
                            icon: ShieldAlert,
                            title: "Trauma Care",
                            desc: "Level 3 capability to handle critical injuries, accidents, and life-threatening conditions."
                        },
                        {
                            icon: Clock,
                            title: "Rapid Triage",
                            desc: "Systematic prioritization ensuring critical patients receive immediate attention."
                        }
                    ].map((item, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* When to visit guide */}
                <motion.div variants={itemVariants} className="bg-slate-100/50 rounded-[2.5rem] p-8 md:p-12 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">When to go to the ER?</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Seeking emergency care is crucial for life-threatening conditions. If you or someone else is experiencing any of the following, do not hesitate to come to the ER or call for an ambulance.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Chest pain or difficulty breathing', 'Severe bleeding or head trauma', 'Sudden loss of consciousness', 'Severe allergic reactions', 'Broken bones / deep wounds', 'High fever with stiff neck'].map((symptom) => (
                                    <div key={symptom} className="flex items-center gap-3 text-slate-700 font-medium bg-white px-4 py-3 rounded-xl border border-slate-200">
                                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        {symptom}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-full aspect-square max-w-xs bg-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/10 p-8 border-4 border-white">
                                <div className="text-center">
                                    <div className="text-6xl font-black text-primary font-heading mb-2">24/7</div>
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Always Open</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Quick footer link back to home if needed, just a spacer mostly */}
            <div className="h-20" />
        </div>
    );
};

export default EmergencyPage;
