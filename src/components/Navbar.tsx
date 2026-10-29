import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/yogaData';

interface NavbarProps {
  onOpenBooking: (initialClass?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Le Studio', href: '#studio' },
    { label: 'Pratiques', href: '#pratiques' },
    { label: 'Planning & Tarifs', href: '#planning' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E0D6] py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 nav links) — Zone 3 (1 action) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark in display face */}
            <a
              href="#"
              className="font-serif text-2xl lg:text-3xl font-medium tracking-normal text-[#1C231E] whitespace-nowrap shrink-0 hover:text-[#2E4034] transition-colors"
            >
              Angèle Om Yoga
            </a>

            {/* Zone 2: 5 single-line clean nav links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#4A544C]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-[#1C231E] hover:underline underline-offset-8 transition-colors decoration-[#2E4034]/40"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Exactly 1 primary action */}
            <div className="hidden md:flex items-center shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm hover:bg-[#233228] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:scale-[0.99]"
              >
                Réserver un cours
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${STUDIO_INFO.phoneClean}`}
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#2E4034] bg-[#F3EFEA] hover:bg-[#E7E0D6] transition-colors"
                aria-label="Appeler le studio"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-[#1C231E] hover:text-[#2E4034] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4034] rounded-md"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#FAF8F5]/98 backdrop-blur-lg flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-[#1C231E]"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6 text-center pt-8">
            <span className="font-serif text-3xl font-medium text-[#1C231E] block mb-6">
              Angèle Om Yoga
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-[#2E362F] hover:text-[#2E4034] py-2 transition-colors border-b border-[#EFEAE2]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E7E0D6]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#2E4034] rounded-sm active:bg-[#233228] transition-colors"
            >
              Réserver une séance
            </button>
            <div className="text-center text-xs text-[#6B756C] space-y-1">
              <p>{STUDIO_INFO.address} · {STUDIO_INFO.city}</p>
              <p className="font-medium text-[#2E4034]">{STUDIO_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
