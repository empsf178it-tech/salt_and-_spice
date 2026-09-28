import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../data/images'
import { Sparkles, ArrowRight, ShieldCheck, Flame, Award, ChevronRight } from 'lucide-react'

const flavorMatrix = [
  {
    id: 'salt',
    name: 'French Fleur de Sel',
    category: 'Finishing Salt',
    intensity: 'High Minerality',
    pairings: ['Seared Ribeye', 'Fresh Tomato Carpaccio', 'Dark Chocolate Tart'],
    notes: 'Crisp, delicate crunch with clean oceanic salinity harvested by hand in Brittany.',
    img: images.salt
  },
  {
    id: 'pepper',
    name: 'Tellicherry Black Pepper',
    category: 'Single Origin Pepper',
    intensity: 'Bold & Aromatic',
    pairings: ['Cacio e Pepe Pasta', 'Roasted Root Vegetables', 'Grilled Lamb Chops'],
    notes: 'Left to ripen fully on the vine for deep citrus notes and warm lingering heat.',
    img: images.pepper
  },
  {
    id: 'paprika',
    name: 'Oak-Smoked Paprika',
    category: 'Smoked Spice',
    intensity: 'Deep & Sweet',
    pairings: ['Spanish Paella', 'Roasted Chickpeas', 'Charred Octopus'],
    notes: 'Slow-smoked over oak firewood in La Vera for 15 days, delivering unmatched depth.',
    img: images.paprika
  },
  {
    id: 'saffron',
    name: 'Kashmiri Saffron Threads',
    category: 'Precious Spice',
    intensity: 'Floral & Honeyed',
    pairings: ['Saffron Risotto', 'Persian Rice', 'Cardamom Milk Cake'],
    notes: 'Hand-picked stigma strands with vibrant crimson hue and rich floral aroma.',
    img: images.saffron
  }
]

const processSteps = [
  { num: '01', title: 'SOURCE', desc: 'Direct-trade partnerships with organic micro-farms across coastal & mountain terroirs.' },
  { num: '02', title: 'DRY', desc: 'Slow sun-drying and traditional wood-smoking to lock in volatile essential oils.' },
  { num: '03', title: 'GRIND', desc: 'Cold stone milling in small batches to preserve temperature-sensitive aromatics.' },
  { num: '04', title: 'BLEND', desc: 'Master blender ratios calibrated for perfect balance without artificial additives.' },
  { num: '05', title: 'SEASON', desc: 'Formulated for precision finishing, curing, and everyday culinary transformation.' },
  { num: '06', title: 'TASTE', desc: 'Rigorous sensory evaluations by professional palates prior to micro-jar seal.' }
]

