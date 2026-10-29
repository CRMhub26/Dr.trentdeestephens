import React, { useState } from 'react';
import { MEDIA_ITEMS } from '../data/authorData';
import { MediaItem } from '../types';
import { OrnateHeaderFlourish, ManuscriptCorner, WaxSeal } from './OrnateDividers';
import { Headphones, FileText, Mic, Play, Clock, X, ExternalLink, Video } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

export const PressSection: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'Podcast': return Headphones;
      case 'Interview': return Mic;
      case 'Keynote': return Video;
      default: return FileText;
    }
  };

  return (
    <section id="press" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0907] overflow-hidden border-t border-[#a8894d]/20">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <OrnateHeaderFlourish
          title="PRESS & APPEARANCES"
          subtitle="Academic Lectures, Scholarly Podcasts & Literary Features"
        />

        <p className="font-cormorant text-xl text-center text-[#ded2ba] max-w-2xl mx-auto mb-12 italic">
          "Keynote lectures, podcast dialogues, and media features exploring embryological science, sacred history, and medieval craftsmanship."
        </p>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_ITEMS.map((item) => {
            const Icon = getMediaIcon(item.type);
            return (
              <div
                key={item.id}
                className="group relative parchment-card rounded-2xl overflow-hidden gold-border hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)] transition-all duration-300 flex flex-col justify-between"
              >
                <ManuscriptCorner position="top-right" />

                {/* Media Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-black/60 border-b border-[#a8894d]/25">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-black/40 to-transparent pointer-events-none" />

                  {/* Top Type Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0b09]/90 border border-[#a8894d]/50 text-[#ffd700] text-[10px] font-cinzel font-bold">
                    <Icon className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Play Action Button on Image */}
                  <button
                    onClick={() => {
                      ambienceEngine.playHarpPluck(360);
                      setActiveMedia(item);
                    }}
                    className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                    aria-label={`Examine ${item.title}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#ffd700] text-[#140e05] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.7)] group-hover:bg-[#fff2bf]">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-cinzel text-[#a8894d] mb-1">
                      <span>{item.publisher}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.readTimeOrDuration}</span>
                      </div>
                    </div>

                    <h3 className="font-cinzel-dec text-base font-bold text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-cormorant text-sm text-[#ded2ba] leading-relaxed mt-2 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      ambienceEngine.playHarpPluck(330);
                      setActiveMedia(item);
                    }}
                    className="w-full py-2.5 rounded-lg border border-[#a8894d]/40 bg-[#16110b] hover:bg-[#a8894d]/25 text-[#ffd700] font-cinzel text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{item.linkText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Media Press Inquiries Callout */}
        <div className="mt-12 p-6 rounded-2xl parchment-card gold-border text-center max-w-2xl mx-auto">
          <h4 className="font-cinzel text-sm font-bold text-[#ffd700] uppercase tracking-wider mb-1">
            Media, Keynote & Podcast Inquiries
          </h4>
          <p className="font-cormorant text-base text-[#ded2ba]">
            For keynote speaking, university seminars, podcast interviews, and academic inquiries with Dr. Trent Dee Stephens, please use the archive dispatch form below.
          </p>
          <a
            href="#contact"
            onClick={() => ambienceEngine.playHarpPluck(300)}
            className="inline-block mt-3 font-cinzel text-xs font-bold text-[#ffd700] hover:underline"
          >
            Submit Media Inquiry →
          </a>
        </div>

      </div>

      {/* Interactive Media Dispatch Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="parchment-card p-6 sm:p-8 rounded-3xl max-w-2xl w-full gold-border shadow-2xl relative">
            <ManuscriptCorner position="top-left" />
            <ManuscriptCorner position="top-right" />
            <ManuscriptCorner position="bottom-left" />
            <ManuscriptCorner position="bottom-right" />

            <div className="flex items-center justify-between border-b border-[#a8894d]/30 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <WaxSeal size={36} label="TDS" />
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#d4af37]">
                    {activeMedia.type} Feature
                  </span>
                  <h3 className="font-cinzel-dec font-bold text-base sm:text-lg text-[#fff5de]">
                    {activeMedia.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveMedia(null)}
                className="p-1.5 rounded-lg border border-[#a8894d]/30 text-[#ffd700] hover:bg-[#a8894d]/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Simulation Header */}
            <div className="rounded-xl overflow-hidden bg-black/80 border border-[#a8894d]/40 mb-5 relative aspect-video flex flex-col items-center justify-center text-center p-6">
              <img
                src={activeMedia.image}
                alt={activeMedia.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="relative z-10 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#ffd700] text-[#140e05] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.8)]">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="font-cinzel text-xs text-[#ffd700] uppercase tracking-widest">
                  {activeMedia.type} Archive • {activeMedia.readTimeOrDuration}
                </p>
                <p className="font-cormorant italic text-sm text-[#ded2ba]">
                  Published by {activeMedia.publisher}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-cormorant text-base sm:text-lg text-[#f5ebd5] leading-relaxed">
                {activeMedia.summary}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#a8894d]/20">
                <span className="font-cinzel text-xs text-[#a89574]">
                  Official Archive Record
                </span>
                <a
                  href={activeMedia.url || "https://www.trentdeestephens.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#d4af37] text-[#140e05] font-cinzel text-xs font-bold uppercase hover:bg-[#ffd700] transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Portal</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
