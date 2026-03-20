"use client";

import { motion, Variants } from 'motion/react';
import { Target, Lightbulb, Award } from 'lucide-react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.7 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'backOut', delay: 0.2 },
  },
};

const cards = [
  {
    icon: Target,
    iconClass: 'yellow',
    title: 'Our Mission',
    body: 'To democratize energy access through intelligent, affordable, and sustainable technology.',
  },
  {
    icon: Lightbulb,
    iconClass: 'blue',
    title: 'Our Vision',
    body: 'A continent where every home and business is powered by clean, reliable, and renewable energy.',
  },
  {
    icon: Award,
    iconClass: 'green',
    title: 'Our Impact',
    body: '1,500+ tons of CO2 offset annually, paving the way for a carbon-neutral future.',
  },
];

export default function AboutMission() {
  return (
    <section className="about-mission-section">
      <div className="container">
        <motion.div
          className="about-mission-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {cards.map(({ icon: Icon, iconClass, title, body }) => (
            <motion.div
              key={title}
              className="about-mission-card"
              variants={cardVariants}
              whileHover={{ y: -10 }} // let Framer handle the lift, remove from CSS
            >
              <motion.div
                className={`card-icon ${iconClass}`}
                variants={iconVariants}
              >
                <Icon size={32} />
              </motion.div>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}