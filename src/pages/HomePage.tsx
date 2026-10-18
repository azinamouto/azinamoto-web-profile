import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { StrengthsSection } from '../sections/StrengthsSection';
import { FeaturedWorkSection } from '../sections/FeaturedWorkSection';
import { AlzaSection } from '../sections/AlzaSection';
import { AboutSection } from '../sections/AboutSection';
import { EngineeringLabSection } from '../sections/EngineeringLabSection';
import { TechMatrixSection } from '../sections/TechMatrixSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <StrengthsSection />
      <FeaturedWorkSection />
      <AlzaSection />
      <AboutSection />
      <EngineeringLabSection />
      <TechMatrixSection />
      <ContactSection />
    </main>
  );
};
