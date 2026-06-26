import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumaiya Khan Nishat | Modern Developer Portfolio",
  description: "A premium modern developer portfolio and showcase built using Next.js, HeroUI, GSAP, and Framer Motion by Sumaiya Khan Nishat, MERN Stack Developer & Next.js Architect.",
  keywords: ["portfolio", "nextjs", "heroui", "gsap", "framer-motion", "lenis", "smooth scroll", "developer", "Sumaiya Khan Nishat", "MERN Stack"],
  openGraph: {
    title: "Sumaiya Khan Nishat | Modern Developer Portfolio",
    description: "Premium modern developer portfolio with fluid animations and responsive glassmorphism.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b131a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen font-sans bg-background text-foreground antialiased transition-colors duration-500">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
