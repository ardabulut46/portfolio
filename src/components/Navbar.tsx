'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the navbar + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md z-50 py-4 shadow-lg dark:shadow-neutral-900/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={`relative hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors ${
                  activeSection === item.href.substring(1) ? 'text-blue-500 dark:text-blue-400' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
                    initial={false}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="/cv.pdf"
              download
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-transparent transition-colors duration-300" />
              <HiDownload className="relative text-lg group-hover:text-white transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="relative text-sm group-hover:text-white transition-colors duration-300">
                {t('about.downloadCV')}
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={`block py-2 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'hover:text-neutral-600 dark:hover:text-neutral-300'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/cv.pdf"
              download
              className="group flex items-center gap-2 py-2 transition-colors duration-300"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(false)}
            >
              <HiDownload className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              <span className="group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                {t('about.downloadCV')}
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
} 