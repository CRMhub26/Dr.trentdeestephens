import React, { useState } from 'react';
import { OrnateHeaderFlourish, WaxSeal, ManuscriptCorner } from './OrnateDividers';
import { Mail, Send, CheckCircle, Globe, ExternalLink } from 'lucide-react';
import { ambienceEngine } from '../utils/audioAmbience';
import { AUTHOR_BIO } from '../data/authorData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Literary & Book Inquiry',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    ambienceEngine.playHarpPluck(493.88);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Literary & Book Inquiry',
      subject: '',
      message: ''
    });
    setIsSent(false);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090705] overflow-hidden border-t border-[#a8894d]/20">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <OrnateHeaderFlourish
          title="CONTACT & INQUIRIES"
          subtitle="Academic Correspondence, Keynote Speaking & Literary Inquiries"
        />

        <p className="font-cormorant text-xl text-center text-[#ded2ba] max-w-2xl mx-auto mb-12 italic">
          "Direct your inquiries regarding published works, university lectures, medieval architecture research, or academic correspondence."
        </p>

        {/* Contact Parchment Container */}
        <div className="relative parchment-card rounded-3xl p-6 sm:p-10 gold-border shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <ManuscriptCorner position="top-left" />
          <ManuscriptCorner position="top-right" />
          <ManuscriptCorner position="bottom-left" />
          <ManuscriptCorner position="bottom-right" />

          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-cinzel text-xs font-bold text-[#d4af37] block mb-2 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Arthur Edwards"
                    className="w-full px-4 py-3 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-[#f5ebd5] placeholder-[#8c7b60] text-xs font-cinzel focus:outline-none focus:border-[#ffd700] transition-colors"
                  />
                </div>

                <div>
                  <label className="font-cinzel text-xs font-bold text-[#d4af37] block mb-2 tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="academic.correspondent@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-[#f5ebd5] placeholder-[#8c7b60] text-xs font-cinzel focus:outline-none focus:border-[#ffd700] transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-cinzel text-xs font-bold text-[#d4af37] block mb-2 tracking-wider">
                    Inquiry Classification
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-[#f5ebd5] text-xs font-cinzel focus:outline-none focus:border-[#ffd700] transition-colors"
                  >
                    <option value="Literary & Book Inquiry">Literary & Book Inquiry</option>
                    <option value="Keynote Speaking & Lectures">Keynote Speaking & Lectures</option>
                    <option value="Academic & Scientific Inquiry">Academic & Scientific Inquiry</option>
                    <option value="Castle Modeling (buildmodelcastles.com)">Castle Modeling (buildmodelcastles.com)</option>
                    <option value="General Correspondence">General Correspondence</option>
                  </select>
                </div>

                <div>
                  <label className="font-cinzel text-xs font-bold text-[#d4af37] block mb-2 tracking-wider">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Invitation for Guest Lecture / Book Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-[#f5ebd5] placeholder-[#8c7b60] text-xs font-cinzel focus:outline-none focus:border-[#ffd700] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="font-cinzel text-xs font-bold text-[#d4af37] block mb-2 tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inscribe your correspondence or inquiry for Dr. Trent Dee Stephens..."
                  className="w-full px-4 py-3 rounded-xl bg-[#14100c] border border-[#a8894d]/30 text-[#f5ebd5] placeholder-[#8c7b60] text-base font-cormorant focus:outline-none focus:border-[#ffd700] transition-colors leading-relaxed"
                />
              </div>

              {/* Send Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-send-message"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#99731d] via-[#d4af37] to-[#8f6815] text-[#140e05] font-cinzel text-xs font-bold tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)] hover:scale-102 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#140e05]" />
                  <span>{isSubmitting ? "TRANSMITTING MESSAGE..." : "TRANSMIT MESSAGE"}</span>
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-10 space-y-5">
              <CheckCircle className="w-16 h-16 text-[#ffd700] mx-auto" />
              <WaxSeal size={60} label="SENT" className="mx-auto" />

              <h3 className="font-cinzel-dec font-bold text-2xl text-[#ffd700]">
                Message Successfully Dispatched
              </h3>

              <p className="font-cormorant text-xl text-[#f5ebd5] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#ffd700]">{formData.name}</strong>. Your inquiry regarding <em>{formData.inquiryType}</em> has been securely recorded.
              </p>

              <p className="font-cormorant italic text-base text-[#a89574]">
                A transmission record has been noted for {formData.email}.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg border border-[#a8894d] text-[#ffd700] font-cinzel text-xs font-bold uppercase hover:bg-[#a8894d]/20 transition-colors"
                >
                  Transmit Another Message
                </button>
              </div>
            </div>
          )}

          {/* Official Portals Footer */}
          <div className="mt-10 pt-6 border-t border-[#a8894d]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cinzel text-[#a89574]">
            <span>Official Portals:</span>
            <div className="flex items-center gap-4">
              <a
                href={AUTHOR_BIO.officialWebsites.main}
                target="_blank"
                rel="noreferrer"
                className="text-[#f5ebd5] hover:text-[#ffd700] flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>trentdeestephens.com</span>
                <ExternalLink className="w-3 h-3 text-[#a8894d]" />
              </a>
              <span>•</span>
              <a
                href={AUTHOR_BIO.officialWebsites.castles}
                target="_blank"
                rel="noreferrer"
                className="text-[#f5ebd5] hover:text-[#ffd700] flex items-center gap-1"
              >
                <span>buildmodelcastles.com</span>
                <ExternalLink className="w-3 h-3 text-[#a8894d]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
