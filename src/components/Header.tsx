"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          <Image className="icon" src='/media/logo.png' alt='Paygo Logo' width={60} height={80} />
          <h2 className="title">
            <span>Enerplaz</span>
            <span>Paygo</span>
          </h2>
        </Link>

        <div className="actions">
          <nav className="nav">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </nav>

          <div className="user-actions">
            <Link href="/login" className="user-icon" aria-label="Login">
              <User size={20} />
            </Link>
            <button className="get-started"><span>Get Started</span></button>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>
    </>
  );
}

export default Header;