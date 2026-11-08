'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/cards';
import { WorkCard } from '@/components/work-card';
import { works, workCategories } from '@/data/works';

export default function WorksPage() {
  const [filter, setFilter] = useState<'all' | 'products' | 'clients'>('all');
  const visible = filter === 'all' ? works : works.filter((work) => work.category === filter);

  return (
    <>
      <section className="page-hero text-center">
        <span className="kicker">WORKS / SELECTED PROJECTS</span>
        <h1 style={{ marginTop: '12px' }}>
          Ideas That <span className="orange">Shipped.</span>
        </h1>
        <p style={{ maxWidth: '620px', margin: '20px auto 0 auto', color: '#94a3b8' }}>
          A living showcase of digital products, platforms, and high-performance software engineered with precision.
        </p>
      </section>

      <section className="works-section">
        {works.length > 0 ? (
          <>
            <div className="works-head">
              <SectionHeading 
                kicker="Portfolio System" 
                title={<>A Little <em>Range.</em></>} 
                body="Explore our internal product experiments alongside client builds." 
              />
              <a className="button button-dark" href="#projects">
                Jump to projects <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="works-toolbar">
              {workCategories.map((category) => (
                <button 
                  key={category.value} 
                  className={`filter-button ${filter === category.value ? 'active' : ''}`} 
                  onClick={() => setFilter(category.value as typeof filter)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div id="projects" className="works-grid">
              {visible.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0 100px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--line)', borderRadius: '24px', padding: '48px 32px', maxWidth: '640px', width: '100%' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', display: 'grid', placeItems: 'center', margin: '0 auto 20px auto' }}>
                <Sparkles size={24} style={{ color: 'var(--blue)' }} />
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>
                New Case Studies Coming Soon
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6, marginBottom: '28px' }}>
                We are curating technical breakdowns and live demos of our recent production deployments and upcoming SaaS builds.
              </p>
              <Link href="/contact" className="button button-primary">
                Start a Project with Us <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}