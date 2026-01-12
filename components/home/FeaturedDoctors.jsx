'use client';

import { doctorsData } from '@/app/data/dummyDoctors';
import DoctorCard from '@/components/doctors/DoctorCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FeaturedDoctors = () => {
    // Select top 3 or 4 doctors to feature
    // Ensuring we have valid data, otherwise use an empty array
    const featured = doctorsData ? doctorsData.slice(0, 4) : [];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="h-px w-8 bg-secondary"></span>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                                Our Team
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
                            Meet Our <span className="text-blue-200">Specialists</span>
                        </h2>
                        <p className="text-blue-100/80 text-lg leading-relaxed">
                            Our team of dedicated physicians and healthcare professionals is committed
                            to providing you with the highest quality of care.
                        </p>
                    </div>
                    <Link
                        href="/doctors"
                        aria-label="View all doctors list"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white hover:text-primary hover:shadow-lg transition-all duration-300 group"
                    >
                        View All Doctors <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDoctors;
