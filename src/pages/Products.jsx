import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { Search, SlidersHorizontal, Star, ShieldCheck, X, Check, ShoppingBag, Eye, Sparkles } from 'lucide-react'

const allProducts = [
  { id: 1, name: 'BRITTANY FLEUR DE SEL', desc: 'Hand-harvested sea salt flakes with crisp texture & oceanic salinity.', img: images.prod_fleur_de_sel || images.salt, category: 'Salts', price: 18, rating: 5.0, reviews: 42, intensity: 'Mild Crisp', origin: 'Brittany, France', size: '150g Jar' },
  { id: 2, name: 'TELLICHERRY BLACK PEPPER', desc: 'Extra-large vine-ripened black peppercorns with warm citrus aromatics.', img: images.prod_tellicherry_pepper || images.pepper, category: 'Peppers', price: 22, rating: 4.9, reviews: 38, intensity: 'Bold Warmth', origin: 'Malabar Coast, India', size: '120g Jar' },
  { id: 3, name: 'LA VERA SMOKED PAPRIKA', desc: 'Oak-wood smoked sweet paprika with deep scarlet color & rich sweetness.', img: images.prod_smoked_paprika || images.paprika, category: 'Spices', price: 19, rating: 4.9, reviews: 55, intensity: 'Smoky Sweet', origin: 'Extremadura, Spain', size: '100g Jar' },
  { id: 4, name: 'BIRDSEYE CHILI CRUSH', desc: 'Sun-dried fiery chili flakes providing immediate clean heat & vibrant aroma.', img: images.prod_chili_crush || images.blends, category: 'Spices', price: 17, rating: 4.8, reviews: 29, intensity: 'High Heat', origin: 'Calabria, Italy', size: '90g Jar' },
  { id: 5, name: 'GARLIC FLAKE GRANULES', desc: 'Slow-roasted garlic granules offering rich savory depth without bitterness.', img: images.prod_garlic_granules || images.garlic, category: 'Seasonings', price: 16, rating: 4.9, reviews: 61, intensity: 'Savory Rich', origin: 'California, USA', size: '140g Jar' },
  { id: 6, name: 'WILD MOUNTAIN ROSEMARY', desc: 'Coarsely crushed aromatic piney rosemary harvested from high elevation.', img: images.prod_mountain_rosemary || images.herbs, category: 'Herbs', price: 15, rating: 4.7, reviews: 24, intensity: 'Herbal Pine', origin: 'Peloponnese, Greece', size: '75g Jar' },
  { id: 7, name: 'KASHMIRI SAFFRON STRANDS', desc: 'Grade A1 supreme saffron threads with intoxicating floral scent.', img: images.prod_kashmiri_saffron || images.saffron, category: 'Spices', price: 45, rating: 5.0, reviews: 19, intensity: 'Floral Honey', origin: 'Pampore, Kashmir', size: '2g Glass Vial' },
  { id: 8, name: 'HIMALAYAN PINK MINERAL SALT', desc: 'Unrefined ancient rock salt rich in 84 trace minerals.', img: images.prod_himalayan_salt || images.pink_salt, category: 'Salts', price: 16, rating: 4.8, reviews: 48, intensity: 'Balanced Saline', origin: 'Punjab, Pakistan', size: '200g Jar' }
]

