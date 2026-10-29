import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorSection } from './components/AuthorSection';
import { FeaturedBookSection } from './components/FeaturedBookSection';
import { BooksSection } from './components/BooksSection';
import { ArchiveSection } from './components/ArchiveSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DustParticles } from './components/DustParticles';
import { BookReaderModal } from './components/BookReaderModal';
import { Book } from './types';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBook(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#090705] text-[#f4ecd8] relative selection:bg-[#a8894d]/30 selection:text-[#fff6df]">
      {/* Floating Golden Dust Particles Canvas */}
      <DustParticles />

      {/* Medieval Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Author */}
        <AuthorSection />

        {/* 3. The Featured Work */}
        <FeaturedBookSection onSelectBook={setSelectedBook} />

        {/* 4. The Library */}
        <BooksSection onSelectBook={setSelectedBook} />

        {/* 5. The Archive (Essays from trentdeestephens.com & Dossiers) */}
        <ArchiveSection />

        {/* 6. Author Quotation */}
        <QuoteSection />

        {/* 7. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Medieval Footer */}
      <Footer />

      {/* Codex Reader Modal */}
      {selectedBook && (
        <BookReaderModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
}
