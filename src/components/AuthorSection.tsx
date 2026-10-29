import React, { useState } from 'react';
import authorPortrait from '../assets/images/regenerated_image_1787341843860.png';
import { AUTHOR_BIO } from '../data/authorData';
import { OrnateHeaderFlourish, ManuscriptCorner } from './OrnateDividers';
import { GraduationCap, BookOpen, Castle, ExternalLink, Shield } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

export const AuthorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biography' | 'research' | 'castles'>('biography');

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0907] overflow-hidden border-t border-[#a8894d]/20">
      {/* Background Subtle Illumination */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(114,28,36,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <OrnateHeaderFlourish
          title="THE AUTHOR"
          subtitle="Scholarship, Anatomical Science & Sixty Years of Medieval Research"
        />

        {/* Main Grid: Ornate Frame Portrait + Biography Parchment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#3b2d16] via-[#20170c] to-[#0f0b06] border-2 border-[#c5a059] shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-sm sm:max-w-md w-full">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ffd700]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ffd700]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ffd700]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ffd700]" />

              <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/60 bg-[#090807]">
                <img
                  src={authorPortrait}
                  alt="Dr. Trent Dee Stephens - Author and Professor Emeritus"
                  className="w-full h-96 sm:h-[420px] object-cover object-top filter contrast-105 saturate-95"
                  loading="lazy"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Brass Plaque */}
                <div className="absolute bottom-3 left-4 right-4 p-3 rounded-lg bg-[#14100c]/95 backdrop-blur-md border border-[#c5a059]/70 text-center shadow-lg">
                  <p className="font-cinzel-dec font-bold text-sm sm:text-base text-[#ffd700] tracking-wider">
                    DR. TRENT DEE STEPHENS
                  </p>
                </div>
              </div>
            </div>

            {/* Official Web Portals Card */}
            <div className="w-full max-w-sm sm:max-w-md mt-6 p-4 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-xs font-cinzel space-y-2">
              <span className="text-[#a8894d] uppercase tracking-[0.2em] block text-[11px]">
                Official Web Portals:
              </span>
              <div className="flex flex-col gap-1.5 pt-1">
                <a
                  href={AUTHOR_BIO.officialWebsites.main}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f5ebd5] hover:text-[#ffd700] flex items-center justify-between group"
                >
                  <span>trentdeestephens.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a8894d] group-hover:text-[#ffd700]" />
                </a>
                <a
                  href={AUTHOR_BIO.officialWebsites.castles}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f5ebd5] hover:text-[#ffd700] flex items-center justify-between group"
                >
                  <span>buildmodelcastles.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a8894d] group-hover:text-[#ffd700]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Scholarly Chronicle & Parchment Bio */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#a8894d]/30 pb-1">
              <button
                onClick={() => {
                  setActiveTab('biography');
                  ambienceEngine.playHarpPluck(260);
                }}
                className={`font-cinzel text-xs sm:text-sm font-semibold tracking-wider px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'biography'
                    ? 'bg-[#a8894d]/20 text-[#ffd700] border-t-2 border-x-2 border-[#ffd700]/70'
                    : 'text-[#a8894d] hover:text-[#f5ebd5]'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                Scholarly Biography
              </button>

              <button
                onClick={() => {
                  setActiveTab('research');
                  ambienceEngine.playHarpPluck(310);
                }}
                className={`font-cinzel text-xs sm:text-sm font-semibold tracking-wider px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'research'
                    ? 'bg-[#a8894d]/20 text-[#ffd700] border-t-2 border-x-2 border-[#ffd700]/70'
                    : 'text-[#a8894d] hover:text-[#f5ebd5]'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-[#d4af37]" />
                Academic Appointments
              </button>

              <button
                onClick={() => {
                  setActiveTab('castles');
                  ambienceEngine.playHarpPluck(360);
                }}
                className={`font-cinzel text-xs sm:text-sm font-semibold tracking-wider px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 ${
                  activeTab === 'castles'
                    ? 'bg-[#a8894d]/20 text-[#ffd700] border-t-2 border-x-2 border-[#ffd700]/70'
                    : 'text-[#a8894d] hover:text-[#f5ebd5]'
                }`}
              >
                <Castle className="w-4 h-4 text-[#d4af37]" />
                Medieval Architecture (60 Yrs)
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="parchment-card p-6 sm:p-8 rounded-2xl relative gold-border">
              <ManuscriptCorner position="top-right" />
              <ManuscriptCorner position="bottom-left" />

              {activeTab === 'biography' && (
                <div className="space-y-4">
                  <p className="font-cormorant text-lg sm:text-xl text-[#f5ebd5] leading-relaxed drop-cap">
                    {AUTHOR_BIO.bioParagraphs[0]}
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl text-[#dcd0b7] leading-relaxed">
                    {AUTHOR_BIO.bioParagraphs[1]}
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl text-[#dcd0b7] leading-relaxed">
                    {AUTHOR_BIO.bioParagraphs[2]}
                  </p>
                </div>
              )}

              {activeTab === 'research' && (
                <div className="space-y-4">
                  <p className="font-cormorant text-lg sm:text-xl text-[#f5ebd5] leading-relaxed drop-cap">
                    Dr. Trent Dee Stephens, Ph.D., has spent more than forty years advancing biological and anatomical education, authoring landmark medical textbooks and mentoring generations of physicians, dentists, and biomedical scientists.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg bg-[#14100c] border border-[#a8894d]/30 flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-cinzel text-xs font-bold text-[#f5ebd5]">Ph.D. in Anatomy (Penn)</div>
                        <div className="font-cormorant text-sm text-[#a89574]">University of Pennsylvania (1977); B.S. & M.S. Zoology & Microbiology, BYU (1973, 1974).</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#14100c] border border-[#a8894d]/30 flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-cinzel text-xs font-bold text-[#f5ebd5]">Emeritus Professor (ISU)</div>
                        <div className="font-cormorant text-sm text-[#a89574]">Idaho State University Faculty since 1981; ISU Distinguished Researcher and Master Teacher.</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#14100c] border border-[#a8894d]/30 flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-cinzel text-xs font-bold text-[#f5ebd5]">McGraw-Hill Anatomy & Physiology</div>
                        <div className="font-cormorant text-sm text-[#a89574]">Co-author of 13 editions of the globally recognized Anatomy & Physiology textbook and the Atlas of Human Embryology.</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#14100c] border border-[#a8894d]/30 flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-cinzel text-xs font-bold text-[#f5ebd5]">Clinical Professor (Creighton)</div>
                        <div className="font-cormorant text-sm text-[#a89574]">Department of Oral Biology, Creighton University School of Dentistry.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'castles' && (
                <div className="space-y-4">
                  <p className="font-cormorant text-lg sm:text-xl text-[#f5ebd5] leading-relaxed drop-cap">
                    For over sixty years, Dr. Stephens has pursued the study, architectural drafting, and scale engineering of authentic medieval stone fortifications and walled towns.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[#14100c] border border-[#a8894d]/30 space-y-3">
                    <h4 className="font-cinzel text-xs font-bold text-[#ffd700] uppercase tracking-wider">
                      BuildModelCastles.com & The Medieval Architectural Canon
                    </h4>
                    <p className="font-cormorant text-base sm:text-lg text-[#ded2ba] leading-relaxed">
                      Through <strong className="text-[#ffd700]">The Castle Builder's Handbook</strong> and <strong className="text-[#ffd700]">The Medieval Town Builder's Handbook</strong>, Dr. Stephens provides comprehensive structural analysis of Norman keeps, Edwardian concentric castles (Caernarfon, Beaumaris, Harlech), machicolations, arrow slits, and timber-framed guildhalls.
                    </p>
                    <p className="font-cormorant text-base sm:text-lg text-[#ded2ba] leading-relaxed">
                      This profound six-decade grasp of material medieval reality, chivalric warfare, and 13th-century English royal court history forms the authentic foundation for his historical fiction novel, <strong className="text-[#ffd700]">The Last Tournament: Book 2 of: William de Braose Squire of Winchester</strong> (2026).
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Quote */}
              <div className="mt-6 pt-4 border-t border-[#a8894d]/20 flex items-center justify-between text-xs font-cinzel text-[#a89574]">
                <span>"Truth reveals itself in breathtaking unity."</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
