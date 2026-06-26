import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Armory — Power your future with AI",
  description: "Enterprise-grade AI automation platform. Deploy autonomous agents in minutes. SOC2 + HIPAA compliant.",
  openGraph: {
    title: "Armory — Power your future with AI",
    description: "Enterprise-grade AI automation platform. Deploy autonomous agents in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-oceanic text-arctic min-h-screen selection:bg-forsythia selection:text-oceanic`}
        style={{ scrollPaddingTop: '100px' }}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

