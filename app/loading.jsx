'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Pulsing Background */}
                    <motion.div
                        className="absolute inset-0 bg-blue-100 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Rotating Border */}
                    <motion.div
                        className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Icon */}
                    <Activity className="w-8 h-8 text-primary relative z-10" />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-bold text-primary tracking-widest uppercase"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
};

export default Loading;
