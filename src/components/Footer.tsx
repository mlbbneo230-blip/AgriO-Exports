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
                                {/* Using a simple SVG path or Lucide icons for WhatsApp if available, or just an Image/custom SVG. Assuming Lucide doesn't have a direct WhatsApp logo, we can use a generic message-circle or similar, but the user explicitly asked for WhatsApp logo. Let's use a standard FontAwesome/SVG or an Image. Since I don't have a WhatsApp image, I'll use a stylized SVG inline */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                                <span>7775885983</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-secondary" />
                                <a href="mailto:agrioexports.india@gmail.com" className="hover:text-white transition-colors">agrioexports.india@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="pt-4 flex items-center space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AgriO Exports. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
