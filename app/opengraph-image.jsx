import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Divine Word Hospital — Premier Healthcare in Tacloban City';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    background: 'linear-gradient(135deg, #0c0950 0%, #1F1B99 50%, #1a1680 100%)',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Background subtle grid pattern */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)',
                    }}
                />

                {/* Top accent bar */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '60px 80px',
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 24,
                        }}
                    >
                        <div
                            style={{
                                background: 'rgba(255,255,255,0.12)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: 999,
                                padding: '6px 18px',
                                color: '#bfdbfe',
                                fontSize: 16,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            🏥 Tacloban City, Leyte — Est. 1965
                        </div>
                    </div>

                    {/* Hospital name */}
                    <div
                        style={{
                            fontSize: 68,
                            fontWeight: 900,
                            color: 'white',
                            lineHeight: 1.05,
                            marginBottom: 20,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Divine Word Hospital
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 28,
                            color: '#93c5fd',
                            fontWeight: 400,
                            marginBottom: 48,
                            letterSpacing: '0.01em',
                        }}
                    >
                        Serving · Caring · Healing — Region VIII
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: 40 }}>
                        {[
                            { value: '24/7', label: 'Emergency Care' },
                            { value: '500+', label: 'Medical Providers' },
                            { value: '60+', label: 'Years of Service' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 16,
                                    padding: '16px 28px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 36,
                                        fontWeight: 800,
                                        color: 'white',
                                        lineHeight: 1,
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    style={{
                                        fontSize: 14,
                                        color: '#93c5fd',
                                        marginTop: 6,
                                        fontWeight: 500,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom URL */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 32,
                        right: 80,
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: 20,
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                    }}
                >
                    dwh.ph
                </div>
            </div>
        ),
        { ...size }
    );
}
