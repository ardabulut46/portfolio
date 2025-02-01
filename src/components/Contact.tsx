'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const email = 'ardablt47@gmail.com';
  const mailtoLink = `mailto:${email}?subject=Let's Connect&body=Hi Arda,%0D%0A%0D%0AI'd like to connect with you regarding...`;

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('contact.title')}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 mb-12"
          >
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              {t('contact.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {t('contact.connect')}
                </h4>
                <div className="flex justify-center gap-6">
                  <motion.a
                    href="https://www.linkedin.com/in/arda-bulut-3b3a3a214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-2xl text-[#0077B5] group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-neutral-700 dark:text-neutral-200">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/ardabulut46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-2xl text-neutral-800 dark:text-white group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-neutral-700 dark:text-neutral-200">GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <motion.a
                href={mailtoLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t('contact.sendEmail')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 