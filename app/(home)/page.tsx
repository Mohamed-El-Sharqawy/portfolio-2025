import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moe | Senior Software Engineer | Front-End Development Expert",
  description:
    "Senior Software Engineer specializing in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally.",
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