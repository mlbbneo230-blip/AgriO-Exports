"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ship, Truck, Globe, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GlobalLogistics() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header section with Video Background */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        src="/assets/Global_Logistics_video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Global Logistics <span className="text-secondary">& Distribution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 font-light"
                    >
                        Bridging the gap between our pristine farmlands and your global doorstep with unmatched reliability and speed.
                    </motion.p>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Network</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Seamless Supply Chain</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Ship, title: "Ocean Freight", desc: "Cost-effective, large-scale shipping to major international ports." },
                        { icon: Truck, title: "Inland Transport", desc: "Reliable domestic distribution from processing facilities to ports." },
                        { icon: Globe, title: "Worldwide Reach", desc: "Exporting across continents with dedicated regional partners." },
                        { icon: CheckCircle2, title: "Customs Clearance", desc: "Expert handling of all documentation and regulatory compliance." },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Interactive map visualization (placeholder concept) */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Presence</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Our robust logistics framework ensures that the unparalleled quality of Indian agriculture reaches your facility, regardless of geographical boundaries.
                </p>

                <div className="relative w-full aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
                    {/* In a real app, this would be an interactive map library like Mapbox or a map SVG */}
                    <Image
                        src="/assets/Reference Img-5.png"
                        alt="Global Network"
                        fill
                        className="object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="glass px-8 py-6 rounded-2xl flex flex-col items-center">
                            <MapPin className="w-10 h-10 text-primary mb-3" />
                            <h3 className="text-xl font-bold text-gray-900">Headquartered in India</h3>
                            <p className="text-gray-600 font-medium tracking-wide">SHIPPING WORLDWIDE</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-primary-light transition-colors shadow-lg shadow-primary/30">
                        Discuss Freight Options
                    </Link>
                </div>
            </section>
        </div>
    );
}
