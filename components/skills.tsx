'use client';

import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    'CRM',
    'Salesforce.com',
    'Data Loader',
    'Salesforce CLI',
    'GitHub',
    'Jenkins',
    'Gearset',
    'Sales Cloud',
    'Service Cloud',
    'Experience Cloud',
    'Health Cloud',
    'Data Cloud',
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border card-hover"
            >
              <div className="bg-white p-6 rounded-lg h-full flex items-center justify-center">
                <p className="text-lg font-medium text-gray-800">{skill}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}