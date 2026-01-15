'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Mail, Facebook, User, Stethoscope, Microscope, Baby, Brain, Heart, GraduationCap, ArrowRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import { cn } from '@/lib/utils';
import AmbientBackground from '@/components/ui/AmbientBackground';

// Reusable Section Component
const Section = ({ id, title, children, className }) => (
    <section id={id} className={cn("scroll-mt-32 mb-16", className)}>
        {title && (
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-6 border-l-4 border-primary pl-4 flex items-center gap-3">
                {title}
            </h2>
        )}
        <div className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
            {children}
        </div>
    </section>
);

const ListItem = ({ children }) => (
    <li className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
        <span className="text-sm md:text-base text-slate-700 font-medium">{children}</span>
    </li>
);

export default function DepartmentDetailsClient({ department }) {
    const router = useRouter();
    const { name, id, description, vision, mission, objectives, sections, subspecialties, services, procedures, specialties, chairperson, concludingStatement, icon } = department;
    const [activeSection, setActiveSection] = useState('overview');

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'mission', 'objectives', 'services', 'procedures', 'staff', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // sticky header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-slate-50/50 min-h-screen relative font-sans pb-32">

            {/* --- Ambient Background Mesh --- */}
            <div className="fixed inset-0 pointer-events-none">
                <AmbientBackground variant="light" />
            </div>

            {/* --- BREADCRUMBS (Sticky Top) --- */}
            <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center text-sm font-medium text-slate-500">
                    <Link href="/home" className="hover:text-primary transition-colors flex items-center gap-2 group">
                        <Home className="w-4 h-4 group-hover:text-secondary transition-colors" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <Link href="/expertise" className="hover:text-primary transition-colors">
                        Expertise
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <Link href="/expertise/departments" className="hover:text-primary transition-colors">
                        Departments
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-md bg-white/50 px-3 py-1 rounded-full border border-white/50">
                        {name}
                    </span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

                {/* Header / Breadcrumb - REMOVED */}

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: STICKY NAVIGATION (4 cols) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">

                        {/* Mobile Title (visible only on small screens) */}
                        <div className="lg:hidden mb-8">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase mb-2 border border-blue-100">
                                Department
                            </div>
                            <h1 className="text-4xl font-bold font-heading text-slate-900 leading-tight">
                                {name}
                            </h1>
                        </div>

                        <div className="p-6 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm relative overflow-hidden group">
                            {/* Icon Background */}
                            <div className="absolute -right-4 -top-4 opacity-10 scale-150 rotate-12 transition-transform duration-700 group-hover:rotate-45">
                                {icon ? (
                                    <DynamicIcons name={icon} className="w-32 h-32 text-primary" />
                                ) : (
                                    <Stethoscope className="w-32 h-32 text-primary" />
                                )}
                            </div>

                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">
                                On This Page
                            </h3>
                            <nav className="space-y-1 relative z-10">
                                {[
                                    { id: 'overview', label: 'Overview', show: !!description },
                                    { id: 'mission', label: 'Mission & Vision', show: !!(vision || mission) },
                                    { id: 'objectives', label: 'Objectives', show: !!objectives },
                                    { id: 'staff', label: 'Leadership', show: !!chairperson },
                                    { id: 'services', label: 'Services & Scope', show: !!(services || sections || subspecialties || specialties) },
                                    { id: 'procedures', label: 'Procedures', show: !!procedures },
                                ].map((item) => (
                                    item.show && (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={cn(
                                                "w-full text-left py-2.5 px-4 rounded-xl transition-all text-sm font-bold flex items-center justify-between group/btn",
                                                activeSection === item.id
                                                    ? "bg-white text-primary shadow-sm ring-1 ring-slate-100"
                                                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                                            )}
                                        >
                                            {item.label}
                                            {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                        </button>
                                    )
                                ))}
                            </nav>
                        </div>

                        {/* Call to Action Box */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-blue-800 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="font-bold text-2xl mb-2 font-heading">Patient Care</h4>
                                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                                    Looking for a specialist in <br /><strong>{name}</strong>?
                                </p>
                                <button
                                    onClick={() => router.push('/doctors')}
                                    className="w-full py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                                >
                                    Find a Doctor <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Decor */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        </div>
                    </div>


                    {/* RIGHT: MAIN CONTENT (8 cols) */}
                    <div className="lg:col-span-8">

                        {/* Title Block (Desktop) */}
                        <div className="hidden lg:flex mb-12 flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
                                {icon ? (
                                    <DynamicIcons name={icon} className="w-10 h-10 text-primary" />
                                ) : (
                                    <Stethoscope className="w-10 h-10 text-primary" />
                                )}
                            </div>
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-white border border-blue-100 text-primary text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
                                    Department
                                </div>
                                <h1 className="text-5xl font-bold font-heading text-slate-900 leading-tight tracking-tight">
                                    {name}
                                </h1>
                            </div>
                        </div>

                        {/* 1. Overview */}
                        {description && (
                            <Section id="overview" title="Overview">
                                <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/60 shadow-sm">
                                    <p className="text-slate-700">{description}</p>
                                </div>
                            </Section>
                        )}

                        {/* 2. Mission & Vision */}
                        {(vision || mission) && (
                            <Section id="mission" title="Mission & Vision">
                                <div className="grid gap-6">
                                    {vision && (
                                        <div className="bg-gradient-to-br from-indigo-50/50 to-white p-8 rounded-[2rem] border border-indigo-50 shadow-sm">
                                            <h4 className="text-primary font-bold text-sm uppercase mb-4 tracking-wider flex items-center gap-2">
                                                <Brain className="w-4 h-4" /> Our Vision
                                            </h4>
                                            <p className="italic text-slate-700 font-medium">"{vision}"</p>
                                        </div>
                                    )}
                                    {mission && (
                                        <div className="bg-white/60 p-8 rounded-[2rem] border border-white/60 shadow-sm">
                                            <h4 className="text-primary font-bold text-sm uppercase mb-4 tracking-wider flex items-center gap-2">
                                                <Heart className="w-4 h-4" /> Our Mission
                                            </h4>
                                            {Array.isArray(mission) ? (
                                                <ul className="space-y-3">
                                                    {mission.map((m, i) => (
                                                        <li key={i} className="flex gap-3 text-slate-700 text-base">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span> {m}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="italic text-slate-700 font-medium">"{mission}"</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Section>
                        )}

                        {/* 3. Objectives */}
                        {objectives && (
                            <Section id="objectives" title="Our Objectives">
                                {typeof objectives === 'object' && !Array.isArray(objectives) ? (
                                    <div className="space-y-8">
                                        {Object.entries(objectives).map(([key, list]) => (
                                            <div key={key} className="bg-white/60 p-8 rounded-[2rem] border border-white/50 shadow-sm">
                                                <h4 className="text-lg font-bold text-slate-900 mb-6 capitalize flex items-center gap-2">
                                                    <span className="w-2 h-8 bg-secondary rounded-full" />
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </h4>
                                                <ul className="grid gap-3 pl-2">
                                                    {list.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Standard objectives display here if needed.</p>
                                )}
                            </Section>
                        )}

                        {/* Chairperson Info */}
                        {chairperson && (
                            <Section id="staff" title="Leadership">
                                <div className="bg-white rounded-[2.5rem] p-4 pr-10 border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-lg transition-all">
                                    <div className="w-24 h-24 rounded-[2rem] bg-slate-100 overflow-hidden relative">
                                        {/* Placeholder for Avatar if images exist later */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                            <User className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{chairperson.name}</h3>
                                        <p className="text-secondary font-bold uppercase text-xs tracking-widest">{chairperson.title}</p>
                                    </div>
                                </div>
                            </Section>
                        )}

                        {/* 4. Services / Sections / Subspecialties */}
                        {(services || sections || subspecialties || specialties) && (
                            <Section id="services" title="Scope of Services">
                                <div className="space-y-8">
                                    {services && (
                                        <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2 bg-blue-50 text-primary rounded-lg"><Stethoscope className="w-5 h-5" /></div>
                                                <h4 className="font-bold text-slate-900 text-lg">Key Services</h4>
                                            </div>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {services.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {subspecialties && (
                                        <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Microscope className="w-5 h-5" /></div>
                                                <h4 className="font-bold text-slate-900 text-lg">Subspecialties</h4>
                                            </div>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {subspecialties.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {sections && (
                                        <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50">
                                            <h4 className="font-bold text-slate-900 text-lg mb-6">Divisions</h4>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {sections.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {specialties && (
                                        <div className="bg-white/60 p-8 rounded-[2rem] border border-white/50">
                                            <h4 className="font-bold text-slate-900 text-lg mb-6">Specialties</h4>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {specialties.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </Section>
                        )}

                        {/* 5. Procedures */}
                        {procedures && (
                            <Section id="procedures" title="Procedures">
                                <div className="grid gap-6">
                                    {Object.entries(procedures).map(([key, list]) => (
                                        <div key={key} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-lg font-bold text-primary mb-6 capitalize border-b border-slate-100 pb-3">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                                {list.map((item, i) => (
                                                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2 font-medium">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </Section>
                        )}

                        {/* Concluding Statement */}
                        {concludingStatement && (
                            <div className="bg-secondary/5 rounded-3xl p-8 mt-12 text-center border border-secondary/10">
                                <p className="text-slate-600 italic text-lg font-medium">
                                    "{concludingStatement}"
                                </p>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}
