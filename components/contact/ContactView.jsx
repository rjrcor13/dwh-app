'use client';

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ContactView() {

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Us',
            details: ['Divine Word Hospital', 'San Pedro St, Tacloban City', '6500 Leyte, Philippines'],
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: ['(+63) 53 321 4567', '(+63) 53 321 8901', 'Emergency: 911'],
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: ['info@divineword.com', 'admissions@divineword.com'],
            color: 'text-violet-600',
            bg: 'bg-violet-50'
        },
        {
            icon: Clock,
            title: 'Operating Hours',
            details: ['Emergency: 24/7', 'OPD: Mon-Sat 8AM-5PM', 'Visiting: 9AM-8PM'],
            color: 'text-amber-600',
            bg: 'bg-amber-50'
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-blue-100/50" aria-label="Contact Us Page">

            {/* Hero Section */}
            <section className="relative bg-white pt-24 pb-20 overflow-hidden" aria-labelledby="contact-heading">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" aria-hidden="true" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-8">
                            <MessageSquare className="w-4 h-4" aria-hidden="true" />
                            <span>Get in Touch</span>
                        </div>
                        <h1 id="contact-heading" className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                            We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Help You</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Have questions or need assistance? Reach out to our team. We are committed to providing you with the best compassionate care.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Information & Map */}
                    <div className="space-y-12">
                        <section aria-label="Contact Information">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className={`w-12 h-12 ${info.bg} ${info.color} rounded-2xl flex items-center justify-center mb-4`}>
                                            <info.icon className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                                        <div className="space-y-1">
                                            {info.details.map((line, i) => (
                                                <p key={i} className="text-slate-600 text-sm">{line}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Map Placeholder */}
                        <section aria-label="Location Map" className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm overflow-hidden h-80 relative">
                            {/* In a real app, embed Google Maps iframe here */}
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center flex-col gap-4">
                                <MapPin className="w-12 h-12 text-slate-300" />
                                <span className="text-slate-500 font-medium">Interactive Map Integration</span>
                                <span className="text-xs text-slate-400">San Pedro St, Tacloban City</span>
                            </div>
                        </section>
                    </div>

                    {/* Contact Form */}
                    <section aria-labelledby="form-heading" className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100">
                        <h2 id="form-heading" className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                        <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you shortly.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-600 appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Appointment Request</option>
                                    <option>Feedback</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button size="lg" className="w-full h-14 bg-primary hover:bg-blue-800 text-lg font-bold rounded-2xl shadow-lg shadow-blue-900/20 mt-4">
                                <Send className="w-5 h-5 mr-2" /> Send Message
                            </Button>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}
