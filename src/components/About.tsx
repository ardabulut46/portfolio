'use client';

import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  backend: ['.NET Core', 'C#', 'RESTful APIs', 'SQL Server', 'Entity Framework', 'ASP.NET'],
  development: ['Git', 'Docker', 'Azure', 'Visual Studio', 'Postman', 'JWT Authentication'],
  database: ['SQL Server Management', 'Database Design', 'Entity Framework Core']
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            {t('about.title')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-neutral-800/80">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {t('about.whoIAm')}
                </h3>
                <div className="space-y-4">
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t('about.description1')}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t('about.description2')}
                  </p>
                </div>

                <motion.a
                  href="/cv.pdf"
                  download
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg mt-8 hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiDownload className="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  <span className="font-medium">{t('about.downloadCV')}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 lg:sticky lg:top-24 self-start"
            >
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text capitalize">
                    {category} {t('about.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600"
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