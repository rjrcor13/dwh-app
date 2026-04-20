'use client';

import React from 'react';

/**
 * ErrorBoundary — catches React render errors from child components.
 * 
 * Usage:
 *   <ErrorBoundary fallback={<p>Something went wrong.</p>}>
 *     <ComponentThatMightCrash />
 *   </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        // In production, pipe this to your error tracking (e.g. Sentry)
        console.error('[ErrorBoundary] Caught error:', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // If a custom fallback was provided, render it
            if (this.props.fallback) return this.props.fallback;

            // Default premium fallback UI
            return (
                <div className="w-full flex flex-col items-center justify-center py-24 px-4 text-center">
                    <div className="w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mb-4 text-3xl">
                        ⚠
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-heading">
                        Something went wrong
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-6">
                        This section couldn&apos;t load. Please refresh the page or try again later.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                        className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
