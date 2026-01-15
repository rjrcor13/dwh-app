'use client';

import { departmentsData as departments } from '@/app/data/departments';
import { servicesData as services } from '@/app/data/services';
import DynamicIcons from '@/components/dynamicIcons/DynamicIcons';
import AmbientBackground from '@/components/ui/AmbientBackground';
import { Button } from '@/components/ui/button';
import PremiumBadge from '@/components/ui/PremiumBadge';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Building2, ChevronRight, Sparkles, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ExpertisePage = () => {
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
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div variants={itemVariants}>
                            <PremiumBadge className="mb-6 md:mb-8" />
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 mb-6 md:mb-8 tracking-tight leading-[0.9]"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">Expertise</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light px-2"
                        >
                            Combining advanced medical technology with a compassionate touch. Explore our comprehensive services and specialized departments designed for your holistic healing.
                        </motion.p>
                    </div>
                </section>

                {/* Quick Navigation Cards */}
                <section className="px-4 md:px-6 mb-20 md:mb-32">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Services Main Card */}
                        <motion.div variants={itemVariants} className="group relative">
                            <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] md:rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
                            <div className="relative h-full bg-white/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 transition-transform duration-700 group-hover:scale-110" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-lg flex items-center justify-center mb-6 md:mb-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Activity className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">Medical Services</h3>
                                    <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed font-light">
                                        Diagnostic and therapeutic services utilizing state-of-the-art equipment to ensure accurate diagnoses and effective treatments.
                                    </p>
                                    <Link href="/expertise/services" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl bg-primary text-white font-bold tracking-wide shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-600/30 hover:shadow-xl transition-all duration-300 group/btn text-sm md:text-base">
                                        View All Services <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Departments Main Card */}
                        <motion.div variants={itemVariants} className="group relative">
                            {/* Unified to Blue/Primary for Consistency */}
                            <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] md:rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
                            <div className="relative h-full bg-white/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 transition-transform duration-700 group-hover:scale-110" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-white shadow-lg flex items-center justify-center mb-6 md:mb-8 text-primary group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                        <Building2 className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">Clinical Departments</h3>
                                    <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed font-light">
                                        Specialized medical teams dedicated to providing expert care across various disciplines, from Pediatrics to Surgery.
                                    </p>
                                    <Link href="/expertise/departments" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white text-primary border border-slate-200 font-bold tracking-wide shadow-lg hover:bg-slate-50 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group/btn text-sm md:text-base">
                                        View All Departments <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Overview */}
                <section className="px-6 max-w-7xl mx-auto">
                    {/* Services Preview */}
                    <div className="mb-20 md:mb-32">
                        <motion.div variants={itemVariants} className="flex items-end justify-between mb-8 md:mb-12 px-2 border-b border-slate-200 pb-6 md:pb-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-2">Key Services</h2>
                                <p className="text-slate-500 text-base md:text-lg">Essential healthcare facilities available 24/7</p>
                            </div>
                            <Link href="/expertise/services" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group">
                                View Full List <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {services.slice(0, 3).map((service, idx) => (
                                <motion.div key={service.slug} variants={itemVariants} className="h-full">
                                    <Link href={`/expertise/services/${service.slug}`} className="group block h-full">
                                        <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-white/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
                                            {/* Hover Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative z-10">
                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                                    <DynamicIcons name={service.icon} className="w-7 h-7" />
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors pr-8">{service.title}</h4>
                                                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-8">
                                                    {service.description}
                                                </p>
                                                <div className="mt-auto pt-6 border-t border-slate-100/50 flex items-center justify-between">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
                                                        Learn More
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary transition-all">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Departments Preview */}
                    <div>
                        <motion.div variants={itemVariants} className="flex items-end justify-between mb-8 md:mb-12 px-2 border-b border-slate-200 pb-6 md:pb-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-2">Specialized Departments</h2>
                                <p className="text-slate-500 text-base md:text-lg">Expert teams for specialized medical treatment</p>
                            </div>
                            <Link href="/expertise/departments" className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group">
                                View All Departments <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {departments.slice(0, 4).map((dept, idx) => (
                                <motion.div key={dept.id || idx} variants={itemVariants} className="h-full">
                                    <Link href={`/expertise/departments/${dept.id}`} className="group block h-full">
                                        <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-white/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                            {/* Hover Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="mb-6 text-4xl group-hover:scale-110 transition-transform duration-500 inline-block filter drop-shadow-sm text-primary">
                                                    {/* Ensure Icons are Primary Color */}
                                                    {dept.icon}
                                                </div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">{dept.name}</h4>
                                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                                                    {dept.description}
                                                </p>

                                                <div className="mt-auto flex items-center text-xs font-bold text-primary/0 group-hover:text-primary transition-all duration-300 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                                    Explore Department <ChevronRight className="w-3 h-3 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
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
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-4 md:mb-6">Need Specialist Care?</h2>
                            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 font-light px-2">
                                Our directory of board-certified doctors is ready to help you. Filter by specialty, schedule, or name to find the right fit for your needs.
                            </p>
                            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-base md:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-xl shadow-blue-900/20" onClick={() => router.push('/doctors')}>
                                Find A Doctor
                            </Button>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default ExpertisePage;
