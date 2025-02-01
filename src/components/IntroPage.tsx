'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function IntroPage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr' | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnter = () => {
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
      router.push('/home');
    }
  };

  const bracketVariants: Variants = {
    initial: { 
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    animate: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    expand: (custom: number) => ({
      x: custom,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.2
      }
    })
  };

  const textContainerVariants: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 2
      }
    }
  };

  const letterVariants: Variants = {
    initial: { 
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const languageVariants: Variants = {
    initial: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 3.5,
        ease: "easeOut"
      }
    }
  };

  const englishText = "Welcome to my portfolio";
  const turkishText = "Portfolyoma hoşgeldiniz";

  return (
    <div className="relative min-h-screen bg-neutral-900 flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(600px at 0% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
            'radial-gradient(600px at 100% 0%, rgba(147, 51, 234, 0.15) 0%, transparent 80%)',
            'radial-gradient(600px at 100% 100%, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
            'radial-gradient(600px at 0% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 80%)',
            'radial-gradient(600px at 0% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 80%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center">
          {/* Left Bracket */}
          <motion.div
            custom={-160}
            variants={bracketVariants}
            initial="initial"
            animate={["animate", "expand"]}
            className="text-8xl font-extralight text-blue-500/80"
          >
            {"{"}
          </motion.div>

          {/* Welcome Text */}
          <div className="mx-12 flex flex-col items-center gap-6">
            <motion.div
              variants={textContainerVariants}
              initial="initial"
              animate="animate"
              className="flex overflow-hidden"
            >
              {englishText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-3xl font-light text-white/90"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={textContainerVariants}
              initial="initial"
              animate="animate"
              className="flex overflow-hidden"
            >
              {turkishText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-2xl font-light text-neutral-400/80"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Bracket */}
          <motion.div
            custom={160}
            variants={bracketVariants}
            initial="initial"
            animate={["animate", "expand"]}
            className="text-8xl font-extralight text-purple-500/80"
            onAnimationComplete={() => setIsAnimationComplete(true)}
          >
            {"}"}
          </motion.div>
        </div>

        {/* Language Selection */}
        <AnimatePresence>
          {isAnimationComplete && (
            <motion.div
              variants={languageVariants}
              initial="initial"
              animate="animate"
              className="mt-20 flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLanguage('en')}
                  className={`px-10 py-3.5 rounded-xl font-medium transition-all duration-500 ${
                    selectedLanguage === 'en'
                      ? 'bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white shadow-lg'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 backdrop-blur-sm border border-white/10'
                  }`}
                >
                  English
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLanguage('tr')}
                  className={`px-10 py-3.5 rounded-xl font-medium transition-all duration-500 ${
                    selectedLanguage === 'tr'
                      ? 'bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white shadow-lg'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 backdrop-blur-sm border border-white/10'
                  }`}
                >
                  Türkçe
                </motion.button>
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnter}
                className={`relative px-20 py-4 rounded-xl font-medium transition-all duration-500 overflow-hidden ${
                  selectedLanguage
                    ? 'bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white shadow-lg hover:shadow-xl'
                    : 'bg-neutral-800/50 text-neutral-500 cursor-not-allowed backdrop-blur-sm'
                }`}
                disabled={!selectedLanguage}
              >
                <span className="relative z-10">
                  {selectedLanguage === 'tr' ? 'GİRİŞ' : 'ENTER'}
                </span>
                {selectedLanguage && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 