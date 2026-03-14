"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const PRODUCTS = [
    {
        name: "Dehydrated White Onion Flakes",
        image: "products/Dehydrated White Onion Flakes.png",
        description: "Premium quality dehydrated white onion flakes, carefully processed to retain natural flavor, aroma, and nutritional value. Ideal for soups, seasonings, and ready-to-eat meals.",
    },
    {
        name: "Dehydrated Pink Onion Flakes",
        image: "products/Dehydrated Pink Onion Flakes.png",
        description: "Naturally dehydrated pink onion flakes with a rich, sweet flavor profile. Perfect for snack seasonings, curry bases, and international culinary applications.",
    },
    {
        name: "White Onion Powder",
        image: "products/White Onion Powder.png",
        description: "Finely ground white onion powder made from select-grade onions. A versatile ingredient for spice blends, sauces, dressings, and industrial food processing.",
    },
    {
        name: "Pink Onion Powder",
        image: "products/Pink Onion Powder.png",
        description: "Pure pink onion powder with a distinctly robust taste. Widely used in instant food mixes, masala blends, and gourmet cooking across global markets.",
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

            {/* Product Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PRODUCTS.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-72 w-full overflow-hidden bg-gray-50">
                                <Image
                                    src={`/assets/${product.image}`}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                    {product.description}
                                </p>
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
