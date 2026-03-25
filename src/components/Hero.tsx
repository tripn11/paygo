"use client";

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/media/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-content"
        >
          <span className="hero-badge">Sustainable Energy for All</span>
          <h1 className="hero-title">
            Powering Your <br/>
            <span className="highlight">Future</span> with Solar
          </h1>
          <p className="hero-description">
            Affordable, reliable, and clean energy solutions tailored for community markets and low-income households. Join the revolution today.
          </p>
          
          <Link href="/contact" className="btn-primary">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}