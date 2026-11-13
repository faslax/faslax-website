'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Rocket, 
  ShieldCheck, 
  BarChart3, 
  Headset, 
  Palette, 
  IndianRupee, 
  Target, 
  Eye, 
  Gem, 
  MessageCircle 
} from 'lucide-react';
import { SectionHeading } from '@/components/cards';
import { SignalOrb } from '@/components/visuals';
import { CinematicTitle } from '@/components/motion-title';
import { SlideSection } from '@/components/slide-section';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Fasil Chola',
      role: 'Web & App Development Lead',
      bio: 'Full-stack software engineer crafting ultra-fast web architectures, cross-platform mobile applications, and high-converting digital visuals.',
      image: '/images/Fasil.webp',
    },
    {
      name: 'Sreelakshmi Fasil',
      role: 'Digital Marketing Lead',
      bio: 'Growth strategist driving organic search discovery, Google Business Profile rankings, social media brand growth, and Meta and Google ad campaigns.',
      image: '/images/Sreelakshmi.webp',
    },
    {
      name: 'Devu Kesav',
      role: 'Quality Assurance & Web Solutions Specialist',
      bio: 'Quality assurance specialist ensuring cross-device responsiveness, bug-free deployments, performance validation, and seamless user experiences.',
      image: '/images/Devu.webp',
    },
  ];

  return (
    <>
      {/* ── 1. PAGE HERO ── */}
      <section className="page-hero text-center">
        <span className="kicker">WHO WE ARE / 01</span>
        <div style={{ marginTop: '12px' }}>
          <CinematicTitle 
            text="Kerala's Modern Digital Product & Growth Studio — FasLax"
            highlightWord="FasLax"
          />
        </div>
        <p style={{ maxWidth: '720px', margin: '20px auto 0 auto', color: '#94a3b8', fontSize: '17px', lineHeight: 1.6 }}>
          A collaborative team of full-stack engineers, growth marketers, and quality assurance specialists — 
          delivering high-performance software and compounding digital authority for businesses worldwide.
        </p>
      </section>

      {/* ── 2. OUR STORY & STATS ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="about-layout">
          <div>
            <span className="kicker">OUR STORY</span>
            <h2>Built on Craft, <em>Driven by Measurable Results.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              FasLax Digital Solutions operates as an agile, remote-first studio. What began as a digital collective of software 
              engineers and marketers collaborating online has evolved into a focused product engineering unit. 
              With our registered administrative hub in Kannur, we work completely distributed to serve clients across India and globally.
            </p>
            <p>
              By removing traditional agency overheads, we focus entirely on engineering excellence: ultra-fast page speeds, 
              zero-bloat code, rigorous quality assurance, and measurable revenue generation for growing businesses.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link className="button button-dark" href="/contact">
                Work with us <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="number-grid">
              <div className="number-card">
                <strong>03</strong>
                <span>Core Specialists</span>
              </div>
              <div className="number-card">
                <strong>100%</strong>
                <span>Commitment to Clean Code</span>
              </div>
              <div className="number-card">
                <strong>03</strong>
                <span>Focused Pillars</span>
              </div>
              <div className="number-card">
                <strong>24/7</strong>
                <span>Direct Digital Collaboration</span>
              </div>
            </div>
          </div>
        </section>
      </SlideSection>

      {/* ── 3. MISSION, VISION & VALUES ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="dark-band services-section">
          <div className="container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px' }}>
            <div className="text-center mb-5">
              <span className="kicker">WHAT DRIVES US / 02</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '12px' }}>
                Our Foundation for <em>Sustainable Growth.</em>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
                <Target size={32} className="orange" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Our Mission</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  To equip modern businesses and entrepreneurs with lightweight, high-performance web platforms, 
                  practical mobile applications, and organic search visibility that drive real commercial returns.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
                <Eye size={32} className="orange" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Our Vision</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  To be the most trusted technology and growth partner for businesses and Malayali entrepreneurs globally, 
                  recognized for transparent communication, technical clarity, and zero-compromise engineering.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
                <Gem size={32} className="orange" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Our Values</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Pragmatic engineering over technology hype, upfront pricing and operational honesty, 
                  and long-term accountability for every piece of software and campaign we deliver.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SlideSection>

      {/* ── 4. MEET THE TEAM ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="services-section">
          <SectionHeading 
            kicker="THE SPECIALISTS / 03" 
            title={<>The Core Team Behind <em>FasLax.</em></>} 
            body="Engineers, marketers, and QA specialists collaborating directly with you. Direct access with zero account management filters." 
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {teamMembers.map((member) => (
              <div 
                key={member.name} 
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid var(--line)', 
                  borderRadius: '20px', 
                  padding: '32px 24px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '18px' }}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    sizes="130px" 
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px', color: '#fff' }}>{member.name}</h3>
                
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#ff6b6b', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
                  {member.role}
                </span>

                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SlideSection>

      {/* ── 5. WHY CHOOSE US ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="dark-band services-section">
          <div className="container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px' }}>
            <SectionHeading 
              kicker="WHY BUSINESSES CHOOSE US / 04" 
              title={<>Engineered for Commercial <em>Accountability.</em></>} 
              body="We eliminate traditional agency friction through agile operations, direct communication, and rapid turnaround." 
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <Rocket size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Agile Turnaround</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Rapid prototyping, clean sprint cycles, and on-schedule deployments without unnecessary red tape.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <ShieldCheck size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Transparent Collaboration</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Direct updates, clear staging links, and transparent milestones. No surprise invoices or hidden retainer clauses.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <BarChart3 size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Data-Driven Strategy</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>Every campaign, ad angle, and keyword is chosen through verified search metrics and localized market demand.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <Headset size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Direct Specialist Access</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>You interact directly with the developers writing your code and the marketers managing your campaigns.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <Palette size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Deep Regional Insights</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>High-converting bilingual copy and localized workflows tailored precisely for Kerala and global Malayali audiences.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                <IndianRupee size={24} className="orange" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>Modern Cost Efficiency</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>A modern serverless toolchain (Next.js, Supabase, Cloudflare) that keeps recurring infrastructure costs minimal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideSection>

      {/* ── 6. FINAL CTA & ORB ── */}
      <SlideSection direction="up" delay={0.1}>
        <section className="split-cta">
          <div className="left">
            <span className="kicker">Get In Touch</span>
            <h2>Ready to Build Something <br />Remarkable?</h2>
            <p>
              Whether you want to revamp your website, build a mobile application, 
              or dominate local search results in your sector, we are ready.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link className="button button-dark" href="/contact">
                Send a Message <ArrowUpRight size={17} />
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
            <span className="kicker">FasLax / In Motion</span>
          </div>
        </section>
      </SlideSection>
    </>
  );
}