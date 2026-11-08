'use client';

import { useEffect, useRef } from 'react';

export function SignalOrb({ small = false }: { small?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty('--mx', `${x * 16}px`);
      node.style.setProperty('--my', `${y * 16}px`);
    };

    const onLeave = () => { 
      node.style.setProperty('--mx', '0px'); 
      node.style.setProperty('--my', '0px'); 
    };

    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);

    return () => { 
      node.removeEventListener('mousemove', onMove); 
      node.removeEventListener('mouseleave', onLeave); 
    };
  }, []);

  return (
    <div ref={ref} className={`signal-orb ${small ? 'signal-orb-small' : ''}`} aria-hidden="true">
      <span /><i /><b />
    </div>
  );
}

export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {children}
        <span aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}

export function CountUp({ value }: { value: string }) {
  return <span className="count-up">{value}</span>;
}