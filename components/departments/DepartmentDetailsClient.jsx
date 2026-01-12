'use client';

import { useRouter } from 'next/navigation';
// Manual scroll logic used instead of react-scroll
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Mail, Facebook, User, Stethoscope, Microscope, Baby, Brain, Heart, GraduationCap } from 'lucide-react';
import { default as DynamicIcons } from '../dynamicIcons/DynamicIcons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// Reusable Section Component
const Section = ({ id, title, children, className }) => (
    <section id={id} className={cn("scroll-mt-32 mb-16", className)}>
        {title && (
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6 border-l-4 border-secondary pl-4 flex items-center gap-3">
                {title}
            </h2>
        )}
        <div className="text-lg text-blue-100/80 leading-relaxed font-light space-y-4">
            {children}
        </div>
    </section>
);

const ListItem = ({ children }) => (
    <li className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-secondary mt-1 shrink-0" />
        <span className="text-sm md:text-base">{children}</span>
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
        <div className="bg-primary min-h-screen relative overflow-hidden font-sans pb-32">
            {/* Simple Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#161270] to-[#0f0c29] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                {/* Header / Breadcrumb */}
                <div className="flex items-center gap-4 mb-12">
                    <button
                        onClick={() => router.back()} // Or router.push('/expertise/departments') to be safe
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <nav className="flex items-center gap-2 text-sm font-medium text-blue-200/60 flex-wrap">
                        <span>Expertise</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="hover:text-white cursor-pointer" onClick={() => router.push('/expertise/departments')}>Departments</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white truncate max-w-[200px] md:max-w-none">{name}</span>
                    </nav>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* LEFT: MAIN CONTENT (8 cols) */}
                    <div className="lg:col-span-8">

                        {/* Title Block */}
                        <div className="mb-12 flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-24 h-24 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0">
                                {/* Assuming icon is passed as component or handled by DynamicIcons. 
								    Since data/departments.js had imports, the 'icon' might be the component itself.
									Safe fallback logic needed.
								*/}
                                {icon ? (
                                    <DynamicIcons name={icon} className="w-12 h-12 text-secondary" />
                                ) : (
                                    <Stethoscope className="w-12 h-12 text-secondary" />
                                )}
                            </div>
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold tracking-widest uppercase mb-2">
                                    Department
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                                    {name}
                                </h1>
                            </div>
                        </div>

                        {/* 1. Overview */}
                        {description && (
                            <Section id="overview" title="Overview">
                                <p>{description}</p>
                            </Section>
                        )}

                        {/* 2. Mission & Vision */}
                        {(vision || mission) && (
                            <Section id="mission" title="Mission & Vision">
                                <div className="grid gap-6">
                                    {vision && (
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                            <h4 className="text-secondary font-bold text-sm uppercase mb-3 tracking-wider flex items-center gap-2">
                                                <Brain className="w-4 h-4" /> Our Vision
                                            </h4>
                                            <p className="italic text-blue-100">&quot;{vision}&quot;</p>
                                        </div>
                                    )}
                                    {mission && (
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                                            <h4 className="text-secondary font-bold text-sm uppercase mb-3 tracking-wider flex items-center gap-2">
                                                <Heart className="w-4 h-4" /> Our Mission
                                            </h4>
                                            {Array.isArray(mission) ? (
                                                <ul className="space-y-2">
                                                    {mission.map((m, i) => (
                                                        <li key={i} className="flex gap-2 text-sm text-blue-100/90">
                                                            <span className="text-secondary">•</span> {m}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="italic text-blue-100">&quot;{mission}&quot;</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Section>
                        )}

                        {/* 3. Objectives */}
                        {objectives && (
                            <Section id="objectives" title="Our Objectives">
                                {/* Check if objectives is an object with categories or just a list (not common in provided data but good safety) */}
                                {typeof objectives === 'object' && !Array.isArray(objectives) ? (
                                    <div className="space-y-6">
                                        {Object.entries(objectives).map(([key, list]) => (
                                            <div key={key}>
                                                <h4 className="text-lg font-bold text-blue-200 mb-3 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </h4>
                                                <ul className="grid gap-2">
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

                        {/* Chairperson Info (Moved up or consolidated) - Let's put it in a Staff section */}
                        {chairperson && (
                            <Section id="staff" title="Leadership">
                                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <User className="w-8 h-8 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{chairperson.name}</h3>
                                        <p className="text-blue-200 uppercase text-xs tracking-wider mt-1">{chairperson.title}</p>
                                    </div>
                                </div>
                            </Section>
                        )}

                        {/* 4. Services / Sections / Subspecialties */}
                        {(services || sections || subspecialties || specialties) && (
                            <Section id="services" title="Scope of Services">
                                <div className="space-y-8">
                                    {services && (
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Key Services</h4>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {services.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {subspecialties && (
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Subspecialties</h4>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {subspecialties.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {sections && (
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Divisions</h4>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {sections.map((s, i) => <ListItem key={i}>{s}</ListItem>)}
                                            </ul>
                                        </div>
                                    )}
                                    {specialties && (
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Specialties</h4>
                                            <ul className="grid md:grid-cols-2 gap-3">
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
                                {/* Usually an object in departments.js */}
                                <div className="grid gap-8">
                                    {Object.entries(procedures).map(([key, list]) => (
                                        <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/5">
                                            <h4 className="text-lg font-bold text-secondary mb-4 capitalize border-b border-white/10 pb-2">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {list.map((item, i) => (
                                                    <li key={i} className="text-sm text-blue-100/80 flex items-start gap-2">
                                                        <span className="text-white/30 mt-1">•</span> {item}
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
                            <div className="border-t border-white/10 pt-8 mt-12">
                                <p className="text-blue-200/60 italic text-center text-lg font-light">
                                    &quot;{concludingStatement}&quot;
                                </p>
                            </div>
                        )}

                    </div>


                    {/* RIGHT: STICKY NAVIGATION (4 cols) */}
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className="sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
                            <h3 className="text-sm font-bold text-blue-200/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                                Department Menu
                            </h3>
                            <nav className="space-y-1">
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
                                                "w-full text-left py-2 px-4 rounded-lg transition-all text-sm font-medium border-l-2",
                                                activeSection === item.id
                                                    ? "bg-secondary/10 text-secondary border-secondary"
                                                    : "text-blue-200/60 hover:text-white hover:bg-white/5 border-transparent"
                                            )}
                                        >
                                            {item.label}
                                        </button>
                                    )
                                ))}
                            </nav>

                            {/* Call to Action Box */}
                            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-secondary to-blue-600 text-white shadow-xl">
                                <h4 className="font-bold text-lg mb-2">Patient Care</h4>
                                <p className="text-sm text-blue-100 mb-4">
                                    Looking for a specialist in {name}?
                                </p>
                                <button
                                    onClick={() => router.push('/doctors')}
                                    className="w-full py-3 rounded-xl bg-white text-primary font-bold text-sm hover:shadow-lg transition-shadow"
                                >
                                    Find a Doctor
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
