'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 