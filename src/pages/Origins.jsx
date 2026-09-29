import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { images } from '../data/images'
import { MapPin, Search, ShieldCheck, Heart, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const mapNodes = [
  { id: 'france', name: 'Brittany Coast, France', product: 'Fleur de Sel', altitude: 'Sea Level', climate: 'Atlantic Breeze & Sun', img: images.origin_salt },
  { id: 'india', name: 'Malabar Coast, India', product: 'Tellicherry Pepper', altitude: '800m Elevation', climate: 'Tropical Monsoon', img: images.origin_pepper },
  { id: 'spain', name: 'La Vera, Spain', product: 'Oak-Smoked Paprika', altitude: '450m Elevation', climate: 'Mediterranean Dry', img: images.origin_chili },
  { id: 'greece', name: 'Peloponnese, Greece', product: 'Alpine Rosemary', altitude: '1,200m Elevation', climate: 'Mountain Mediterranean', img: images.origin_herbs },
  { id: 'kashmir', name: 'Pampore, Kashmir', product: 'Saffron Strands', altitude: '1,600m Elevation', climate: 'High Valley Snowmelt', img: images.saffron }
]

const sampleBatches = {
  'SALT-FR-2026': {
    origin: 'Brittany Salt Pans, France',
    harvestDate: 'August 14, 2026',
    salinity: '99.2%',
    moisture: '3.4%',
    farmer: 'Co-op Salt Workers of Guérande',
    notes: 'Hand-skimmed during warm afternoon sea breezes. High natural magnesium retention.'
  },
  'PEPPER-IN-2026': {
    origin: 'Malabar Highlands, India',
    harvestDate: 'February 02, 2026',
    essentialOil: '4.8% Volatile Oil',
    size: '4.2mm Extra Bold Berries',
    farmer: 'Waynad Bio-Diverse Spice Guild',
    notes: 'Ripened on vine to bright scarlet prior to traditional bamboo mat sun-drying.'
  },
  'PAPRIKA-ES-2026': {
    origin: 'La Vera Valley, Spain',
    harvestDate: 'October 28, 2025',
    smokeType: 'Holm Oak Woodsmoke (15 Days)',
    astringency: 'Zero Bitterness',
    farmer: 'Herederos de La Vera Family Estate',
    notes: 'Rotated every 24 hours over low oak embers to lock in deep scarlet color.'
  }
}

const Origins = () => {
  const containerRef = useRef(null)
  const [selectedNode, setSelectedNode] = useState(mapNodes[0])
  const [batchQuery, setBatchQuery] = useState('SALT-FR-2026')
  const [activeBatchResult, setActiveBatchResult] = useState(sampleBatches['SALT-FR-2026'])

  const handleBatchSearch = (e) => {
    e.preventDefault()
    const found = sampleBatches[batchQuery.toUpperCase().trim()]
    if (found) {
      setActiveBatchResult(found)
    } else {
      setActiveBatchResult(null)
    }
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory text-charcoal overflow-hidden"
      ref={containerRef}
    >
      {/* SECTION 1: HERO & TERROIR MAP NODES */}
      <section className="min-h-[85vh] bg-charcoal text-ivory relative flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <img src={images.origin_salt} alt="Salt harvest" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-charcoal/40 to-charcoal" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs tracking-[0.25em] text-sand uppercase font-medium block mb-4"
          >
            GLOBAL SINGLE-ORIGIN TRACEABILITY
          </motion.span>
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl mb-6 text-ivory font-medium"
          >
            EVERY INGREDIENT<br/>
            <span className="italic font-normal text-sand">HAS A JOURNEY.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm tracking-widest max-w-xl mx-auto text-sand/80 font-light leading-relaxed uppercase"
          >
            From remote coastal salt pans to high alpine herb valleys. 100% direct trade with artisan farming families.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE HARVEST MAP EXPLORER */}
      <section className="py-28 bg-ivory border-y border-charcoal/10 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">MICRO-CLIMATE EXPLORER</span>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal">HARVEST TERROIRS</h2>
            </div>
            <p className="font-sans text-xs tracking-widest text-charcoal/70 max-w-md mt-4 md:mt-0">
              Click any location to reveal its unique soil composition, altitude, and climatic characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Location Selector */}
            <div className="lg:col-span-5 space-y-3">
              {mapNodes.map((node) => {
                const isActive = selectedNode.id === node.id
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left p-6 transition-all duration-300 border flex items-center justify-between ${
                      isActive 
                        ? 'bg-charcoal text-ivory border-charcoal shadow-lg' 
                        : 'bg-sand/20 text-charcoal border-charcoal/15 hover:border-charcoal/40'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] tracking-widest uppercase block font-sans ${isActive ? 'text-sand/70' : 'text-charcoal/50'}`}>
                        {node.product}
                      </span>
                      <h4 className="font-serif text-xl font-medium">{node.name}</h4>
                    </div>
                    <MapPin className={`w-5 h-5 ${isActive ? 'text-mustard' : 'text-charcoal/40'}`} />
                  </button>
                )
              })}
            </div>

            {/* Selected Terroir Detail Card */}
            <div className="lg:col-span-7 bg-sand/20 border border-charcoal/15 p-8 md:p-12 relative flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-charcoal/10">
                <img src={selectedNode.img} alt={selectedNode.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="font-sans text-xs tracking-widest text-spice uppercase font-semibold block mb-1">
                    FEATURED HARVEST
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal">{selectedNode.product}</h3>
                  <p className="font-sans text-xs text-charcoal/70">{selectedNode.name}</p>
                </div>

                <div className="space-y-3 font-sans text-xs border-y border-charcoal/15 py-4">
                  <div className="flex justify-between"><span className="text-charcoal/60">Altitude:</span> <span className="text-charcoal font-medium">{selectedNode.altitude}</span></div>
                  <div className="flex justify-between"><span className="text-charcoal/60">Micro-Climate:</span> <span className="text-charcoal font-medium">{selectedNode.climate}</span></div>
                  <div className="flex justify-between"><span className="text-charcoal/60">Trade Model:</span> <span className="text-spice font-medium">100% Direct Fair Co-op</span></div>
                </div>

                <p className="font-sans text-xs text-charcoal/80 leading-relaxed italic border-l-2 border-spice pl-3">
                  "Harvested by hand using centuries-old traditional methods without heavy mechanized equipment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DIRECT TRADE & REGENERATIVE COMMITMENTS */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">ETHICAL BENCHMARKS</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">REGENERATIVE FARMING COMMITMENT</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '100%', title: 'DIRECT TRADE', desc: 'We pay micro-farmers 35% above fair-trade market minimums.' },
            { num: '0%', title: 'SYNTHETIC PESTICIDES', desc: 'Organically grown without chemical sprays or artificial fertilizers.' },
            { num: '45+', title: 'FARMING CO-OPS', desc: 'Supporting heritage farming communities across 12 countries.' },
            { num: '100%', title: 'ZERO PLASTIC', desc: 'Shipped in recyclable amber glass jars and biodegradable refill pouches.' }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-sand/20 border border-charcoal/15 text-center shadow-sm">
              <span className="font-serif text-5xl text-spice font-bold block mb-2">{stat.num}</span>
              <h4 className="font-sans text-xs tracking-widest text-charcoal uppercase font-semibold mb-2">{stat.title}</h4>
              <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BATCH TRACEABILITY LOOKUP TOOL */}
      <section className="py-28 bg-sand/20 border-y border-charcoal/15 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">TRANSPARENCY PORTAL</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">BATCH TRACEABILITY LOOKUP</h2>
            <p className="font-sans text-xs text-charcoal/70">
              Enter your jar's batch code found on the back label to inspect lab analysis, harvest date, and farm details.
            </p>
          </div>

          <form onSubmit={handleBatchSearch} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input 
                type="text" 
                value={batchQuery}
                onChange={(e) => setBatchQuery(e.target.value)}
                placeholder="e.g. SALT-FR-2026"
                className="w-full bg-ivory border border-charcoal/20 pl-11 pr-4 py-3.5 font-sans text-xs tracking-wider text-charcoal focus:outline-none focus:border-charcoal placeholder:text-charcoal/40 uppercase"
              />
            </div>
            <button 
              type="submit" 
              className="bg-charcoal text-ivory hover:bg-spice px-8 py-3.5 font-sans text-xs tracking-widest font-semibold transition-colors"
            >
              TRACE BATCH
            </button>
          </form>

          {/* Quick preset buttons */}
          <div className="flex justify-center items-center gap-3 text-xs font-sans mb-12">
            <span className="text-charcoal/50">TRY EXAMPLE BATCHES:</span>
            {Object.keys(sampleBatches).map(code => (
              <button 
                key={code}
                onClick={() => { setBatchQuery(code); setActiveBatchResult(sampleBatches[code]); }}
                className="text-charcoal border-b border-charcoal/30 hover:border-spice pb-0.5 font-medium"
              >
                #{code}
              </button>
            ))}
          </div>

          {/* Result Card */}
          {activeBatchResult ? (
            <div className="bg-ivory border border-charcoal/20 p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-charcoal/15 pb-6 mb-8 gap-4">
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-spice uppercase font-semibold block mb-1">
                    VERIFIED BATCH AUDIT REPORT
                  </span>
                  <h3 className="font-serif text-3xl text-charcoal">{activeBatchResult.origin}</h3>
                </div>
                <div className="flex items-center space-x-2 bg-sand/30 border border-charcoal/15 px-4 py-2 rounded-full text-xs font-sans text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-spice" />
                  <span>Harvest Date: {activeBatchResult.harvestDate}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs mb-8">
                <div className="p-4 bg-sand/20 border border-charcoal/10">
                  <span className="text-charcoal/50 block mb-1">FARMING GUILD</span>
                  <span className="font-semibold text-charcoal">{activeBatchResult.farmer}</span>
                </div>
                <div className="p-4 bg-sand/20 border border-charcoal/10">
                  <span className="text-charcoal/50 block mb-1">LAB SALINITY / ESSENTIAL OIL</span>
                  <span className="font-semibold text-charcoal">{activeBatchResult.salinity || activeBatchResult.essentialOil || activeBatchResult.smokeType}</span>
                </div>
                <div className="p-4 bg-sand/20 border border-charcoal/10">
                  <span className="text-charcoal/50 block mb-1">QUALITY SPEC</span>
                  <span className="font-semibold text-charcoal">{activeBatchResult.moisture || activeBatchResult.size || activeBatchResult.astringency}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-charcoal/80 italic leading-relaxed border-l-2 border-spice pl-4">
                "{activeBatchResult.notes}"
              </p>
            </div>
          ) : (
            <div className="text-center py-12 bg-ivory border border-charcoal/15">
              <p className="font-serif text-xl text-charcoal/70">Batch code "{batchQuery}" not found in current harvest database.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: FIELD NOTES & PHOTO GALLERY */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">FIELD JOURNAL</span>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal">NOTES FROM THE TERROIR</h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {[
            { title: 'Harvesting Fleur de Sel in Brittany', date: 'August 2026', img: images.origin_salt, excerpt: 'Sun, wind, and low tide create the delicate crystal crust on salt beds.' },
            { title: 'The Sun-Drying Mats of Malabar', date: 'March 2026', img: images.origin_pepper, excerpt: 'Peppercorns undergo 7 days of constant hand-turning under tropical heat.' },
            { title: 'Slow Smoking with Holm Oak Firewood', date: 'November 2025', img: images.origin_chili, excerpt: 'Continuous oak embers impart a rich mahogany sheen and velvety sweetness.' }
          ].map((note, i) => (
            <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] bg-sand/20 border border-charcoal/15 p-6 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-charcoal/10">
                  <img src={note.img} alt={note.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="font-sans text-[10px] tracking-widest text-charcoal/50 block mb-2">{note.date}</span>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{note.title}</h3>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{note.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}

export default Origins