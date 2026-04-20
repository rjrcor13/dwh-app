'use client';

import { MapPin, Phone, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const MobileActionBar = () => {
    return (
        <nav aria-label="Mobile Quick Actions" className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)] md:hidden">
            <div className="flex items-center justify-around p-3">
                <Link
                    href="/emergency"
                    aria-label="Call Hospital Emergency Line"
                    className="flex flex-col items-center justify-center gap-1 text-rose-600 hover:text-rose-700 transition-colors flex-1 border-r border-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md"
                >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Emergency</span>
                </Link>

                <Link
                    href="/contact-us"
                    aria-label="Contact the Hospital"
                    className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-primary transition-colors flex-1 border-r border-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Call Us</span>
                </Link>

                <a
                    href="https://maps.google.com/?q=Divine+Word+Hospital+Tacloban"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to the hospital via Google Maps"
                    className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-primary transition-colors flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                    <MapPin className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
                </a>
            </div>
        </nav>
    );
};

export default MobileActionBar;
