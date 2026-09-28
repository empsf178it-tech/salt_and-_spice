import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion'

import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import Ingredients from './pages/Ingredients'
import Origins from './pages/Origins'
import Recipes from './pages/Recipes'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/origins" element={<Origins />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App