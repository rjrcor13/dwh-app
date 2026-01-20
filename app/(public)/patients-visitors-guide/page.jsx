'use client';

import { tabList } from '@/app/data/patients';
import DynamicIcons from '@/components/dynamicIcons/DynamicIcons';
import AmbientBackground from '@/components/ui/AmbientBackground';
import { Button } from '@/components/ui/button';
import PremiumBadge from '@/components/ui/PremiumBadge';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BedDouble, Building2, ChevronRight, Clock, CreditCard, FileText, Heart, ShieldAlert, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const PatientsVisitorsGuidePage = () => {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Main navigation cards
    const mainGuides = [
        {
            title: "For Patients",
            description: "Information to guide you through every stage of your hospital stay—from admission to discharge.",
            icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
            href: "/patients-visitors-guide/patients",
            color: "text-rose-500",
            bgVars: "bg-rose-500/5 group-hover:bg-rose-500/10",
            shadowVars: "shadow-rose-200/50 hover:shadow-rose-900/10",
            decorGradient: "from-rose-50",
            iconBg: "from-white to-rose-50",
            buttonBg: "bg-rose-500 hover:bg-rose-600 shadow-rose-500/20 hover:shadow-rose-600/30",
            buttonText: "Patient Guide"
        },
        {
            title: "Visitors & Watchers",
            description: "Guidelines for hospital visitors, watchers, and special protocols to ensure patient safety.",
            icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
            href: "/patients-visitors-guide/visitors-watchers",
            color: "text-blue-500",
            bgVars: "bg-blue-500/5 group-hover:bg-blue-500/10",
            shadowVars: "shadow-blue-200/50 hover:shadow-blue-900/10",
            decorGradient: "from-blue-50",
            iconBg: "from-white to-blue-50",
            buttonBg: "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20 hover:shadow-blue-600/30",
            buttonText: "Visitor Policy"
        },
        {
            title: "Billing & Insurance",
            description: "Details on billing procedures, HMO coverage, PhilHealth, and medical records.",
            icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" />,
            href: "/patients-visitors-guide/billing-insurance",
            color: "text-indigo-500",
            bgVars: "bg-indigo-500/5 group-hover:bg-indigo-500/10",
            shadowVars: "shadow-indigo-200/50 hover:shadow-indigo-900/10",
            decorGradient: "from-indigo-50",
            iconBg: "from-white to-indigo-50",
            buttonBg: "bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/20 hover:shadow-indigo-600/30",
            buttonText: "View Billing"
        }
    ];

    return (
        <div className="bg-slate-50/50 min-h-screen relative font-sans selection:bg-blue-100 pb-32 overflow-hidden">
            {/* Light Mode Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <AmbientBackground variant="light" />
            </div>

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Hero Section */}
                <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-4 md:px-6">
                    <div className="max-w-[1440px] mx-auto text-center">
                        <motion.div variants={itemVariants}>
                            <PremiumBadge text="Helpful Resources" className="mb-6 md:mb-8" />
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 mb-6 md:mb-8 tracking-tight leading-[0.9]"
                        >
                            Patient & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">Visitor Guide</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light px-2"
                        >
                            Everything you need to know for a comfortable stay and visit. We are dedicated to providing a healing environment for our patients and their loved ones.
                        </motion.p>
                    </div>
                </section>

                {/* Quick Navigation Cards */}
                <section className="px-4 md:px-6 mb-20 md:mb-32">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {mainGuides.map((guide, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="group relative">
                                <div className={`absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] blur-2xl transition-colors duration-500 ${guide.bgVars}`} />
                                <div className={`relative h-full bg-white/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col ${guide.shadowVars}`}>
                                    {/* Decor */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br to-transparent rounded-bl-full opacity-50 transition-transform duration-700 group-hover:scale-110 ${guide.decorGradient}`} />

                                    <div className="relative z-10 flex-grow">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br border border-white shadow-lg flex items-center justify-center mb-6 md:mb-8 hover:scale-110 transition-all duration-500 ${guide.iconBg} ${guide.color}`}>
                                            {guide.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">{guide.title}</h3>
                                        <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed font-light">
                                            {guide.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 mt-auto">
                                        <Link href={guide.href} className={`inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group/btn text-sm md:text-base ${guide.buttonBg}`}>
                                            {guide.buttonText} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Content Overview */}
                <section className="px-6 max-w-[1440px] mx-auto">
                    {/* Patient Resources Preview */}
                    <div className="mb-20">
                        <motion.div variants={itemVariants} className="flex items-end justify-between mb-8 md:mb-12 px-2 border-b border-slate-200 pb-6 md:pb-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-2">Patient Essentials</h2>
                                <p className="text-slate-500 text-base md:text-lg">Key information for your hospital journey</p>
                            </div>
                            <Link href="/patients-visitors-guide/patients" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group">
                                View Full Guide <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {tabList.map((item, idx) => {
                                const Icon = {
                                    'FileText': FileText,
                                    'BedDouble': BedDouble,
                                    'ShieldAlert': ShieldAlert,
                                }[item.icon] || FileText;

                                return (
                                    <motion.div key={item.value} variants={itemVariants} className="h-full">
                                        <Link href={`/patients-visitors-guide/patients?tab=${item.value}`} className="group block h-full">
                                            <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-white/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                                {/* Hover Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="relative z-10 flex flex-col h-full">
                                                    <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                                        <Icon className="w-7 h-7" />
                                                    </div>
                                                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">{item.label}</h4>

                                                    <div className="mt-auto flex items-center text-xs font-bold text-slate-400 group-hover:text-primary transition-all duration-300 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                                        Read More <ChevronRight className="w-3 h-3 ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-20 md:mt-32 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-4 md:mb-6">Questions about your stay?</h2>
                            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 font-light px-2">
                                Our Admissions and Information team is here to assist you 24/7 with any inquiries regarding hospital guidelines and procedures.
                            </p>
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-base md:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-xl shadow-blue-900/20" onClick={() => router.push('/contact-us')}>
                                Contact Admissions
                            </Button>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default PatientsVisitorsGuidePage;
