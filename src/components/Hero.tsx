'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50 dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full -top-20 -left-20 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full -bottom-20 -right-20 blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-blue-400">
              <Image
                src="/images/profile.jpg"
                alt="Arda Bulut"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {t('hero.title')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              {t('hero.viewWork')}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300"
            >
              {t('hero.getInTouch')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neutral-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 