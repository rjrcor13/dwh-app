'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope } from 'lucide-react';

const FloatingDoctorsButton = () => {
    return (
        <Link
            href="/doctors"
            className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-[#1F1B99] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 font-bold tracking-wide"
        >
            <span className="hidden md:block">Find a Doctor</span>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <Stethoscope className="w-6 h-6" />
            </div>
        </Link>
    );
};

export default FloatingDoctorsButton;
