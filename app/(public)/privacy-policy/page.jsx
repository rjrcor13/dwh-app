import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
    title: 'Data Privacy Statement | Divine Word Hospital',
    description: 'Our commitment to protecting your personal and medical information in accordance with the Data Privacy Act of 2012. Read the Divine Word Hospital Data Privacy Statement.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-700 rounded-2xl mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
                        Data Privacy Statement
                    </h1>
                    <p className="text-slate-500">
                        Last Updated: January 14, 2024
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 prose prose-slate prose-lg max-w-none">
                    <p className="lead text-xl text-slate-600">
                        At Divine Word Hospital, we are deeply committed to protecting the privacy and security of your personal and health information. This Data Privacy Statement outlines how we collect, use, and safeguard your data in strict compliance with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of the Philippines.
                    </p>

                    <hr className="border-slate-100 my-12" />

                    <section className="mb-12">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 text-sm">1</span>
                            Information We Collect
                        </h2>
                        <p>
                            We collect information necessary to provide you with high-quality healthcare services. This may include:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mt-6">
                            {[
                                'Personal identification (Name, DOB)',
                                'Contact information (Phone, Email, Address)',
                                'Medical history and records',
                                'Insurance and billing details',
                                'Emergency contact information',
                                'Physician referrals'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 text-sm">2</span>
                            How We Use Your Information
                        </h2>
                        <p>
                            Your information is primarily used to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-blue-500">
                            <li>Provide medical diagnosis, treatment, and care.</li>
                            <li>Process payments and insurance claims.</li>
                            <li>Communicate with you regarding appointments and test results.</li>
                            <li>Improve our hospital services and patient experience.</li>
                            <li>Comply with legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 text-sm">3</span>
                            Data Security
                        </h2>
                        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                            <Lock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 m-0 mb-2">State-of-the-Art Protection</h3>
                                <p className="m-0 text-slate-600 text-base">
                                    We implement robust technical and organizational measures to secure your personal health information against unauthorized access, alteration, disclosure, or destruction. Our systems are regularly audited to ensure compliance with data privacy laws.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 text-sm">4</span>
                            Your Rights
                        </h2>
                        <p>
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-blue-500">
                            <li>Access your medical records.</li>
                            <li>Request corrections to your information.</li>
                            <li>Request confidential communications.</li>
                            <li>File a complaint if you believe your privacy rights have been violated.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 text-sm">5</span>
                            Data Protection Officer (DPO)
                        </h2>
                        <p className="mb-8">
                            If you have any questions about this Data Privacy Statement, or wish to exercise your rights under the Data Privacy Act of 2012, please reach out to our assigned Data Protection Officer:
                        </p>
                        
                        <div className="mt-6 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                            {/* Decorative Background Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                                    <Shield className="w-10 h-10 text-blue-300" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-blue-300 font-bold uppercase tracking-widest text-xs mb-1">Assigned Representative</p>
                                    <h3 className="text-3xl font-bold font-heading text-white mb-2">Data Protection Officer</h3>
                                    <p className="text-slate-300 mb-6 text-sm">Divine Word Hospital <br/> Avenida Veteranos, Tacloban City, Leyte 6500</p>
                                    
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                                <FileText className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <a href="mailto:dpo@dwh.ph" className="text-base font-medium hover:text-blue-300 transition-colors">dpo@dwh.ph</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                                <Lock className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <span className="text-base font-medium">+63 (053) XXX-XXXX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                            <p className="text-amber-800 text-sm m-0">
                                <strong>Note:</strong> Under RA 10173, you have the right to escalate privacy-related complaints to the <strong>National Privacy Commission (NPC)</strong> of the Philippines if your concerns are not properly addressed by our DPO.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
