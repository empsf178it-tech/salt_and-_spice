import { motion } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { Award, Compass, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react'

const timeline = [
  { year: '1998', title: 'THE BRITTANY DISCOVERY', desc: 'Our founders visited the ancient coastal salt pans of Guérande, discovering how hand-skimmed Fleur de Sel transformed humble dishes.' },
  { year: '2012', title: 'DIRECT SPICE ALLIANCES', desc: 'Established our first direct fair-trade co-op partnerships with mountain pepper growers in Malabar and smoked paprika estates in La Vera.' },
  { year: '2020', title: 'ZERO-PLASTIC & AMBER GLASS', desc: 'Transitioned 100% of our packaging to recyclable UV amber glass jars and compostable plant-fiber refill pouches.' },
  { year: '2026', title: 'THE GLOBAL TASTING NETWORK', desc: 'Now supplying over 250 Michelin-starred kitchens and home culinary enthusiasts across 35 countries.' }
]

const OurStory = () => {
  const [activeEra, setActiveEra] = useState(0)

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory text-charcoal"
    >
      {/* SECTION 1: HERO */}
      <section className="min-h-[85vh] bg-charcoal text-ivory flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src={images.craftsmanship} alt="Craftsmanship" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs tracking-[0.25em] text-sand uppercase font-medium block mb-4"
          >
            OUR HERITAGE & MANIFESTO
          </motion.span>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl mb-8 leading-[0.95]"
          >
            WE BELIEVE<br/>
            <span className="italic text-sand font-normal">INGREDIENTS MATTER.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-sm tracking-widest max-w-xl mx-auto text-sand/80 font-light leading-relaxed uppercase"
          >
            "We set out to return dignity, minerality, and pure essential aromatics to the kitchen pantry."
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE HERITAGE TIMELINE */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-charcoal/10">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">MILESTONES</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">THE SALT & SPICE JOURNEY</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            {timeline.map((era, i) => (
              <button
                key={era.year}
                onClick={() => setActiveEra(i)}
                className={`w-full text-left p-6 transition-all border ${
                  activeEra === i 
                    ? 'bg-charcoal text-ivory border-charcoal shadow-lg' 
                    : 'bg-sand/20 text-charcoal border-charcoal/10 hover:border-charcoal/30'
                }`}
              >
                <span className={`font-serif text-2xl font-bold block mb-1 ${activeEra === i ? 'text-sand' : 'text-spice'}`}>
                  {era.year}
                </span>
                <h4 className="font-sans text-xs tracking-widest uppercase font-semibold">{era.title}</h4>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-sand/20 border border-charcoal/10 p-8 md:p-16 relative">
            <span className="font-serif text-6xl text-spice/30 font-bold block mb-4">{timeline[activeEra].year}</span>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">{timeline[activeEra].title}</h3>
            <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed max-w-xl">{timeline[activeEra].desc}</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ARTISANAL CRAFTSMANSHIP & MILLING */}
      <section className="py-24 sm:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-sand/30 shadow-2xl">
            <img src={images.story} alt="Our Approach" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 lg:px-8 max-w-2xl mx-auto lg:mx-0">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block">
              SMALL-BATCH PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-charcoal leading-tight">
              COLD MILLING &amp; SENSORY BALANCE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              Industrial spice processing uses high-speed steel blades that generate friction heat, evaporating delicate essential oils. Our master millers use cold granite stones operating at low RPM to ensure every jar retains its vibrant aroma.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4 font-serif text-xl sm:text-2xl text-charcoal border-t border-charcoal/10">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-charcoal/50 uppercase block mb-1">Milling Method</span>
                Granite Cold Stone
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-widest text-charcoal/50 uppercase block mb-1">Batch Limit</span>
                50 Jars Per Run
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PHILOSOPHY & VALUES */}
      <section className="py-32 bg-sand/30 border-y border-charcoal/10 text-charcoal px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">FOUR PILLARS</span>
            <h2 className="font-serif text-4xl md:text-6xl">OUR GUIDING PRINCIPLES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'ORIGIN', desc: 'Single-origin sourcing from verified micro-terroirs.' },
              { title: 'QUALITY', desc: 'Rigorous lab testing for purity, zero anti-caking agents.' },
              { title: 'CRAFT', desc: 'Cold stone milling and traditional wood-fire smoking.' },
              { title: 'FLAVOUR', desc: 'Calibrated ratios for maximum culinary transformation.' }
            ].map((val, i) => (
              <div key={val.title} className="bg-ivory p-8 border border-charcoal/10 shadow-sm space-y-4">
                <span className="font-sans text-xs tracking-widest text-spice font-bold">0{i + 1}</span>
                <h3 className="font-serif text-3xl text-charcoal">{val.title}</h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRESS & CRITICAL ACCLAIM */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">PRESS &amp; HONORS</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">CRITICAL ACCLAIM</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[
            { quote: "Salt & Spice has done for finishing salts what specialty coffee roasted beans did for morning espresso.", publication: "VOGUE ENTERTAINING" },
            { quote: "The aromatics of their Tellicherry peppercorns are intoxicating. Essential for any serious chef's pantry.", publication: "FOOD & WINE MAGAZINE" },
            { quote: "A masterclass in uncompromised single-origin sourcing and beautiful zero-plastic packaging.", publication: "SAVEUR JOURNAL" }
          ].map((press, i) => (
            <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] p-6 sm:p-8 bg-sand/10 border border-charcoal/10 flex flex-col justify-between text-center">
              <p className="font-serif text-xl text-charcoal/90 italic leading-relaxed mb-8">"{press.quote}"</p>
              <span className="font-sans text-xs tracking-[0.2em] font-semibold text-spice border-t border-charcoal/10 pt-4 uppercase">
                {press.publication}
              </span>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default OurStory