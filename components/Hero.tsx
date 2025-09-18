"use client";

import { EMAIL, GITHUB, LINKED_IN } from "@/data/personal-info";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-100">Senior Software</span>
              <span className="block text-gradient">Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I&apos;m Moe, a Front-End Development Expert specializing in React.js,
              Next.js, Svelte, Astro and modern backend technologies. As a Senior Software Engineer, I lead innovative
              projects across multiple countries and deliver exceptional
              digital solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={LINKED_IN}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              title="Personal Email"
              aria-label="Personal Email"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link href={"#about"} title="Scroll to About" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
        </div>
      </Link>
    </section>
  );
}
