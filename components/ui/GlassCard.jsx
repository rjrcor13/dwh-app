'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    glowEffect = true
}) => {
    return (
        <div className={cn(
            "bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500",
            hoverEffect && "hover:bg-white/90 hover:border-blue-200/50 hover:shadow-[0_20px_40px_-15px_rgba(31,27,153,0.15)] hover:-translate-y-2",
            className
        )}>
            {glowEffect && (
                <>
                    {/* --- Decorative Glows --- */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </>
            )}

            {children}
        </div>
    );
};

export default GlassCard;
