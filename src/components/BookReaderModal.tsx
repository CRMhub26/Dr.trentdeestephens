import React, { useState } from 'react';
import { Book } from '../types';
import { X, BookOpen, ChevronLeft, ChevronRight, ShoppingBag, ExternalLink, Bookmark, Feather, ShieldCheck } from 'lucide-react';
import { WaxSeal, ManuscriptCorner } from './OrnateDividers';
import { ambienceEngine } from '../utils/audioAmbience';

interface BookReaderModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({ book, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'read' | 'praise' | 'purchase'>('overview');
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  if (!book) return null;

  const handleNextChapter = () => {
    if (currentChapterIdx < book.chapters.length - 1) {
      setCurrentChapterIdx(prev => prev + 1);
      ambienceEngine.playHarpPluck(330);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIdx > 0) {
      setCurrentChapterIdx(prev => prev - 1);
      ambienceEngine.playHarpPluck(280);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#14100c] border-2 border-[#a8894d] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden my-auto">
        
        {/* Header Ribbon */}
        <div className="bg-[#1c160e] border-b border-[#a8894d]/30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <WaxSeal size={36} label="TDS" />
            <div>
              <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#d4af37] block">
                The Stephens Literary Collection
              </span>
              <h3 className="font-cinzel-dec font-bold text-base sm:text-xl text-[#fff5de]">
                {book.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              ambienceEngine.playHarpPluck(220);
              onClose();
            }}
            className="p-2 rounded-lg border border-[#a8894d]/30 text-[#ffd700] hover:bg-[#a8894d]/20 transition-colors"
            aria-label="Close Tome"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#0f0c08] border-b border-[#a8894d]/20 px-6 flex gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Volume Overview', icon: BookOpen },
            { id: 'read', label: 'Excerpts & Chapters', icon: Feather },
            { id: 'praise', label: 'Scholarly Reviews', icon: ShieldCheck },
            { id: 'purchase', label: 'Acquisition & Catalog', icon: ShoppingBag }
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
                className={`font-cinzel text-xs font-bold tracking-wider py-3 px-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-[#ffd700] text-[#ffd700] bg-[#a8894d]/10'
                    : 'border-transparent text-[#a89574] hover:text-[#f4ecd8]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#a8894d] w-48 sm:w-56">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="font-cinzel text-[10px] text-[#ffd700] bg-[#14100c]/90 px-2 py-0.5 rounded border border-[#a8894d]/40">
                      {book.genre}
                    </span>
                  </div>
                </div>

                <div className="w-full mt-4 space-y-2 text-xs font-cinzel text-[#a89574] bg-[#1a140d] p-3 rounded-lg border border-[#a8894d]/20">
                  <div className="flex justify-between">
                    <span>Publication:</span>
                    <strong className="text-[#f5ebd5]">{book.publicationYear}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Page Count:</span>
                    <strong className="text-[#f5ebd5]">{book.pages} Pages</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>ISBN Registry:</span>
                    <strong className="text-[#f5ebd5]">{book.isbn}</strong>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                    {book.subtitle || "The Stephens Literary Collection"}
                  </span>
                  <h4 className="font-cinzel-dec text-2xl sm:text-3xl font-bold text-[#ffd700] mt-1">
                    {book.title}
                  </h4>
                  {book.coAuthors && (
                    <p className="font-cinzel text-xs text-[#ffd700] font-semibold mt-1">
                      Co-authored with {book.coAuthors}
                    </p>
                  )}
                  {book.publisher && (
                    <p className="font-cinzel text-[11px] text-[#a89574] mt-0.5">
                      Publisher: {book.publisher}
                    </p>
                  )}
                  <p className="font-cormorant italic text-lg text-[#d6c7a7] mt-1">
                    "{book.tagline}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1a140d] border border-[#a8894d]/25 space-y-2">
                  <h5 className="font-cinzel text-xs font-bold text-[#ffd700] uppercase tracking-wider">
                    Synopsis & Archival Context
                  </h5>
                  <p className="font-cormorant text-base sm:text-lg text-[#f4ecd8] leading-relaxed">
                    {book.synopsis}
                  </p>
                </div>

                <div>
                  <h5 className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                    Key Themes & Research Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {book.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-2.5 py-1 rounded-full text-xs font-cinzel bg-[#a8894d]/15 border border-[#a8894d]/40 text-[#ffd700]"
                      >
                        ◆ {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('read')}
                    className="px-5 py-2.5 rounded bg-gradient-to-r from-[#99731d] via-[#d4af37] to-[#8f6815] text-[#140e05] font-cinzel text-xs font-bold tracking-widest uppercase hover:scale-102 transition-transform"
                  >
                    Read Chapter Excerpt
                  </button>
                  <button
                    onClick={() => setActiveTab('purchase')}
                    className="px-5 py-2.5 rounded border border-[#a8894d] text-[#ffd700] font-cinzel text-xs font-bold tracking-widest uppercase hover:bg-[#a8894d]/20 transition-colors"
                  >
                    Acquisition & Catalogue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: READ EXCERPTS */}
          {activeTab === 'read' && (
            <div className="space-y-4">
              {/* Reading Controls */}
              <div className="flex items-center justify-between border-b border-[#a8894d]/20 pb-3">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-cinzel text-xs font-bold text-[#ffd700]">
                    {book.chapters[currentChapterIdx]?.title || "Chapter Excerpt"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                    className="text-xs font-cinzel px-2.5 py-1 rounded border border-[#a8894d]/30 text-[#d4af37] hover:bg-[#a8894d]/20"
                  >
                    Text Size: {fontSize === 'normal' ? 'Standard' : 'Magnified'}
                  </button>
                </div>
              </div>

              {/* Parchment Styled Reader Body */}
              <div className="parchment-light p-6 sm:p-10 rounded-xl relative shadow-2xl">
                <ManuscriptCorner position="top-left" />
                <ManuscriptCorner position="top-right" />
                <ManuscriptCorner position="bottom-left" />
                <ManuscriptCorner position="bottom-right" />

                <h4 className="font-cinzel text-center text-lg sm:text-xl font-bold text-[#3a2512] mb-1">
                  {book.chapters[currentChapterIdx]?.title}
                </h4>
                <p className="font-cinzel text-center text-[11px] tracking-[0.2em] text-[#7a5528] uppercase mb-6">
                  {book.title} — Manuscript Excerpt
                </p>

                <div className={`font-cormorant ${fontSize === 'normal' ? 'text-lg sm:text-xl leading-relaxed' : 'text-xl sm:text-2xl leading-loose'} text-[#26180c] space-y-4`}>
                  <p className="drop-cap">
                    {book.chapters[currentChapterIdx]?.preview}
                  </p>
                  <p>
                    {book.excerpt}
                  </p>
                </div>

                {/* Chapter Navigation inside Reader */}
                {book.chapters.length > 1 && (
                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#a88243]/40">
                    <button
                      onClick={handlePrevChapter}
                      disabled={currentChapterIdx === 0}
                      className={`flex items-center gap-1 font-cinzel text-xs font-bold px-3 py-1.5 rounded border border-[#a88243] ${
                        currentChapterIdx === 0 ? 'opacity-30 cursor-not-allowed text-[#7a5528]' : 'text-[#3a2512] hover:bg-[#a88243]/20'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous Chapter
                    </button>

                    <span className="font-cinzel text-xs text-[#7a5528]">
                      Chapter {currentChapterIdx + 1} of {book.chapters.length}
                    </span>

                    <button
                      onClick={handleNextChapter}
                      disabled={currentChapterIdx === book.chapters.length - 1}
                      className={`flex items-center gap-1 font-cinzel text-xs font-bold px-3 py-1.5 rounded border border-[#a88243] ${
                        currentChapterIdx === book.chapters.length - 1 ? 'opacity-30 cursor-not-allowed text-[#7a5528]' : 'text-[#3a2512] hover:bg-[#a88243]/20'
                      }`}
                    >
                      Next Chapter <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: PRAISE & CRITICAL REVIEWS */}
          {activeTab === 'praise' && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-[#ffd700] uppercase tracking-wider text-center mb-4">
                Critical Reception & Academic Reviews
              </h4>

              <div className="space-y-4">
                {(book.praise || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#1a140d] border border-[#a8894d]/30 space-y-2 relative"
                  >
                    <blockquote className="font-cormorant text-lg sm:text-xl italic text-[#f4ecd8]">
                      "{item.quote}"
                    </blockquote>
                    <p className="font-cinzel text-xs font-bold text-[#ffd700] tracking-wider">
                      — {item.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PURCHASE / CATALOGUE */}
          {activeTab === 'purchase' && (
            <div className="space-y-6 text-center">
              <div className="max-w-md mx-auto">
                <WaxSeal size={56} label="TDS" className="mx-auto mb-3" />
                <h4 className="font-cinzel-dec text-xl font-bold text-[#ffd700]">
                  {book.title}
                </h4>
                <p className="font-cormorant text-base text-[#d6c7a7] mt-1">
                  Official distributor and catalogue listings for this volume:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
                {book.buyLinks.map((link) => (
                  <a
                    key={link.store}
                    href={link.url}
                    onClick={() => ambienceEngine.playHarpPluck(360)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-[#1c160e] border border-[#a8894d]/40 hover:border-[#ffd700] hover:bg-[#a8894d]/20 text-[#f5ebd5] hover:text-[#ffd700] transition-all flex items-center justify-between group"
                  >
                    <div className="text-left">
                      <div className="font-cinzel text-xs font-bold">{link.store}</div>
                      <div className="font-cormorant text-xs text-[#a89574]">Publisher & Bookseller Listing</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#a8894d] group-hover:text-[#ffd700] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              <p className="font-cormorant text-sm text-[#8c7b60] italic">
                *Published by {book.publisher || "The Author's Archive"}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
