import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import BrandLogo from './BrandLogo'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isDarkHero = location.pathname !== '/contact'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'INGREDIENTS', path: '/ingredients' },
    { name: 'ORIGINS', path: '/origins' },
    { name: 'RECIPES', path: '/recipes' },
    { name: 'OUR STORY', path: '/our-story' },
  ]

  return (
    <>
      <header className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        mobileMenuOpen ? "py-6 text-charcoal" : (
          isScrolled ? "bg-ivory/90 backdrop-blur-md py-4 text-charcoal shadow-sm" :
            clsx("py-6", isDarkHero ? "text-ivory" : "text-charcoal")
        )
      )}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="relative z-50" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo />
          </Link>

          <nav className="hidden xl:flex space-x-6 2xl:space-x-8 font-sans text-xs tracking-[0.2em] font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "transition-all relative py-1 flex items-center space-x-1.5",
                    isActive
                      ? "text-spice font-bold border-b-2 border-spice"
                      : "hover:text-spice opacity-80 hover:opacity-100"
                  )}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-spice inline-block" />}
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden xl:block font-sans text-xs tracking-[0.2em] font-medium relative z-50">
            {(() => {
              const isContactActive = location.pathname === '/contact'
              return (
                <Link
                  to="/contact"
                  className={clsx(
                    "transition-all flex items-center group py-1",
                    isContactActive
                      ? "text-spice font-bold border-b-2 border-spice"
                      : "hover:text-spice opacity-90 hover:opacity-100"
                  )}
                >
                  <span>CONTACT</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )
            })()}
          </div>

          <button
            className="xl:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} className="text-charcoal" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-ivory z-40 flex flex-col justify-center items-center text-charcoal px-6"
          >
            <div className="flex flex-col space-y-6 text-center w-full max-w-sm">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={clsx(
                        "font-serif text-3xl sm:text-4xl transition-all inline-flex items-center justify-center space-x-3 py-1",
                        isActive
                          ? "text-spice font-bold italic border-b-2 border-spice pb-1 scale-105"
                          : "hover:text-spice text-charcoal/80 hover:italic"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {isActive && <span className="text-spice text-sm font-sans tracking-widest uppercase font-semibold mr-1">✦</span>}
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.08 }}
                className="pt-6 mt-4 border-t border-charcoal/20"
              >
                {(() => {
                  const isContactActive = location.pathname === '/contact'
                  return (
                    <Link
                      to="/contact"
                      className={clsx(
                        "font-sans text-sm tracking-widest transition-all inline-flex items-center justify-center space-x-2 py-2 px-4 border",
                        isContactActive
                          ? "bg-spice text-ivory border-spice font-bold"
                          : "border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>CONTACT</span>
                      <span>→</span>
                    </Link>
                  )
                })()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation