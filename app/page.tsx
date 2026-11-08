'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  MoveRight, 
  Hourglass, 
  Star, 
  Headset, 
  MessageCircle 
} from 'lucide-react';
import { SignalOrb, Marquee } from '@/components/visuals';
import { SectionHeading } from '@/components/cards';
import { WorkCard } from '@/components/work-card';
import { CinematicTitle } from '@/components/motion-title';
import { CinematicCard } from '@/components/motion-card';
import { SlideSection } from '@/components/slide-section';
import { services } from '@/data/services';
import { works } from '@/data/works';

export default function HomePage() {
  const teamMembers = [
    {
      name: 'Fasil Chola',
      role: 'Web Infrastructure & Tech Lead',
      image: '/images/Fasil.webp',
    },
    {
      name: 'Sreelakshmi Fasil',
      role: 'Digital Marketing Lead',
      image: '/images/Sreelakshmi.webp',
    },
    {
      name: 'Jasina Raveendran',
      role: 'Content Research & Malayalam Copy Lead',
      image: '/images/Jasina.webp',
    },
    {
      name: 'Devu Kesav',
      role: 'Web & Solutions Developer',
      image: '/images/Devu.webp',
    },
  ];

  return (
    <>
      {/* ── 1. HERO SECTION ── */}
      <section className="hero">
        <div className="hero-copy">
          <span className="kicker">FasLax / Kerala&apos;s Trusted Digital Agency / 2026</span>
          
          <CinematicTitle 
            text="Best Web Development & Digital Growth Agency in Kerala."
            highlightWord="Kerala."
            className="hero-title-cinematic"
          />

          <div className="hero-intro">
            <span className="scroll-cue">Scroll to explore</span>
            <p>
              High-performance websites, practical AI integrations, and growth-focused digital marketing 
              engineered for businesses across Kerala, India, and Malayalam-speaking entrepreneurs worldwide.
            </p>
          </div>
          
          <div className="d-flex flex-wrap gap-3" style={{ margin: '30px 0 0 8vw' }}>
            <Link className="button button-dark" href="/contact">
              Request a Quote <ArrowUpRight size={17} />
            </Link>
            <Link className="button button-primary" href="/works">
              View Our Work <MoveRight size={17} />
            </Link>
          </div>

          <div className="hero-features-grid mt-4" style={{ margin: '36px 0 0 8vw', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Hourglass size={18} className="orange" />
              <div>
                <strong>On-Time Delivery</strong>
                <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>We value your timeline</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Star size={18} className="orange" />
              <div>
                <strong>Quality Assured</strong>
                <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>Zero-bloat engineering</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Headset size={18} className="orange" />
              <div>
                <strong>Direct Support</strong>
                <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>Transparent collaboration</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-art">
          <SignalOrb />
        </div>
      </section>

      {/* ── 2. INTRO BAND ── */}
      <SlideSection direction="up">
        <section className="intro-band">
          <span className="kicker">01 — The Mission</span>
          <p>
            Engineering speed, transparency, and sustainable business visibility. <span>Built right from day one.</span>
          </p>
        </section>
      </SlideSection>

      {/* ── 3. CORE SERVICES (3D INTERACTIVE CARDS) ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="services-section">
          <SectionHeading 
            kicker="02 — What We Do" 
            title={<>Result-Driven Services for <em>Business Growth.</em></>} 
            body="No bloated packages. No unnecessary buzzwords. Three focused pillars built to manage, automate, and scale your brand." 
          />
          <div className="services-grid">
            {services.map((service) => (
              <CinematicCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      </SlideSection>

      {/* ── 4. WHY FASLAX ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="dark-band services-section">
          <div className="proof-grid">
            <div className="proof-copy">
              <span className="kicker">03 — Why FasLax</span>
              <h2>Outcome-Driven <em>Advantage.</em></h2>
              <p>
                Your business revenue and digital clarity are our success metrics. We combine modern code 
                with authentic regional insight to deliver lasting momentum.
              </p>
              <Link className="button button-primary" href="/about">
                Meet the full team <MoveRight size={17} />
              </Link>
            </div>
            <div className="proof-list">
              <div className="proof-item">
                <span>01</span>
                <strong>Collaborative Full-Service Team</strong>
                <p style={{ fontSize: '13px', color: '#999', margin: '4px 0 0 0' }}>Web, AI, and marketing execution aligned together under one roof.</p>
              </div>
              <div className="proof-item">
                <span>02</span>
                <strong>Measurable ROI Focus</strong>
                <p style={{ fontSize: '13px', color: '#999', margin: '4px 0 0 0' }}>Tracking actual calls, WhatsApp chats, and qualified leads.</p>
              </div>
              <div className="proof-item">
                <span>03</span>
                <strong>Direct Engineering Contact</strong>
                <p style={{ fontSize: '13px', color: '#999', margin: '4px 0 0 0' }}>You talk directly with developers and content creators, not account managers.</p>
              </div>
              <div className="proof-item">
                <span>04</span>
                <strong>Compounding Growth</strong>
                <p style={{ fontSize: '13px', color: '#999', margin: '4px 0 0 0' }}>Compounding search authority and long-term maintainability after deployment.</p>
              </div>
            </div>
          </div>
        </section>
      </SlideSection>

      {/* ── 5. MARQUEE BANNER ── */}
      <Marquee>NEXT.JS <b>✳</b> SUPABASE <b>✳</b> AI CHATBOTS <b>✳</b> LOCAL SEO <b>✳</b> PERFORMANCE MARKETING <b>✳</b> KANNUR TO GLOBAL <b>✳</b> </Marquee>

      {/* ── 6. MEET THE TEAM SECTION ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="services-section">
          <SectionHeading 
            kicker="04 — Meet Our Team" 
            title={<>The Hands-On Crew Behind <em>FasLax.</em></>} 
            body="A dedicated Kannur-based engineering, marketing, and content collective working closely with businesses across Kerala, India, and the Gulf." 
          />
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {teamMembers.map((member) => (
              <div key={member.name} className="profile-card text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 16px auto' }}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    sizes="130px" 
                    className="rounded-circle"
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{member.name}</h4>
                <p style={{ fontSize: '13px', color: '#ff6b6b', fontWeight: '600', margin: 0 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </SlideSection>

      {/* ── 7. SELECTED WORKS PREVIEW ── */}
      {works && works.length > 0 && (
        <SlideSection direction="up">
          <section className="works-section">
            <div className="works-head">
              <SectionHeading 
                kicker="05 — Selected Projects" 
                title={<>Proof, Not <em>Promises.</em></>} 
                body="A glimpse of web platforms and digital systems engineered for performance and real utility." 
              />
              <Link className="button button-dark" href="/works">
                View all work <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="works-grid">
              {works.slice(0, 2).map((work) => (
                <WorkCard key={work.slug} work={work} featured />
              ))}
            </div>
          </section>
        </SlideSection>
      )}

      {/* ── 8. SPLIT FINAL CTA ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="split-cta">
          <div className="left">
            <span className="kicker">Ready to Launch?</span>
            <h2>
              Let’s Build Something <br />Practical Together.
            </h2>
            <p>
              Tell us about your website, chatbot integration, or local marketing needs. 
              We are ready to build fast and deliver clean results.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link className="button button-dark" href="/contact">
                Start a Conversation <ArrowUpRight size={17} />
              </Link>
              <a 
                className="button button-primary" 
                href="https://wa.me/916238377830" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ background: '#25D366', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="right">
            <SignalOrb small />
            <span className="kicker">FasLax / Always in Motion</span>
          </div>
        </section>
      </SlideSection>
    </>
  );
}