'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    'Salesforce Administrator',
    'Salesforce Platform Developer-1',
    'Salesforce Certified Associate',
    'Salesforce Certified AI Associate',
    'Salesforce Certified Agentforce',
    'Data Cloud Consultant',
    'Agentblazer Champion',
  ];

  return (
    <section id="certifications" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl card-hover"
            >
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-[#00A1E0]" />
                <h3 className="text-xl font-semibold text-[#1C3F70]">{cert}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}