import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail,
  Zap
} from 'lucide-react';
import { services } from '@/data/services';
import { CinematicTitle } from '@/components/motion-title';
import { SlideSection } from '@/components/slide-section';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  return {
    title: service ? `${service.title} | FasLax Digital Solutions` : 'Services | FasLax',
    description: service?.intro ?? 'Digital services from FasLax Digital Solutions Kannur',
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="service-detail-wrapper" style={{ paddingBottom: '100px' }}>
      
      {/* ── 1. BREADCRUMB & HERO ── */}
      <section className={`page-hero accent-${service.accent}`} style={{ textAlign: 'left', padding: '60px 20px 40px 20px', maxWidth: 1140, margin: '0 auto' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--blue)' }}>{service.shortTitle}</span>
        </nav>

        <span className="kicker">{service.eyebrow} / {service.index}</span>

        <div style={{ margin: '14px 0 20px 0', textAlign: 'left' }}>
          <CinematicTitle 
            text={service.title}
            className="service-title-cinematic"
          />
        </div>

        <p style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', color: '#f1f5f9', fontWeight: 600, maxWidth: '850px', lineHeight: 1.5 }}>
          {service.headline}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
          <Link className="button button-dark" href="/contact">
            Request a Quote <ArrowUpRight size={17} />
          </Link>
          <a 
            href="https://wa.me/916238377830" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-primary"
            style={{ background: '#25D366', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* ── 2. OVERVIEW NARRATIVE ── */}
      <SlideSection direction="up" delay={0.1}>
        <section style={{ maxWidth: 1140, margin: '40px auto', padding: '0 20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '24px', padding: '36px' }}>
            <span className="kicker">OVERVIEW</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '14px' }}>
              <p style={{ fontSize: '17px', color: '#f1f5f9', lineHeight: 1.8, margin: 0 }}>
                {service.intro}
              </p>
              {service.narrativeSecondary && (
                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>
                  {service.narrativeSecondary}
                </p>
              )}
            </div>
          </div>
        </section>
      </SlideSection>

      {/* ── 3. DETAILED CAPABILITIES (WHAT WE DELIVER) ── */}
      <section style={{ maxWidth: 1140, margin: '60px auto', padding: '0 20px' }}>
        <SlideSection direction="up">
          <div style={{ marginBottom: '36px' }}>
            <span className="kicker">WHAT WE DELIVER</span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '8px', color: '#fff' }}>Core Capabilities &amp; Features</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '6px' }}>
              Practical, conversion-focused execution engineered directly around your operational workflow.
            </p>
          </div>
        </SlideSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {service.capabilities.map((cap, i) => (
            <SlideSection key={i} direction="up" delay={0.06 * i}>
              <div 
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid var(--line)', 
                  borderRadius: '20px', 
                  padding: '32px' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.25)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    <Zap size={18} style={{ color: 'var(--blue)' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {cap.title}
                  </h3>
                </div>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '20px' }}>
                  {cap.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cap.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--orange, #ff6b6b)', flexShrink: 0, marginTop: '4px' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideSection>
          ))}
        </div>
      </section>

      {/* ── 4. INDUSTRY IMPLEMENTATIONS ── */}
      <section style={{ maxWidth: 1140, margin: '60px auto', padding: '0 20px' }}>
        <SlideSection direction="up">
          <div style={{ marginBottom: '36px' }}>
            <span className="kicker">REAL-WORLD APPLICATIONS</span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '8px', color: '#fff' }}>Industry-Specific Solutions</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '6px' }}>We tailor each setup to match the ground realities of specific business sectors:</p>
          </div>
        </SlideSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {service.industries.map((ind, i) => (
            <SlideSection key={i} direction="up" delay={0.06 * i}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', height: '100%' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--orange, #ff6b6b)', marginBottom: '8px' }}>{ind.title}</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{ind.details}</p>
              </div>
            </SlideSection>
          ))}
        </div>
      </section>

      {/* ── 5. CORE TECHNOLOGY STACK TABLE ── */}
      <section style={{ maxWidth: 1140, margin: '60px auto', padding: '0 20px' }}>
        <SlideSection direction="up">
          <div style={{ marginBottom: '32px' }}>
            <span className="kicker">PROVEN TOOLCHAIN</span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '8px', color: '#fff' }}>Our Core Technology Stack</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '6px' }}>
              A proven, reliable, and modern toolchain designed for longevity, rapid iteration, and high runtime performance:
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '14px 16px', color: '#fff', fontWeight: 700, width: '28%' }}>Category</th>
                  <th style={{ padding: '14px 16px', color: '#fff', fontWeight: 700 }}>Technologies &amp; Tools</th>
                </tr>
              </thead>
              <tbody>
                {service.techStack.map((tech, i) => (
                  <tr key={i} style={{ borderBottom: i !== service.techStack.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--blue)', fontWeight: 600 }}>{tech.category}</td>
                    <td style={{ padding: '14px 16px', color: '#cbd5e1', lineHeight: 1.6 }}>{tech.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SlideSection>
      </section>

      {/* ── 6. WHY PARTNER WITH FASLAX ── */}
      <section style={{ maxWidth: 1140, margin: '60px auto', padding: '0 20px' }}>
        <SlideSection direction="up">
          <div style={{ marginBottom: '32px' }}>
            <span className="kicker">THE FASLAX ADVANTAGE</span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginTop: '8px', color: '#fff' }}>Why Partner With FasLax Digital Solutions?</h2>
          </div>
        </SlideSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {service.whyChoose.map((why, i) => (
            <SlideSection key={i} direction="up" delay={0.06 * i}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px', height: '100%' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{why.title}</h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{why.desc}</p>
              </div>
            </SlideSection>
          ))}
        </div>
      </section>

      {/* ── 7. FOOTER CALL TO ACTION ── */}
      <SlideSection direction="up" delay={0.1}>
        <section style={{ maxWidth: 1140, margin: '80px auto 20px auto', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid var(--line)', borderRadius: '24px', padding: '50px 30px', textAlign: 'center' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.25)', display: 'grid', placeItems: 'center', margin: '0 auto 16px auto' }}>
              <Sparkles size={24} style={{ color: 'var(--blue)' }} />
            </div>
            
            <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>
              {service.ctaTitle}
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto 28px auto', fontSize: '15px', lineHeight: 1.6 }}>
              {service.ctaDescription}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
              <Link className="button button-dark" href="/contact">
                Start Your Project <ArrowUpRight size={17} />
              </Link>
              <a 
                href="https://wa.me/916238377830" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button button-primary"
                style={{ background: '#25D366', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>

            <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '13px', color: '#94a3b8' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} className="orange" /> Chola, P.O. Pattanur, Kannur, Kerala
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} className="orange" /> +91 62383 77830
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} className="orange" /> hello@faslax.in
              </span>
            </div>
          </div>
        </section>
      </SlideSection>

    </div>
  );
}