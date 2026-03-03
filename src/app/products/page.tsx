"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const PRODUCTS = [
    {
        category: "Dehydrated Onion",
        image: "Reference Img-7.jpeg",
        items: ["White Onion (Powder, Flakes, Minced, Chopped)", "Red Onion (Powder, Flakes)", "Pink Onion (Powder, Flakes)", "Custom Cuts & Fried Onions"],
    },
    {
        category: "Dehydrated Garlic",
        image: "Reference Img-6.jpeg",
        items: ["Garlic Powder", "Garlic Flakes", "Minced & Chopped Garlic", "Granulated & Fried Garlic"],
    },
    {
        category: "Spices & Seeds",
        image: "Spices_and_Seeds.png",
        items: ["Turmeric & Chilli Powder", "Cumin & Fennel Seeds", "Natural & Hulled Sesame Seeds", "Aromatic Herbs (Mint, Senna)"],
    },
];

export default function Products() {
    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <section className="bg-primary pt-32 pb-24 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Our Product Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 font-light"
                    >
                        Explore our premium range of organic dehydrated vegetables, aromatic spices, and nutritious seeds sourced directly from nature.
                    </motion.p>
                </div>
            </section>

            {/* Product Categories */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={`/assets/${group.image}`}
                                    alt={group.category}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-10">
                                    {group.category}
                                </h3>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <ul className="space-y-4 mb-8 flex-1">
                                    {group.items.map((item, idy) => (
                                        <li key={idy} className="flex items-start">
                                            <ArrowRight className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => toast.success("Quote request feature coming very soon!")}
                                    className="w-full py-4 rounded-xl bg-gray-50 text-primary font-bold hover:bg-primary hover:text-white transition-colors border border-gray-100"
                                >
                                    Request Quote
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to action */}
            <section className="max-w-4xl mx-auto mt-24 text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Need bulk orders or custom cuts?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    We accommodate custom dehydration needs and varying bulk packaging suitable for diverse global markets. Feel free to contact us for specific requirements.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-primary hover:bg-primary-light transition-colors shadow-lg shadow-primary/30">
                    Contact Sales
                </a>
            </section>
        </div>
    );
}
