"use client";

import Image from 'next/image';
import { motion, MotionValue } from 'motion/react';

interface AboutHeroProps {
  heroY: MotionValue<number>;
}

export default function AboutHero({ heroY }: AboutHeroProps) {
  return (
    <section className="about-hero">
      <motion.div 
        style={{ y: heroY }}
        className="about-hero-bg"
      >
        <Image 
          src="/media/about-us-banner.jpeg"
          alt="Renewable Energy Landscape"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="hero-overlay" />
      </motion.div>

      <div className="about-hero-text">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="about-hero-title"
        >
          Pioneering <br/>Energy Freedom
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="about-hero-description"
        >
          We are redefining how energy is generated, distributed, and consumed across the continent through sustainable innovation.
        </motion.p>
      </div>
    </section>
  );
}
