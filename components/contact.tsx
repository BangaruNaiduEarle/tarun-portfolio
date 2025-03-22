'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-xl mb-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#00A1E0] focus:ring-2 focus:ring-[#00A1E0] focus:ring-opacity-50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#00A1E0] focus:ring-2 focus:ring-[#00A1E0] focus:ring-opacity-50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#00A1E0] focus:ring-2 focus:ring-[#00A1E0] focus:ring-opacity-50 transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1C3F70] to-[#00A1E0] text-white text-lg py-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12"
          >
            <a
              href="mailto:earletarunkumar@gmail.com"
              className="flex items-center space-x-3 text-gray-600 hover:text-[#00A1E0] transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span>earletarunkumar@gmail.com</span>
            </a>
            <a
              href="tel:+919985809915"
              className="flex items-center space-x-3 text-gray-600 hover:text-[#00A1E0] transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>+91 9985809915</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}