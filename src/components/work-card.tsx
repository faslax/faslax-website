import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Work } from '@/data/works';

export function WorkCard({ work, featured = false }: { work: Work; featured?: boolean }) {
  return (
    <Link href={`/works/${work.slug}`} className={`work-card work-${work.visual} ${featured ? 'featured' : ''}`}>
      <div className="work-visual">
        <div className="visual-window"><span /><span /><span /></div>
        <div className="visual-content">
          <div className="visual-line line-one" />
          <div className="visual-line line-two" />
          <div className="visual-block" />
          <div className="visual-ring" />
        </div>
        <span className="visual-corner">{work.number} / {work.year}</span>
      </div>
      <div className="work-copy">
        <div>
          <span className="eyebrow">{work.categoryLabel}</span>
          <h3>{work.title}</h3>
        </div>
        <span className="round-arrow"><ArrowUpRight size={17} /></span>
      </div>
      <p>{work.summary}</p>
      <div className="tag-row">
        {work.stack.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}