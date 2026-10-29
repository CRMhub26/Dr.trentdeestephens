import React from 'react';
import { MedievalDivider, ManuscriptCorner } from './OrnateDividers';
import { ambienceEngine } from '../utils/audioAmbience';
import { BookOpen, User, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090807]"
    >
      {/* Cinematic Background with Atmospheric Medieval Library Image & Vignette */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842229451-2487e6005b63?auto=format&fit=crop&q=80&w=2000')`,
          filter: 'brightness(0.24) contrast(1.15)'
        }}
      />

      {/* Atmospheric Overlays: Dark Charcoal Vignette & Subtle Warmth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#090807]/95 via-[#0d0b09]/75 to-[#090807] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,rgba(9,8,7,0.9)_80%)] pointer-events-none" />

      {/* Subtle Bottom Gold Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Parchment Plaque */}
        <div className="relative p-8 sm:p-12 parchment-card rounded-2xl max-w-3xl w-full gold-border shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          <ManuscriptCorner position="top-left" />
          <ManuscriptCorner position="top-right" />
          <ManuscriptCorner position="bottom-left" />
          <ManuscriptCorner position="bottom-right" />

          {/* Sub-header badge */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#a8894d]" />
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#d4af37] uppercase font-semibold">
              The Official Archive & Portfolio
            </p>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#a8894d]" />
          </div>

          {/* Main Author Heading */}
          <h1 className="font-cinzel-dec text-3xl sm:text-5xl md:text-6xl font-black tracking-wider text-[#fff7e6] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] my-2">
            DR. TRENT DEE STEPHENS
          </h1>

          <MedievalDivider className="my-4" variant="gold" />

          {/* Subtitle */}
          <h2 className="font-cinzel text-base sm:text-lg md:text-xl text-[#d4af37] font-semibold tracking-[0.15em] mb-5 uppercase">
            Author • Scholar • Keeper of Ancient Lore
          </h2>

          {/* Core Author Narrative */}
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#e5d8be] leading-relaxed italic max-w-2xl mx-auto">
            "When science observes the miracle of biological form and history unveils the sacred covenants of time, truth reveals itself in breathtaking unity."
          </p>

          {/* Verified Academic & Literary Credentials */}
          <div className="mt-6 pt-5 border-t border-[#a8894d]/25 text-xs font-cinzel text-[#a89574] tracking-wider flex flex-wrap justify-center items-center gap-y-1 gap-x-3">
            <span>Emeritus Professor of Anatomy & Embryology</span>
            <span>•</span>
            <span>Author of 35+ Published Volumes</span>
            <span>•</span>
            <span>Architectural Modeler</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#books"
              onClick={() => ambienceEngine.playHarpPluck(392)}
              id="cta-explore-archive"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#99731d] via-[#d4af37] to-[#8f6815] text-[#140e05] font-cinzel text-xs font-bold tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.6)] hover:scale-102 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#140e05]" />
              <span>EXPLORE THE ARCHIVE</span>
            </a>

            <a
              href="#about"
              onClick={() => ambienceEngine.playHarpPluck(330)}
              id="cta-discover-author"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#c59b27] bg-[#14100c]/80 text-[#f5ebd5] hover:text-[#ffd700] hover:bg-[#c59b27]/15 font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-[#d4af37]" />
              <span>DISCOVER THE AUTHOR</span>
            </a>
          </div>

        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to Author Section"
          className="mt-8 text-[#a8894d]/70 hover:text-[#ffd700] transition-colors flex flex-col items-center gap-1"
        >
          <span className="font-cinzel text-[10px] uppercase tracking-[0.25em]">Enter Scriptorium</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
