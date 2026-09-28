import { motion } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { Flame, Droplets, Compass, Sparkles, BookOpen, CheckCircle, RefreshCw } from 'lucide-react'

const ingredientCategories = [
  { 
    id: 'salt', 
    name: 'FINISHING SALTS', 
    tagline: 'Mineral, crisp, and quietly transformative.',
    desc: 'Unrefined sea salt harvested by hand from pristine coastal pans. Rich in naturally occurring trace minerals including magnesium and potassium.',
    salinity: '95%',
    moisture: 'Crushed Flake',
    pairings: ['Seared Proteins', 'Fresh Tomatoes', 'Caramel & Chocolate'],
    images: [images.salt, images.origin_salt]
  },
  { 
    id: 'pepper', 
    name: 'VINE-RIPENED PEPPERS', 
    tagline: 'Warm aroma with a lingering, complex citrus finish.',
    desc: 'Unlike commercial black pepper harvested green, our Tellicherry peppercorns ripen to a fiery red on the vine before traditional sun-drying.',
    salinity: 'Aroma: 98%',
    moisture: 'Whole Peppercorns',
    pairings: ['Cacio e Pepe', 'Charred Steak', 'Roasted Brassicas'],
    images: [images.pepper, images.origin_pepper]
  },
  { 
    id: 'chili', 
    name: 'SUN-DRIED CHILIES', 
    tagline: 'Vibrant heat accompanied by rich smoked character.',
    desc: 'Harvested at full maturity and slow sun-dried or oak-smoked to preserve volatile capsicum oils and deep red carotenoid pigments.',
    salinity: 'Heat: 7/10',
    moisture: 'Sun Dried',
    pairings: ['Infused Oils', 'Braised Meats', 'Dark Chocolate Chili'],
    images: [images.paprika, images.origin_chili]
  },
  { 
    id: 'herbs', 
    name: 'WILD ALPINE HERBS', 
    tagline: 'Intense freshness preserved in every dried leaf layer.',
    desc: 'Grown on high-altitude Mediterranean mountainsides where harsh sunlight concentrates protective essential oils such as rosmarinic acid.',
    salinity: 'Aromatics: High',
    moisture: 'Micro-Crushed',
    pairings: ['Focus Focaccia', 'Roasted Potatoes', 'Poultry Rubs'],
    images: [images.herbs, images.origin_herbs]
  },
  { 
    id: 'spices', 
    name: 'PRECIOUS SPICES & SAFFRON', 
    tagline: 'Deep, resonant, and entirely complex.',
    desc: 'Rare botanicals like Kashmiri saffron threads and single-origin green cardamom, harvested painstakingly by hand during dawn hours.',
    salinity: 'Potency: Supreme',
    moisture: 'Hand Selected',
    pairings: ['Persian Rice', 'Curries & Stews', 'Infused Honey'],
    images: [images.saffron, images.blends]
  }
]

