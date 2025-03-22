'use client';

import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Cloud className="h-12 w-12 text-[#00A1E0] mx-auto mb-6" />
            <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              3.4 years of CRM experience as a Salesforce Developer and Administrator. 
              Expertise in Apex, Aura, LWC, Triggers, Data Cloud, and Experience Cloud.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}