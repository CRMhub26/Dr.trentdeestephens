import React from 'react';

export const MedievalDivider: React.FC<{ className?: string; variant?: 'gold' | 'parchment' | 'simple' }> = ({
  className = '',
  variant = 'gold'
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className={`h-[1px] flex-1 max-w-28 bg-gradient-to-r ${variant === 'gold' ? 'from-transparent via-[#c59b27]/60 to-[#c59b27]' : 'from-transparent via-[#a88243]/40 to-[#a88243]'}`} />
      
      {/* Medieval Diamond / Fleur-de-lis Crest */}
      <div className="flex items-center gap-1.5 text-[#d4af37]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
          <path d="M12 2L14.5 8.5L21 9.5L16 14.5L17.5 21L12 17.5L6.5 21L8 14.5L3 9.5L9.5 8.5L12 2Z" />
        </svg>
      </div>

      <div className={`h-[1px] flex-1 max-w-28 bg-gradient-to-l ${variant === 'gold' ? 'from-transparent via-[#c59b27]/60 to-[#c59b27]' : 'from-transparent via-[#a88243]/40 to-[#a88243]'}`} />
    </div>
  );
};

export const OrnateHeaderFlourish: React.FC<{ title: string; subtitle?: string; align?: 'center' | 'left' }> = ({
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} mb-10`}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-[#c59b27]/60" />
          <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
            {subtitle}
          </span>
          <span className="h-[1px] w-6 bg-[#c59b27]/60" />
        </div>
      )}
      
      <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-wide text-[#f5ebd5] drop-shadow-md">
        {title}
      </h2>

      <div className={`flex items-center gap-3 mt-4 ${align === 'center' ? 'justify-center' : 'justify-start'} w-full`}>
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]/80" />
        <span className="w-2.5 h-2.5 rotate-45 border border-[#d4af37] bg-[#d4af37]/30 inline-block" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]/80" />
      </div>
    </div>
  );
};

export const WaxSeal: React.FC<{ size?: number; label?: string; onClick?: () => void; className?: string }> = ({
  size = 54,
  label = "TDS",
  onClick,
  className = ""
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`relative rounded-full bg-gradient-to-br from-[#85161f] via-[#660f16] to-[#3a080c] shadow-lg border border-[#a82531]/40 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 select-none ${className}`}
      title="Royal Author Seal"
    >
      <div className="absolute inset-1 rounded-full border border-dashed border-[#ff99a3]/25 opacity-80" />
      <span className="font-cinzel-dec font-bold text-[#ffd700] text-sm tracking-wider drop-shadow-md">
        {label}
      </span>
    </div>
  );
};

export const ManuscriptCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  position
}) => {
  const getRotation = () => {
    switch (position) {
      case 'top-left': return '';
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
    }
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={`absolute text-[#c59b27]/60 pointer-events-none ${getRotation()} ${
        position.includes('top') ? 'top-2' : 'bottom-2'
      } ${position.includes('left') ? 'left-2' : 'right-2'}`}
    >
      <path
        d="M2 2H18C20 2 24 6 24 10V24M2 2V18C2 20 6 24 10 24H24M2 2L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
};
