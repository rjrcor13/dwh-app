'use client';

/**
 * reportWebVitals — pipes Core Web Vitals into GA4.
 * Called automatically by Next.js with each metric.
 *
 * @param {import('next').NextWebVitalsMetric} metric
 */
export function reportWebVitals(metric) {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', metric.name, {
        event_category:
            metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js Custom Metric',
        value: Math.round(
            metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true, // don't skew bounce rate
    });
}
