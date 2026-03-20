"use client";

import { useScroll, useTransform } from 'motion/react';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutMission from '@/components/AboutMission';
import AboutProjects from '@/components/AboutProjects';

export default function About() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);

  return (
    <div className="about-page">
      <AboutHero heroY={heroY} />
      <AboutIntro />
      <AboutMission />
      <AboutProjects />
    </div>
  );
}