const giftBundles = [
  { id: 'b1', name: 'THE FINISHING SALT TRIO', desc: 'Fleur de Sel, Himalayan Pink, Smoked Maldon Salt', price: 48, originalPrice: 54, img: images.gift_set1, tag: 'BESTSELLER' },
  { id: 'b2', name: 'THE MASTER GRILL VAULT', desc: 'Tellicherry Pepper, Smoked Paprika, Chili Crush, Roasted Garlic', price: 68, originalPrice: 74, img: images.gift_set2, tag: 'CHEF FAVORITE' },
  { id: 'b3', name: 'THE GLOBAL HERB & SPICE COLLECTION', desc: 'Wild Rosemary, Kashmiri Saffron, Tellicherry Pepper, Fleur de Sel', price: 89, originalPrice: 98, img: images.gift_set3, tag: 'LIMITED EDITION' }
]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [addedToast, setAddedToast] = useState('')

  const categories = ['ALL', 'SALTS', 'PEPPERS', 'SPICES', 'HERBS', 'SEASONINGS']

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === 'ALL' || p.category.toUpperCase() === selectedCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (productName) => {
    setCartCount(prev => prev + 1)
    setAddedToast(`Added "${productName}" to your tasting box!`)
    setTimeout(() => setAddedToast(''), 3000)
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory pb-24 text-charcoal min-h-screen relative overflow-x-hidden w-full"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {addedToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-4 right-4 sm:left-auto sm:right-8 z-[100] bg-charcoal text-ivory px-5 py-3.5 rounded-md shadow-2xl flex items-center space-x-3 border border-sand/20 max-w-sm ml-auto"
          >
            <Check className="w-4 h-4 text-mustard shrink-0" />
            <span className="font-sans text-xs tracking-wider">{addedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CINEMATIC HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="min-h-[75vh] bg-charcoal text-ivory flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-28 pb-16 mb-16">
        <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
          <img src={images.amber_pantry_storage || images.hero} alt="Curated Pantry Collection" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-charcoal/40 to-charcoal" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 border border-sand/30 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6 text-sand"
          >
            <Sparkles className="w-3.5 h-3.5 text-mustard" />
            <span>ARTISANAL PANTRY HARVESTS 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl mb-6 text-ivory tracking-tight font-medium"
          >
            THE ATELIER<br/>
            <span className="italic font-normal text-sand">COLLECTION.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm tracking-widest max-w-xl mx-auto text-sand/80 font-light leading-relaxed uppercase"
          >
            Single-origin finishing salts, vine-ripened peppercorns, and oak-smoked spices harvested for culinary precision.
          </motion.p>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full box-border">
        {/* SECTION 1: SEARCH & FILTER BAR */}
        <section className="mb-16 border-b border-charcoal/10 pb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-1">CURATED PANTRY</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">BROWSE HARVESTS</h2>
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
                <input 
                  type="text"
                  placeholder="Search spices or origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-sand/20 border border-charcoal/15 rounded-none pl-11 pr-4 py-3 font-sans text-xs tracking-wider text-charcoal focus:outline-none focus:border-charcoal placeholder:text-charcoal/40"
                />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 font-sans text-[11px] sm:text-xs tracking-[0.15em] transition-all ${
                    selectedCategory === cat 
                      ? 'bg-charcoal text-ivory font-medium' 
                      : 'bg-sand/30 text-charcoal/70 hover:bg-sand/60 hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="font-sans text-xs tracking-widest text-charcoal/50">
              SHOWING {filteredProducts.length} HARVESTS
            </span>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE PRODUCT CATALOG GRID */}
        <section className="mb-32">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-sand/10 border border-charcoal/10">
              <p className="font-serif text-2xl text-charcoal/60 mb-4">No ingredients matching "{searchQuery}"</p>
              <button 
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="font-sans text-xs tracking-widest text-spice border-b border-spice pb-0.5"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group bg-sand/10 border border-charcoal/10 hover:border-charcoal/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-sand/30">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <span className="bg-charcoal/80 backdrop-blur-md text-ivory font-sans text-[9px] tracking-widest px-2.5 py-1 uppercase">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="bg-ivory text-charcoal p-3 hover:bg-sand transition-colors"
                          title="Quick View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleAddToCart(product.name)}
                          className="bg-charcoal text-ivory p-3 hover:bg-spice transition-colors"
                          title="Add to Tasting Box"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl text-charcoal group-hover:text-spice transition-colors">{product.name}</h3>
                        <span className="font-serif text-lg font-semibold text-charcoal">${product.price}</span>
                      </div>
                      <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-4">{product.desc}</p>
                      
                      <div className="flex items-center justify-between text-[11px] font-sans text-charcoal/60 pt-3 border-t border-charcoal/10">
                        <span className="truncate">{product.origin}</span>
                        <span className="font-medium text-spice">{product.intensity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <button 
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full bg-charcoal/5 hover:bg-charcoal hover:text-ivory text-charcoal font-sans text-[11px] tracking-widest py-3 transition-colors border border-charcoal/20"
                    >
                      ADD TO TASTING BOX
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 3: CURATED GIFT SETS & CHEF BUNDLES */}
        <section className="mb-24 sm:mb-32 bg-gradient-to-b from-charcoal via-charcoal to-black text-ivory p-6 sm:p-10 lg:p-16 relative overflow-hidden border border-sand/20 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-spice/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 border-b border-sand/20 pb-8 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-spice animate-pulse" />
                  <span className="font-sans text-[11px] tracking-[0.25em] text-mustard uppercase font-semibold">
                    LIMITED EDITIONS · 2026 HARVEST RESERVE
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-ivory tracking-tight">
                  CURATED TASTING BOXES
                </h2>
              </div>
              <div className="lg:max-w-md border-l-2 border-spice/60 pl-4 py-1">
                <p className="font-sans text-xs sm:text-sm text-sand/80 leading-relaxed">
                  Hand-packed in solid teak wood tasting boxes with carved horn sampling spoon &amp; sommelier pairing guide.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {giftBundles.map((bundle) => (
                <div 
                  key={bundle.id} 
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-sand/5 border border-sand/20 hover:border-sand/50 p-6 sm:p-7 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-6 relative bg-black/40 border border-sand/10">
                      <img 
                        src={bundle.img} 
                        alt={bundle.name} 
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-spice text-ivory text-[9px] tracking-[0.2em] font-sans font-semibold px-3 py-1 uppercase shadow-lg border border-ivory/20">
                          {bundle.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl text-sand group-hover:text-ivory transition-colors mb-3 leading-snug">
                      {bundle.name}
                    </h3>
                    <p className="font-sans text-xs text-ivory/70 leading-relaxed mb-6 border-b border-sand/10 pb-6">
                      {bundle.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-sand/15 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-sans text-[10px] tracking-[0.2em] text-sand/60 font-semibold uppercase">BUNDLE PRICE</span>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-serif text-2xl sm:text-3xl text-sand font-bold">${bundle.price}</span>
                        <span className="font-sans text-xs text-sand/40 line-through">${bundle.originalPrice}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleAddToCart(bundle.name)}
                      className="w-full bg-sand text-charcoal hover:bg-spice hover:text-ivory py-3.5 px-4 font-sans text-xs tracking-[0.2em] font-semibold transition-all duration-300 shadow-md text-center flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>CLAIM BUNDLE</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PURITY GUARANTEE & STANDARDS */}
        <section className="mb-24 sm:mb-32 py-12 sm:py-16 border-y border-charcoal/10">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">UNCOMPROMISED INTEGRITY</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-charcoal">THE SALT & SPICE PURITY STANDARD</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: '100% RAW & UNREFINED', desc: 'No synthetic anti-caking additives, bleach, or artificial colorants.' },
              { title: 'MICRO-BATCH MILLING', desc: 'Ground cold in small batches to preserve natural aromatics and oils.' },
              { title: 'DIRECT FARM PARTNERS', desc: 'We source 100% directly from artisan farmers at fair micro-terroir rates.' },
              { title: 'AIR-TIGHT AMBER GLASS', desc: 'Packaged in UV-blocking amber glass to guarantee 24-month peak potency.' }
            ].map((std, i) => (
              <div key={i} className="p-5 sm:p-8 bg-sand/20 border border-charcoal/10">
                <ShieldCheck className="w-8 h-8 text-spice mb-4" />
                <h4 className="font-serif text-lg sm:text-xl text-charcoal mb-2">{std.title}</h4>
                <p className="font-sans text-xs text-charcoal/70 leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CHEF REVIEWS & RATINGS */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">TESTIMONIALS</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">TRUSTED BY CULINARY ARTISTS</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {[
              { quote: "The Fleur de Sel has an unbelievable moisture structure. It stays crisp on warm proteins without melting instantly.", author: "Chef Antoine Laurent", role: "3 Michelin Stars, Paris" },
              { quote: "Tellicherry pepper usually loses fragrance after grinding. The Salt & Spice berries hit with insane floral citrus pop.", author: "Elena Rostova", role: "Executive Pastry & Savory Chef" },
              { quote: "Our kitchen switched exclusively to their Smoked Paprika. The oak aroma brings genuine wood-fire soul to every sauce.", author: "David Thorne", role: "Head Chef, Ember & Oak" }
            ].map((rev, i) => (
              <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] p-6 sm:p-8 bg-sand/10 border border-charcoal/10 flex flex-col justify-between">
                <div>
                  <div className="flex text-mustard mb-4 space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-mustard text-mustard" />
                    ))}
                  </div>
                  <p className="font-serif text-base sm:text-lg text-charcoal/90 italic leading-relaxed mb-6">"{rev.quote}"</p>
                </div>
                <div className="pt-4 border-t border-charcoal/10">
                  <h5 className="font-sans text-xs font-semibold text-charcoal tracking-wider">{rev.author}</h5>
                  <span className="font-sans text-[11px] text-charcoal/50">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK VIEW MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedProduct(null)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-ivory max-w-3xl w-full p-6 sm:p-8 md:p-12 relative flex flex-col md:flex-row gap-6 sm:gap-8 border border-charcoal/20 shadow-2xl my-auto"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-charcoal hover:text-spice p-1">
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 aspect-square bg-sand/30 overflow-hidden">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-spice uppercase font-semibold block mb-1">
                    {selectedProduct.category} · {selectedProduct.origin}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">{selectedProduct.name}</h3>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal block mb-4">${selectedProduct.price}</span>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed mb-6">{selectedProduct.desc}</p>
                  
                  <div className="space-y-2 text-xs font-sans border-t border-b border-charcoal/10 py-4 mb-6">
                    <div className="flex justify-between"><span className="text-charcoal/60">Intensity:</span> <span className="font-medium">{selectedProduct.intensity}</span></div>
                    <div className="flex justify-between"><span className="text-charcoal/60">Jar Size:</span> <span className="font-medium">{selectedProduct.size}</span></div>
                  </div>
                </div>

                <button 
                  onClick={() => { handleAddToCart(selectedProduct.name); setSelectedProduct(null); }}
                  className="w-full bg-charcoal text-ivory py-3.5 sm:py-4 font-sans text-xs tracking-widest hover:bg-spice transition-colors"
                >
                  ADD TO TASTING BOX (${selectedProduct.price})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  )
}

export default Products