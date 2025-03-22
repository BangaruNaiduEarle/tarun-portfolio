'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C3F70]/90 via-[#00A1E0]/80 to-[#04844B]/70" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Cloud className="text-white/10 absolute top-1/4 left-1/4 h-32 w-32 animate-float" style={{ animationDelay: '0s' }} />
        <Cloud className="text-white/10 absolute top-1/3 right-1/4 h-40 w-40 animate-float" style={{ animationDelay: '1s' }} />
        <Cloud className="text-white/10 absolute bottom-1/4 left-1/3 h-24 w-24 animate-float" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="container mx-auto px-4 relative min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tarun Kumar Earle
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-[#FFB03B] font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Salesforce Developer | Agentblazer Champion
          </motion.h2>

          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://linkedin.com/in/tarune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFB03B] transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://salesforce.com/trailblazer/ekumar43"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFB03B] transition-colors transform hover:scale-110"
            >
              <Cloud className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/tarunkumarearle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFB03B] transition-colors transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="button-gradient text-white hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}