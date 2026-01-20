'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { Search, FileText, User, Plus, X, Stethoscope, Calendar, Briefcase, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    // Mock Data for Search - In a real app, this could be dynamic props
    const pages = [
        { name: 'Home', icon: FileText, href: '/home' },
        { name: 'About Us', icon: Info, href: '/about-us' },
        { name: 'Events', icon: Calendar, href: '/events' },
        { name: 'Careers', icon: Briefcase, href: '/careers' },
        { name: 'Contact', icon: User, href: '/contact' },
        { name: 'Patients & Visitors', icon: User, href: '/patients-visitors-guide' },
    ];

    const services = [
        { name: 'Radiology', icon: Stethoscope, href: '/expertise/services/radiology' },
        { name: 'Pathology & Laboratory', icon: Stethoscope, href: '/expertise/services/pathology-laboratory' },
        { name: 'Pharmacy', icon: Stethoscope, href: '/expertise/services/pharmacy-service' },
        { name: 'Dialysis Center', icon: Stethoscope, href: '/expertise/services/hemo-dialysis' },
        { name: 'Emergency Care', icon: Plus, href: '/emergency' },
    ];

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
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
                        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
                    >
                        <Command className="w-full bg-transparent">
                            <div className="flex items-center border-b border-slate-100 px-4">
                                <Search className="w-5 h-5 text-slate-400 mr-3" />
                                <Command.Input
                                    placeholder="Search pages, services, or doctors..."
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

                            <Command.List className="max-h-[60vh] overflow-y-auto p-2 scroll-py-2">
                                <Command.Empty className="py-10 text-center text-slate-500 text-sm">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Pages" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {pages.map((page) => (
                                        <Command.Item
                                            key={page.href}
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

                                <Command.Group heading="Medical Services" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                    {services.map((service) => (
                                        <Command.Item
                                            key={service.href}
                                            onSelect={() => runCommand(() => router.push(service.href))}
                                            className="flex items-center px-3 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer transition-all group aria-selected:bg-blue-50 aria-selected:text-primary"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 text-blue-500 group-hover:bg-blue-100/50 group-hover:text-primary transition-all group-aria-selected:bg-blue-100/50 group-aria-selected:text-primary">
                                                <service.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{service.name}</span>
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
