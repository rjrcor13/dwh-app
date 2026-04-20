import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Simple in-memory rate limiter ─────────────────────────────────────────────
// Keyed by IP, stores timestamps of the last N requests.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3;               // max 3 submissions per IP per minute
const ipMap = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const timestamps = (ipMap.get(ip) || []).filter(
        (t) => now - t < RATE_LIMIT_WINDOW_MS
    );
    if (timestamps.length >= RATE_LIMIT_MAX) return true;
    timestamps.push(now);
    ipMap.set(ip, timestamps);
    return false;
}

// ── Subject label map ─────────────────────────────────────────────────────────
const SUBJECT_LABELS = {
    general: 'General Inquiry',
    appointment: 'Appointment Request',
    feedback: 'Feedback',
    careers: 'Careers',
};

export async function POST(request) {
    try {
        // 1. Rate limiting
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait a minute before trying again.' },
                { status: 429 }
            );
        }

        // 2. Parse & validate body
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address.' },
                { status: 400 }
            );
        }

        // Sanitise inputs to prevent injection
        const safe = (str) => String(str).replace(/<[^>]*>/g, '').slice(0, 2000);
        const safeName    = safe(name);
        const safeEmail   = safe(email);
        const safeSubject = safe(subject);
        const safeMessage = safe(message);

        const subjectLabel = SUBJECT_LABELS[safeSubject] || safeSubject;

        // 3. Send via Resend
        const { error } = await resend.emails.send({
            from: 'Divine Word Hospital Website <noreply@dwh.ph>',
            to:   ['dwh.marketing@dwh.com'],
            replyTo: safeEmail,
            subject: `[${subjectLabel}] New message from ${safeName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background: #1F1B99; padding: 24px 32px;">
                        <h2 style="color: white; margin: 0; font-size: 20px;">New Website Inquiry</h2>
                        <p style="color: #bfdbfe; margin: 4px 0 0; font-size: 14px;">Received from the DWH website contact form</p>
                    </div>
                    <div style="padding: 28px 32px; background: #f8fafc;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 120px;">From</td>
                                <td style="padding: 10px 0; color: #1e293b; font-weight: 500;">${safeName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                                <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #1F1B99;">${safeEmail}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                                <td style="padding: 10px 0;"><span style="background: #eff6ff; color: #1F1B99; padding: 3px 10px; border-radius: 999px; font-size: 13px; font-weight: 600;">${subjectLabel}</span></td>
                            </tr>
                        </table>
                        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                        <p style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</p>
                        <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; color: #334155; line-height: 1.7; white-space: pre-line;">${safeMessage}</div>
                    </div>
                    <div style="padding: 16px 32px; background: #f1f5f9; text-align: center;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">Divine Word Hospital Website · dwh.ph · Tacloban City, Leyte</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('[contact/route] Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        console.error('[contact/route] Unexpected error:', err);
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
