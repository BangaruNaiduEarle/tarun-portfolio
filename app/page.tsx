import type { Metadata } from "next";
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Certifications } from '@/components/certifications';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';

export const metadata: Metadata = {
  title: "Tarun Kumar Earle | Salesforce Developer Hyderabad",
  description: "Home of Tarun Kumar Earle's Salesforce portfolio.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}