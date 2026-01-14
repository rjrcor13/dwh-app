'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Maria Santos',
        role: 'Patient',
        content:
            "The care I received at Divine Word Hospital was exceptional. The doctors and nurses were incredibly attentive and made me feel safe throughout my recovery.",
        rating: 5,
    },
    {
        id: 2,
        name: 'James Reyes',
        role: 'Parent',
        content:
            "Our experience with the pediatric department was outstanding. Dr. Carter was so patient with my son. I highly recommend this hospital to any parent.",
        rating: 5,
    },
    {
        id: 3,
        name: 'Elena Cruz',
        role: 'Surgery Patient',
        content:
            "Professionalism at its finest. From admission to discharge, the process was smooth. The facilities are world-class and very clean.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    {/* <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">
                        Patient Stories
                    </h2> */}
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <div className="h-px w-10 bg-secondary"></div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Patient Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        What Our Patients Say
                    </h2>
                    <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                        Real stories from people who have trusted us with their health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-6 text-secondary/20 h-10 w-10 rotate-180" />

                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-100 text-lg leading-relaxed mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                <p className="text-secondary text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
