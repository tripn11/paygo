"use client";

import Link from 'next/link';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Sun size={28} className="logo-icon" />
              <h2 className="logo-text">Paygo</h2>
            </div>
            <p className="footer-description">
              Democratizing energy access through innovative technology and sustainable infrastructure.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="footer-social-link" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="footer-social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-link-group">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="#" className="footer-link">Our Projects</Link></li>
              <li><Link href="#" className="footer-link">Careers</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-list">
              <li><Link href="#" className="footer-link">Help Center</Link></li>
              <li><Link href="#" className="footer-link">Terms of Service</Link></li>
              <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="#" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-newsletter-text">Subscribe to our newsletter for the latest updates.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <div className="footer-input-wrapper">
                <Mail size={18} className="footer-input-icon" />
                <input type="email" placeholder="Email address" className="footer-input" />
              </div>
              <button className="footer-button">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Paygo Solar Solutions. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-bottom-link">Privacy</Link>
            <Link href="#" className="footer-bottom-link">Terms</Link>
            <Link href="#" className="footer-bottom-link">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
