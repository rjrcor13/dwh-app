import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const PremiumBadge = ({ text = "World-Class Care", className }) => {
    return (
        <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg shadow-blue-900/5 hover:scale-105 transition-transform duration-300 ring-1 ring-white/50",
            className
        )}>
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400 text-secondary" />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-xs font-bold tracking-widest uppercase">
                {text}
            </span>
        </div>
    );
};

export default PremiumBadge;
