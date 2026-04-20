'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Track scroll position to toggle visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll back to the absolute top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top of page"
                    className="fixed bottom-40 right-4 lg:bottom-32 lg:right-10 z-[40] w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-slate-500 hover:text-primary hover:bg-white hover:border-blue-100 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                    <ChevronUp className="w-6 h-6 lg:w-7 lg:h-7 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
