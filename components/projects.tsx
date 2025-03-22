'use client';

import { motion } from 'framer-motion';
import { Code2, Building2, Database, Users } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Unified Customer View',
      description: 'Integrated customer data across multiple systems for a 360-degree view.',
      icon: Database,
    },
    {
      title: 'REMS',
      description: 'Real Estate Management System for property tracking and maintenance.',
      icon: Building2,
    },
    {
      title: 'Custom Metadata Type Loader',
      description: 'Tool for efficient management of custom metadata types.',
      icon: Code2,
    },
    {
      title: 'Employee Management System',
      description: 'Comprehensive system for employee data and performance tracking.',
      icon: Users,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl card-hover"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#1C3F70] to-[#00A1E0]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1C3F70]">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}