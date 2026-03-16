"use client";

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArFgZ8vWrY5td97VSR-ptI6IQIVDfIfgd85tUfAm54qM6U7H9nYYPu7lmtYhQBbxRUYCHfC56SQUz_pABTUJ1CX51SdapibPWxWc7v8_fzSoJfdU-zYxO-o4SoqzrJPUDGhrBI_T9hAKN_kSLZmY_1L0e2-yYGGrwbQi55WX8_n-rs6U5Ef7gBBcsl4Fu9_fi-BiYjBAXruDWSn8uFloIRGcXmQfJZgzElV1y14VQ6dOHbeXmQ44aiqZwNP5ywK00nNvGc6ie8CQ" 
          alt="Solar panels at sunset" 
          className="bg-image"
          referrerPolicy="no-referrer"
          fill
        />
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
          
          <button className="btn-primary">
            Get Started <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
