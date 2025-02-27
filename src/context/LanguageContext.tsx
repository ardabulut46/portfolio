'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title': 'Software Developer & Tech Enthusiast',
    'hero.subtitle': 'Crafting beautiful digital experiences with code and creativity',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get in Touch',

    // About Section
    'about.title': 'About Me',
    'about.whoIAm': 'Who I Am',
    'about.description1': "I'm a backend developer specializing in .NET technologies and database management. With a strong foundation in C# and SQL Server, I focus on building robust, scalable backend systems that power modern applications.",
    'about.description2': 'My expertise lies in creating efficient APIs, implementing secure authentication systems, and designing optimized database structures that form the backbone of reliable software solutions.',
    'about.downloadCV': 'Download CV',
    'about.technologies': 'Technologies',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.frontend': 'Frontend Development',
    'projects.backend': 'Backend Development',
    'projects.viewProject': 'View Project',
    'projects.inventory.frontend.title': 'Inventory Management Frontend',
    'projects.inventory.frontend.description': 'Modern React-based frontend for inventory management system with real-time updates and responsive design.',
    'projects.portfolio.title': 'Portfolio Website',
    'projects.portfolio.description': 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    'projects.inventory.backend.title': 'Inventory Management Backend',
    'projects.inventory.backend.description': 'Robust .NET-based backend system with comprehensive API endpoints and secure authentication.',
    'projects.library.title': 'Library Management API',
    'projects.library.description': 'Feature-rich library management system built with .NET, featuring book tracking and user management.',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    'contact.connect': 'Connect With Me',
    'contact.sendEmail': 'Send Email',
  },
  tr: {
    // Hero Section
    'hero.title': 'Yazılım Geliştirici & Teknoloji Tutkunu',
    'hero.subtitle': 'Kod ve yaratıcılıkla güzel dijital deneyimler oluşturuyorum',
    'hero.viewWork': 'Projelerimi Gör',
    'hero.getInTouch': 'İletişime Geç',

    // About Section
    'about.title': 'Hakkımda',
    'about.whoIAm': 'Ben Kimim',
    'about.description1': '.NET teknolojileri ve veritabanı yönetiminde geliştirmeye odaklanan bir backend geliştiricisiyim. C# ve SQL Server\'da güçlü bir temelle, modern uygulamaları güçlendiren sağlam, ölçeklenebilir backend sistemleri geliştirmeye odaklanıyorum.',
    'about.description2': 'Uzmanlığım, verimli API\'ler oluşturma, güvenli kimlik doğrulama sistemleri uygulama ve güvenilir yazılım çözümlerinin temelini oluşturan optimize edilmiş veritabanı yapıları tasarlamada yatmaktadır.',
    'about.downloadCV': 'CV İndir',
    'about.technologies': 'Teknolojiler',

    // Projects Section
    'projects.title': 'Öne Çıkan Projeler',
    'projects.frontend': 'Frontend Geliştirme',
    'projects.backend': 'Backend Geliştirme',
    'projects.viewProject': 'Projeyi Gör',
    'projects.inventory.frontend.title': 'Envanter Yönetimi Frontend',
    'projects.inventory.frontend.description': 'Gerçek zamanlı güncellemeler ve duyarlı tasarım ile modern React tabanlı envanter yönetim sistemi.',
    'projects.portfolio.title': 'Portfolyo Web Sitesi',
    'projects.portfolio.description': 'Next.js ve Tailwind CSS ile oluşturulmuş modern ve duyarlı portfolyo web sitesi.',
    'projects.inventory.backend.title': 'Envanter Yönetimi Backend',
    'projects.inventory.backend.description': 'Kapsamlı API uç noktaları ve güvenli kimlik doğrulama ile sağlam .NET tabanlı backend sistemi.',
    'projects.library.title': 'Kütüphane Yönetim API',
    'projects.library.description': 'Kitap takibi ve kullanıcı yönetimi özelliklerine sahip, .NET ile oluşturulmuş zengin özellikli kütüphane yönetim sistemi.',

    // Contact Section
    'contact.title': 'İletişime Geç',
    'contact.description': 'Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olmak için fırsatları görüşmeye her zaman açığım.',
    'contact.connect': 'Benimle Bağlantı Kur',
    'contact.sendEmail': 'E-posta Gönder',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 