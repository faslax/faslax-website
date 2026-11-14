'use client';

import Link from 'next/link';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
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

function ThreadsColorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221Z" />
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

function WhatsappColorIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
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
      name: 'Threads',
      url: 'https://www.threads.com/@faslax.team2026',
      icon: ThreadsColorIcon,
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
                <WhatsappColorIcon size={32} />
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