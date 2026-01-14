import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | Divine Word Hospital',
    description: 'Terms and conditions for using Divine Word Hospital services and website.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-700 rounded-2xl mb-6">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-slate-500">
                        Last Updated: January 14, 2024
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 prose prose-slate prose-lg max-w-none">
                    <p className="lead text-xl text-slate-600">
                        Welcome to Divine Word Hospital. By accessing our website and services, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <hr className="border-slate-100 my-12" />

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
                        <p>
                            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Medical Disclaimer</h2>
                        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex gap-4">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 m-0 mb-2">Not Medical Advice</h3>
                                <p className="m-0 text-slate-700 text-base">
                                    The content on this website is for informational purposes only and is not intended to substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Use of Services</h2>
                        <p>
                            You agree to use our services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website, including, without limitation:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-emerald-500">
                            <li>Accessing data not intended for you.</li>
                            <li>Attempting to probe, scan, or test the vulnerability of the system.</li>
                            <li>Interfering with service to any user, host, or network.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Intellectual Property</h2>
                        <p>
                            You agree that all materials, products, and services provided on this website are the property of Divine Word Hospital, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Limitation of Liability</h2>
                        <p>
                            Divine Word Hospital will not be liable for any damages that will arise with the use or inability to use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Changes to Terms</h2>
                        <p>
                            Divine Word Hospital reserves the right to modify these specific terms at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
