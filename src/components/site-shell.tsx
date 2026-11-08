'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, site } from '@/data/site';

function InstagramColorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#igGrad)" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#igGrad)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGrad)" />
    </svg>
  );
}

function FacebookColorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinColorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

function YoutubeColorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsappColorIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
    </svg>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    { label: 'Instagram', href: site.socials.instagram, icon: InstagramColorIcon, glow: 'rgba(214, 36, 159, 0.4)' },
    { label: 'Facebook', href: site.socials.facebook, icon: FacebookColorIcon, glow: 'rgba(24, 119, 242, 0.4)' },
    { label: 'LinkedIn', href: site.socials.linkedin, icon: LinkedinColorIcon, glow: 'rgba(10, 102, 194, 0.4)' },
    { label: 'YouTube', href: site.socials.youtube, icon: YoutubeColorIcon, glow: 'rgba(255, 0, 0, 0.4)' },
    { label: 'WhatsApp', href: site.socials.whatsapp, icon: WhatsappColorIcon, glow: 'rgba(37, 211, 102, 0.4)' },
  ];

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      
      <header className="topbar">
        <Link 
          className="brand-lockup" 
          href="/" 
          onClick={() => setOpen(false)} 
          aria-label="FasLax home"
        >
          <span className="brand-image-wrap">
            <img src={site.logo} alt="FasLax Digital Solutions" />
          </span>
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            className="nav-cta" 
            href="/contact" 
            onClick={() => setOpen(false)}
          >
            Start a project <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setOpen(!open)} 
          aria-label={open ? 'Close menu' : 'Open menu'} 
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <img className="footer-logo" src={site.logo} alt="FasLax Digital Solutions" />
            <div className="footer-signal">Have a project worth building?</div>
            <Link className="footer-email group" href="/contact">
              Let&apos;s build the next <span className="arrow-shift">↗</span>
            </Link>
          </div>
          <div className="footer-meta">
            <span>FasLax Digital Solutions</span>
            <span>Kannur, Kerala, India</span>
            <span>© 2026 / All rights reserved</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social-wrapper">
            {socialLinks.map(({ label, href, icon: Icon, glow }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-dock-btn"
                style={{ '--glow-color': glow } as React.CSSProperties}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}