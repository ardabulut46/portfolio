'use client';

import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function IntroPage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr' | null>(null);

  const handleEnter = () => {
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
      router.push('/home');
    }
  };

  const bracketVariants: Variants = {
    initial: { 
      x: 0, 
      opacity: 0,
      rotate: -180,
      scale: 0
    },
    animate: { 
      x: 0, 
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        rotate: {
          duration: 1.5,
          ease: "easeOut"
        }
      }
    },
    expand: (custom: number) => ({
      x: custom,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.5
      }
    })
  };

  const containerVariants: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 2.3
      }
    }
  };

  const letterVariants: Variants = {
    initial: { 
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const languageVariants: Variants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 3.8,
        ease: "easeOut"
      }
    }
  };

  const englishText = "Welcome to my portfolio";
  const turkishText = "Portfolyoma hoşgeldiniz";

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
          style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="relative">
        <div className="flex items-center justify-center">
          {/* Left Bracket */}
          <motion.div
            custom={-150}
            variants={bracketVariants}
            initial="initial"
            animate={["animate", "expand"]}
            className="text-7xl font-light text-blue-500"
          >
            {"{"}
          </motion.div>

          {/* Welcome Text */}
          <div className="mx-8 flex flex-col items-center gap-4">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex overflow-hidden"
            >
              {englishText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-2xl font-light text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex overflow-hidden"
            >
              {turkishText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-xl font-light text-neutral-400"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Bracket */}
          <motion.div
            custom={150}
            variants={bracketVariants}
            initial="initial"
            animate={["animate", "expand"]}
            className="text-7xl font-light text-purple-500"
            onAnimationComplete={() => setIsAnimationComplete(true)}
          >
            {"}"}
          </motion.div>
        </div>

        {/* Language Selection */}
        {isAnimationComplete && (
          <motion.div
            variants={languageVariants}
            initial="initial"
            animate="animate"
            className="mt-16 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLanguage('en')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedLanguage === 'en'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                English
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLanguage('tr')}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedLanguage === 'tr'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Türkçe
              </motion.button>
            </div>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className={`px-16 py-4 rounded-lg font-medium transition-all duration-300 ${
                selectedLanguage
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
                  : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
              }`}
              disabled={!selectedLanguage}
            >
              {selectedLanguage === 'tr' ? 'GİRİŞ' : 'ENTER'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 