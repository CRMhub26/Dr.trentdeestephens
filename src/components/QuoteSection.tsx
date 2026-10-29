import React from 'react';
import { AUTHOR_BIO } from '../data/authorData';
import { WaxSeal } from './OrnateDividers';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070504] border-y border-[#c59b27]/30">
      {/* Cinematic Background Image with Dark Vignette */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center filter contrast-125 brightness-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2000')`
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070504] via-transparent to-[#070504] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        {/* Floating Author Seal */}
        <div className="flex justify-center">
          <WaxSeal size={64} label="TDS" />
        </div>

        {/* The Quotation */}
        <blockquote className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic text-[#fff6df] leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
          "{AUTHOR_BIO.longQuote}"
        </blockquote>

        {/* Attribution Flourish */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <p className="font-cinzel text-sm sm:text-base font-bold text-[#ffd700] tracking-[0.2em] uppercase">
            {AUTHOR_BIO.name}
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        <p className="font-cinzel text-xs text-[#a89574] uppercase tracking-widest">
          {AUTHOR_BIO.titles}
        </p>

      </div>
    </section>
  );
};
