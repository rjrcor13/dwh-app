import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | Divine Word Hospital',
    description: 'Our commitment to protecting your personal and medical information. Read the Divine Word Hospital Privacy Policy.',
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
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500">
                        Last Updated: January 14, 2024
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 prose prose-slate prose-lg max-w-none">
                    <p className="lead text-xl text-slate-600">
                        At Divine Word Hospital, we are committed to protecting the privacy and security of your personal and health information. This Privacy Policy outlines how we collect, use, and safeguard your data.
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
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:
                        </p>
                        <div className="mt-6 p-6 bg-slate-900 text-white rounded-2xl">
                            <p className="font-bold text-lg mb-1">Data Privacy Office</p>
                            <p className="text-slate-300 mb-4">Divine Word Hospital</p>
                            <p className="m-0 flex items-center gap-2">
                                <span className="opacity-60">Email:</span>
                                <a href="mailto:privacy@divineword.com" className="text-white underline decoration-blue-400 decoration-2 underline-offset-4">privacy@divineword.com</a>
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
