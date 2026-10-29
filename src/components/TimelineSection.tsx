import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/authorData';
import { OrnateHeaderFlourish, WaxSeal, ManuscriptCorner } from './OrnateDividers';
import { GraduationCap, BookOpen, Feather, Shield, Filter, Castle } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return GraduationCap;
      case 'Publication': return BookOpen;
      case 'Current': return Feather;
      default: return Shield;
    }
  };

  const filteredEvents = TIMELINE_DATA.filter(item => {
    if (filter === 'all') return true;
    return item.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0907] overflow-hidden border-t border-[#a8894d]/20">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <OrnateHeaderFlourish
          title="THE SCHOLARLY CHRONICLES"
          subtitle="Milestones in Anatomy, Theology, Castle Architecture & Historical Fiction"
        />

        <p className="font-cormorant text-xl text-center text-[#ded2ba] max-w-2xl mx-auto mb-10 italic">
          "Tracing more than five decades of anatomical investigation, textbook authorship, and medieval architectural research."
        </p>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-16">
          <Filter className="w-4 h-4 text-[#a8894d] mr-1" />
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'academic', label: 'Academic & Discovery' },
            { id: 'publication', label: 'Landmark Publications' },
            { id: 'current', label: 'Current Works' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                ambienceEngine.playHarpPluck(300);
              }}
              className={`font-cinzel text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                filter === cat.id
                  ? 'bg-[#a8894d]/30 text-[#ffd700] border border-[#ffd700]/70 shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                  : 'text-[#a89574] hover:text-[#f4ecd8] border border-transparent hover:border-[#a8894d]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Spine */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#8f6815] to-[#a8894d] -translate-x-1/2 rounded-full opacity-60" />

          <div className="space-y-12">
            {filteredEvents.map((event, idx) => {
              const Icon = getCategoryIcon(event.category);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.year + event.title}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#14100c] border-2 border-[#ffd700] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center text-[#ffd700]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    } w-full`}
                  >
                    <div className="parchment-card p-6 rounded-2xl gold-border hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 relative group">
                      <ManuscriptCorner position={isEven ? 'top-left' : 'top-right'} />

                      {/* Year & Era Badge */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="font-cinzel-dec font-bold text-lg text-[#ffd700] tracking-wider">
                          Anno {event.year}
                        </span>
                        <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#a89574] px-2 py-0.5 rounded bg-[#130f0a] border border-[#a8894d]/20">
                          {event.era}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-cinzel-dec text-lg font-bold text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="font-cormorant text-base sm:text-lg text-[#ded2ba] leading-relaxed mt-2">
                        {event.description}
                      </p>

                      {/* Footnote */}
                      {event.manuscriptNote && (
                        <div
                          className={`mt-4 pt-3 border-t border-[#a8894d]/20 flex items-center gap-2 text-xs font-cormorant italic text-[#d4af37] ${
                            isEven ? 'md:justify-end' : 'md:justify-start'
                          }`}
                        >
                          <Feather className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0" />
                          <span>Archival Record: "{event.manuscriptNote}"</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full parchment-card gold-border text-xs font-cinzel text-[#ffd700]">
            <span>Continuing over sixty years of active research and writing</span>
            <WaxSeal size={24} label="TDS" />
          </div>
        </div>

      </div>
    </section>
  );
};
