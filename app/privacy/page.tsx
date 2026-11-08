import Link from 'next/link';
import { Shield, Calendar, RefreshCw, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | FasLax Digital Solutions',
  description: "Read FasLax's privacy policy to understand how we collect, use, and protect your personal information when engaging our digital services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: 'pp-overview', title: '01 Overview' },
    { id: 'pp-collect', title: '02 Information We Collect' },
    { id: 'pp-use', title: '03 How We Use It' },
    { id: 'pp-share', title: '04 Sharing Your Data' },
    { id: 'pp-cookies', title: '05 Cookies' },
    { id: 'pp-security', title: '06 Data Security' },
    { id: 'pp-rights', title: '07 Your Rights' },
    { id: 'pp-third', title: '08 Third-Party Links' },
    { id: 'pp-children', title: "09 Children's Privacy" },
    { id: 'pp-changes', title: '10 Policy Changes' },
    { id: 'pp-contact', title: '11 Contact Us' },
  ];

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* ── HERO ── */}
      <section className="page-hero text-center">
        <span className="kicker">LEGAL DOCUMENTATION / 01</span>
        <h1 style={{ marginTop: '12px' }}>
          Privacy <span className="orange">Policy</span>
        </h1>
        <p style={{ maxWidth: '620px', margin: '20px auto 0 auto', color: '#94a3b8' }}>
          Your privacy matters to us. This policy explains how FasLax collects, uses, and safeguards your 
          personal information across our platforms and services.
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
        {/* Main Legal Content */}
        <div style={{ color: '#cbd5e1', lineHeight: '1.75', fontSize: '15px' }}>
          {/* Metadata badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', borderRadius: '99px', fontSize: '12px', color: '#94a3b8', fontFamily: "'DM Mono', monospace" }}>
              <Calendar size={14} className="orange" /> Effective Date: 1 January 2026
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--line)', borderRadius: '99px', fontSize: '12px', color: '#94a3b8', fontFamily: "'DM Mono', monospace" }}>
              <RefreshCw size={14} className="orange" /> Last Updated: 24 May 2026
            </span>
          </div>

          <div id="pp-overview" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>01</span> Overview
            </h2>
            <p>
              FasLax (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of our clients, website visitors, and users. This Privacy Policy outlines the types of information we collect, how we use that information, and the measures we take to safeguard it.
            </p>
            <p>
              By accessing or using our website at <strong style={{ color: '#fff' }}>www.faslax.in</strong> or engaging our digital services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our site and services.
            </p>
          </div>

          <div id="pp-collect" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>02</span> Information We Collect
            </h2>
            <p>We collect information in the following ways:</p>
            <h3 style={{ fontSize: '17px', color: 'var(--orange)', marginTop: '20px', marginBottom: '10px' }}>Information You Provide Directly</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>Name, email address, phone number, and organization details submitted via our contact or consultation forms.</li>
              <li>Project briefs, functional requirements, technical specifications, and budgets shared during consultations.</li>
              <li>Direct communications via email, WhatsApp, or instant messaging platforms.</li>
              <li>Payment details processed securely through third-party payment gateways (we do not store raw card numbers or CVVs).</li>
            </ul>
            <h3 style={{ fontSize: '17px', color: 'var(--orange)', marginTop: '20px', marginBottom: '10px' }}>Information Collected Automatically</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>IP address, browser type, device specifications, screen resolution, and operating system.</li>
              <li>Pages viewed, session durations, click events, and scroll depth via analytics integrations.</li>
              <li>Referring URLs, search keywords, and campaign attribution parameters.</li>
              <li>Functional cookies as outlined in Section 05.</li>
            </ul>
          </div>

          <div id="pp-use" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>03</span> How We Use Your Information
            </h2>
            <p>We use the collected data strictly to:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li>Deliver project proposals, architecture reviews, and direct digital services.</li>
              <li>Dispatch milestone updates, deliverable previews, and billing statements.</li>
              <li>Improve website speed, responsiveness, and conversion performance based on telemetry data.</li>
              <li>Send critical operational updates or occasional service announcements (opt-out available anytime).</li>
              <li>Ensure cybersecurity compliance, prevent bot abuses, and honor contractual commitments.</li>
            </ul>
            <div style={{ background: 'rgba(0, 180, 216, 0.08)', border: '1px solid rgba(0, 180, 216, 0.25)', borderRadius: '14px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <AlertCircle size={24} style={{ color: 'var(--blue)', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: '#e0f2fe' }}>
                We never sell, trade, or monetize your personal or client data with third-party advertisers or brokers.
              </span>
            </div>
          </div>

          <div id="pp-share" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>04</span> Sharing Your Information
            </h2>
            <p>Your details may be shared strictly under the following transparent conditions:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong style={{ color: '#fff' }}>Infrastructure Providers:</strong> Trusted hosting platforms (e.g., Vercel, Supabase, Cloudflare) contractually bound by strict data confidentiality.</li>
              <li><strong style={{ color: '#fff' }}>Legal Directives:</strong> When mandated by applicable Indian statutes, lawful court warrants, or regulatory enforcement bodies.</li>
              <li><strong style={{ color: '#fff' }}>Business Continuity:</strong> In the event of a merger, acquisition, or restructuring, subject to equivalent confidentiality terms.</li>
              <li><strong style={{ color: '#fff' }}>Explicit Consent:</strong> Any specific distribution requested or approved by you in writing.</li>
            </ul>
          </div>

          <div id="pp-cookies" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>05</span> Cookies &amp; Telemetry
            </h2>
            <p>
              We utilize lightweight cookies to monitor sessions and optimize Core Web Vitals performance:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong style={{ color: '#fff' }}>Essential:</strong> Required for routing, security tokens, and responsive state persistence.</li>
              <li><strong style={{ color: '#fff' }}>Analytics:</strong> Aggregated, privacy-compliant usage metrics (Google Analytics 4 / Google Tag Manager).</li>
              <li><strong style={{ color: '#fff' }}>Preferences:</strong> Storing local UI state preferences across site sessions.</li>
            </ul>
            <p style={{ marginTop: '14px' }}>
              You may freely block or clear cookies via your browser preferences without losing access to our primary editorial and portfolio content.
            </p>
          </div>

          <div id="pp-security" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>06</span> Data Security
            </h2>
            <p>
              We enforce modern digital security practices across every layer of our stack:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Universal HTTPS encryption (TLS 1.3) across all endpoints.</li>
              <li>Role-based access control and multi-factor authentication on development environments and staging servers.</li>
              <li>Frequent dependency audits and zero hard-coded credential architectures.</li>
            </ul>
            <p style={{ marginTop: '14px' }}>
              While we uphold stringent defensive measures, no transmission protocol over the open web is infallible. If you detect any potential vulnerability, please alert us immediately at <a href="mailto:hello@faslax.in" style={{ color: 'var(--blue)' }}>hello@faslax.in</a>.
            </p>
          </div>

          <div id="pp-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>07</span> Your Rights
            </h2>
            <p>
              You maintain full authority over the personal information you entrust to us:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong style={{ color: '#fff' }}>Access &amp; Portability:</strong> Request an export of your personal and project records.</li>
              <li><strong style={{ color: '#fff' }}>Correction:</strong> Instruct us to amend inaccurate contact or billing metadata.</li>
              <li><strong style={{ color: '#fff' }}>Deletion (&ldquo;Right to be Forgotten&rdquo;):</strong> Request the permanent purge of your communications and non-statutory records.</li>
            </ul>
            <p style={{ marginTop: '14px' }}>
              To exercise these statutory rights, send a written request to <a href="mailto:hello@faslax.in" style={{ color: 'var(--blue)' }}>hello@faslax.in</a>. Requests will be executed within 30 business days.
            </p>
          </div>

          <div id="pp-third" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>08</span> Third-Party Links
            </h2>
            <p>
              Our portfolio exhibits and documentation may link out to external websites, live production apps, or partner directories. We do not control their independent privacy protocols and encourage you to review their terms upon departure.
            </p>
          </div>

          <div id="pp-children" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>09</span> Children&apos;s Privacy
            </h2>
            <p>
              Our professional digital services are strictly directed toward enterprise owners, startups, and adult individuals. We do not intentionally compile records from individuals under 13 years of age.
            </p>
          </div>

          <div id="pp-changes" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>10</span> Policy Modifications
            </h2>
            <p>
              We reserve the right to revise this policy to mirror technological upgrades, cloud structural adaptations, or statutory obligations. Changes will be reflected via the &ldquo;Last Updated&rdquo; timestamp. Continued engagement represents full acknowledgement of the updated guidelines.
            </p>
          </div>

          <div id="pp-contact" style={{ scrollMarginTop: '100px' }}>
            <h2 style={{ fontSize: '24px', color: '#fff', letterSpacing: '-0.04em', marginBottom: '16px' }}>
              <span style={{ color: 'var(--blue)', fontFamily: "'DM Mono', monospace", marginRight: '10px' }}>11</span> Legal Contact &amp; Governance
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