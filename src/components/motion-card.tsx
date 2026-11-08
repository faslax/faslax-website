'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Bot, Code2, Megaphone } from 'lucide-react';
import type { Service } from '@/data/services';

const icons = { blue: Code2, orange: Bot, violet: Megaphone };

export function CinematicCard({ service }: { service: Service }) {
  const Icon = icons[service.accent];
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="perspective-container"
    >
      <Link 
        href={`/services/${service.slug}`} 
        className={`service-card accent-${service.accent}`}
        style={{
          display: 'block',
          transform: 'translateZ(30px)',
          transformStyle: 'preserve-3d',
          height: '100%',
        }}
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          <div className="card-top">
            <span style={{ fontSize: '13px', opacity: 0.8 }}>{service.index}</span>
            <span className="card-arrow"><ArrowUpRight size={18} /></span>
          </div>
          <div className="service-icon" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Icon size={26} strokeWidth={1.8} />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{service.shortTitle}</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>
            {service.headline}
          </p>
          <span className="text-link" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Explore service <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}