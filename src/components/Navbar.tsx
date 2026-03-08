"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const NAV_LINKS = [
  { name: "HOME", path: "/" },
  { name: "OUR PRODUCTS", path: "/products" },
  { name: "GLOBAL LOGISTICS", path: "/global-logistics" },
  { name: "ABOUT US", path: "/about" },
  { name: "CERTIFICATES", path: "/certificates" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fbfaf6] shadow-md border-b-[1px] border-[#e5e5e5] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-3">
            <Link href="/" className="h-full flex items-center">
              <Image src="/AE_Logo.png" alt="AgriO Exports" width={220} height={70} className="object-contain h-full w-auto" priority />
            </Link>
          </div>

          {/* Right Section: Links & Button */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
            <div className="flex items-center space-x-2 text-[13px] font-bold tracking-widest text-[#222]">
              {NAV_LINKS.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.path}
                    className="relative group px-1 py-4 text-[#333] hover:text-[#0B1E36] transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </Link>
                  {index < NAV_LINKS.length - 1 && (
                    <span className="mx-2 text-[#999] font-normal">|</span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => toast.success("Quote request feature coming very soon!")}
              className="bg-[#0B1E36] hover:bg-[#09182b] text-white text-[13px] font-bold tracking-widest uppercase px-6 py-3 rounded-md transition-shadow shadow-md hover:shadow-lg"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1b4332] hover:bg-[#1b4332]/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-[#f0eee4] border-t border-[#1b4332]/10"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[#1b4332] hover:bg-[#1b4332]/5 block px-3 py-2 rounded-md text-sm font-bold tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3 border-t border-[#1b4332]/10 flex space-x-4">
            <button aria-label="Search" className="text-[#1b4332] hover:text-black transition-colors">
              <Search className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button aria-label="User Profile" className="text-[#1b4332] hover:text-black transition-colors">
              <UserCircle className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
