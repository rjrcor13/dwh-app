'use client';

import { useState, useEffect } from 'react';
import { useCookieConsent } from '@/app/hooks/use-cookie-consent';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from './button';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { consent, updateConsent } = useCookieConsent();

    useEffect(() => {
        // Wait briefly before showing to avoid jarring load
        const timer = setTimeout(() => {
            const currentConsent = localStorage.getItem('dwh_cookie_consent');
            if (!currentConsent) {
                setIsVisible(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Always hide banner if consent already established dynamically in another tab etc
    useEffect(() => {
        if (consent) setIsVisible(false);
    }, [consent]);

    const handleAccept = () => {
        updateConsent('accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        updateConsent('declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="fixed bottom-24 lg:bottom-10 left-4 right-4 lg:left-10 lg:right-auto z-50 p-6 md:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl max-w-sm lg:max-w-md w-full"
                    role="alertdialog"
                    aria-label="Cookie Consent Banner"
                >
                    <button 
                        onClick={handleDecline} 
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-colors"
                        aria-label="Dismiss cookie notice"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex gap-4">
                        <div className="shrink-0">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-primary">
                                <Cookie className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5">Your Privacy Choices</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                We use cookies and similar technologies to improve your experience. By continuing to use our website, you agree to our{' '}
                                <Link href="/privacy-policy" className="font-semibold text-primary hover:underline underline-offset-2">
                                    Data Privacy Statement
                                </Link>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button 
                                    onClick={handleAccept} 
                                    className="w-full sm:flex-1 rounded-xl bg-primary hover:bg-blue-800 text-white shadow-xl shadow-primary/20 px-6 py-5 text-sm font-bold transition-all hover:scale-105"
                                >
                                    Accept All
                                </Button>
                                <Button 
                                    onClick={handleDecline} 
                                    variant="outline" 
                                    className="w-full sm:flex-1 rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 px-6 py-5 text-sm font-bold"
                                >
                                    Necessary Only
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