const QuizWidget = () => {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleSelect = (q, val) => {
    const nextAnswers = { ...answers, [q]: val }
    setAnswers(nextAnswers)
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Calculate profile
      if (nextAnswers.q1 === 'crisp') {
        setResult({
          title: 'The Artisanal Mineralist',
          desc: 'You appreciate clean textures, high oceanic salinity, and pure finishing touches that accentuate fresh ingredients.',
          rec: 'French Fleur de Sel & Tellicherry Pepper Duo'
        })
      } else if (nextAnswers.q1 === 'smoky') {
        setResult({
          title: 'The Wood-Fire Craftsman',
          desc: 'You love deep, resonant notes of oak woodsmoke, slow braises, and robust garlic rubs.',
          rec: 'Oak-Smoked Paprika & Smoked Sea Salt'
        })
      } else {
        setResult({
          title: 'The Botanical Sommelier',
          desc: 'Your palate thrives on complex floral aromas, Kashmiri saffron, and high-altitude wild rosemary.',
          rec: 'Kashmiri Saffron Threads & Alpine Herb Blend'
        })
      }
    }
  }

  const resetQuiz = () => {
    setStep(1)
    setAnswers({})
    setResult(null)
  }

  return (
    <div className="bg-charcoal text-ivory p-8 md:p-12 border border-sand/20 shadow-2xl">
      {!result ? (
        <div>
          <div className="flex justify-between items-center mb-8 border-b border-sand/20 pb-4">
            <span className="font-sans text-xs tracking-widest text-sand uppercase font-semibold">
              FLAVOUR PROFILE QUIZ · STEP {step} OF 3
            </span>
            <Sparkles className="w-4 h-4 text-mustard" />
          </div>

          {step === 1 && (
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-sand">What flavor profile speaks most to your cooking?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { key: 'crisp', label: 'Crisp Oceanic Salinity & Freshness' },
                  { key: 'smoky', label: 'Deep Oak Smoke & Savory Heat' },
                  { key: 'aromatic', label: 'Floral Aromatics & Herbal Complexity' }
                ].map(opt => (
                  <button 
                    key={opt.key}
                    onClick={() => handleSelect('q1', opt.key)}
                    className="p-6 bg-sand/10 hover:bg-sand/20 border border-sand/20 text-left font-sans text-xs tracking-wider transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-sand">How do you usually prepare your dishes?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { key: 'grill', label: 'High-Heat Grilling & Pan-Searing' },
                  { key: 'slow', label: 'Slow Simmering, Soups & Stews' },
                  { key: 'fresh', label: 'Raw Vegetables, Salads & Finishing Touches' }
                ].map(opt => (
                  <button 
                    key={opt.key}
                    onClick={() => handleSelect('q2', opt.key)}
                    className="p-6 bg-sand/10 hover:bg-sand/20 border border-sand/20 text-left font-sans text-xs tracking-wider transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-sand">Select your preferred intensity level:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { key: 'subtle', label: 'Subtle & Balanced' },
                  { key: 'medium', label: 'Medium & Warm' },
                  { key: 'intense', label: 'Intense & Fiery' }
                ].map(opt => (
                  <button 
                    key={opt.key}
                    onClick={() => handleSelect('q3', opt.key)}
                    className="p-6 bg-sand/10 hover:bg-sand/20 border border-sand/20 text-left font-sans text-xs tracking-wider transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-4">
          <span className="font-sans text-xs tracking-widest text-mustard uppercase font-semibold block mb-2">YOUR RECOMMENDATION RESULT</span>
          <h3 className="font-serif text-3xl md:text-4xl text-sand mb-4">{result.title}</h3>
          <p className="font-sans text-sm text-ivory/80 max-w-lg mx-auto mb-8 leading-relaxed">{result.desc}</p>
          
          <div className="bg-sand/10 border border-sand/30 p-6 inline-block mb-8">
            <span className="font-sans text-[10px] tracking-widest text-sand uppercase block mb-1">RECOMMENDED HARVEST</span>
            <span className="font-serif text-xl text-ivory">{result.rec}</span>
          </div>

          <div>
            <button 
              onClick={resetQuiz} 
              className="inline-flex items-center space-x-2 text-xs font-sans tracking-widest text-sand hover:text-ivory border-b border-sand pb-1"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" /> TAKE QUIZ AGAIN
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const Ingredients = () => {
  const [activeTab, setActiveTab] = useState('salt')

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory text-charcoal"
    >
      {/* SECTION 1: HERO & CONCEPT */}
      <section className="min-h-[80vh] bg-charcoal text-ivory flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img src={images.amber_pantry_storage || images.hero} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center space-x-2 border border-sand/30 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-8 text-sand"
          >
            <Compass className="w-3.5 h-3.5 text-mustard" />
            <span>Botanical & Mineral Encyclopedia</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-8xl mb-6"
          >
            KNOW YOUR SPICE.
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm tracking-widest max-w-xl mx-auto text-sand/80 font-light leading-relaxed uppercase"
          >
            Explore the essential minerals, essential oils, and flavor alchemy that define pure seasoning.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: DEEP-DIVE INGREDIENT EXPLORER */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 border-b border-charcoal/10 pb-8 flex flex-wrap gap-4 justify-center">
          {ingredientCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 font-sans text-xs tracking-[0.2em] transition-all border ${
                activeTab === cat.id 
                  ? 'bg-charcoal text-ivory border-charcoal' 
                  : 'bg-sand/20 text-charcoal/70 border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {ingredientCategories.filter(c => c.id === activeTab).map(cat => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">
                  CATEGORY PROFILE
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-4">{cat.name}</h2>
                <p className="font-serif text-2xl text-charcoal/70 italic">"{cat.tagline}"</p>
              </div>

              <p className="font-sans text-sm text-charcoal/80 leading-relaxed">{cat.desc}</p>

              <div className="grid grid-cols-2 gap-4 border-y border-charcoal/10 py-6 font-sans text-xs">
                <div>
                  <span className="text-charcoal/50 uppercase tracking-widest block mb-1">Purity Meter:</span>
                  <span className="font-semibold text-charcoal">{cat.salinity}</span>
                </div>
                <div>
                  <span className="text-charcoal/50 uppercase tracking-widest block mb-1">Moisture / Cut:</span>
                  <span className="font-semibold text-charcoal">{cat.moisture}</span>
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs tracking-widest text-charcoal uppercase mb-3 font-semibold">RECOMMENDED USES:</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.pairings.map((p, i) => (
                    <span key={i} className="bg-sand/40 border border-charcoal/10 px-4 py-2 text-xs font-sans text-charcoal">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-sand/30 shadow-md">
                <img src={cat.images[0]} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-sand/30 shadow-md mt-8">
                <img src={cat.images[1]} alt={cat.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* SECTION 3: SPICE MILLING & STORAGE GUIDE */}
      <section className="py-28 bg-sand/20 border-y border-charcoal/10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">CULINARY SCIENCE</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">PRESERVING VOLATILE AROMATICS</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              { title: 'WHOLE VS PRE-GROUND', desc: 'Pre-ground spices lose up to 60% of their aromatic essential oils within 30 days of oxygen exposure. We mill in cold micro-batches on order date.' },
              { title: 'AMBER GLASS SHIELD', desc: 'Ultraviolet light degrades sensitive carotenoids and chlorophyll. Our custom amber violet glass blocks harmful light frequencies while retaining peak potency.' },
              { title: 'THE FINISHING TECHNIQUE', desc: 'Adding sea salt flakes during the final 30 seconds of cooking preserves the delicate pyramid flake structure for maximum textural crunch on the palate.' }
            ].map((item, i) => (
              <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] bg-ivory border border-charcoal/10 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <BookOpen className="w-6 h-6 text-spice" />
                  <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TERROIR & SALT MINERALITY MATRIX */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">COMPARATIVE ANALYSIS</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">THE MINERAL TERROIR CHART</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-charcoal text-charcoal uppercase tracking-widest text-[11px] bg-sand/30">
                <th className="p-4">Salt Type</th>
                <th className="p-4">Origin Region</th>
                <th className="p-4">Flake Structure</th>
                <th className="p-4">Key Mineral Notes</th>
                <th className="p-4">Best Culinary Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10 text-charcoal/80">
              <tr className="hover:bg-sand/10">
                <td className="p-4 font-serif text-lg font-semibold text-charcoal">Fleur de Sel</td>
                <td className="p-4">Guérande, France</td>
                <td className="p-4">Moist Delicate Pyramid Flakes</td>
                <td className="p-4">Magnesium, Calcium, Marine Salinity</td>
                <td className="p-4 font-semibold text-spice">Cold Finishing & Proteins</td>
              </tr>
              <tr className="hover:bg-sand/10">
                <td className="p-4 font-serif text-lg font-semibold text-charcoal">Himalayan Pink</td>
                <td className="p-4">Khewara, Pakistan</td>
                <td className="p-4">Dense Crystalline Rock</td>
                <td className="p-4">Iron Oxide, 84 Trace Elements</td>
                <td className="p-4 font-semibold text-spice">Everyday Cooking & Grilling</td>
              </tr>
              <tr className="hover:bg-sand/10">
                <td className="p-4 font-serif text-lg font-semibold text-charcoal">Oak-Smoked Maldon</td>
                <td className="p-4">Essex, United Kingdom</td>
                <td className="p-4">Large Coarse Flakes</td>
                <td className="p-4">Natural Oak Woodsmoke Infusion</td>
                <td className="p-4 font-semibold text-spice">Roasted Meats & Vegetables</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE CUSTOM SEASONING QUIZ */}
      <section className="py-28 bg-ivory px-6 md:px-12 border-t border-charcoal/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">PERSONALIZED SOMMELIER</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">FIND YOUR SIGNATURE PROFILE</h2>
          </div>

          <QuizWidget />
        </div>
      </section>
    </motion.main>
  )
}

export default Ingredients