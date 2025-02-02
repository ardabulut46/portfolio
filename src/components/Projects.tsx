'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const projects: { frontend: Project[]; backend: Project[] } = {
  frontend: [
    {
      title: 'projects.inventory.frontend.title',
      description: 'projects.inventory.frontend.description',
      image: '/images/projects/inventory-management-frontend.png',
      tags: ['React', 'Javascript'],
      link: 'https://github.com/ardabulut46/InventoryManagement---Frontend',
    },
    {
      title: 'projects.portfolio.title',
      description: 'projects.portfolio.description',
      image: '/images/projects/portfolio.png',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    }
  ],
  backend: [
    {
      title: 'projects.inventory.backend.title',
      description: 'projects.inventory.backend.description',
      image: '/images/projects/inventory-management-backend.jpg',
      tags: ['.NET', 'C#', 'SQL Server', 'REST API'],
      link: 'https://github.com/ardabulut46/InventoryManagement--Backend',
    },
    {
      title: 'projects.library.title',
      description: 'projects.library.description',
      image: '/images/projects/library-api.jpg',
      tags: ['.NET', 'C#', 'Entity Framework', 'JWT Auth'],
      link: 'https://github.com/ardabulut46/LibraryAPI-',
    }
  ]
};

export default function Projects() {
  const { t } = useLanguage();

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

  const ProjectSection = ({ title, projects }: ProjectSectionProps) => (
    <div className="mb-24">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        {title}
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-700 shadow-[0_8px_30px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-2px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-2px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-purple-100/80 dark:from-blue-900/80 dark:to-purple-900/80 backdrop-blur-sm" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-neutral-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300 text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                {t(project.title)}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                {t(project.description)}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-4 py-1.5 bg-neutral-100/80 dark:bg-neutral-700/50 backdrop-blur-sm rounded-full font-medium text-neutral-700 dark:text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {t('projects.viewProject')}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50 dark:from-blue-950 dark:via-neutral-900 dark:to-purple-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full -bottom-20 -right-20 blur-3xl opacity-30"
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
          className="absolute w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full -top-20 -left-20 blur-3xl opacity-30"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            {t('projects.title')}
          </h2>

          <ProjectSection title={t('projects.frontend')} projects={projects.frontend} />
          <ProjectSection title={t('projects.backend')} projects={projects.backend} />
        </motion.div>
      </div>
    </section>
  );
} 