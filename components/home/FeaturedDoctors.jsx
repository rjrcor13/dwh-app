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
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">
                            Our Team
                        </h2>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
                            Meet Our Specialists
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Our team of dedicated physicians and healthcare professionals is committed
                            to providing you with the highest quality of care.
                        </p>
                    </div>
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300 group"
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
