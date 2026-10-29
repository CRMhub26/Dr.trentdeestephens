import React from 'react';
import { Book } from '../types';
import { BOOKS_DATA, AUTHOR_BIO } from '../data/authorData';
import { OrnateHeaderFlourish, WaxSeal, ManuscriptCorner } from './OrnateDividers';
import { BookOpen, ShoppingBag, ExternalLink, ShieldCheck } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

interface FeaturedBookSectionProps {
  onSelectBook: (book: Book) => void;
}

export const FeaturedBookSection: React.FC<FeaturedBookSectionProps> = ({ onSelectBook }) => {
  const featuredBook = BOOKS_DATA.find(b => b.featured) || BOOKS_DATA[0];

  const amazonBuyLink = featuredBook.buyLinks.find(l => l.store.includes('Amazon'))?.url || 
    'https://www.amazon.com/Last-Tournament-William-Braose-Winchest/dp/196880773X/ref=sr_1_1?s=books&sr=1-1';

  return (
    <section id="featured-book" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090705] overflow-hidden border-t border-[#a8894d]/20">
      {/* Subtle illumination halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <OrnateHeaderFlourish
          title="FEATURED WORK"
          subtitle="Medieval Historical Fiction Chronicle"
        />

        {/* Featured Showcase Box */}
        <div className="relative parchment-card rounded-3xl p-6 sm:p-10 lg:p-12 gold-border shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
          <ManuscriptCorner position="top-left" />
          <ManuscriptCorner position="top-right" />
          <ManuscriptCorner position="bottom-left" />
          <ManuscriptCorner position="bottom-right" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: 3D Book Presentation */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group cursor-pointer" onClick={() => onSelectBook(featuredBook)}>
                {/* Glow Backdrop */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#d4af37]/20 via-[#ffd700]/30 to-[#8f6815]/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                
                {/* 3D Gilded Book Tome */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#c5a059] shadow-[0_25px_50px_rgba(0,0,0,0.95)] bg-[#140e06] w-64 sm:w-80 group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={featuredBook.coverImage}
                    alt={featuredBook.title}
                    className="w-full h-96 sm:h-[460px] object-cover"
                  />

                  {/* Medieval Spine Band Overlay */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/80 via-black/40 to-transparent border-r border-[#c5a059]/40 pointer-events-none" />
                  
                  {/* Top Release Ribbon */}
                  <div className="absolute top-0 right-6 w-9 h-20 bg-gradient-to-b from-[#631b22] to-[#420e14] border-b-2 border-x border-[#ffd700] shadow-xl flex items-end justify-center pb-1.5">
                    <span className="font-cinzel text-[10px] text-[#ffd700] font-black tracking-wider uppercase">2026</span>
                  </div>

                  {/* Bottom Tome Label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090807] via-[#090807]/95 to-transparent p-4 text-center">
                    <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#d4af37] uppercase font-bold block">
                      {featuredBook.subtitle}
                    </span>
                    <span className="font-cinzel-dec text-lg text-[#fff6df] font-black mt-0.5 block">
                      {featuredBook.title}
                    </span>
                  </div>
                </div>

                {/* Wax Seal */}
                <div className="absolute -bottom-4 -right-4 z-20">
                  <WaxSeal size={60} label="TDS" onClick={() => onSelectBook(featuredBook)} />
                </div>
              </div>

              {/* Verified Metadata */}
              <div className="flex items-center gap-5 mt-8 text-xs font-cinzel text-[#d6c7a7]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#ffd700]" />
                  <span>{featuredBook.pages} Pages</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <span>ISBN: <strong className="text-[#ffd700]">{featuredBook.isbn}</strong></span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <span>{featuredBook.publicationYear}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Manuscript Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-cinzel bg-[#631b22] border border-[#ffd700]/60 text-[#ffd700] uppercase tracking-wider font-bold">
                    NEW 2026 RELEASE
                  </span>
                </div>

                <h3 className="font-cinzel-dec text-3xl sm:text-4xl lg:text-5xl font-black text-[#fff5de] tracking-wide mt-1 leading-tight">
                  {featuredBook.title}
                </h3>
                
                <p className="font-cinzel text-sm sm:text-base text-[#d4af37] font-semibold tracking-wider mt-1.5">
                  {featuredBook.subtitle}
                </p>
                <p className="font-cinzel text-xs text-[#a89574] mt-1 flex flex-wrap items-center gap-2">
                  <span>By <strong className="text-[#fff5de]">{AUTHOR_BIO.name}</strong></span>
                  <span>•</span>
                  <span>Published by <strong className="text-[#f5ebd5]">{featuredBook.publisher}</strong></span>
                </p>
              </div>

              {/* Book Synopsis */}
              <p className="font-cormorant text-lg sm:text-xl text-[#ded2ba] leading-relaxed">
                {featuredBook.synopsis}
              </p>

              {/* Themes & Medieval Elements */}
              <div>
                <h4 className="font-cinzel text-xs font-bold text-[#ffd700] uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffd700]" /> Historical Setting & Archival Research:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredBook.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-3 py-1 rounded-lg text-xs font-cinzel bg-[#14100c] border border-[#a8894d]/30 text-[#e8dcbf]"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href={amazonBuyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => ambienceEngine.playHarpPluck(392)}
                  id="btn-buy-amazon-featured"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#99731d] via-[#d4af37] to-[#8f6815] text-[#140e05] font-cinzel text-xs font-bold tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)] hover:scale-102 transition-all flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 text-[#140e05]" />
                  <span>ORDER ON AMAZON</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#140e05]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
