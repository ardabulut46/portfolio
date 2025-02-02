'use client';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  backend: ['.NET Core', 'C#', 'RESTful APIs', 'SQL Server', 'Entity Framework', 'ASP.NET'],
  development: ['Git', 'Docker', 'Azure', 'Visual Studio', 'Postman', 'JWT Authentication'],
  database: ['SQL Server Management', 'Database Design', 'Entity Framework Core']
};

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50 dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full -top-20 -right-20 blur-3xl opacity-30"
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
          className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full -bottom-20 -left-20 blur-3xl opacity-30"
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

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-20 text-center"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              {t('about.title')}
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100/80 dark:border-neutral-700/80">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
                  {t('about.whoIAm')}
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t('about.description1')}
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t('about.description2')}
                  </p>
                </div>

                <motion.a
                  href={language === 'tr' ? '/cv-tr.pdf' : '/cv.pdf'}
                  download
                  className="group inline-flex items-center gap-3 mt-10 relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <span className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg">
                    <HiDownload className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
                    {t('about.downloadCV')}
                  </span>
                </motion.a>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 lg:sticky lg:top-24 self-start"
            >
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100/80 dark:border-neutral-700/80 hover:shadow-lg transition-all duration-500"
                >
                  <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text capitalize">
                    {category} {t('about.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-5 py-2.5 bg-gradient-to-br from-neutral-50/80 to-neutral-100/80 dark:from-neutral-700/80 dark:to-neutral-600/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-neutral-700 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-600/50 backdrop-blur-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 