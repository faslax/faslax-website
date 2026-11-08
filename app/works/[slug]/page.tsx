import Link from 'next/link';
import { ArrowDownToLine, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { works } from '@/data/works';
import { CinematicTitle } from '@/components/motion-title';
import { SlideSection } from '@/components/slide-section';

export const dynamicParams = false;

export function generateStaticParams() { 
  return works.map((work) => ({ slug: work.slug })); 
}

export function generateMetadata({ params }: { params: { slug: string } }) { 
  const work = works.find((item) => item.slug === params.slug); 
  return { 
    title: work ? `${work.title} | FasLax Projects` : 'Project Not Found' 
  }; 
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = works.find((item) => item.slug === params.slug);
  if (!work) {
    notFound();
  }

  return (
    <>
      <section className="work-detail-hero">
        <Link className="text-link" href="/works" style={{ color: '#aab5d5' }}>
          <ArrowLeft size={15} /> Back to works
        </Link>
        <span className="kicker" style={{ marginTop: 70 }}>
          {work.categoryLabel} / {work.year}
        </span>
        <div style={{ margin: '14px 0' }}>
          <CinematicTitle text={work.title} />
        </div>
        <p>{work.summary}</p>
      </section>

      <SlideSection direction="up" delay={0.1}>
        <div className={`work-detail-visual work-visual work-${work.visual}`}>
          <div className="visual-window"><span /><span /><span /></div>
          <div className="visual-content">
            <div className="visual-line line-one" />
            <div className="visual-line line-two" />
            <div className="visual-block" />
            <div className="visual-ring" />
          </div>
          <span className="visual-corner">{work.kind}</span>
        </div>
      </SlideSection>

      <SlideSection direction="up" delay={0.1}>
        <section className="work-detail-body">
          <aside className="detail-sticky">
            <span className="eyebrow">{work.number} / {work.kind}</span>
            <h2>{work.client}</h2>
            {work.liveUrl && (
              <a className="button button-dark" href={work.liveUrl} target="_blank" rel="noreferrer">
                Open live project <ArrowUpRight size={16} />
              </a>
            )}
            {work.appUrl && (
              <a className="button button-primary" href={work.appUrl} download>
                Download app <ArrowDownToLine size={16} />
              </a>
            )}
          </aside>

          <div>
            <div className="detail-section">
              <h3>Overview</h3>
              <p>{work.overview}</p>
            </div>
            <div className="detail-section">
              <h3>The problem</h3>
              <p>{work.problem}</p>
            </div>
            <div className="detail-section">
              <h3>The result</h3>
              <p>{work.result}</p>
            </div>
            <div className="detail-section">
              <h3>Stack</h3>
              <div className="tag-row">
                {work.stack.map((tag) => (
                  <span className="stack-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SlideSection>
    </>
  );
}