export type CapabilityItem = {
  title: string;
  description: string;
  points: string[];
};

export type IndustryItem = {
  title: string;
  details: string;
};

export type TechStackItem = {
  category: string;
  tools: string;
};

export type WhyChooseItem = {
  title: string;
  desc: string;
};

export type Service = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  headline: string;
  intro: string;
  narrativeSecondary?: string;
  accent: 'blue' | 'orange' | 'violet';
  capabilities: CapabilityItem[];
  industries: IndustryItem[];
  techStack: TechStackItem[];
  whyChoose: WhyChooseItem[];
  ctaTitle: string;
  ctaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'web-app-software-development',
    index: '01',
    eyebrow: 'Engineered for Performance',
    title: 'Web, App & Software Development',
    shortTitle: 'Web / App / Software',
    headline: 'High-Performance Digital Product Engineering for Modern Businesses Across Kerala, India & the Global Malayalam Community.',
    intro: 'Modern businesses across Kerala, India, and the Gulf region no longer need bloated templates or brittle, slow-loading websites. They need fast, secure, and reliable digital systems that manage customer enquiries, catalog displays, automated workflows, and business operations seamlessly.',
    narrativeSecondary: 'From local retail shops, healthcare clinics, and service providers in Kannur, Calicut, and Kochi to growing digital startups and Malayali entrepreneurs worldwide, FasLax Digital Solutions engineers production-ready web platforms, cross-platform mobile apps, lightweight desktop utilities, and custom SaaS platforms. We build using modern, clean JavaScript/TypeScript and Dart architectures—ensuring your digital assets are ultra-fast, secure, and zero-maintenance.',
    accent: 'blue',
    capabilities: [
      {
        title: 'High-Speed Business Websites & Web Portals',
        description: 'A slow website costs you real business. We design and develop mobile-first, high-converting websites optimized to achieve near-perfect Google PageSpeed scores (90+).',
        points: [
          'Static & Dynamic Web Applications: Built using Next.js, React.js, and modern Tailwind CSS or Bootstrap for lightning-fast loading and smooth user experience.',
          'Local SEO & Discovery Ready: Fully configured with semantic HTML5, clean OpenGraph tags, schema markup, and indexed through Google Search Console and Google Business Profile.',
          'Instant Conversions: One-click WhatsApp ordering, direct phone click-to-call integration, and instant lead capture forms connected directly to your email or database.'
        ]
      },
      {
        title: 'Multi-Tenant SaaS & Custom Web Platforms',
        description: 'For entrepreneurs, niche marketplaces, and businesses launching their own software products:',
        points: [
          'Multi-Tenant Architectures: Custom platforms enabling multiple vendors, merchants, or client branches under a single centralized codebase.',
          'Authentication & Database Foundations: Scalable relational architecture using Supabase and PostgreSQL with Role-Based Access Control (RBAC) and row-level security.',
          'Rich Asset Management: Automated image uploads, media transformations, and lightning-fast global CDN delivery powered by Cloudinary.',
          'Payment Gateways & Customer Dashboards: Seamless checkout workflows with Razorpay & Stripe integration, automated receipt generation, and order tracking.'
        ]
      },
      {
        title: 'Cross-Platform Mobile Applications & PWAs',
        description: 'Reach your customers directly on their smartphones without the overhead and complexity of separate native codebases.',
        points: [
          'React Native & Flutter Mobile Apps: Unified cross-platform mobile solutions for Android and iOS, built with a shared codebase to minimize development time and maintenance cost.',
          'Offline-First Storage: Local data caching and offline sync architectures ensuring critical app features work smoothly even under patchy 2G/3G connections.',
          'Progressive Web Apps (PWA): Zero-friction, installable web apps that run straight from the browser—bypassing app store delays while delivering fast native-like app experiences.'
        ]
      },
      {
        title: 'Custom Desktop & Operations Software',
        description: 'For clinics, manufacturing units, trading desks, and local merchants who require reliable offline or workstation-specific tools:',
        points: [
          'Internal Billing & Point-of-Sale Utilities: Fast, lightweight desktop applications built for billing, record-keeping, and local data entry.',
          'Local Data Management & Verification: Standalone software tools for automated report generation, data validation, and inventory tracking without heavy cloud dependencies.'
        ]
      },
      {
        title: 'Practical AI Features & API Integrations',
        description: 'We integrate practical, lightweight AI tools that automate real administrative work rather than selling speculative hype.',
        points: [
          'Custom AI Chatbots: Website chatbots trained on your business documents, FAQs, and service catalogs to handle first-level customer enquiries 24/7.',
          'Third-Party API Connections: Clean integrations with messaging APIs, SMS gateways, cloud storage, external CRMs, and payment gateways.'
        ]
      }
    ],
    industries: [
      {
        title: 'Clinics, Pet Care & Healthcare Providers',
        details: 'Modern booking portals, doctor timetables, service breakdowns, patient FAQs, and one-tap emergency call buttons.'
      },
      {
        title: 'Water Purifiers, Solar & Service Technicians',
        details: 'Localized service landing pages, lead capture forms, warranty checking portals, and customer AMC tracking.'
      },
      {
        title: 'Local Retailers, Boutiques & Home Businesses',
        details: 'Direct-to-WhatsApp catalog storefronts, localized delivery radius systems, and high-performance product showcases.'
      },
      {
        title: 'Publishers, Authors & Cultural Projects',
        details: 'Dedicated author portfolios, digital book previews, direct purchase links, and archive systems.'
      },
      {
        title: 'Hospitality, Cloud Kitchens & Restaurants',
        details: 'Visual digital menus, direct takeaway booking channels, location route maps, and reservation triggers.'
      }
    ],
    techStack: [
      { category: 'Frontend & UI', tools: 'Next.js, React.js, Tailwind CSS, Bootstrap 5, HTML5, Modern JavaScript (ES6+), CSS3' },
      { category: 'Mobile & PWA', tools: 'React Native, Flutter, Progressive Web Apps (Service Workers & Manifest)' },
      { category: 'Backend & Database', tools: 'Supabase, PostgreSQL, Node.js, Cloudinary (Media CDN)' },
      { category: 'Search & Analytics', tools: 'Google Search Console, Google Business Profile (Local SEO), Google Analytics 4' },
      { category: 'Cloud & Deployment', tools: 'Vercel, Cloudflare Pages/DNS, Git & GitHub Version Control' }
    ],
    whyChoose: [
      {
        title: 'No Bloat, Pure Speed',
        desc: "We don't use heavy, vulnerable themes that drag down performance. Your websites load in milliseconds, retaining mobile visitors and boosting search rankings."
      },
      {
        title: 'Direct Engineering Ownership',
        desc: 'You interact directly with the engineers building your software. Requirements aren’t lost in layers of corporate management.'
      },
      {
        title: 'Cost-Effective Architecture',
        desc: 'By leveraging high-tier modern platforms like Cloudflare, Vercel, and Supabase, we minimize ongoing recurring server costs for your business.'
      },
      {
        title: 'Local Grounding with Global Reach',
        desc: 'Based in Kannur, we understand the local business landscape of Kerala while delivering digital solutions that cater seamlessly to clients across the GCC and international markets.'
      }
    ],
    ctaTitle: 'Ready to Build Your Next Digital Product?',
    ctaDescription: 'Whether you need a high-converting business website, a custom SaaS portal, an offline-ready mobile app, or a lightweight operational utility, FasLax Digital Solutions turns your requirements into working software.'
  },
  {
    slug: 'ai-chatbots-api-integration',
    index: '02',
    eyebrow: 'Intelligent Automation',
    title: 'AI Chatbots & API Integration',
    shortTitle: 'AI / Chatbots / APIs',
    headline: 'Practical Artificial Intelligence & Seamless Data Connectivity for Modern Businesses Across Kerala, India & the Global Malayalam Community.',
    intro: 'Modern businesses no longer need theoretical AI hype or complex, expensive enterprise software that is difficult to maintain. What they need are practical, reliable digital assistants that engage website visitors around the clock, answer common customer questions accurately, capture high-intent leads, and securely connect their websites and apps to essential third-party tools, payment gateways, and databases.',
    narrativeSecondary: 'At FasLax Digital Solutions, we specialize in building fast, lightweight, and custom-tailored AI Chatbots and API Integrations. Whether you need an intelligent conversational chatbot embedded directly inside your Next.js website, a direct-to-WhatsApp automated ordering trigger, a secure payment gateway integration, or real-time database synchronization via webhooks, we engineer clean, production-ready solutions that directly automate routine customer interactions and eliminate manual administrative tasks.',
    accent: 'orange',
    capabilities: [
      {
        title: 'Custom Website AI Chatbots',
        description: 'Traditional rule-based chatbots frustrate visitors with rigid menus and robotic answers. We build intelligent, context-aware conversational bots powered by leading LLM APIs directly integrated into your web applications.',
        points: [
          'Trained on Your Business Knowledge: Grounded specifically in your business FAQs, service descriptions, operating hours, pricing plans, and policies—ensuring accurate answers with zero hallucinations.',
          '24/7 Lead Capture & Qualification: Automatically collects visitor contact information (name, phone number, location, specific requirement) and forwards qualified leads instantly to your team.',
          'Bilingual Interaction (English & Malayalam): Capable of understanding and responding naturally in both English and Malayalam (including Manglish), making them ideal for local and Gulf-based clients.',
          'Zero UI Lag: Lightweight chatbot widgets custom-coded in React and Next.js that load in milliseconds without slowing down your site’s Google PageSpeed score.'
        ]
      },
      {
        title: 'Third-Party API Integration & Custom Middleware',
        description: 'Modern websites and mobile apps need to communicate smoothly with external services. We design clean API architectures that eliminate manual data transfer and keep your business records aligned in real time.',
        points: [
          'Payment Gateway Integration: Secure checkouts using Razorpay, Stripe, and other major providers—supporting UPI, cards, and net banking with automated webhook verification and receipt generation.',
          'Cloud Media & Asset Pipelines: Fast image and video upload pipelines powered by Cloudinary, automating image resizing, format optimization, and global CDN delivery.',
          'Custom REST APIs & Webhooks: Custom backend endpoints built with Node.js and Next.js API Routes that connect forms and orders directly to your CRM, messaging apps, or dashboards.',
          'Database Integrations with Supabase: Real-time data storage, user authentication, and secure row-level data access configured seamlessly through PostgreSQL and Supabase.'
        ]
      },
      {
        title: 'Messaging & Notification Automations',
        description: 'Keep your customers informed at every step of their journey using direct, automated communication channels.',
        points: [
          'Instant WhatsApp Triggers: Automatically generate pre-filled WhatsApp enquiry links or integrate notification webhooks to send order confirmations and booking details directly to customers.',
          'Transactional Email & SMS Alerts: Automated email notifications (via modern APIs like Resend or Nodemailer) triggered whenever a contact form is submitted or a payment is received.'
        ]
      }
    ],
    industries: [
      {
        title: 'Hospitals, Pet Clinics & Doctors',
        details: 'Front-desk AI chatbots that assist visitors with clinic timings, available doctor specialties, basic consultation FAQs, and one-tap appointment requests.'
      },
      {
        title: 'Service Providers & Water Purifier Dealers',
        details: 'Lead capture bots that understand customer locations, recommend suitable models or service plans, and collect phone numbers for immediate callback.'
      },
      {
        title: 'Boutiques, Home Businesses & Retail',
        details: 'Interactive catalog bots that answer product availability and sizing queries, calculate delivery estimates, and route purchase intents straight to WhatsApp.'
      },
      {
        title: 'Startups & SaaS Platforms',
        details: 'In-app help assistants that guide users through onboarding steps, feature explanations, and automated ticket logging.'
      }
    ],
    techStack: [
      { category: 'AI Models & Engines', tools: 'Google Gemini API, Google AI Studio, OpenAI API' },
      { category: 'Frontend Embedding', tools: 'React.js, Next.js, Tailwind CSS, TypeScript, Vanilla JavaScript' },
      { category: 'Backend & APIs', tools: 'Node.js, Next.js API Routes, RESTful Webhooks' },
      { category: 'Database & Cloud Storage', tools: 'Supabase, PostgreSQL, Cloudinary Media CDN' },
      { category: 'Gateways & Messaging', tools: 'Razorpay, Stripe, WhatsApp Click-to-Chat & Cloud APIs, Resend' },
      { category: 'Development Workflow', tools: 'VS Code, Git, GitHub, Cloudflare Pages, Vercel' }
    ],
    whyChoose: [
      {
        title: 'Grounded in Business Reality',
        desc: 'We do not build over-complicated AI agents that burn through unnecessary API credits. Every chatbot is scoped with clear system prompts and bounded context to deliver precise, helpful answers.'
      },
      {
        title: 'Native Code, No Bloated Plugins',
        desc: 'We don’t rely on heavy third-party SaaS iframe widgets that slow down your pages or charge steep monthly subscription fees. We code our solutions directly into your app.'
      },
      {
        title: 'Data Security & Privacy',
        desc: 'Customer inquiries and sensitive contact details are stored securely in your own protected database (Supabase) without exposing private data.'
      },
      {
        title: 'Local Insight with Global Quality',
        desc: 'Headquartered in Kannur, we understand the communication nuances of local Kerala businesses while adhering to modern international web development standards.'
      }
    ],
    ctaTitle: 'Ready to Automate Customer Enquiries & Connect Your Digital Systems?',
    ctaDescription: 'Let’s build an intelligent assistant that works 24/7 for your business and connects your software tools into one seamless workflow.'
  },
  {
    slug: 'digital-marketing-seo-content',
    index: '03',
    eyebrow: 'Visibility & Momentum',
    title: 'Digital Marketing, SEO & Content Writing',
    shortTitle: 'Marketing / SEO / Content',
    headline: 'Results-Driven Local SEO, Paid Advertising & Deep-Research Malayalam Content for Businesses Across Kerala, India & the Global Malayalam Community.',
    intro: 'Digital marketing is only valuable when it brings real phone calls, store visits, qualified enquiries, and measurable revenue. Random social posts or burning money on untargeted ads without a clear conversion path rarely produces lasting results.',
    narrativeSecondary: 'At FasLax Digital Solutions, we take a disciplined, performance-first approach to growing your business. Whether you are a local service provider or clinic in Kannur, Calicut, or Kochi looking to dominate Google Maps, a retail merchant scaling through targeted Meta and Google Ads, or a brand needing thoroughly researched, culturally grounded Malayalam content and ad copy that actually connects with your audience, we engineer campaigns that deliver clear, transparent return on investment.',
    accent: 'violet',
    capabilities: [
      {
        title: 'Google Business Profile (GMB) & Local SEO',
        description: 'For local clinics, retail shops, contractors, and service businesses, appearing at the top of Google Maps and local search results is the highest-converting source of new customers.',
        points: [
          'Complete Profile Optimization: Setup, verification, categorization, business description structuring, and service catalogue optimization on Google Business Profile.',
          'Map Pack Ranking Factors: Local keyword integration, geocoding signals, review acquisition strategies, and consistent NAP (Name, Address, Phone) citation management.',
          'Direct Lead Capture: Driving high-intent phone calls, WhatsApp chats, and map direction requests directly to your sales desk.'
        ]
      },
      {
        title: 'Full-Stack Search Engine Optimisation (SEO)',
        description: 'We build durable, compounding organic visibility that keeps your business visible when prospects search for your services online.',
        points: [
          'Technical SEO Audits: Fixing crawl errors, indexation bottlenecks, schema markup, and Core Web Vitals to ensure search engines rank your pages effortlessly.',
          'On-Page & Search Intent Alignment: Optimizing title tags, meta descriptions, heading structures, and semantic keywords around high-intent commercial terms.',
          'Google Search Console & GA4 Setup: Accurate tracking configuration, performance monitoring, and organic traffic reporting without relying on vanity metrics.'
        ]
      },
      {
        title: 'Performance Marketing: Google Ads & Meta Ads',
        description: 'Targeted paid advertising engineered to capture existing search demand and generate qualified inbound enquiries efficiently.',
        points: [
          'Google Search & Call Ads: Targeting high-intent search queries where potential customers are actively looking to hire or buy, ensuring every rupee spent connects to a qualified lead.',
          'Meta Ads (Facebook & Instagram): Highly targeted lead generation, direct WhatsApp message campaigns, and retargeting ads run via Meta Ads Manager.',
          'Campaign & Budget Optimization: Continuous testing of ad angles, audience exclusions, bidding strategies, and conversion tracking to keep your Cost Per Lead (CPL) as low as possible.'
        ]
      },
      {
        title: 'Deep-Research Content Writing & Malayalam Ad Copywriting',
        description: 'Content only converts when it understands the local audience, cultural context, and the real questions buyers ask before making a decision.',
        points: [
          'Research-Driven Malayalam Content: From comprehensive editorial articles and press releases to business documentation and local awareness campaigns, we conduct deep background research on any topic to produce accurate, nuanced, and authentic Malayalam content.',
          'High-Converting Ad Copy & Scripts: Punchy Malayalam and English ad copy tailored for Facebook, Instagram, and WhatsApp promotions designed to stop the scroll and trigger immediate clicks.',
          'SEO Website & Landing Page Copy: Clear, compelling service page content and landing page text structured to convert cold visitors into paying customers.'
        ]
      }
    ],
    industries: [
      {
        title: 'Healthcare Providers & Specialized Clinics',
        details: 'Local map dominance, patient FAQ content, emergency call ad campaigns, and doctor profile visibility across regional search queries.'
      },
      {
        title: 'Water Purifiers, Solar & Home Services',
        details: 'High-intent local Google Search Ads, lead capture forms, service area SEO, and targeted Malayalam ad messaging.'
      },
      {
        title: 'Local Retailers & Home Businesses',
        details: 'Direct WhatsApp lead ads on Instagram and Facebook, hyper-local radius targeting, and localized festive campaign copy.'
      },
      {
        title: 'B2B Agencies, Publishers & Tech Ventures',
        details: 'Research-backed long-form articles, commercial landing page content, and authority-building search strategies.'
      }
    ],
    techStack: [
      { category: 'Search & Discovery', tools: 'Google Search Console, Google Business Profile, Google Analytics 4 (GA4)' },
      { category: 'Paid Advertising', tools: 'Google Ads, Meta Ads Manager, Meta Business Suite' },
      { category: 'Content Research & Crafting', tools: 'Primary Desk Research, Google Docs, Localized Malayalam Language Toolsets' },
      { category: 'Technical SEO Verification', tools: 'PageSpeed Insights, Schema Markup Validator, Chrome DevTools' }
    ],
    whyChoose: [
      {
        title: 'No Fluff, Real Numbers',
        desc: 'We track phone calls, WhatsApp messages, form fills, and actual customer acquisitions—not meaningless impressions or fake engagement metrics.'
      },
      {
        title: 'Authentic Regional Authority',
        desc: 'Writing effective Malayalam copy requires native linguistic depth, cultural understanding, and rigorous research—not lazy machine translations that sound awkward to local customers.'
      },
      {
        title: 'Complete Technical Alignment',
        desc: 'Because we build the websites ourselves, our marketing and SEO aren’t disconnected from the code. We fix technical bottlenecks on the server and frontend directly.'
      },
      {
        title: 'Direct Accountability',
        desc: 'Based in Kannur, we work transparently with local businesses across Kerala as well as overseas entrepreneurs targeting Malayalam-speaking and Indian audiences.'
      }
    ],
    ctaTitle: 'Ready to Attract More Customers and Scale Your Revenue?',
    ctaDescription: 'Whether you need to rank #1 on Google Maps, run profitable lead generation ads, or craft deeply researched Malayalam content that drives real sales, FasLax Digital Solutions is ready to help.'
  }
];