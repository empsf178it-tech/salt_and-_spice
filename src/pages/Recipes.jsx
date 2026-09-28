import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { images } from '../data/images'
import { Clock, ChefHat, Flame, Search, X, Sparkles, BookOpen, Utensils, Heart } from 'lucide-react'

const recipeList = [
  { 
    id: 1, 
    title: 'ROASTED HERB & GARLIC POTATOES', 
    category: 'ROAST',
    seasoning: 'Alpine Rosemary · Fleur de Sel · Garlic Flakes', 
    time: '40 MIN', 
    diff: 'EASY', 
    servings: '4 Servings',
    img: images.recipe1,
    ingredientsList: [
      '1.5kg Baby Yukon Gold Potatoes, halved',
      '2 tbsp Wild Mountain Rosemary, crushed',
      '1 tbsp Roasted Garlic Granules',
      '1.5 tbsp French Fleur de Sel Flakes',
      '3 tbsp Extra Virgin Olive Oil'
    ],
    instructions: '1. Preheat oven to 220°C (425°F).\n2. Toss potatoes with olive oil, garlic granules, and half the rosemary.\n3. Roast for 35 minutes until golden and crispy.\n4. Remove from oven and immediately finish with Fleur de Sel flakes and remaining wild rosemary before serving.'
  },
  { 
    id: 2, 
    title: 'TELLICHERRY CACIO E PEPE PASTA', 
    category: 'PASTA',
    seasoning: 'Tellicherry Black Pepper · Sea Salt', 
    time: '20 MIN', 
    diff: 'MEDIUM', 
    servings: '2 Servings',
    img: images.recipe2,
    ingredientsList: [
      '200g Spaghetti or Tonnarelli',
      '2 tbsp Whole Tellicherry Black Peppercorns (coarsely cracked)',
      '1.5 cups Pecorino Romano, freshly grated',
      '1 tsp Sea Salt for pasta water'
    ],
    instructions: '1. Crack Tellicherry peppercorns coarsely in a mortar and pestle.\n2. Toast cracked pepper in a dry skillet over medium heat for 90 seconds until fragrant.\n3. Boil pasta in salted water until al dente.\n4. Add 1/2 cup starchy pasta water to pepper skillet, add pasta, remove from heat, and vigorously stir in Pecorino Romano until creamy.'
  },
  { 
    id: 3, 
    title: 'OAK-SMOKED SPICED ROAST CHICKEN', 
    category: 'ROAST',
    seasoning: 'Oak-Smoked Paprika · Thyme · Sea Salt', 
    time: '1 HR 20 MIN', 
    diff: 'MEDIUM', 
    servings: '4 Servings',
    img: images.recipe3,
    ingredientsList: [
      '1 Whole Organic Chicken (approx. 1.8kg)',
      '2 tbsp La Vera Oak-Smoked Paprika',
      '1 tbsp Dried Wild Thyme',
      '1.5 tbsp Himalayan Pink Salt',
      '50g Softened Unsalted Butter'
    ],
    instructions: '1. Mix butter, smoked paprika, thyme, and salt into a smooth paste.\n2. Gently rub paste beneath the skin and over the exterior of chicken.\n3. Roast at 190°C (375°F) for 1 hour 15 minutes until internal temp reaches 74°C (165°F).\n4. Rest for 15 minutes before carving.'
  },
  { 
    id: 4, 
    title: 'CHARRED STREET CORN WITH CHILI CRUSH', 
    category: 'GRILL',
    seasoning: 'Birdseye Chili Crush · Fleur de Sel · Lime', 
    time: '15 MIN', 
    diff: 'EASY', 
    servings: '4 Ears',
    img: images.recipe4,
    ingredientsList: [
      '4 Fresh Corn ears, husked',
      '1 tsp Birdseye Chili Crush',
      '1 tbsp Fleur de Sel',
      '3 tbsp Cotija or Feta cheese',
      'Lime wedges & Cilantro'
    ],
    instructions: '1. Grill corn ears directly over open flames until charred on all sides (8-10 minutes).\n2. Brush with melted butter or crema.\n3. Sprinkle generously with Birdseye chili crush, Fleur de Sel flakes, and crumbled cheese. Serve with fresh lime juice.'
  },
  { 
    id: 5, 
    title: 'PAN-SEARED RIBEYE WITH FINISHING SALTS', 
    category: 'GRILL',
    seasoning: 'Tellicherry Pepper · Fleur de Sel', 
    time: '25 MIN', 
    diff: 'ADVANCED', 
    servings: '2 Servings',
    img: images.recipe5,
    ingredientsList: [
      '2 Prime Bone-in Ribeye Steaks (400g each)',
      '1 tbsp Coarsely Ground Black Pepper',
      '1 tbsp Fleur de Sel Flakes',
      '3 tbsp Clarified Butter',
      '2 sprigs Fresh Rosemary'
    ],
    instructions: '1. Season steaks with cracked pepper 30 mins prior to cooking.\n2. Sear in screaming-hot cast iron skillet with butter for 3-4 mins per side.\n3. Baste with butter and rosemary during final minute.\n4. Rest steak for 8 minutes, slice, and finish generously with Fleur de Sel flakes.'
  },
  { 
    id: 6, 
    title: 'SAFFRON & CARDAMOM RICE PILAF', 
    category: 'COMFORT',
    seasoning: 'Kashmiri Saffron · Green Cardamom · Sea Salt', 
    time: '35 MIN', 
    diff: 'MEDIUM', 
    servings: '6 Servings',
    img: images.recipe6,
    ingredientsList: [
      '2 cups Long-grain Basmati Rice',
      '15 Kashmiri Saffron Threads steep in 1/4 cup warm milk',
      '4 Green Cardamom pods, bruised',
      '1 tsp Himalayan Pink Salt',
      '2 tbsp Ghee'
    ],
    instructions: '1. Rinse rice until water runs clear.\n2. Sauté cardamom pods in ghee for 1 minute.\n3. Add rice, water, and salt. Simmer covered for 15 minutes.\n4. Drizzle saffron-infused milk over rice, cover for 5 mins, fluff with fork and serve.'
  }
]

