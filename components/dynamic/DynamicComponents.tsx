import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Dynamic imports with loading states
export const DynamicAbout = dynamic(() => import('@/components/About'), {
  loading: () => (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-800 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: true
});

export const DynamicSkills = dynamic(() => import('@/components/Skills'), {
  loading: () => (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-6"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: true
});

export const DynamicExperience = dynamic(() => import('@/components/Experience'), {
  loading: () => (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-6"></div>
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: true
});

export const DynamicContact = dynamic(() => import('@/components/contact/Contact'), {
  loading: () => (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-6"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-64 bg-gray-800 rounded"></div>
            <div className="h-64 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  ),
  ssr: false // Contact form doesn't need SSR
});

export const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  loading: () => (
    <footer className="bg-black/50 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-gray-800 rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded"></div>
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  ),
  ssr: true
});
