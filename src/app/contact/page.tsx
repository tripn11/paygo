"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    description: "Our friendly team is here to help.",
    value: "paygoenerplaz@gmail.com",
    link: "mailto:paygoenerplaz@gmail.com"
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm.",
    value: "+234 912 111 1163",
    link: "tel:+2349121111163"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    description: "Come say hello at our HQ.",
    value: "1 Mife Street, Eliada Estate, Port Harcourt, Rivers State",
    link: "https://maps.google.com"
  }
];

const offices = [
  { city: 'Port Harcourt', addr: '1 Mife Street, Eliada Estate, Port Harcourt, Rivers State' },
  { city: 'Lagos', addr: '1 Victoria Island, Lagos, Nigeria' },
  { city: 'Delta', addr: '1 Oshimili, Delta, Nigeria' },
  { city: 'Canada', addr: ' 1783 Weir Crescent, Toronto, Ontario, Canada' }
];

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <Image 
            src="/media/contact-us_banner.jpeg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container contact-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="contact-hero-text"
          >
            <span className="contact-hero-badge">Contact Us</span>
            <h1 className="contact-title">Let's build the future of Energy Consumption together</h1>
            <p className="contact-subtitle">
              Have questions about our payment solutions? We're here to help you scale your business with speed and security.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container contact-main-content">
        <div className="contact-layout">
          <div className="contact-info-column">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="contact-info-intro"
            >
              <h2 className="section-title">Get in touch</h2>
              <p className="section-description">
                We'd love to hear from you. Please fill out the form or use our contact information below.
              </p>
            </motion.div>

            <div className="contact-info-cards">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="contact-info-card"
                >
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div className="contact-info-details">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="contact-offices"
            >
              <div className="offices-header">
                <Globe size={20} className="text-primary" />
                <h3>Global Presence</h3>
              </div>
              <div className="offices-grid">
                {offices.map((office, i) => (
                  <div key={i} className="office-item">
                    <h4>{office.city}</h4>
                    <p>{office.addr}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-column">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
