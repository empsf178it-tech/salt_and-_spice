import { Link } from 'react-router-dom'
import { useState } from 'react'
import BrandLogo from './BrandLogo'
import { ShieldCheck, Award, Globe, Mail, MapPin, Sparkles, Check } from 'lucide-react'

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

const PinterestIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.87 6.32 9.33-.09-.79-.17-2 .04-2.87.19-.79 1.22-5.18 1.22-5.18s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.26-.87 3.51-.25 1.05.53 1.91 1.56 1.91 1.87 0 3.31-1.97 3.31-4.82 0-2.52-1.81-4.28-4.39-4.28-2.99 0-4.75 2.24-4.75 4.56 0 .9.35 1.87.79 2.4.09.1.1.2.07.33l-.3 1.23c-.05.2-.16.24-.37.15-1.39-.65-2.26-2.68-2.26-4.32 0-3.52 2.56-6.75 7.37-6.75 3.87 0 6.88 2.76 6.88 6.44 0 3.84-2.42 6.94-5.78 6.94-1.13 0-2.19-.59-2.55-1.28l-.7 2.65c-.25.96-.93 2.16-1.39 2.9C10.22 21.84 11.09 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
)

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <footer className="bg-charcoal text-sand pt-24 pb-12 border-t border-sand/15 relative overflow-hidden">
      {/* Giant Typography Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-center w-full whitespace-nowrap overflow-hidden">
        <span className="font-serif text-[18vw] leading-none tracking-tighter text-sand uppercase font-bold">
          SALT &amp; SPICE
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Newsletter & Harvest Club Banner */}
        <div className="bg-sand/10 border border-sand/20 p-5 sm:p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left w-full lg:w-auto">
            <span className="font-sans text-[10px] tracking-[0.25em] text-mustard uppercase font-semibold block">
              HARVEST ALERTS &amp; PRIVATE RESERVE ACCESS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory">JOIN THE SALT &amp; SPICE TASTING CLUB</h3>
            <p className="font-sans text-xs text-sand/70 max-w-lg mx-auto lg:mx-0">
              Receive limited micro-batch harvest notifications and seasonal chef recipe pairings directly to your inbox.
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/40 border border-sand/30 px-4 sm:px-5 py-3.5 font-sans text-xs text-ivory placeholder:text-sand/40 focus:outline-none focus:border-sand w-full min-w-0 sm:min-w-[280px] box-border"
              />
              <button 
                type="submit" 
                className="bg-sand text-charcoal hover:bg-ivory px-6 sm:px-8 py-3.5 font-sans text-xs tracking-widest font-semibold transition-colors whitespace-nowrap w-full sm:w-auto"
              >
                SUBSCRIBE →
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-3 bg-sand/20 border border-sand/40 px-6 py-3.5 text-xs font-sans text-ivory w-full lg:w-auto text-center">
              <Check className="w-4 h-4 text-mustard shrink-0" />
              <span>Welcome to the Tasting Club! Check your inbox shortly.</span>
            </div>
          )}
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 border-b border-sand/15 pb-16">
          
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <BrandLogo />
            </Link>
            <p className="font-sans text-xs text-sand/70 max-w-md leading-relaxed">
              Crafting unrefined single-origin finishing salts, vine-ripened black peppercorns, and oak-smoked spices. Directly traded with micro-farming co-operatives worldwide.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-[11px] font-sans text-sand/80">
              <span className="flex items-center border border-sand/20 px-3 py-1.5 bg-sand/5">
                <ShieldCheck className="w-3.5 h-3.5 text-mustard mr-1.5" /> 100% Raw &amp; Unrefined
              </span>
              <span className="flex items-center border border-sand/20 px-3 py-1.5 bg-sand/5">
                <Award className="w-3.5 h-3.5 text-mustard mr-1.5" /> Direct Fair Trade
              </span>
              <span className="flex items-center border border-sand/20 px-3 py-1.5 bg-sand/5">
                <Globe className="w-3.5 h-3.5 text-mustard mr-1.5" /> Zero Plastic Amber UV Glass
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="font-sans text-[10px] tracking-[0.25em] text-sand/50 font-semibold uppercase block mb-3">
                CONNECT WITH US
              </span>
              <div className="flex items-center space-x-3 text-sand/80">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="w-10 h-10 rounded-full border border-sand/20 bg-sand/5 flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group"
                >
                  <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="w-10 h-10 rounded-full border border-sand/20 bg-sand/5 flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group"
                >
                  <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter" 
                  className="w-10 h-10 rounded-full border border-sand/20 bg-sand/5 flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group"
                >
                  <TwitterIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube" 
                  className="w-10 h-10 rounded-full border border-sand/20 bg-sand/5 flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group"
                >
                  <YoutubeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Pinterest" 
                  className="w-10 h-10 rounded-full border border-sand/20 bg-sand/5 flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group"
                >
                  <PinterestIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Harvests */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.25em] mb-6 text-sand/50 font-semibold uppercase">CURATED HARVESTS</h4>
            <ul className="space-y-3 font-serif text-lg">
              <li><Link to="/products" className="hover:text-ivory transition-colors">Brittany Fleur de Sel</Link></li>
              <li><Link to="/products" className="hover:text-ivory transition-colors">Tellicherry Black Pepper</Link></li>
              <li><Link to="/products" className="hover:text-ivory transition-colors">Oak-Smoked Paprika</Link></li>
              <li><Link to="/products" className="hover:text-ivory transition-colors">Kashmiri Saffron</Link></li>
              <li><Link to="/products" className="hover:text-ivory transition-colors">Tasting Gift Boxes</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Terroirs */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.25em] mb-6 text-sand/50 font-semibold uppercase">TERROIR ORIGINS</h4>
            <ul className="space-y-3 font-serif text-lg">
              <li><Link to="/origins" className="hover:text-ivory transition-colors">Brittany Coast, France</Link></li>
              <li><Link to="/origins" className="hover:text-ivory transition-colors">Malabar Coast, India</Link></li>
              <li><Link to="/origins" className="hover:text-ivory transition-colors">La Vera Valley, Spain</Link></li>
              <li><Link to="/origins" className="hover:text-ivory transition-colors">Peloponnese, Greece</Link></li>
              <li><Link to="/origins" className="hover:text-ivory transition-colors">Pampore, Kashmir</Link></li>
            </ul>
          </div>

          {/* Column 4: Experience */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.25em] mb-6 text-sand/50 font-semibold uppercase">EXPERIENCE</h4>
            <ul className="space-y-3 font-serif text-lg">
              <li><Link to="/ingredients" className="hover:text-ivory transition-colors">Flavour Quiz</Link></li>
              <li><Link to="/recipes" className="hover:text-ivory transition-colors">Chef Masterclasses</Link></li>
              <li><Link to="/origins" className="hover:text-ivory transition-colors">Batch Traceability</Link></li>
              <li><Link to="/contact" className="hover:text-ivory transition-colors">Flagship Showrooms</Link></li>
              <li><Link to="/contact" className="hover:text-ivory transition-colors">Restaurant Supply</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-xs text-sand/60 gap-4">
          <div className="flex items-center space-x-4">
            <p>© {new Date().getFullYear()} Salt &amp; Spice Atelier Ltd. All rights reserved.</p>
            <span className="hidden md:inline text-sand/30">|</span>
            <span className="hidden md:inline">USD ($) · Global Shipping</span>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/contact" className="hover:text-sand transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-sand transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-sand transition-colors">Wholesale Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer