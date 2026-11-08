import Link from 'next/link';
import { ArrowUpRight, Bot, Code2, Megaphone } from 'lucide-react';
import type { Service } from '@/data/services';

const icons = { blue: Code2, orange: Bot, violet: Megaphone };

export function SectionHeading({ 
  kicker, 
  title, 
  body, 
  light = false 
}: { 
  kicker: string; 
  title: React.ReactNode; 
  body?: string; 
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'on-dark' : ''}`}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.accent];
  return (
    <Link className={`service-card accent-${service.accent}`} href={`/services/${service.slug}`}>
      <div className="card-top">
        <span>{service.index}</span>
        <span className="card-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="service-icon">
        <Icon size={24} strokeWidth={1.6} />
      </div>
      <h3>{service.shortTitle}</h3>
      <p>{service.description}</p>
      <span className="text-link">Explore service <ArrowUpRight size={15} /></span>
    </Link>
  );
}