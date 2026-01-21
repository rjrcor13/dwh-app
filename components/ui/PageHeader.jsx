'use client';

import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import React from 'react';

const PageHeader = ({
    badgeIcon: Icon = Stethoscope,
    badgeText = 'Medical Excellence',
    title = 'Our',
    highlightText = 'Services',
    description,
    children
}) => {
    return (
        <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-8"
            >
                {/* Custom Pill Badge Style */}
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg shadow-blue-900/5 ring-1 ring-black/5">
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold tracking-widest uppercase text-blue-900">
                        {badgeText}
                    </span>
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 mb-8 leading-[0.9] tracking-tighter"
            >
                {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 whitespace-nowrap">{highlightText}</span>
            </motion.h1>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-500 text-lg md:text-xl leading-relaxed font-light mb-12 max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            )}

            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default PageHeader;
