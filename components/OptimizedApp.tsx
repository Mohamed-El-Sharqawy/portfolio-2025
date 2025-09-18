"use client";

import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { 
  DynamicAbout, 
  DynamicSkills, 
  DynamicExperience, 
  DynamicContact, 
  DynamicFooter 
} from '@/components/dynamic/DynamicComponents';

// Intersection Observer hook for lazy loading
function useIntersectionObserver(targetRef: React.RefObject<HTMLElement>, options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(target);
        }
      },
      { rootMargin: '200px', ...options }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef, options]);

  return isIntersecting;
}

// Lazy component wrapper
function LazySection({ 
  children, 
  id, 
  fallback 
}: { 
  children: React.ReactNode; 
  id: string;
  fallback?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div id={id} ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

export default function OptimizedApp() {
  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black">
      <Header />
      <Hero />
      
      <LazySection id="about-section">
        <DynamicAbout />
      </LazySection>
      
      <LazySection id="skills-section">
        <DynamicSkills />
      </LazySection>
      
      <LazySection id="experience-section">
        <DynamicExperience />
      </LazySection>
      
      <LazySection id="contact-section">
        <DynamicContact />
      </LazySection>
      
      <LazySection id="footer-section">
        <DynamicFooter />
      </LazySection>
    </main>
  );
}
