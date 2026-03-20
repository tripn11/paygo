"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Mile 3 Microgrid',
    location: 'Port Harcourt, Nigeria',
    desc: 'Providing 24/7 sustainable power to a market',
    img: '/media/project-1.jpeg',
    category: 'Commercial'
  },
  {
    title: '5kva System',
    location: 'Lagos, Nigeria',
    desc: 'Providing reliable power to a residential home.',
    img: '/media/project-2.jpeg',
    category: 'Residential'
  },
  {
    title: '5kva System',
    location: 'Delta, Nigeria',
    desc: 'Providing reliable power to a residential home.',
    img: '/media/project-3.jpeg',
    category: 'Residential'
  },
  {
    title: 'Sahara Solar Farm',
    location: 'Morocco',
    desc: 'One of the largest utility-scale solar installations providing power to over 100k homes.',
    img: '/media/project-4.jpeg',
    category: 'Utility'
  },
  {
    title: 'Eco-Village Microgrid',
    location: 'Ghana',
    desc: 'Self-sustaining energy ecosystem for a remote agricultural community.',
    img: '/media/project-5.jpeg',
    category: 'Community'
  },
  {
    title: 'Urban Solar Canopy',
    location: 'South Africa',
    desc: 'Innovative parking structures generating clean energy for commercial districts.',
    img: '/media/residential-solution.jpeg',
    category: 'Commercial'
  }
];

export default function AboutProjects() {
  return (
    <section className="about-projects-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Project Gallery</h2>
          <p>Showcasing our most significant installations and accomplishments across the globe.</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="project-card"
            >
              <div className="project-image-container">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="project-overlay">
                  <div className="project-details">
                    <div className="project-loc">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <button className="project-link">
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="project-tag">{project.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
