import Link from 'next/link';
import { Calendar, RefreshCw, Mail, Phone, MapPin, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | FasLax Digital Solutions',
  description: "Read FasLax's terms and conditions governing the delivery of web development, AI automation, and digital marketing services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  const sections = [
    { id: 'tc-acceptance', title: '01 Acceptance of Terms' },
    { id: 'tc-services', title: '02 Scope of Services' },
    { id: 'tc-quotes', title: '03 Quotes & Engagement' },
    { id: 'tc-payment', title: '04 Payment Architecture' },
    { id: 'tc-revisions', title: '05 Revisions & Scope' },
    { id: 'tc-timelines', title: '06 Project Timelines' },
    { id: 'tc-ip', title: '07 Intellectual Property' },
    { id: 'tc-confidentiality', title: '08 Confidentiality' },
    { id: 'tc-liability', title: '09 Limitation of Liability' },
    { id: 'tc-termination', title: '10 Termination Terms' },
    { id: 'tc-warranties', title: '11 Warranties & Disclaimers' },
    { id: 'tc-governing', title: '12 Jurisdiction & Law' },
    { id: 'tc-changes', title: '13 Revisions to Terms' },
    { id: 'tc-contact', title: '14 Legal Contact' },
  ];

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* ── HERO ── */}
      <section className="page-hero text-center">
        <span className="kicker">LEGAL DOCUMENTATION / 02</span>
        <h1 style={{ marginTop: '12px' }}>
          Terms <span className="orange">&amp;</span> Conditions
        </h1>
        <p style={{ maxWidth: '620px', margin: '20px auto 0 auto', color: '#94a3b8' }}>
          Please review these contractual terms and service standards governing all web engineering, 
          AI integration, and digital growth contracts with FasLax.
        </p>
      </section>

      {/* ── CONTENT GRID ── */}
      <div 
        style={{ 
          maxWidth: '1140px', 
          margin: '60px auto 0 auto', 
          padding: '0 5vw',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
          gap: '60px',
          alignItems: 'start'
        }}
      >
        {/* Main Content Area */}
        <div style={{ color: '#cbd5e1', lineHeight: '1.75', fontSize: '15px' }}>
          {/* Metadata Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', borderRadius: '99px', fontSize: '12px', color: '#94a3b8', fontFamily: "'DM Mono', monospace" }}>
              <Calendar size={14} className="orange" /> Effective Date: 1 January 2026
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', borderRadius: '99px', fontSize: '12px', color: '#94a3b8', fontFamily: "'DM Mono', monospace" }}>
              <RefreshCw size={14} className="orange" /> Last Updated: 24 May 2026
            </span>
          </div>

          <div id="tc-acceptance" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>01</span> Acceptance of Terms
            </h2>
            <p>
              By accessing <strong style={{ color: '#fff' }}>www.faslax.in</strong>, entering a commercial brief, issuing an advance payment, or commissioning work with FasLax (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), you expressly enter into a legally enforceable agreement governed by these Terms and Conditions.
            </p>
            <p>
              References to &ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;partner&rdquo; denote any individual, enterprise, or corporate entity retaining our professional engineering or consultancy services.
            </p>
          </div>

          <div id="tc-services" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>02</span> Scope of Services
            </h2>
            <p>
              FasLax delivers specialized, high-performance digital services centered around three core pillars:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong style={{ color: '#fff' }}>Web, App &amp; Software Development:</strong> Custom web platforms, SaaS builds, responsive frontend frameworks, and mobile applications.</li>
              <li><strong style={{ color: '#fff' }}>AI Chatbots &amp; API Integration:</strong> Automated WhatsApp customer flows, custom LLM knowledge engines, and internal system syncs.</li>
              <li><strong style={{ color: '#fff' }}>Digital Marketing, SEO &amp; Content:</strong> High-authority Local SEO, performance campaign management, and bilingual content research.</li>
            </ul>
            <p style={{ marginTop: '14px' }}>
              The precise scope, technical stack, milestones, and deliverables are delineated strictly inside the respective project invoice or scope memo approved prior to project kickoff.
            </p>
          </div>

          <div id="tc-quotes" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>03</span> Quotes &amp; Engagement
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Quotes are prepared in <strong style={{ color: '#fff' }}>Indian Rupees (INR)</strong> for domestic clients, or <strong style={{ color: '#fff' }}>United States Dollars (USD)</strong> / agreed GCC currencies for international clients.</li>
              <li>All formally issued quotes remain valid for <strong style={{ color: '#fff' }}>14 calendar days</strong> from issuance.</li>
              <li>Third-party subscription overheads (custom domains, high-tier hosting, API usage credits, and advertising spend) are billed directly to the Client unless specifically included in the project agreement.</li>
            </ul>
          </div>

          <div id="tc-payment" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>04</span> Payment Architecture
            </h2>
            <p>Our standard contractual billing schedule operates as follows:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li><strong style={{ color: '#fff' }}>50% Advance Commitment:</strong> Required prior to development environment provisioning or code sprint initiation.</li>
              <li><strong style={{ color: '#fff' }}>Remaining 50% Settlement:</strong> Due upon staging review completion, prior to production server deployment or code repository handoff.</li>
              <li><strong style={{ color: '#fff' }}>Retainer Engagements:</strong> Monthly SEO and technical support retainers are billed in advance at the start of each service cycle.</li>
            </ul>
            <div style={{ background: 'rgba(255, 140, 0, 0.08)', border: '1px solid rgba(255, 140, 0, 0.25)', borderRadius: '14px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <AlertTriangle size={24} style={{ color: 'var(--orange)', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: '#fed7aa' }}>
                Unsettled invoices exceeding 7 calendar days beyond milestones may pause staging instances and deployments until balances are reconciled.
              </span>
            </div>
          </div>

          <div id="tc-revisions" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>05</span> Revisions &amp; Scope Creep
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Every milestone includes defined iteration rounds as agreed in the project proposal.</li>
              <li>Requests that alter the underlying architecture, append new database models, or request unquoted features will be estimated separately as distinct change orders.</li>
              <li>Feedback on staging releases must be documented within <strong style={{ color: '#fff' }}>7 business days</strong>. Absence of feedback within this window implies milestone approval.</li>
            </ul>
          </div>

          <div id="tc-timelines" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>06</span> Project Timelines &amp; Dependencies
            </h2>
            <p>
              Agreed timelines activate only after receipt of both the advance milestone and all necessary brand assets, API credentials, and copy from the Client. Delays in client-supplied assets or third-party API verification will automatically extend release targets.
            </p>
          </div>

          <div id="tc-ip" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>07</span> Intellectual Property Rights
            </h2>
            <p>
              <strong style={{ color: '#fff' }}>Client Assets:</strong> All proprietary data, branding, and copy provided to FasLax remain the sole intellectual property of the Client.
            </p>
            <p>
              <strong style={{ color: '#fff' }}>Deliverable Transfer:</strong> Full commercial ownership of custom production code and visual assets transfers to the Client immediately upon 100% invoice settlement.
            </p>
            <p>
              <strong style={{ color: '#fff' }}>Agency Attribution:</strong> FasLax retains the right to display public production screenshots and non-sensitive case summaries across our portfolio unless an NDA is executed beforehand.
            </p>
            <p>
              <strong style={{ color: '#fff' }}>Open Source Frameworks:</strong> Underlying open-source packages (e.g., Next.js, React, Tailwind CSS) remain subject to their original licenses (MIT/Apache).
            </p>
          </div>

          <div id="tc-confidentiality" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>08</span> Confidentiality
            </h2>
            <p>
              Both parties agree to treat non-public software logic, customer lists, credentials, and strategic briefs with absolute confidentiality, sharing records only with designated team members required to execute the engagement.
            </p>
          </div>

          <div id="tc-liability" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>09</span> Limitation of Liability
            </h2>
            <p>
              To the fullest extent sanctioned by Indian Law:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>FasLax&apos;s cumulative liability for any breach or operational fault shall not exceed the aggregate sum actually remitted by the Client for the specific phase in dispute.</li>
              <li>We bear no liability for consequential damages, unexpected revenue drops, platform policy updates (e.g., Meta/Google ad account penalties), or third-party cloud hosting downtimes.</li>
            </ul>
          </div>

          <div id="tc-termination" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>10</span> Termination of Contract
            </h2>
            <p>
              Either party may suspend the contract via written formal notice. If canceled by the Client, advance payments remain non-refundable to cover expended engineering hours, and any unbilled completed development sprints will be invoiced on a pro-rata basis.
            </p>
          </div>

          <div id="tc-warranties" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>11</span> Warranties &amp; Support
            </h2>
            <p>
              All websites and applications include a <strong style={{ color: '#fff' }}>14-day post-launch warranty</strong> covering bugs, syntax errors, or regression fixes stemming directly from our delivered code. Future regressions caused by external modifications or unmanaged third-party package updates fall outside this warranty window.
            </p>
          </div>

          <div id="tc-governing" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>12</span> Jurisdiction &amp; Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and interpreted pursuant to the statutory laws of the Republic of India. Any irreconcilable disputes shall be submitted exclusively to the competent courts of Kannur district, Kerala, India.
            </p>
          </div>

          <div id="tc-changes" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>13</span> Modifications
            </h2>
            <p>
              FasLax reserves the right to modernize these operational terms. Active fixed-price contracts are governed by the terms agreed upon at deposit receipt until phase completion.
            </p>
          </div>

          <div id="tc-contact" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>14</span> Legal &amp; Commercial Contacts
            </h2>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '18px', padding: '28px' }}>
              <strong style={{ fontSize: '18px', color: '#fff', display: 'block', marginBottom: '12px' }}>FasLax Digital Solutions</strong>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 8px 0', fontSize: '14px' }}>
                <MapPin size={16} className="orange" /> Chola, P.O. Pattanur, Kannur, Kerala, India - 670595
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 8px 0', fontSize: '14px' }}>
                <Mail size={16} className="orange" /> <a href="mailto:hello@faslax.in" style={{ color: 'var(--blue)' }}>hello@faslax.in</a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0', fontSize: '14px' }}>
                <Phone size={16} className="orange" /> <a href="tel:+916238377830" style={{ color: '#fff' }}>+91 62383 77830</a>
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar Navigation */}
        <div style={{ position: 'sticky', top: '100px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px' }}>
          <span style={{ fontSize: '11px', fontFamily: "'DM Mono', monospace", color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '14px' }}>
            Table of Contents
          </span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                style={{
                  fontSize: '13px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  lineHeight: '1.4'
                }}
              >
                {sec.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}