const Home = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 250])
  const [activeFlavor, setActiveFlavor] = useState(flavorMatrix[0])
  const [activeStep, setActiveStep] = useState(0)

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory text-charcoal overflow-hidden"
    >
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal z-10" />
          <motion.img 
            src={images.hero} 
            alt="Cinematic spices" 
            className="w-full h-full object-cover object-center scale-105"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        
        <div className="relative z-20 container mx-auto px-6 text-center text-ivory pt-24 pb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-sand/30 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-8 text-sand"
          >
            <Sparkles className="w-3.5 h-3.5 text-mustard" />
            <span>Artisanal Single-Origin Harvests 2026</span>
          </motion.div>

          <motion.h1 
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 leading-[0.95] tracking-tight font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            FLAVOUR<br/>
            <span className="italic font-normal text-sand">STARTS HERE.</span>
          </motion.h1>

          <motion.p 
            className="font-sans text-sm md:text-lg tracking-widest max-w-xl mx-auto mb-12 text-sand/90 font-light leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            "Exceptional culinary creations begin with uncompromised ingredients harvested at peak potency."
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link 
              to="/products" 
              className="w-full sm:w-auto bg-ivory text-charcoal px-8 py-4 font-sans text-xs tracking-[0.2em] font-medium hover:bg-sand transition-all duration-300 flex items-center justify-center group"
            >
              EXPLORE THE COLLECTION
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/origins" 
              className="w-full sm:w-auto border border-ivory/40 text-ivory px-8 py-4 font-sans text-xs tracking-[0.2em] font-medium hover:bg-ivory/10 transition-colors flex items-center justify-center"
            >
              DISCOVER OUR ORIGINS
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-[10px] tracking-widest uppercase text-ivory/60 mb-2">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-ivory to-transparent animate-pulse" />
        </div>
      </section>

      {/* SECTION 2: THE ESSENTIALS SHOWCASE */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-medium block mb-3">CURATED HARVESTS</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal">THE ESSENTIAL COLLECTION</h2>
          </div>
          <Link to="/products" className="font-sans text-xs tracking-[0.2em] text-charcoal/70 hover:text-spice border-b border-charcoal/20 pb-1 mt-6 md:mt-0 flex items-center self-start md:self-auto group">
            VIEW ALL PRODUCTS <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {[
            { name: 'SEA SALT FLAKES', category: 'Finishing Salt', note: 'Clean · Mineral · Crisp', img: images.salt, price: '$18' },
            { name: 'TELLICHERRY PEPPER', category: 'Whole Pepper', note: 'Warm · Aromatic · Complex', img: images.pepper, price: '$22' },
            { name: 'SMOKED OAK PAPRIKA', category: 'Artisanal Spice', note: 'Smoky · Sweet · Deep', img: images.paprika, price: '$19' }
          ].map((item, i) => (
            <motion.div 
              key={item.name}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-2rem)] group cursor-pointer bg-sand/10 border border-charcoal/5 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="overflow-hidden aspect-[4/5] mb-6 relative bg-sand/20">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-md text-ivory text-[10px] tracking-widest px-3 py-1 font-sans">
                  {item.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-ivory text-charcoal text-xs tracking-widest font-serif px-3 py-1 font-semibold">
                  {item.price}
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-1 text-charcoal group-hover:text-spice transition-colors">{item.name}</h3>
              <p className="font-sans text-xs text-charcoal/60 tracking-wider uppercase">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE FLAVOUR MATRIX & PAIRING GUIDE */}
      <section className="py-32 bg-sand/20 border-y border-charcoal/10 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-medium block mb-3">SOMMELIER GUIDE</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-4">THE FLAVOUR PAIRING MATRIX</h2>
            <p className="font-sans text-sm text-charcoal/70">Select an artisanal harvest to reveal its flavor profile, minerality index, and recommended culinary pairings.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Flavor Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {flavorMatrix.map((item) => {
                const isActive = activeFlavor.id === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFlavor(item)}
                    className={`w-full text-left p-6 transition-all duration-300 border ${
                      isActive 
                        ? 'bg-charcoal text-ivory border-charcoal shadow-lg' 
                        : 'bg-ivory text-charcoal/80 border-charcoal/10 hover:border-charcoal/30'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] tracking-widest uppercase font-sans ${isActive ? 'text-sand' : 'text-charcoal/50'}`}>
                        {item.category}
                      </span>
                      <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-mustard' : 'text-charcoal/30'}`} />
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl">{item.name}</h4>
                  </button>
                )
              })}
            </div>

            {/* Flavor Display Detail */}
            <div className="lg:col-span-8 bg-ivory border border-charcoal/10 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-sand/30">
                <img 
                  src={activeFlavor.img} 
                  alt={activeFlavor.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="font-sans text-xs tracking-widest text-spice uppercase font-semibold block mb-1">
                    {activeFlavor.intensity}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal">{activeFlavor.name}</h3>
                </div>

                <p className="font-sans text-sm text-charcoal/80 leading-relaxed italic border-l-2 border-spice pl-4">
                  "{activeFlavor.notes}"
                </p>

                <div>
                  <h5 className="font-sans text-xs tracking-widest text-charcoal uppercase mb-3 font-semibold">
                    RECOMMENDED PAIRINGS:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeFlavor.pairings.map((p, idx) => (
                      <span key={idx} className="bg-sand/40 text-charcoal text-xs px-3 py-1.5 font-sans border border-charcoal/10">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/ingredients" 
                  className="inline-flex items-center font-sans text-xs tracking-widest text-charcoal font-semibold hover:text-spice border-b border-charcoal pb-1 pt-2"
                >
                  DISCOVER ALL INGREDIENTS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE METICULOUS PROCESS */}
      <section className="py-32 bg-charcoal text-ivory px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img src={images.spice_particle} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-sand/20 pb-8">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] text-sand uppercase font-medium block mb-3">ARTISANAL METHODOLOGY</span>
              <h2 className="font-serif text-4xl md:text-6xl text-ivory">FROM EARTH TO PLATE</h2>
            </div>
            <p className="font-sans text-xs tracking-widest text-sand/60 max-w-sm mt-4 md:mt-0">
              Every step is strictly monitored for chemical purity, aroma preservation, and ecological integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 border transition-all duration-300 cursor-pointer ${
                  activeStep === i 
                    ? 'border-sand bg-sand/10' 
                    : 'border-sand/15 hover:border-sand/40 bg-black/20'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <span className="font-serif text-4xl text-sand/40 font-bold block mb-4">{step.num}</span>
                <h3 className="font-serif text-2xl text-sand tracking-wider mb-3">{step.title}</h3>
                <p className="font-sans text-xs md:text-sm text-ivory/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SIGNATURE TASTING CLUB & FINAL CTA */}
      <section className="relative py-32 bg-ivory border-t border-charcoal/10 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block">
              MEMBERSHIP &amp; HARVEST ALERTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
              JOIN THE SALT &amp; SPICE<br/>TASTING CLUB.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              Receive limited micro-batch harvest notifications, seasonal recipe cards created by world-renowned chefs, and member-only early access to rare salt reserves.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-md w-full mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-sand/30 border border-charcoal/20 px-5 py-4 font-sans text-xs tracking-widest text-charcoal focus:outline-none focus:border-charcoal placeholder:text-charcoal/40 min-w-0"
              />
              <button 
                type="submit" 
                className="bg-charcoal text-ivory px-8 py-4 font-sans text-xs tracking-[0.2em] font-medium hover:bg-spice transition-colors whitespace-nowrap shadow-md"
              >
                SUBSCRIBE →
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-charcoal/60 font-sans tracking-wider pt-2">
              <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-spice" /> Organic Certified</span>
              <span className="flex items-center"><Award className="w-4 h-4 mr-1.5 text-spice" /> Direct Trade</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <img 
              src={images.recipe1} 
              alt="Finishing a dish with coarse salt" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 text-ivory">
              <div>
                <span className="font-serif italic text-xl text-sand block mb-1">"The secret is never more seasoning. It is better seasoning."</span>
                <span className="font-sans text-xs tracking-widest text-ivory/70 uppercase">— Executive Chef Marcus Vance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Home