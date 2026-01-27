'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

const SectionHeader = ({
    badge,
    title,
    highlight,
    description,
    align = 'center',
    className,
    badgeClassName = "bg-white shadow-lg shadow-blue-900/5 ring-1 ring-black/5",
    gradient = "from-primary via-blue-600 to-indigo-600",
    children
}) => {
    const isCenter = align === 'center';

    return (
        <div className={cn(
            "max-w-4xl mb-16",
            isCenter ? "mx-auto text-center" : "text-left",
            className
        )}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={cn("flex mb-6", isCenter ? "justify-center" : "justify-start")}
                >
                    {badge}
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 mb-6 leading-[1.1] tracking-tight"
            >
                {title} {highlight && <span className={cn("text-transparent bg-clip-text bg-gradient-to-r whitespace-nowrap", gradient)}>{highlight}</span>}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={cn(
                        "text-slate-500 text-lg md:text-xl leading-relaxed font-light mb-8",
                        isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
                    )}
                >
                    {description}
                </motion.p>
            )}

            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default SectionHeader;
