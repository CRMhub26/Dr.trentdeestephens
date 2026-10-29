import React, { useState, useEffect } from 'react';
import { WaxSeal } from './OrnateDividers';
import { Volume2, VolumeX, Menu, X, BookOpen, User, Library, Archive, Newspaper, Mail } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

interface NavbarProps {
  onOpenBookModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAmbience = () => {
    const state = ambienceEngine.toggle();
    setAudioActive(state);
  };

  const navLinks = [
    { name: 'HOME', href: '#hero', icon: BookOpen },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'BOOKS', href: '#books', icon: Library },
    { name: 'ARCHIVE', href: '#archive', icon: Archive },
    { name: 'CONTACT', href: '#contact', icon: Mail },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    ambienceEngine.playHarpPluck(330);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0a08]/95 backdrop-blur-md py-3 border-b border-[#a8894d]/30 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#090807]/95 via-[#090807]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="flex items-center gap-3 group select-none"
        >
          <WaxSeal size={42} label="TDS" />
          <div className="flex flex-col text-left">
            <span className="font-cinzel-dec font-bold text-sm sm:text-base tracking-[0.15em] text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors">
              DR. TRENT DEE STEPHENS
            </span>
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#a8894d] uppercase">
              Author • Scholar • Archive
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="font-cinzel text-xs lg:text-sm font-semibold tracking-[0.18em] px-3 lg:px-4 py-2 text-[#dcd0b7] hover:text-[#ffd700] hover:bg-[#a8894d]/10 rounded transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Ambient Audio & Mobile Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Subtle Ambient Audio Toggle */}
          <button
            onClick={toggleAmbience}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
              audioActive
                ? 'border-[#ffd700] bg-[#a8894d]/20 text-[#ffd700] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                : 'border-[#a8894d]/40 bg-[#14100c] text-[#a8894d] hover:text-[#ffd700] hover:border-[#ffd700]'
            }`}
            title={audioActive ? "Silence Ambient Chimes" : "Enable Scriptorium Ambience"}
            aria-label="Toggle Ambience"
          >
            {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden xl:inline font-cinzel text-[10px] tracking-widest uppercase pr-1">
              {audioActive ? "Ambience On" : "Ambience"}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#a8894d]/40 bg-[#14100c] text-[#ffd700] hover:bg-[#a8894d]/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0c09] border-b border-[#a8894d]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 font-cinzel text-sm font-bold tracking-[0.2em] py-2.5 px-3 text-[#f5ebd5] hover:text-[#ffd700] hover:bg-[#a8894d]/15 rounded-lg border border-transparent hover:border-[#a8894d]/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-[#a8894d]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#a8894d]/20 flex justify-between items-center text-xs font-cinzel text-[#a8894d]">
              <span>Official Author Portal</span>
              <a
                href="https://www.trentdeestephens.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#ffd700] hover:underline"
              >
                trentdeestephens.com ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
