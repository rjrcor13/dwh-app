'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
    Search,
    FileText,
    User,
    Plus,
    X,
    Stethoscope,
    Calendar,
    Briefcase,
    Info,
    Building2,
    Microscope,
    HeartPulse,
    Activity,
    Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Data Sources
import { doctorsData } from '@/app/data/doctors';
import { departmentsData } from '@/app/data/departments';
import { servicesData } from '@/app/data/services';

const SearchCommand = ({ open, setOpen }) => {
    const router = useRouter();

    React.useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, [setOpen]);

    const runCommand = React.useCallback((command) => {
        setOpen(false);
        command();
    }, [setOpen]);

    // --- Data Mapping ---

    const pages = [
        { name: 'Home', icon: FileText, href: '/home' },
        { name: 'About Us', icon: Info, href: '/about-us' },
        { name: 'Events', icon: Calendar, href: '/events' },
        { name: 'Careers', icon: Briefcase, href: '/careers' },
        { name: 'Contact Us', icon: User, href: '/contact-us' },
        { name: 'Patients & Visitors', icon: Users, href: '/patients-visitors-guide/patients' },
        { name: 'Visiting Hours', icon: User, href: '/patients-visitors-guide/visitors-watchers' },
        { name: 'Billing & Insurance', icon: FileText, href: '/patients-visitors-guide/billing-insurance' },
    ];

    // Helper to get icon component if it's a string in data
    const getIcon = (iconName) => {
        // Only needed if you have string icon names in your data, 
        // otherwise import and use Lucide icons directly if stored as components.
        // For simplicity in this specific component update, we'll map common ones or default.
        return Stethoscope;
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[70vh]"
                    >
                        <Command className="w-full bg-transparent flex flex-col h-full">
                            <div className="flex items-center border-b border-slate-100 px-4 shrink-0">
                                <Search className="w-5 h-5 text-slate-400 mr-3" />
                                <Command.Input
                                    placeholder="Search doctors, departments, services..."
                                    className="w-full py-4 text-lg text-slate-800 placeholder:text-slate-400 bg-transparent border-none focus:outline-none focus:ring-0"
                                />
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1 hover:bg-slate-100 rounded text-slate-400 transition-colors"
                                >
                                    <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-slate-500 bg-slate-100 rounded border border-slate-200 font-sans">
                                        <span className="text-xs">ESC</span>
                                    </kbd>
                                    <X className="w-5 h-5 sm:hidden" />
                                </button>
                            </div>

                            <Command.List className="overflow-y-auto p-2 scroll-py-2 flex-grow">
                                <Command.Empty className="py-10 text-center text-slate-500 text-sm">
                                    No results found.
                                </Command.Empty>

                                {/* PAGES */}
                                <Command.Group heading="Pages" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {pages.map((page) => (
                                        <Command.Item
                                            key={page.href}
                                            value={page.name}
                                            onSelect={() => runCommand(() => router.push(page.href))}
                                            className="flex items-center px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer transition-all group aria-selected:bg-blue-50 aria-selected:text-primary"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mr-3 text-slate-400 group-hover:bg-white group-hover:text-primary group-hover:shadow-sm transition-all group-aria-selected:bg-white group-aria-selected:text-primary group-aria-selected:shadow-sm">
                                                <page.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{page.name}</span>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <div className="h-px bg-slate-100 my-2 mx-2" />

                                {/* DOCTORS */}
                                <Command.Group heading="Doctors" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {doctorsData.map((doc) => (
                                        <Command.Item
                                            key={doc.id}
                                            value={doc.name}
                                            onSelect={() => runCommand(() => router.push(`/doctors/${doc.slug}`))}
                                            className="flex items-center px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer transition-all group aria-selected:bg-blue-50 aria-selected:text-primary"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center mr-3 text-indigo-500 group-hover:bg-indigo-100/50 group-hover:text-primary transition-all group-aria-selected:bg-indigo-100/50 group-aria-selected:text-primary">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-medium block">{doc.name}</span>
                                                <span className="text-xs text-slate-400 group-aria-selected:text-blue-400">{Array.isArray(doc.specialties) ? doc.specialties.join(', ') : doc.specialties}</span>
                                            </div>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <div className="h-px bg-slate-100 my-2 mx-2" />

                                {/* DEPARTMENTS */}
                                <Command.Group heading="Departments" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {departmentsData.map((dept) => (
                                        <Command.Item
                                            key={dept.id}
                                            value={dept.name}
                                            onSelect={() => runCommand(() => router.push(`/expertise/departments?tab=${dept.id}`))}
                                            className="flex items-center px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer transition-all group aria-selected:bg-blue-50 aria-selected:text-primary"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mr-3 text-amber-500 group-hover:bg-amber-100/50 group-hover:text-primary transition-all group-aria-selected:bg-amber-100/50 group-aria-selected:text-primary">
                                                <Building2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{dept.name}</span>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <div className="h-px bg-slate-100 my-2 mx-2" />

                                {/* SERVICES */}
                                <Command.Group heading="Services" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {servicesData.map((service) => (
                                        <Command.Item
                                            key={service.slug}
                                            value={service.title}
                                            onSelect={() => runCommand(() => router.push(`/expertise/services/${service.slug}`))}
                                            className="flex items-center px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer transition-all group aria-selected:bg-blue-50 aria-selected:text-primary"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mr-3 text-teal-500 group-hover:bg-teal-100/50 group-hover:text-primary transition-all group-aria-selected:bg-teal-100/50 group-aria-selected:text-primary">
                                                <HeartPulse className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{service.title}</span>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                            </Command.List>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SearchCommand;
