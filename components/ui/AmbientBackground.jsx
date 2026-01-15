import React from 'react';
import { cn } from '@/lib/utils';

const AmbientBackground = ({ className, variant = 'dark' }) => {
    const isDark = variant === 'dark';

    return (
        <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
            {/* Dark/Primary Gradient Background - Only for dark mode */}
            {isDark && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#161270] to-[#0f0c50]" />
            )}

            {/* Animated/Blurry Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                {/* Top Left Orb */}
                <div className={cn(
                    "absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[120px]",
                    isDark ? "bg-secondary/5" : "bg-gradient-to-br from-blue-100/40 to-indigo-100/30"
                )} />

                {/* Bottom Right Orb */}
                <div className={cn(
                    "absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[100px]",
                    isDark ? "bg-blue-400/10" : "bg-gradient-to-tr from-amber-50/50 to-orange-50/20"
                )} />
            </div>
        </div>
    );
};

export default AmbientBackground;
