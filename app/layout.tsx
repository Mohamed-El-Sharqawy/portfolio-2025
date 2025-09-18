import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moe | Senior Software Engineer | Front-End Development Expert",
  description:
    "Senior Software Engineer specializing in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally.",
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
