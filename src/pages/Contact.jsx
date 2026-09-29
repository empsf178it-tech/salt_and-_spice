import { motion } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { MapPin, Mail, Phone, ChevronDown, Check, Send, Store, Building2, HelpCircle } from 'lucide-react'

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

const showrooms = [
  { 
    id: 'london', 
    city: 'LONDON MAYFAIR', 
    address: '42 Mount Street, Mayfair, London W1K 2RX', 
    hours: 'Mon–Sat: 10:00 – 19:00', 
    phone: '+44 20 7946 0912', 
    img: images.showroom_london,
    mapEmbed: 'https://maps.google.com/maps?q=42%20Mount%20Street,%20Mayfair,%20London&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  { 
    id: 'tokyo', 
    city: 'TOKYO GINZA', 
    address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061', 
    hours: 'Daily: 11:00 – 20:00', 
    phone: '+81 3 5555 0143', 
    img: images.showroom_tokyo,
    mapEmbed: 'https://maps.google.com/maps?q=6-10-1%20Ginza,%20Chuo%20City,%20Tokyo&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  { 
    id: 'ny', 
    city: 'NEW YORK SOHO', 
    address: '120 Spring Street, New York, NY 10012', 
    hours: 'Mon–Sat: 11:00 – 19:00', 
    phone: '+1 212 555 0188', 
    img: images.showroom_ny,
    mapEmbed: 'https://maps.google.com/maps?q=120%20Spring%20Street,%20New%20York,%20NY&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
]

const faqs = [
  { q: 'What is the shelf life of Salt & Spice harvests?', a: 'Because we package our spices in air-tight UV-blocking amber glass, whole peppercorns and spices remain at peak potency for 24 months. Fleur de Sel and finishing salts have an indefinite shelf life.' },
  { q: 'Do you offer custom wholesale blends for restaurants?', a: 'Yes. We collaborate with head chefs and hospitality groups to calibrate exclusive single-origin salt and rub blends. Contact our culinary team at studio@saltandspice.example.' },
  { q: 'How do your eco-refill pouches work?', a: 'Our refill pouches are crafted from 100% home-compostable plant fiber. You can purchase refilling pouches to easily top up your amber glass jars while reducing packaging waste.' },
  { q: 'What is your international shipping timeline?', a: 'Express international orders arrive within 3-5 business days via carbon-neutral courier delivery with temperature-controlled transit.' }
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [activeShowroom, setActiveShowroom] = useState(showrooms[0])
  const [openFaq, setOpenFaq] = useState(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory min-h-screen pt-28 pb-24 text-charcoal"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* SECTION 1: HERO & CONCIERGE FORM */}
        <section className="mb-24 sm:mb-32 border-b border-charcoal/10 pb-16 sm:pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">CONCIERGE &amp; SUPPORT</span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal mb-6 sm:mb-8 leading-tight">LET'S TALK<br/>FLAVOUR.</h1>

              <div className="space-y-4 font-sans">
                <div className="p-5 sm:p-6 bg-sand/20 border border-charcoal/10">
                  <h4 className="text-[10px] tracking-widest text-charcoal/50 uppercase mb-1 font-semibold">GENERAL INQUIRIES</h4>
                  <a href="mailto:hello@saltandspice.example" className="text-xs sm:text-sm tracking-wider text-charcoal hover:text-spice transition-colors font-medium block truncate">
                    hello@saltandspice.example
                  </a>
                </div>
                <div className="p-5 sm:p-6 bg-sand/20 border border-charcoal/10">
                  <h4 className="text-[10px] tracking-widest text-charcoal/50 uppercase mb-1 font-semibold">CHEF &amp; WHOLESALE ORDERS</h4>
                  <a href="mailto:studio@saltandspice.example" className="text-xs sm:text-sm tracking-wider text-charcoal hover:text-spice transition-colors font-medium block truncate">
                    studio@saltandspice.example
                  </a>
                </div>
                <div className="p-5 sm:p-6 bg-sand/20 border border-charcoal/10">
                  <h4 className="text-[10px] tracking-widest text-charcoal/50 uppercase mb-1 font-semibold">PRESS &amp; MEDIA KIT</h4>
                  <a href="mailto:press@saltandspice.example" className="text-xs sm:text-sm tracking-wider text-charcoal hover:text-spice transition-colors font-medium block truncate">
                    press@saltandspice.example
                  </a>
                </div>

                {/* Social Channels */}
                <div className="p-5 sm:p-6 bg-sand/20 border border-charcoal/10 space-y-3">
                  <h4 className="text-[10px] tracking-widest text-charcoal/50 uppercase font-semibold">FOLLOW OUR JOURNEY</h4>
                  <div className="flex items-center space-x-3 text-charcoal pt-1">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-charcoal/20 bg-ivory flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group">
                      <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-charcoal/20 bg-ivory flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group">
                      <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full border border-charcoal/20 bg-ivory flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group">
                      <TwitterIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-charcoal/20 bg-ivory flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group">
                      <YoutubeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-9 h-9 rounded-full border border-charcoal/20 bg-ivory flex items-center justify-center hover:bg-spice hover:border-spice hover:text-ivory transition-all duration-300 group">
                      <PinterestIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full space-y-5 bg-sand/10 border border-charcoal/10 p-6 sm:p-10 shadow-sm box-border max-w-xl mx-auto lg:max-w-none">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-4">SEND A CONCIERGE MESSAGE</h3>
                  
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      required 
                      className="w-full min-w-0 bg-ivory border border-charcoal/20 px-4 py-3.5 font-sans text-xs tracking-widest text-charcoal outline-none focus:border-charcoal box-border" 
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      required 
                      className="w-full min-w-0 bg-ivory border border-charcoal/20 px-4 py-3.5 font-sans text-xs tracking-widest text-charcoal outline-none focus:border-charcoal box-border" 
                    />
                    <select className="w-full min-w-0 bg-ivory border border-charcoal/20 px-4 py-3.5 font-sans text-xs tracking-widest text-charcoal outline-none focus:border-charcoal box-border">
                      <option>Subject: General Inquiry</option>
                      <option>Subject: Wholesale / Chef Partnership</option>
                      <option>Subject: Tasting Box Orders</option>
                      <option>Subject: Custom Corporate Gifting</option>
                    </select>
                    <textarea 
                      placeholder="How can our flavor sommeliers assist you?" 
                      required 
                      rows={4} 
                      className="w-full min-w-0 bg-ivory border border-charcoal/20 px-4 py-3.5 font-sans text-xs tracking-widest text-charcoal outline-none focus:border-charcoal resize-none box-border"
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-charcoal text-ivory px-8 py-4 font-sans text-xs tracking-[0.2em] hover:bg-spice transition-colors w-full flex items-center justify-center space-x-2 font-medium shadow-md">
                    <Send className="w-3.5 h-3.5 mr-2" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              ) : (
                <div className="w-full text-center p-10 sm:p-16 bg-sand/20 border border-charcoal/10 space-y-4 max-w-xl mx-auto lg:max-w-none">
                  <div className="w-12 h-12 bg-charcoal text-ivory rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Check className="w-6 h-6 text-mustard" />
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">Message Received</h3>
                  <p className="font-sans text-xs text-charcoal/70 max-w-sm mx-auto leading-relaxed">
                    Our sommelier team will respond to your inquiry within 24 business hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-sans tracking-widest text-spice border-b border-spice pb-0.5 pt-4 font-semibold">
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 2: GLOBAL FLAGSHIP SHOWROOMS */}
        <section className="mb-32">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">TACTILE EXPERIENCE</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">FLAGSHIP TASTING ROOMS</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              {showrooms.map(room => (
                <button
                  key={room.id}
                  onClick={() => { setActiveShowroom(room); setBookingConfirmed(false); }}
                  className={`w-full text-left p-6 transition-all border ${
                    activeShowroom.id === room.id 
                      ? 'bg-charcoal text-ivory border-charcoal shadow-lg' 
                      : 'bg-sand/20 text-charcoal border-charcoal/10 hover:border-charcoal/30'
                  }`}
                >
                  <span className={`font-sans text-[10px] tracking-widest uppercase block mb-1 ${activeShowroom.id === room.id ? 'text-sand' : 'text-spice'}`}>
                    SHOWROOM LOCATION
                  </span>
                  <h4 className="font-serif text-2xl">{room.city}</h4>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-sand/10 border border-charcoal/10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-sand/30">
                <img src={activeShowroom.img} alt={activeShowroom.city} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-spice uppercase font-semibold block mb-1">
                    VISIT IN PERSON
                  </span>
                  <h3 className="font-serif text-3xl text-charcoal">{activeShowroom.city}</h3>
                </div>

                <div className="space-y-3 font-sans text-xs border-y border-charcoal/10 py-4 text-charcoal/80">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-spice shrink-0 mt-0.5" />
                    <span>{activeShowroom.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Store className="w-4 h-4 text-spice shrink-0" />
                    <span>{activeShowroom.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-spice shrink-0" />
                    <span>{activeShowroom.phone}</span>
                  </div>
                </div>

                {!bookingConfirmed ? (
                  <button 
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full bg-charcoal text-ivory py-3 font-sans text-xs tracking-widest hover:bg-spice transition-colors font-medium shadow-sm"
                  >
                    BOOK TASTING APPOINTMENT
                  </button>
                ) : (
                  <div className="p-3 bg-sand/40 border border-charcoal/20 text-center font-sans text-xs text-charcoal font-medium">
                    ✓ Tasting appointment reserved for {activeShowroom.city}!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Showroom Location Map Embed */}
          <div className="w-full mt-12 overflow-hidden border border-charcoal/15 shadow-sm">
            <div className="bg-charcoal text-ivory px-6 py-3.5 flex justify-between items-center text-xs font-sans">
              <span className="tracking-widest uppercase font-medium flex items-center text-sand">
                <MapPin className="w-4 h-4 text-spice mr-2" />
                {activeShowroom.city} — INTERACTIVE LOCATION MAP
              </span>
              <span className="text-sand/60 text-[11px] hidden sm:inline">{activeShowroom.address}</span>
            </div>
            <div className="w-full h-80 sm:h-[400px] bg-sand/20 relative">
              <iframe 
                title={`Map for ${activeShowroom.city}`}
                src={activeShowroom.mapEmbed}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3: WHOLESALE & CHEF SUPPLY PROGRAM */}
        <section className="mb-32 bg-charcoal text-ivory p-8 md:p-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Building2 className="w-10 h-10 text-mustard mx-auto mb-2" />
            <span className="font-sans text-xs tracking-[0.25em] text-sand uppercase font-semibold block">RESTAURANTS & HOSPITALITY</span>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory">WHOLESALE & CHEF SUPPLY PROGRAM</h2>
            <p className="font-sans text-sm text-sand/80 max-w-xl mx-auto leading-relaxed">
              We supply custom bulk jars, kitchen finishing salt cellars, and seasonal harvest drops directly to executive chefs and culinary institutions worldwide.
            </p>
            <a 
              href="mailto:studio@saltandspice.example?subject=Wholesale%20Catalog%20Request"
              className="inline-block bg-sand text-charcoal px-8 py-4 font-sans text-xs tracking-[0.2em] font-medium hover:bg-ivory transition-colors mt-4"
            >
              REQUEST WHOLESALE CATALOG & SAMPLES →
            </a>
          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section className="mb-32 max-w-[1200px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">HELP CENTER</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-charcoal/10 bg-sand/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center font-serif text-xl md:text-2xl text-charcoal"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-spice transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed border-t border-charcoal/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: NEWSLETTER BANNER */}
        <section className="py-20 bg-sand/30 border-t border-charcoal/10 text-center px-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal">NEVER MISS A LIMITED HARVEST.</h2>
            <p className="font-sans text-xs text-charcoal/70 max-w-md mx-auto">
              Join 18,000+ chefs and culinary enthusiasts receiving our seasonal single-origin release alerts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-ivory border border-charcoal/20 px-4 py-3.5 font-sans text-xs text-charcoal focus:outline-none focus:border-charcoal"
              />
              <button type="submit" className="bg-charcoal text-ivory px-8 py-3.5 font-sans text-xs tracking-widest hover:bg-spice transition-colors">
                JOIN CLUB
              </button>
            </form>
          </div>
        </section>
      </div>
    </motion.main>
  )
}

export default Contact