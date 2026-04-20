'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const FloatingContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [subjectValue, setSubjectValue] = useState('');
    const [error, setError] = useState(null);

    // Real submit — posts to /api/contact
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const form = e.currentTarget;
        const data = {
            name:    form['fc-name'].value,
            email:   form['fc-email'].value,
            subject: subjectValue,
            message: form['fc-msg'].value,
        };

        try {
            const res = await fetch('/api/contact', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(data),
            });
            const json = await res.json();

            if (!res.ok) throw new Error(json.error || 'Failed to send message.');

            setIsSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
                setTimeout(() => { setIsSuccess(false); setSubjectValue(''); }, 300);
            }, 2500);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-4 lg:bottom-10 lg:right-10 z-[60] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        className="mb-4 w-[90vw] sm:w-[380px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="bg-primary px-6 py-5 flex items-center justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10 text-white">
                                <h3 className="font-bold text-lg font-heading leading-tight mb-1">Contact Us</h3>
                                <p className="text-blue-200 text-xs font-medium">We usually reply within a few hours.</p>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 w-8 h-8 flex flex-col items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                aria-label="Close contact form"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Body Container */}
                        <div className="p-6 bg-slate-50 relative min-h-[340px]">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed max-w-[250px]">
                                            Thank you for reaching out to Divine Word Hospital. We will get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-1.5 focus-within:relative z-10">
                                            <Label htmlFor="fc-name" className="text-xs font-bold text-slate-500 uppercase">Your Name</Label>
                                            <Input id="fc-name" required placeholder="Juan Dela Cruz" className="bg-white rounded-xl focus-visible:bg-white focus-visible:ring-primary/20 border-slate-200" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="fc-email" className="text-xs font-bold text-slate-500 uppercase">Email Address</Label>
                                            <Input id="fc-email" type="email" required placeholder="juan@example.com" className="bg-white rounded-xl focus-visible:bg-white focus-visible:ring-primary/20 border-slate-200" />
                                        </div>
                                        <div className="space-y-1.5 relative z-20">
                                            <Label htmlFor="fc-subject" className="text-xs font-bold text-slate-500 uppercase">Subject</Label>
                                            <Select required name="subject" value={subjectValue} onValueChange={setSubjectValue}>
                                                <SelectTrigger id="fc-subject" className="bg-white rounded-xl border-slate-200 focus:ring-primary/20 h-10 w-full text-slate-700">
                                                    <SelectValue placeholder="Reason for contacting" />
                                                </SelectTrigger>
                                                <SelectContent className="z-[100]">
                                                    <SelectItem value="general">General Inquiry</SelectItem>
                                                    <SelectItem value="appointment">Appointment Request</SelectItem>
                                                    <SelectItem value="feedback">Feedback</SelectItem>
                                                    <SelectItem value="careers">Careers</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="fc-msg" className="text-xs font-bold text-slate-500 uppercase">Message</Label>
                                            <Textarea 
                                                id="fc-msg" 
                                                required 
                                                placeholder="How can we help you?" 
                                                className="min-h-[80px] resize-none bg-white rounded-xl focus-visible:bg-white focus-visible:ring-primary/20 border-slate-200" 
                                            />
                                        </div>
                                        <Button 
                                            type="submit" 
                                            disabled={isSubmitting || !subjectValue}
                                            className="w-full mt-2 rounded-xl bg-primary hover:bg-blue-800 text-white font-bold h-12 transition-all shadow-md shadow-primary/20 group relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                                            ) : (
                                                <span className="flex items-center gap-2 relative z-10">
                                                    Send Message <Send className="w-4 h-4" />
                                                </span>
                                            )}
                                        </Button>
                                        {error && (
                                            <p className="text-xs text-red-500 text-center mt-1 font-medium">{error}</p>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bubble Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open contact form"
                suppressHydrationWarning={true}
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-transparent hover:border-blue-100/50 hover:shadow-[0_8px_30px_rgb(31,27,153,0.4)] transition-all ${isOpen ? 'bg-slate-800' : 'bg-primary'}`}
            >
                {isOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6" /> : <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />}
            </motion.button>
        </div>
    );
};

export default FloatingContactForm;
