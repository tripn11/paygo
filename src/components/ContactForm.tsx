"use client";

import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="contact-form-container"
    >
      <div className="contact-form-header">
        <h2 className="contact-form-title">Send us a message</h2>
        <p className="contact-form-subtitle">We'll get back to you within 24 hours.</p>
      </div>
      
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" placeholder="Jane" required />
          </div>
          <div className="contact-form-group">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" placeholder="Smith" required />
          </div>
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="jane@example.com" required />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="subject">Subject</label>
          <select id="subject" required>
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales & Partnerships</option>
            <option value="billing">Billing Question</option>
          </select>
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="How can we help you?" rows={5} required></textarea>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="contact-submit-btn"
          type="submit"
        >
          Send Message <Send size={18} />
        </motion.button>
      </form>
    </motion.div>
  );
}
