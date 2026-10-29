import React, { useState } from 'react';
import { WaxSeal, ManuscriptCorner } from './OrnateDividers';
import { Scroll, ArrowUp, Send, CheckCircle, Flame, Globe } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';
import { AUTHOR_BIO } from '../data/authorData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    ambienceEngine.playHarpPluck(392);
    setSubscribed(true);
  };

  const scrollToTop = () => {
    ambienceEngine.playHarpPluck(440);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060504] border-t border-[#a8894d]/30 text-[#ded2ba] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Newsletter Box */}
        <div className="relative parchment-card rounded-2xl p-6 sm:p-8 gold-border max-w-3xl mx-auto shadow-xl">
          <ManuscriptCorner position="top-left" />
          <ManuscriptCorner position="top-right" />

          <div className="text-center space-y-2 mb-6">
            <div className="flex items-center justify-center gap-2">
              <Scroll className="w-5 h-5 text-[#ffd700]" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                The Author's Dispatch
              </span>
            </div>
            <h3 className="font-cinzel-dec text-xl sm:text-2xl font-bold text-[#f5ebd5]">
              Subscribe for New Volumes & Archival Dispatches
            </h3>
            <p className="font-cormorant italic text-base sm:text-lg text-[#a89574] max-w-lg mx-auto">
              Receive notifications for new historical fiction chapters, castle modeling guides, and scholarly essays by Dr. Trent Dee Stephens.
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#14100c] border border-[#a8894d]/40 text-[#f5ebd5] placeholder-[#8c7b60] text-xs font-cinzel focus:outline-none focus:border-[#ffd700]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#99731d] via-[#d4af37] to-[#8f6815] text-[#140e05] font-cinzel text-xs font-bold tracking-widest uppercase hover:scale-102 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SUBSCRIBE</span>
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-center text-[#ffd700] py-2 font-cinzel text-xs font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>You have been subscribed to Dr. Stephens' author dispatches.</span>
            </div>
          )}
        </div>

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-[#a8894d]/20">
          
          {/* Brand & Credentials */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <WaxSeal size={40} label="TDS" />
              <div>
                <h4 className="font-cinzel-dec font-bold text-lg text-[#f5ebd5] tracking-wider">
                  DR. TRENT DEE STEPHENS
                </h4>
                <p className="font-cormorant italic text-sm text-[#ffd700]">
                  Professor Emeritus of Anatomy • Author of 35+ Volumes
                </p>
              </div>
            </div>
            <p className="font-cormorant text-sm text-[#a89574] max-w-sm pt-1">
              Scholarly exploration uniting vertebrate morphogenesis, theology, medieval architecture, and historical narrative.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-cinzel text-xs text-[#a89574]">
              <a href="#home" className="hover:text-[#ffd700] transition-colors">HOME</a>
              <span>•</span>
              <a href="#about" className="hover:text-[#ffd700] transition-colors">ABOUT</a>
              <span>•</span>
              <a href="#books" className="hover:text-[#ffd700] transition-colors">BOOKS</a>
              <span>•</span>
              <a href="#archive" className="hover:text-[#ffd700] transition-colors">ARCHIVE</a>
              <span>•</span>
              <a href="#contact" className="hover:text-[#ffd700] transition-colors">CONTACT</a>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={AUTHOR_BIO.officialWebsites.main}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-cinzel text-[#ffd700] hover:underline flex items-center gap-1"
              >
                <Globe className="w-3 h-3" />
                <span>trentdeestephens.com ↗</span>
              </a>
              <span className="text-[#a8894d] text-xs">•</span>
              <a
                href={AUTHOR_BIO.officialWebsites.castles}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-cinzel text-[#ffd700] hover:underline flex items-center gap-1"
              >
                <span>buildmodelcastles.com ↗</span>
              </a>
            </div>
          </div>

          {/* Return to Top Button */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-[#a8894d]/40 bg-[#16120c] text-[#ffd700] hover:bg-[#a8894d]/25 hover:border-[#ffd700] transition-all hover:scale-105 shadow-lg flex items-center gap-2 font-cinzel text-xs"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-widest">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#a8894d]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-cinzel text-[#8c7b60] gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Dr. Trent Dee Stephens, Ph.D. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 justify-center">
            <Flame className="w-3 h-3 text-[#a8894d]" />
            <span>Official Author Archive & Literary Portfolio</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
