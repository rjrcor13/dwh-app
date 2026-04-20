'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * GoogleAnalytics — injects GA4 tracking only when the measurement ID is set.
 * Add NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX to .env.local to activate.
 */
const GoogleAnalytics = () => {
    if (!GA_MEASUREMENT_ID) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        anonymize_ip: true,
                        cookie_flags: 'SameSite=None;Secure',
                    });
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;
