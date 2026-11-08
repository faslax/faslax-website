export const site = {
  name: 'FasLax',
  descriptor: 'Digital Solutions',
  url: 'https://www.faslax.in',
  email: 'hello@faslax.in',
  phone: '+91 62383 77830',
  address: 'Chola, P.O. Pattanur, Kannur, Kerala, India - 670595',
  logo: '/images/faslax-logo.png',
  socials: {
    instagram: 'https://www.instagram.com/faslax.team2026?mdxt=MWxjMHNpOWw1d3Rjcg==',
    facebook: 'https://www.facebook.com/profile.php?id=61593870796873',
    linkedin: 'https://www.linkedin.com/company/faslax-digital-solutions/',
    youtube: 'https://www.youtube.com/@FasLaxDigitalSolutions',
    whatsapp: 'https://wa.me/916238377830'
  }
} as const;

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' }
] as const;