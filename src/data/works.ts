export type WorkCategory = 'products' | 'clients';
export type WorkKind = 'Website / SaaS' | 'Mobile Application';

export type Work = {
  slug: string;
  category: WorkCategory;
  categoryLabel: string;
  kind: WorkKind;
  year: string;
  number: string;
  title: string;
  client: string;
  summary: string;
  overview: string;
  problem: string;
  result: string;
  stack: string[];
  visual: string;
  liveUrl?: string;
  appUrl?: string;
};

export const works: Work[] = [];

export const workCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'clients', label: 'Client Projects' },
  { value: 'products', label: 'Our Products & SaaS' }
] as const;