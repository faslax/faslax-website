/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Core Legacy HTML Pages to New Next.js Routes
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/service.html', destination: '/', permanent: true },
      { source: '/portfolio.html', destination: '/works', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },

      // Legacy Services & Categories to Focused Pillars
      { source: '/services', destination: '/', permanent: true },
      { source: '/services/index.html', destination: '/', permanent: true },
      { source: '/services/branding-uiux-creative-design.html', destination: '/about', permanent: true },
      { source: '/services/print-packaging.html', destination: '/about', permanent: true },
      { source: '/services/video-editing.html', destination: '/about', permanent: true },
      { source: '/services/software-testing-qa.html', destination: '/services/web-app-software-development', permanent: true },
      { source: '/services/software-architecture-database-erp.html', destination: '/services/web-app-software-development', permanent: true },
      { source: '/services/web-development-ai-integration.html', destination: '/services/web-app-software-development', permanent: true },
      { source: '/services/ai-solutions-workflow-automation.html', destination: '/services/ai-chatbots-api-integration', permanent: true },
      { source: '/services/digital-marketing-business-growth.html', destination: '/services/digital-marketing-seo-content', permanent: true },

      // Purged legacy modules
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/locations/:path*', destination: '/', permanent: true },
      { source: '/technology/:path*', destination: '/', permanent: true },
      { source: '/solutions/:path*', destination: '/', permanent: true },
      { source: '/pricing', destination: '/contact', permanent: true }
    ];
  }
};

export default nextConfig;