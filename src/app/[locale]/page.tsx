'use client';

import Header from '@/components/layout/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ApproachSection from '@/components/approach-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/layout/footer';
import CertificatesSection from '@/components/certificates-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
