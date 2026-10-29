import React from 'react';
import { Book } from '../types';
import { BOOKS_DATA } from '../data/authorData';
import { OrnateHeaderFlourish, ManuscriptCorner } from './OrnateDividers';
import { ShoppingBag, ExternalLink, ChevronRight, FileText } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';

interface BooksSectionProps {
  onSelectBook: (book: Book) => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({ onSelectBook }) => {
  const books = BOOKS_DATA;

  return (
    <section id="books" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0b09] overflow-hidden border-t border-[#a8894d]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,30,30,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <OrnateHeaderFlourish
          title="THE LIBRARY"
          subtitle="Featured Historical Fiction Masterwork"
        />

        {/* Book Presentation Card */}
        <div className="mt-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative parchment-card rounded-2xl overflow-hidden gold-border transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col md:flex-row items-stretch"
            >
              <ManuscriptCorner position="top-left" />
              <ManuscriptCorner position="top-right" />
              <ManuscriptCorner position="bottom-left" />
              <ManuscriptCorner position="bottom-right" />

              {/* Cover Presentation */}
              <div className="relative p-8 md:p-10 bg-gradient-to-b from-[#18130d] to-[#120e09] flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#a8894d]/20 flex-shrink-0 md:w-80 overflow-hidden">
                <div className="relative w-52 sm:w-56 h-80 rounded-lg overflow-hidden border-2 border-[#c5a059]/70 shadow-2xl bg-[#1b140b]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/80 to-transparent border-r border-[#ffd700]/30 pointer-events-none" />
                </div>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  <span className="font-cinzel text-[10px] tracking-[0.15em] text-[#ffd700] uppercase font-bold px-3 py-1 rounded bg-[#1c150e] border border-[#a8894d]/40 shadow-sm">
                    {book.genre}
                  </span>
                  <span className="font-cinzel text-[10px] tracking-wider text-[#ffd700] bg-[#631b22] px-3 py-1 rounded border border-[#ffd700] font-bold">
                    2026 Release
                  </span>
                </div>
              </div>

              {/* Book Details */}
              <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {book.subtitle && (
                    <p className="font-cinzel text-xs tracking-widest text-[#a8894d] uppercase font-semibold">
                      {book.subtitle}
                    </p>
                  )}
                  <h3 className="font-cinzel-dec text-2xl sm:text-3xl font-bold text-[#f5ebd5] group-hover:text-[#ffd700] transition-colors leading-tight mt-1">
                    {book.title}
                  </h3>
                  
                  {book.publisher && (
                    <p className="font-cinzel text-xs text-[#a89574] mt-1.5">
                      {book.publisher} • {book.pages} pages • ISBN: {book.isbn}
                    </p>
                  )}
                  
                  <p className="font-cormorant italic text-base sm:text-lg text-[#ffd700]/90 mt-3">
                    "{book.tagline}"
                  </p>

                  <p className="font-cormorant text-base sm:text-lg text-[#ded2ba] leading-relaxed mt-4">
                    {book.synopsis}
                  </p>
                </div>

                {/* Themes and Actions */}
                <div className="pt-4 border-t border-[#a8894d]/20 space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {book.themes.map((t) => (
                      <span key={t} className="text-xs font-cinzel text-[#d6c7a7] bg-[#14100c] px-3 py-1 rounded-md border border-[#a8894d]/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a
                      href={book.buyLinks[0]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#aa8024] text-[#140e05] font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:brightness-110 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#140e05]" />
                      <span>ORDER ON AMAZON</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#140e05]" />
                    </a>

                    <button
                      onClick={() => {
                        ambienceEngine.playHarpPluck(330);
                        onSelectBook(book);
                      }}
                      id={`btn-view-${book.id}`}
                      className="px-6 py-3.5 rounded-xl border border-[#a8894d]/50 bg-[#14100c] hover:border-[#ffd700] text-[#f5ebd5] hover:text-[#ffd700] font-cinzel text-xs font-bold tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <FileText className="w-4 h-4 text-[#ffd700]" />
                      <span>EXPLORE SYNOPSIS & CHAPTERS</span>
                      <ChevronRight className="w-4 h-4 text-[#a8894d] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
