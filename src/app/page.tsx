"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/Logo_Intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-primary/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/10"
          >
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="text-white text-sm font-medium tracking-wide uppercase">Organic & Nutritious</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-6"
          >
            Naturally <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Potent</span>.<br />
            Perfectly <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">Processed</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light mb-10"
          >
            From Soil to Seasoning. Where Quality Meets the World.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="bg-secondary hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-secondary/50 flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="glass hover:bg-white/10 text-white font-medium px-8 py-4 rounded-full transition-all flex items-center justify-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Foundation</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Setting the Global Standard</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Rigorous testing and global certifications ensure every product meets international standards." },
              { icon: Leaf, title: "Sustainable Sourcing", desc: "We work directly with farmers to promote eco-friendly practices from seed to harvest." },
              { icon: Globe, title: "Global Export Reach", desc: "Delivering freshness and flavor across continents with an optimized supply chain." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About Highlight with Image */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/assets/Reference Img-7.jpeg"
            alt="Milling process"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:pr-12"
          >
            <h2 className="text-4xl font-bold mb-6">We set the standard for tomorrow's food industry, today.</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              AgriO Exports specializes in the manufacturing and trading of premium dehydrated onions, garlic, and an exquisite range of spices. With a legacy built on trust and innovation, we benchmark food safety and quality globally.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors border-b-2 border-secondary hover:border-white pb-1"
            >
              Discover Our Story <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Product Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Premium Offerings</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Experience True Quality</h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Take an immersive look at our meticulously processed dehydrated products, retaining their natural aroma, pungency, and vital nutrients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
            >
              <div className="aspect-video w-full relative bg-gray-900 overflow-hidden">
                <video
                  src="/assets/Product_Intro_1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center bg-white relative z-10 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-primary mb-3">Premium Onion Powders</h4>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  Carefully selected, perfectly dehydrated white and red onions ensuring maximum flavor retention for culinary masterpieces.
                </p>
                <Link
                  href="/products#onion"
                  className="inline-flex items-center justify-center font-bold text-[#0B1E36] hover:text-[#d4af37] transition-colors gap-2"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Product Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
            >
              <div className="aspect-video w-full relative bg-gray-900 overflow-hidden">
                <video
                  src="/assets/Product_Intro_2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center bg-white relative z-10 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-primary mb-3">Exquisite Spices & Garlic</h4>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  Aromatic garlic and rich, deeply flavored spices processed to preserve their natural pungency and essential oils.
                </p>
                <Link
                  href="/products#garlic"
                  className="inline-flex items-center justify-center font-bold text-[#0B1E36] hover:text-[#d4af37] transition-colors gap-2"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Standards</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Our Certifications</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { img: "Reference Img-1.jpeg", alt: "GMP" },
              { img: "Reference Img-2.jpeg", alt: "ISO 22000" },
              { img: "Reference Img-3.jpeg", alt: "Global Standard QA" },
              { img: "Reference Img-4.jpeg", alt: "Organic Certified" },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`/assets/${cert.img}`}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Logistics Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/Global_Logistics_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6"
          >
            Delivering Excellence, <br className="md:hidden" /><span className="text-secondary">Globally.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light mb-10 leading-relaxed"
          >
            From our state-of-the-art facilities directly to your destination. We ensure seamless, secure, and timely international logistics for all our premium agricultural exports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="glass hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>Inquire About Shipping</span>
              <Globe className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
