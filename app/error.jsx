'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-red-900/5 border border-red-50"
                >
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                        <AlertCircle className="w-10 h-10" />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Something went wrong!</h2>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={() => reset()}
                            className="w-full bg-primary hover:bg-blue-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-blue-900/10"
                        >
                            <RefreshCcw className="w-4 h-4 mr-2" /> Try Again
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.location.href = '/'}
                            className="w-full border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl h-12 font-bold"
                        >
                            <Home className="w-4 h-4 mr-2" /> Return Home
                        </Button>
                    </div>
                </motion.div>

                <p className="mt-8 text-xs text-slate-400 font-mono">
                    Error Code: {error?.digest || 'UNKNOWN_ERROR'}
                </p>
            </div>
        </div>
    );
}
