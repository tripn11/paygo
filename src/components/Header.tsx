"use client";

import  { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {User, Menu, X } from 'lucide-react';
import Image from 'next/image';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image className="icon" src='/images/logo.png' alt='Paygo Logo' width={60} height={80} />
        <h2 className="title"><span>Enerplaz</span><span>Paygo</span></h2>
      </Link>
      
      <div className="actions">
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        
        <div className="user-actions">
          <Link 
            href="/login"
            className="user-icon"
            aria-label="Login"
          >
            <User size={24} />
          </Link>
          
          <button className="get-started">
            Get Started
          </button>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;