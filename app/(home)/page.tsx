import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Hello I'm Moe, a Senior Software Engineer with Expertise in Front-End Development",
  description:
    "Senior Software Engineer with expertise in React.js, Next.js, Node.js, and project management. Leading innovative projects across UAE, Saudi Arabia, USA, South Africa, Iraq, Turkey, and Egypt.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}