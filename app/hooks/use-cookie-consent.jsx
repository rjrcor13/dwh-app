'use client';
import { useState, useEffect } from 'react';

export function useCookieConsent() {
    const [consent, setConsent] = useState(null); // null = unknown/loading, 'accepted' = all, 'declined' = necessary only

    useEffect(() => {
        // Run once on mount to read initial state safely on client
        const storedConsent = localStorage.getItem('dwh_cookie_consent');
        if (storedConsent) setConsent(storedConsent);

        // Listen for dynamic updates across components (like the Cookie Banner dispatching an update)
        const handleConsentUpdate = (event) => {
            setConsent(event.detail);
        };

        window.addEventListener('dwh_cookie_consent_update', handleConsentUpdate);
        return () => window.removeEventListener('dwh_cookie_consent_update', handleConsentUpdate);
    }, []);

    const updateConsent = (type) => { // 'accepted' or 'declined'
        localStorage.setItem('dwh_cookie_consent', type);
        setConsent(type);
        // Globally notify other components
        window.dispatchEvent(new CustomEvent('dwh_cookie_consent_update', { detail: type }));
    };

    return { consent, updateConsent };
}
