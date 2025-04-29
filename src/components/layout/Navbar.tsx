import Link from 'next/link';
import { ReactNode } from 'react';

interface NavbarProps {
  locale: string;
}

interface NavItem {
  label: {
    en: string;
    es: string;
  };
  href: string;
}

// Updated navigation items - removed Contact
const navItems: NavItem[] = [
  { label: { en: 'Technology', es: 'Tecnología' }, href: '/technology' },
  { label: { en: 'Applications', es: 'Aplicaciones' }, href: '/applications' },
  { label: { en: 'Products', es: 'Productos' }, href: '/products' },
  { label: { en: 'Why EfireX?', es: '¿Por qué EfireX?' }, href: '/why-efirex' },
  { label: { en: 'Certifications', es: 'Certificaciones' }, href: '/certifications' },
  { label: { en: 'Resources', es: 'Recursos' }, href: '/resources' },
  // Contact item removed as requested
];

export default function Navbar({ locale }: NavbarProps) {
  const otherLocale = locale === 'en' ? 'es' : 'en';
  
  return (
    <nav className="bg-blue-900 text-white">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href={`/${locale}`} className="text-2xl font-bold">
          Lithium Extinguisher
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={`/${locale}${item.href}`}
              className="hover:text-amber-400 transition-colors"
            >
              {item.label[locale as keyof typeof item.label]}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Enhanced language toggle button with flag icon */}
          <Link 
            href={`/${otherLocale}`} 
            className="flex items-center px-3 py-1 bg-blue-800 hover:bg-blue-700 rounded-md transition-colors"
          >
            <span className="mr-2">
              {otherLocale === 'en' ? '🇺🇸' : '🇪🇸'}
            </span>
            <span className="font-medium">
              {otherLocale === 'en' ? 'English' : 'Español'}
            </span>
          </Link>
          
          {/* Buy Now button removed as requested */}
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
