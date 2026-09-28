import { motion } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { MapPin, Mail, Phone, ChevronDown, Check, Send, Store, Building2, HelpCircle } from 'lucide-react'

const showrooms = [
  { id: 'london', city: 'LONDON MAYFAIR', address: '42 Mount Street, Mayfair, W1K 2RX', hours: 'Mon–Sat: 10:00 – 19:00', phone: '+44 20 7946 0912', img: images.showroom_london },
  { id: 'tokyo', city: 'TOKYO GINZA', address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061', hours: 'Daily: 11:00 – 20:00', phone: '+81 3 5555 0143', img: images.showroom_tokyo },
  { id: 'ny', city: 'NEW YORK SOHO', address: '120 Spring Street, New York, NY 10012', hours: 'Mon–Sat: 11:00 – 19:00', phone: '+1 212 555 0188', img: images.showroom_ny }
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

            <div className="lg:col-span-7 bg-sand/10 border border-charcoal/10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
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
                    className="w-full bg-charcoal text-ivory py-3 font-sans text-xs tracking-widest hover:bg-spice transition-colors"
                  >
                    BOOK TASTING APPOINTMENT
                  </button>
                ) : (
                  <div className="p-3 bg-sand/40 border border-charcoal/20 text-center font-sans text-xs text-charcoal">
                    ✓ Tasting appointment reserved for {activeShowroom.city}!
                  </div>
                )}
              </div>
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