"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="relative py-24 bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/assets/Reference Img-5.png"
                        alt="Farming"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                    >
                        About AgriO Exports
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        A legacy of purity, from our farms to your table.
                    </motion.p>
                </div>
            </section>

            {/* Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    AgriO Exports was established with a clear vision: to deliver the finest, naturally potent, and perfectly processed dehydrated foods to the global market. We understand that healthy food is the foundation of a happy life, which is why we compromise on nothing when it comes to quality.
                                </p>
                                <p>
                                    Over the years, our dedication to sustainable farming and advanced processing techniques has positioned us as a benchmark in the food quality and safety industry. We work closely with our agricultural partners to ensure that every product we export is organic, nutritious, and carefully crafted to preserve its natural essence.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/Reference Img-1.jpeg"
                                alt="AgriO facility"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
