import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MetricsGrid from '@/components/MetricsGrid';
import BentoAccordion from '@/components/BentoAccordion';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <MetricsGrid />
        <BentoAccordion />
        <CaseStudies />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