const masterclassGuides = [
  { title: 'BLOOMING SPICES IN FAT', desc: 'To release fat-soluble aromatics in cumin, paprika, and peppercorns, gently warm them in butter or oil for 60 seconds before adding liquids.' },
  { title: 'THE TIMING OF FINISHING SALTS', desc: 'Never cook delicate sea salt flakes inside boiled sauces. Add Fleur de Sel at the table right before eating to preserve its textural crunch.' },
  { title: 'CRACKED VS FINELY GROUND PEPPER', desc: 'Coarsely cracked peppercorns provide bursts of warm citrus, whereas fine pepper powder spreads heat evenly throughout broth bases.' }
]

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['ALL', 'ROAST', 'PASTA', 'GRILL', 'COMFORT']

  const filteredRecipes = recipeList.filter(r => {
    const matchCat = activeCategory === 'ALL' || r.category === activeCategory
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.seasoning.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ivory text-charcoal pt-28 pb-24 min-h-screen"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* SECTION 1: HERO & FILTER BAR */}
        <section className="mb-16 border-b border-charcoal/10 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">CULINARY KITCHEN</span>
              <h1 className="font-serif text-5xl md:text-7xl text-charcoal">SEASON WITH INTENTION</h1>
              <p className="font-sans text-sm text-charcoal/70 max-w-xl mt-3">
                Crafted recipes designed to highlight single-origin salts, smoked spices, and freshly milled peppers.
              </p>
            </div>

            <div className="relative md:w-72">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input 
                type="text"
                placeholder="Search recipe or spice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-sand/20 border border-charcoal/15 pl-11 pr-4 py-3 font-sans text-xs tracking-wider text-charcoal focus:outline-none focus:border-charcoal placeholder:text-charcoal/40"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-sans text-xs tracking-[0.15em] transition-all ${
                  activeCategory === cat 
                    ? 'bg-charcoal text-ivory font-medium' 
                    : 'bg-sand/30 text-charcoal/70 hover:bg-sand/60 hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE RECIPES GRID */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-sand/10 border border-charcoal/10 hover:border-charcoal/30 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-sand/30">
                    <img 
                      src={recipe.img} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <span className="absolute top-3 left-3 bg-charcoal/80 text-ivory font-sans text-[9px] tracking-widest px-2.5 py-1 uppercase">
                      {recipe.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-ivory text-charcoal font-sans text-[10px] tracking-widest px-2.5 py-1 uppercase font-semibold">
                      {recipe.time}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="font-serif text-2xl text-charcoal group-hover:text-spice transition-colors mb-3">
                      {recipe.title}
                    </h2>
                    <p className="font-sans text-xs text-charcoal/70 mb-4">{recipe.seasoning}</p>
                    
                    <div className="flex items-center justify-between font-sans text-[11px] text-charcoal/50 pt-3 border-t border-charcoal/10 uppercase tracking-widest">
                      <span>{recipe.diff}</span>
                      <span>{recipe.servings}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button className="w-full bg-charcoal/5 hover:bg-charcoal hover:text-ivory text-charcoal font-sans text-[11px] tracking-widest py-3 transition-colors border border-charcoal/20">
                    VIEW RECIPE & INGREDIENTS →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CHEF MASTERCLASS TECHNIQUES */}
        <section className="mb-32 bg-charcoal text-ivory p-8 md:p-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-sand uppercase font-semibold block mb-2">CHEF'S HANDBOOK</span>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">SEASONING TECHNIQUES</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {masterclassGuides.map((guide, i) => (
              <div key={i} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] p-6 sm:p-8 bg-sand/10 border border-sand/20 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <ChefHat className="w-7 h-7 text-mustard" />
                  <h3 className="font-serif text-2xl text-sand">{guide.title}</h3>
                  <p className="font-sans text-xs text-ivory/70 leading-relaxed">{guide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SEASONAL PAIRING MATRIX */}
        <section className="mb-32 py-16 border-y border-charcoal/10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">SEASONAL HARMONY</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">THE FOUR-SEASON FLAVOUR WHEEL</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { season: 'SPRING', dish: 'Asparagus & Poached Eggs', spice: 'Fleur de Sel & Pink Peppercorn' },
              { season: 'SUMMER', dish: 'Heirloom Tomato Carpaccio', spice: 'Flake Sea Salt & Wild Rosemary' },
              { season: 'AUTUMN', dish: 'Roasted Squash & Braised Meats', spice: 'La Vera Smoked Paprika & Thyme' },
              { season: 'WINTER', dish: 'Beef Stew & Cardamom Rice', spice: 'Tellicherry Pepper & Saffron' }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-sand/20 border border-charcoal/10 text-center">
                <span className="font-serif text-xl font-bold text-spice block mb-2">{s.season}</span>
                <h4 className="font-serif text-2xl text-charcoal mb-2">{s.dish}</h4>
                <p className="font-sans text-xs text-charcoal/70 italic">Pairing: {s.spice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: COMMUNITY CULINARY GALLERY */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-[0.25em] text-spice uppercase font-semibold block mb-2">COMMUNITY SHOWCASE</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">#SALTANDSPICE DISHES</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[images.recipe1, images.recipe2, images.recipe3, images.recipe4].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-sand/30 relative group">
                <img src={img} alt="Community dish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-ivory font-sans text-xs tracking-widest">
                  @saltandspice_kitchen
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECIPE DETAIL MODAL */}
        {selectedRecipe && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRecipe(null)}>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-ivory max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative flex flex-col md:flex-row gap-8 border border-charcoal/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedRecipe(null)} className="absolute top-4 right-4 text-charcoal hover:text-spice">
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 aspect-square bg-sand/30 overflow-hidden">
                <img src={selectedRecipe.img} alt={selectedRecipe.title} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-spice uppercase font-semibold block mb-1">
                    {selectedRecipe.category} · {selectedRecipe.time} · {selectedRecipe.diff}
                  </span>
                  <h3 className="font-serif text-3xl text-charcoal mb-2">{selectedRecipe.title}</h3>
                  <p className="font-sans text-xs text-charcoal/70 italic border-l-2 border-spice pl-3">{selectedRecipe.seasoning}</p>
                </div>

                <div>
                  <h4 className="font-sans text-xs tracking-widest text-charcoal uppercase mb-3 font-semibold">INGREDIENTS:</h4>
                  <ul className="space-y-1.5 font-sans text-xs text-charcoal/80">
                    {selectedRecipe.ingredientsList.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-spice mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans text-xs tracking-widest text-charcoal uppercase mb-3 font-semibold">INSTRUCTIONS:</h4>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed whitespace-pre-line">
                    {selectedRecipe.instructions}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  )
}

export default Recipes