import { Link } from 'react-router-dom'
import { useState } from 'react'
import BrandLogo from './BrandLogo'
import { ShieldCheck, Award, Globe, Mail, MapPin, Sparkles, Check } from 'lucide-react'

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
    <footer className="bg-charcoal text-sand pt-24 pb-12 px-6 md:px-12 border-t border-sand/15 relative overflow-hidden">
      {/* Giant Typography Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-center w-full whitespace-nowrap overflow-hidden">
        <span className="font-serif text-[18vw] leading-none tracking-tighter text-sand uppercase font-bold">
          SALT &amp; SPICE
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
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