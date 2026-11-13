'use client';

import Link from 'next/link';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle 
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { CinematicTitle } from '@/components/motion-title';
import { SlideSection } from '@/components/slide-section';

function InstagramColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="igContactGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#igContactGrad)" strokeWidth="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#igContactGrad)" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igContactGrad)" />
    </svg>
  );
}

function FacebookColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74v-8.37H5.09v8.37h2.74z" />
    </svg>
  );
}

function YoutubeColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function ContactPage() {
  const faqs = [
    {
      q: 'How quickly does FasLax respond to inquiries?',
      a: 'We reply to all email inquiries within 24 hours. For urgent discussions, WhatsApp responses are usually within an hour.',
    },
    {
      q: 'Does FasLax work with clients outside Kerala?',
      a: 'Yes. We collaborate seamlessly with businesses across India and internationally, especially Malayali-owned enterprises in the GCC and worldwide.',
    },
    {
      q: 'Is the initial project consultation free?',
      a: 'Yes. Your initial digital consultation and scope discussion are completely free with zero obligations.',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/faslax.team2026',
      icon: InstagramColorIcon,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61593870796873',
      icon: FacebookColorIcon,
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/faslaxdigital',
      icon: XColorIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/faslax-digital-solutions/',
      icon: LinkedinColorIcon,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@FasLaxDigitalSolutions',
      icon: YoutubeColorIcon,
    },
  ];

  return (
    <div className="contact-page-wrapper" style={{ padding: '40px 0 80px 0' }}>
      {/* ── HEADER ── */}
      <section className="page-hero text-center mb-5">
        <span className="kicker">GET IN TOUCH / 01</span>
        <div style={{ marginTop: '12px' }}>
          <CinematicTitle 
            text="Contact FasLax — Free Digital Consultation"
            highlightWord="FasLax"
          />
        </div>
        <p style={{ maxWidth: '650px', margin: '16px auto 0 auto', color: '#94a3b8' }}>
          Have a project in mind? Reach out to Kerala&apos;s trusted web development and digital marketing team. 
          We work with businesses across Kerala, India, and the global Malayalam community.
        </p>
      </section>

      {/* ── 4 CONTACT INFO CARDS ── */}
      <SlideSection direction="up" delay={0.1}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '20px', 
            maxWidth: 1140, 
            margin: '0 auto 50px auto', 
            padding: '0 20px' 
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <MapPin size={28} className="orange" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Our Location</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              Chola, P.O. Pattanur, Kannur, Kerala, India<br />
              <span style={{ fontSize: '11px', color: '#64748b' }}>Serving clients worldwide</span>
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <Phone size={28} className="orange" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Phone / WhatsApp</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              <a href="tel:+916238377830" style={{ color: '#fff', textDecoration: 'none' }}>+91 62383 77830</a><br />
              <span style={{ fontSize: '11px', color: '#25D366' }}>Instant response via WhatsApp</span>
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <Mail size={28} className="orange" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Email Us</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              <a href="mailto:hello@faslax.in" style={{ color: '#fff', textDecoration: 'none' }}>hello@faslax.in</a><br />
              <span style={{ fontSize: '11px', color: '#64748b' }}>For briefs &amp; project inquiries</span>
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <Clock size={28} className="orange" style={{ margin: '0 auto 12px auto' }} />
            <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Working Hours</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              Mon – Sat: 9 AM – 7 PM IST<br />
              <span style={{ fontSize: '11px', color: '#64748b' }}>Critical support: 24/7</span>
            </p>
          </div>
        </div>
      </SlideSection>

      {/* ── FORM + SIDEBAR GRID ── */}
      <SlideSection direction="up" delay={0.2}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px', 
            maxWidth: 1140, 
            margin: '0 auto', 
            padding: '0 20px' 
          }}
        >
          {/* Left Side: Functional Form */}
          <div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '24px', padding: '36px' }}>
              <span className="kicker">SEND A MESSAGE</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '8px 0 24px 0', color: '#fff' }}>
                Tell Us About Your Project
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Right Side: Quick Action & FAQ Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'rgba(37, 211, 102, 0.08)', border: '1px solid rgba(37, 211, 102, 0.25)', borderRadius: '20px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <MessageCircle size={32} style={{ color: '#25D366' }} />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#fff' }}>Instant WhatsApp Chat</h3>
                  <small style={{ color: '#25D366' }}>Reply typically within an hour</small>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                Skip the form — send a direct WhatsApp message for a quick project evaluation. No waiting, no obligations.
              </p>
              <a 
                href="https://wa.me/916238377830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button button-primary"
                style={{ background: '#25D366', color: '#fff', border: 'none', width: '100%', justifyContent: 'center' }}
              >
                Chat on WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '20px', padding: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Follow Our Channels</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {socialLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a 
                      key={item.name}
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        color: '#e2e8f0', 
                        textDecoration: 'none', 
                        padding: '12px 16px', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '12px',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }}>
                          <IconComponent size={18} />
                        </span>
                        <span style={{ fontWeight: 500, fontSize: '14px' }}>{item.name}</span>
                      </div>
                      <ArrowUpRight size={16} style={{ color: '#64748b' }} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '20px', padding: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Quick Answers</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ borderBottom: idx !== faqs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: idx !== faqs.length - 1 ? '14px' : '0' }}>
                    <strong style={{ fontSize: '13px', color: '#fff', display: 'block', marginBottom: '4px' }}>{faq.q}</strong>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SlideSection>
    </div>
  );
}