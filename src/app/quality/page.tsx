"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Quality() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
                >
                    Where <span className="text-primary">Quality</span> Meets the World
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 leading-relaxed"
                >
                    We benchmark food quality and safety globally. From direct sourcing to advanced dehydration and packing, our processes ensure you receive organic, nutritious, and pure products, guaranteed to stay fresh.
                </motion.p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Certificates mapping using provided images */}
                    {[
                        { img: "Reference Img-1.jpeg", title: "Good Manufacturing Practice" },
                        { img: "Reference Img-2.jpeg", title: "ISO 22000 Certified" },
                        { img: "Reference Img-3.jpeg", title: "Global Standard QA" },
                        { img: "Reference Img-4.jpeg", title: "Organic Certified" },
                    ].map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center"
                        >
                            <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-gray-50">
                                <Image
                                    src={`/assets/${cert.img}`}
                                    alt={cert.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                <span>{cert.title}</span>
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
