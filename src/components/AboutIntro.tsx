"use client";

import Image from 'next/image';
import { motion, Variants, useInView } from 'motion/react';
import { Users, Globe, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

// --- Animation Variants ---

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.15,
    },
  }),
};

// --- Animated Stat Item ---
function AnimatedStat({
  icon: Icon,
  label,
  index,
}: {
  icon: React.ElementType;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="intro-stat-item"
      custom={index}
      variants={statVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <Icon className="stat-icon" />
      <div>
        <motion.h4
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: 'backOut' }}
        >
          {index === 0 ? '1.2M+' : '36 States'}
        </motion.h4>
        <p>{label}</p>
      </div>
    </motion.div>
  );
}

// --- Main Component ---
export default function AboutIntro() {
  return (
    <section className="about-intro-section">
      <div className="container">
        <div className="about-intro-grid">

          {/* LEFT — text content slides in from left, children stagger */}
          <motion.div
            className="about-intro-content"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 variants={slideInLeft}>
              The Paygo Story
            </motion.h2>

            <motion.div variants={slideUpFade} className="about-intro-text">
              <motion.p variants={slideUpFade}>
                Paygo was born from a simple yet powerful realization: that energy
                poverty is the single greatest barrier to human potential. What
                started as a small team of engineers in Lagos has grown into a
                continental force for change.
              </motion.p>
              <motion.p variants={slideUpFade}>
                As a proud member of the{' '}
                <span className="highlight">Enerplaz Group</span>, we bridge the
                gap between high-tech IoT solutions and the practical needs of
                millions. Our pay-as-you-go model isn't just a billing system—it's
                a gateway to modern life, education, and economic opportunity.
              </motion.p>
            </motion.div>

            <motion.div variants={slideUpFade} className="about-intro-stats">
              <AnimatedStat icon={Users} label="Lives Impacted" index={0} />
              <AnimatedStat icon={Globe} label="Operations" index={1} />
            </motion.div>
          </motion.div>

          {/* RIGHT — image slides in from right */}
          <motion.div
            className="about-intro-visual"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="visual-container">
              <div className="main-image-wrapper">
                <Image
                  src="/media/solar-array.jpeg"
                  alt="Solar Panel Field"
                  fill
                  className="object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge floats up into view, then bobs */}
              <motion.div
                className="floating-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6, ease: 'backOut' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <ShieldCheck className="icon" />
                  <span>Certified Green</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}