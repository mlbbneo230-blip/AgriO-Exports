"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const CERTIFICATES = [
    {
        title: "Udyam Registration Certificate",
        filename: "Print _ Udyam Registration Certificate.pdf",
        description: "Official registration as a Micro, Small & Medium Enterprise (MSME) under the Government of India."
    },
    {
        title: "FSSAI License",
        filename: "RegistrationCertificate_27GQKPR3473J1Z3.pdf",
        description: "Food Safety and Standards Authority of India registration ensuring our products meet the highest safety benchmarks."
    },
    {
        title: "Export Certification",
        filename: "GQKPR3473J.pdf",
        description: "Authorized export documentation allowing seamless international trade and cross-border logistics."
    }
];

export default function CertificatesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <section className="bg-primary pt-32 pb-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Our <span className="text-secondary">Certificates</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-300 leading-relaxed font-light"
                    >
                        We operate with complete transparency and adhere to rigorous international standards.
                        View and download our official company registrations and quality certifications below.
                    </motion.p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATES.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary/20 transition-all"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                            <p className="text-gray-600 text-sm mb-8 flex-grow">
                                {cert.description}
                            </p>

                            <a
                                href={`/assets/certificates/${cert.filename}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-200 shadow-sm text-sm font-bold rounded-lg text-primary bg-white hover:bg-gray-50 hover:border-primary/30 transition-all gap-2"
                            >
                                <Download className="w-4 h-4" />
                                View PDF
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
