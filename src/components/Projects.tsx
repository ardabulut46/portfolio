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
      title: 'Inventory Management Frontend',
      description: 'Modern React-based frontend for inventory management system with real-time updates and responsive design.',
      image: '/images/projects/inventory-management-frontend.png',
      tags: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      link: 'https://github.com/ardabulut46/InventoryManagement---Frontend',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
      image: '/images/project3.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    }
  ],
  backend: [
    {
      title: 'Inventory Management Backend',
      description: 'Robust .NET-based backend system with comprehensive API endpoints and secure authentication.',
      image: '/images/projects/inventory-management-backend.jpg',
      tags: ['.NET', 'C#', 'SQL Server', 'REST API'],
      link: 'https://github.com/ardabulut46/InventoryManagement--Backend',
    },
    {
      title: 'Library Management API',
      description: 'Feature-rich library management system built with .NET, featuring book tracking and user management.',
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
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        {title}
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t('projects.viewProject')} →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('projects.title')}
          </h2>

          <ProjectSection title={t('projects.frontend')} projects={projects.frontend} />
          <ProjectSection title={t('projects.backend')} projects={projects.backend} />
        </motion.div>
      </div>
    </section>
  );
} 