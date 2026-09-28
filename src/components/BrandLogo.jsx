import React from 'react'

export const BrandLogoMark = ({ className = "w-7 h-7", isDark = false }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
    {/* Salt Crystal Rhombus */}
    <path d="M20 6L28 20L20 34L12 20L20 6Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
    {/* Inner Flame / Spice Drop */}
    <path d="M20 12C20 12 24 18 24 21C24 23.2 22.2 25 20 25C17.8 25 16 23.2 16 21C16 18 20 12 20 12Z" fill="currentColor" />
  </svg>
)

export const BrandLogo = ({ showText = true, className = "", isDark = false }) => {
  return (
    <div className={`inline-flex items-center space-x-3 group cursor-pointer ${className}`}>
      <div className="relative flex items-center justify-center">
        <BrandLogoMark className="w-8 h-8 text-spice group-hover:scale-105 transition-transform" />
      </div>
      {showText && (
        <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] uppercase whitespace-nowrap">
          SALT <span className="text-spice font-normal italic">&amp;</span> SPICE
        </span>
      )}
    </div>
  )
}

export default BrandLogo
