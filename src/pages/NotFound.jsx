import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { images } from '../data/images'

const NotFound = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen relative flex items-center justify-center text-center bg-charcoal"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src={images.paprika} alt="Spice texture" className="w-full h-full object-cover grayscale opacity-50" />
      </div>
      
      <div className="relative z-20 text-ivory px-6">
        <h1 className="font-serif text-6xl md:text-9xl mb-6">404</h1>
        <h2 className="font-serif text-3xl md:text-5xl mb-12">LOOKS LIKE<br/>THE FLAVOUR GOT LOST.</h2>
        <Link to="/" className="inline-block border border-ivory px-8 py-4 font-sans text-xs tracking-[0.2em] hover:bg-ivory hover:text-charcoal transition-colors">
          BACK TO THE KITCHEN →
        </Link>
      </div>
    </motion.main>
  )
}

export default NotFound