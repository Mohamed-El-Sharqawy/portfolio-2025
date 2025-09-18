import OptimizedApp from '@/components/OptimizedApp';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moe - Senior Software Engineer Portfolio | React & Next.js Expert",
  description:
    "Senior Software Engineer portfolio showcasing expertise in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally. View my work and experience.",
  keywords: "Senior Software Engineer, React.js, Next.js, Node.js, Frontend Development, Full Stack Developer, Portfolio, UAE, Saudi Arabia",
  alternates: {
    canonical: "https://devsharqawy.com",
  },
  openGraph: {
    title: "Moe - Senior Software Engineer Portfolio",
    description: "Senior Software Engineer specializing in React.js, Next.js, and modern web technologies. Leading innovative projects globally.",
    type: "website",
    url: "https://devsharqawy.com",
  },
};

export default function Home() {
  return <OptimizedApp />;
}