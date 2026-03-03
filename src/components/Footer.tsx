"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-gray-300 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image src="/AgriO_exports_logo.png" alt="AgriO Exports Logo" width={48} height={48} className="rounded-full object-cover aspect-square" />
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                Agri<span className="text-secondary">O</span> Exports
                            </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            With AgriO Exports, you receive nutritious and organic dehydrated foods delivered with care. Our products include easy instructions, guaranteed freshness, and direct communication with our management for complete transparency. Healthy food is our promise to you.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/quality" className="hover:text-white transition-colors">Quality</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-secondary" />
                                <span>+91 7775885983</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-secondary" />
                                <a href="mailto:agrioexports.india@gmail.com" className="hover:text-white transition-colors">agrioexports.india@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AgriO Exports. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
