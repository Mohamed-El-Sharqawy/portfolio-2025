import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Moe - Senior Software Engineer | Frontend Development Expert",
    template: "%s | Moe - Senior Software Engineer"
  },
  description:
    "Senior Software Engineer with 3+ years experience specializing in React.js, Next.js, and Node.js. Leading innovative frontend and full-stack projects across UAE, Saudi Arabia, and globally.",
  keywords: "Senior Software Engineer, Frontend Developer, React.js, Next.js, Node.js, Full Stack, UAE, Portfolio",
  authors: [{ name: "Moe", url: "https://moe-portfolio.com" }],
  creator: "Moe - Senior Software Engineer",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moe-portfolio.com",
    siteName: "Moe - Senior Software Engineer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe - Senior Software Engineer Portfolio",
    description: "Senior Software Engineer specializing in React.js, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <Toaster duration={3000} />
      </body>
    </html>
  );
}
