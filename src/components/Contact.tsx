'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const email = 'ardablt47@gmail.com';
  const mailtoLink = `mailto:${email}?subject=Let's Connect&body=Hi Arda,%0D%0A%0D%0AI'd like to connect with you regarding...`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50 dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full -bottom-20 -left-20 blur-3xl opacity-30"
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
          className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full -top-20 -right-20 blur-3xl opacity-30"
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

      <div className="container relative mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                {t('contact.title')}
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Social Links */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
                {t('contact.connect')}
              </h4>
              <div className="flex flex-col gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/arda-bulut-3b3a3a214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 p-4 bg-white/80 dark:bg-neutral-800/80 rounded-2xl backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0077B5]/10 text-[#0077B5]">
                    <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-200">
                    LinkedIn
                  </span>
                </motion.a>
                <motion.a
                  href="https://github.com/ardabulut46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 p-4 bg-white/80 dark:bg-neutral-800/80 rounded-2xl backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-white">
                    <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-200">
                    GitHub
                  </span>
                </motion.a>
              </div>
            </div>

            {/* Email Section */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 text-transparent bg-clip-text">
                {t('contact.sendEmail')}
              </h4>
              <motion.a
                href={mailtoLink}
                className="group relative flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 hover:from-blue-600/90 hover:to-purple-600/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white">
                  <HiMail className="text-2xl group-hover:scale-110 transition-transform" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-white">
                    {email}
                  </span>
                  <span className="text-sm text-white/80">
                    Click to send an email
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  style={{ zIndex: -1 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 