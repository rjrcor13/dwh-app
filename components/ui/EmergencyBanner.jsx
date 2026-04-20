'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

/**
 * EmergencyBanner — a dismissible top-of-page ticker for live operational updates.
 *
 * Data source: `app/data/emergencyBanner.js`
 * Set `enabled: false` in that file to hide the banner without touching this component.
 */

// Demo alerts — replace this import with a CMS fetch when ready
const DEFAULT_ALERTS = [
    {
        id: 1,
        message: 'ER Wait Time is currently ~15 mins.',
        href: '/emergency',
        hrefLabel: 'View ER',
        type: 'info', // 'info' | 'warning' | 'urgent'
    },
];

const TYPE_STYLES = {
    info:    { bar: 'bg-primary',   icon: 'text-blue-200',   text: 'text-white',   badge: 'bg-white/10 text-blue-100' },
    warning: { bar: 'bg-amber-500', icon: 'text-amber-100',  text: 'text-white',   badge: 'bg-white/10 text-amber-100' },
    urgent:  { bar: 'bg-red-600',   icon: 'text-red-200',    text: 'text-white',   badge: 'bg-white/10 text-red-100' },
};

const EmergencyBanner = ({ alerts = DEFAULT_ALERTS, enabled = true }) => {
    const [dismissed, setDismissed] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    // Rotate through multiple alerts every 5 seconds
    useEffect(() => {
        if (alerts.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIdx((i) => (i + 1) % alerts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [alerts.length]);

    if (!enabled || dismissed || !alerts.length) return null;

    const alert = alerts[currentIdx];
    const styles = TYPE_STYLES[alert.type] || TYPE_STYLES.info;

    return (
        <AnimatePresence>
            <motion.div
                key="emergency-banner"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`${styles.bar} overflow-hidden`}
                role="alert"
                aria-live="polite"
                aria-atomic="true"
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
                    {/* Icon */}
                    <AlertCircle className={`w-4 h-4 shrink-0 ${styles.icon}`} aria-hidden="true" />

                    {/* Animated message */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIdx}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.25 }}
                                className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium ${styles.text}`}
                            >
                                <span>{alert.message}</span>
                                {alert.href && (
                                    <Link
                                        href={alert.href}
                                        className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${styles.badge} hover:bg-white/20 transition-colors`}
                                    >
                                        {alert.hrefLabel || 'Learn More'}
                                        <ChevronRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot indicators for multiple alerts */}
                    {alerts.length > 1 && (
                        <div className="hidden sm:flex items-center gap-1 shrink-0" aria-hidden="true">
                            {alerts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIdx(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-white' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Dismiss */}
                    <button
                        onClick={() => setDismissed(true)}
                        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                        aria-label="Dismiss announcement banner"
                        suppressHydrationWarning={true}
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default EmergencyBanner;
