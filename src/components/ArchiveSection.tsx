import React, { useState } from 'react';
import { BLOG_ARTICLES_FROM_WEBSITE, ARCHIVE_DOSSIERS } from '../data/authorData';
import { BlogArticle, ArchiveDossier } from '../types';
import { OrnateHeaderFlourish, ManuscriptCorner, WaxSeal } from './OrnateDividers';
import { BookOpen, Clock, ExternalLink, X, Globe, BookmarkCheck, ShieldCheck, Scroll, FileText, ChevronRight } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

export const ArchiveSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'essays' | 'dossiers'>('all');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedDossier, setSelectedDossier] = useState<ArchiveDossier | null>(null);

  const articles = BLOG_ARTICLES_FROM_WEBSITE;
  const dossiers = ARCHIVE_DOSSIERS;

  return (
    <section id="archive" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090705] overflow-hidden border-t border-[#a8894d]/20">
      {/* Subtle Background Illumination */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[radial-gradient(circle,rgba(114,28,36,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <OrnateHeaderFlourish
          title="THE ARCHIVE"
          subtitle="Scholarly Essays, Archival Research & Historical Dossiers"
        />

        {/* Top Description & Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto text-center sm:text-left">
          <p className="font-cormorant text-lg text-[#ded2ba] italic">
            "Direct dispatches, peer research, and historical inquiries preserved from Dr. Stephens' official manuscripts."
          </p>
          <a
            href="https://www.trentdeestephens.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14100c] border border-[#a8894d]/40 hover:border-[#ffd700] text-[#ffd700] font-cinzel text-xs uppercase tracking-wider transition-all whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>trentdeestephens.com/blog ↗</span>
          </a>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Archival Records', icon: Scroll },
            { id: 'essays', label: 'Essays from trentdeestephens.com', icon: FileText },
            { id: 'dossiers', label: 'Archival Research Dossiers', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as typeof activeTab);
                  ambienceEngine.playHarpPluck(300);
                }}
                className={`font-cinzel text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#a8894d]/30 text-[#ffd700] border border-[#ffd700]/60 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                    : 'text-[#a8894d] hover:text-[#f4ecd8] border border-[#a8894d]/20 bg-[#14100c]/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Section 1: Scholarly Essays from trentdeestephens.com/blog */}
        {(activeTab === 'all' || activeTab === 'essays') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#a8894d]/25">
              <FileText className="w-5 h-5 text-[#ffd700]" />
              <h3 className="font-cinzel-dec font-bold text-xl text-[#f5ebd5]">
                Scholarly Essays & Dispatches from trentdeestephens.com
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group relative parchment-card rounded-2xl overflow-hidden gold-border hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-all duration-300 flex flex-col justify-between"
                >
                  <ManuscriptCorner position="top-right" />

                  {/* Header Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-black/60 border-b border-[#a8894d]/25">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-black/40 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d0b09]/90 border border-[#a8894d]/50 text-[#ffd700] text-[10px] font-cinzel font-bold">
                      <Globe className="w-3 h-3" />
                      <span>{article.category}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-cinzel text-[#d6c7a7]">
                      <Clock className="w-3 h-3 text-[#ffd700]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Body Preview */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#a8894d] block mb-1">
                        {article.date}
                      </span>
                      
                      <h4 className="font-cinzel-dec text-lg font-bold text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="font-cormorant italic text-sm text-[#d4af37] mt-1 line-clamp-2">
                        {article.subtitle}
                      </p>

                      <p className="font-cormorant text-base text-[#ded2ba] leading-relaxed mt-2.5 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="pt-3 border-t border-[#a8894d]/15">
                      <div className="space-y-1 mb-4">
                        {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-cormorant text-[#a89574]">
                            <BookmarkCheck className="w-3.5 h-3.5 text-[#ffd700] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{takeaway}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            ambienceEngine.playHarpPluck(360);
                            setSelectedArticle(article);
                          }}
                          className="flex-1 py-2.5 rounded-xl border border-[#a8894d]/50 bg-[#17120a] hover:bg-[#a8894d]/25 text-[#ffd700] font-cinzel text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read Essay</span>
                        </button>

                        <a
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-[#a8894d]/40 bg-[#17120a] text-[#ffd700] hover:bg-[#a8894d]/20"
                          title="Open original blog entry"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Archival Research Dossiers */}
        {(activeTab === 'all' || activeTab === 'dossiers') && (
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#a8894d]/25">
              <ShieldCheck className="w-5 h-5 text-[#ffd700]" />
              <h3 className="font-cinzel-dec font-bold text-xl text-[#f5ebd5]">
                Archival Research Dossiers & Historical Notes
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dossiers.map((dossier) => (
                <div
                  key={dossier.id}
                  className="group relative parchment-card rounded-2xl p-6 gold-border hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <ManuscriptCorner position="top-left" />
                  <ManuscriptCorner position="bottom-right" />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-[10px] font-bold uppercase tracking-widest text-[#ffd700] bg-[#1a140c] px-3 py-1 rounded-full border border-[#a8894d]/40">
                        {dossier.category}
                      </span>
                    </div>

                    <h4 className="font-cinzel-dec text-xl font-bold text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors mt-2">
                      {dossier.title}
                    </h4>
                    
                    <p className="font-cinzel text-xs text-[#a8894d] font-semibold">
                      {dossier.subtitle}
                    </p>

                    <p className="font-cormorant text-base text-[#ded2ba] leading-relaxed">
                      {dossier.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#a8894d]/20 space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#14100c] border border-[#a8894d]/25">
                      <span className="font-cinzel text-[10px] text-[#ffd700] uppercase tracking-wider font-bold block mb-1.5">
                        Archival Context & Findings:
                      </span>
                      <p className="font-cormorant text-sm text-[#c7baa0] italic">
                        {dossier.historicalContext}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-cinzel text-[10px] text-[#a8894d] uppercase tracking-wider block">
                        Related Volumes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dossier.relatedWorks.map((work) => (
                          <span
                            key={work}
                            className="font-cinzel text-[10px] px-2.5 py-0.5 rounded bg-[#1c150e] border border-[#a8894d]/30 text-[#f5ebd5]"
                          >
                            {work}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        ambienceEngine.playHarpPluck(330);
                        setSelectedDossier(dossier);
                      }}
                      className="w-full py-2.5 rounded-xl border border-[#a8894d]/40 bg-[#16120c] hover:bg-[#a8894d]/20 text-[#ffd700] font-cinzel text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Examine Research Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="parchment-card p-6 sm:p-8 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto gold-border shadow-2xl relative">
            <ManuscriptCorner position="top-left" />
            <ManuscriptCorner position="top-right" />
            <ManuscriptCorner position="bottom-left" />
            <ManuscriptCorner position="bottom-right" />

            <div className="flex items-center justify-between border-b border-[#a8894d]/30 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <WaxSeal size={42} label="TDS" />
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#d4af37]">
                    {selectedArticle.category} • {selectedArticle.date}
                  </span>
                  <h3 className="font-cinzel-dec font-bold text-lg sm:text-xl text-[#fff5de]">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-lg border border-[#a8894d]/30 text-[#ffd700] hover:bg-[#a8894d]/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subtitle & Read Time */}
            <div className="p-4 rounded-xl bg-[#14100c] border border-[#a8894d]/30 mb-6">
              <p className="font-cormorant italic text-lg text-[#ffd700]">
                "{selectedArticle.subtitle}"
              </p>
              <p className="font-cinzel text-[10px] text-[#a89574] mt-1">
                Authored by Dr. Trent Dee Stephens, Ph.D. • {selectedArticle.readTime}
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-4 font-cormorant text-lg text-[#f5ebd5] leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-8 p-5 rounded-2xl bg-[#14100c] border border-[#a8894d]/40 space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-[#ffd700] uppercase tracking-widest flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4" /> Core Scholarly Conclusions:
              </h4>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base font-cormorant text-[#ded2ba]">
                    <span className="text-[#ffd700] font-bold">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Action Links */}
            <div className="mt-8 pt-4 border-t border-[#a8894d]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-cinzel text-xs text-[#a89574]">
                Archived from {selectedArticle.externalUrl}
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={selectedArticle.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#ffd700] text-[#140e05] font-cinzel text-xs font-bold uppercase transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Read on trentdeestephens.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Dossier Reader Modal */}
      {selectedDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="parchment-card p-6 sm:p-8 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto gold-border shadow-2xl relative">
            <ManuscriptCorner position="top-left" />
            <ManuscriptCorner position="top-right" />
            <ManuscriptCorner position="bottom-left" />
            <ManuscriptCorner position="bottom-right" />

            <div className="flex items-center justify-between border-b border-[#a8894d]/30 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <WaxSeal size={42} label="ARCHIVE" />
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#d4af37]">
                    Research Dossier • {selectedDossier.category}
                  </span>
                  <h3 className="font-cinzel-dec font-bold text-lg sm:text-xl text-[#fff5de]">
                    {selectedDossier.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedDossier(null)}
                className="p-2 rounded-lg border border-[#a8894d]/30 text-[#ffd700] hover:bg-[#a8894d]/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#14100c] border border-[#a8894d]/30 mb-6">
              <p className="font-cinzel text-xs text-[#ffd700]">
                {selectedDossier.subtitle}
              </p>
              <p className="font-cormorant text-base text-[#ded2ba] mt-2 leading-relaxed">
                {selectedDossier.historicalContext}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-cinzel text-xs font-bold text-[#ffd700] uppercase tracking-widest">
                Archival Research Notes & Findings:
              </h4>
              <div className="space-y-2.5">
                {selectedDossier.researchNotes.map((note, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#14100c] border border-[#a8894d]/20 flex items-start gap-3">
                    <span className="font-cinzel text-xs text-[#ffd700] font-bold mt-0.5">[{idx + 1}]</span>
                    <p className="font-cormorant text-base text-[#ded2ba] leading-relaxed">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#a8894d]/25 flex items-center justify-between">
              <span className="font-cinzel text-xs text-[#a89574]">
                Stephens Archival Collection
              </span>
              <button
                onClick={() => setSelectedDossier(null)}
                className="px-5 py-2 rounded-lg border border-[#a8894d] text-[#ffd700] font-cinzel text-xs font-bold uppercase hover:bg-[#a8894d]/20"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
