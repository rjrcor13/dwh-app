'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const SectionCTA = ({
    title = "Need Specialist Care?",
    description = "Our directory of board-certified doctors is ready to help you. Filter by specialty, schedule, or name to find the right fit for your needs.",
    buttonText = "Find A Doctor",
    link = "/doctors",
    className
}) => {
    const router = useRouter();

    return (
        <section className={`mt-20 md:mt-32 ${className || ''}`}>
            <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-4 md:mb-6">
                        {title}
                    </h2>
                    <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 font-light px-2">
                        {description}
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-blue-50 text-base md:text-lg px-8 py-6 h-auto rounded-xl font-bold shadow-xl shadow-blue-900/20"
                        onClick={() => router.push(link)}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SectionCTA;
