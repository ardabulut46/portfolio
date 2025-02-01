'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-200 ${
            language === 'en'
              ? 'bg-blue-500 text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
          }`}
        >
          EN
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('tr')}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-200 ${
            language === 'tr'
              ? 'bg-blue-500 text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
          }`}
        >
          TR
        </motion.button>
      </div>
    </div>
  );
} 