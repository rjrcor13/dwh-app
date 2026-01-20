'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import React from 'react';
import AmbientBackground from '@/components/ui/AmbientBackground';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50/90 backdrop-blur-md">
            <AmbientBackground variant="light" />

            <div className="flex flex-col items-center gap-6 relative z-10">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    {/* Pulsing Background */}
                    <motion.div
                        className="absolute inset-0 bg-blue-100 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Rotating Border */}
                    <motion.div
                        className="absolute inset-0 border-[3px] border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Counter-Rotating Border */}
                    <motion.div
                        className="absolute inset-2 border-[3px] border-b-secondary border-l-secondary/30 border-t-secondary/10 border-r-secondary/30 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Icon */}
                    <Activity className="w-8 h-8 text-primary relative z-10 drop-shadow-sm" />
                </div>

                <div className="flex flex-col items-center gap-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg font-bold font-heading text-slate-900 tracking-tight"
                    >
                        Divine Word
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs font-bold text-primary/70 tracking-[0.2em] uppercase"
                    >
                        Loading
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
