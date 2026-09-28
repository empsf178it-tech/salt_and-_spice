import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setCursorVariant('pointer')
        setCursorText('')
      } else if (target.closest('[data-cursor="discover"]')) {
        setCursorVariant('text')
        setCursorText('DISCOVER')
      } else if (target.closest('[data-cursor="taste"]')) {
        setCursorVariant('text')
        setCursorText('TASTE')
      } else {
        setCursorVariant('default')
        setCursorText('')
      }
    }

    window.addEventListener('mouseover', handleMouseOver)
    return () => window.removeEventListener('mouseover', handleMouseOver)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'transparent',
      border: '1px solid #2A2A2A',
      height: 16,
      width: 16,
      transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
    },
    pointer: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: '#2A2A2A',
      border: '1px solid #2A2A2A',
      height: 48,
      width: 48,
      mixBlendMode: 'difference',
      transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
    },
    text: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: '#F9F6F0',
      border: 'none',
      height: 80,
      width: 80,
      mixBlendMode: 'normal',
      transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-[10px] font-sans font-semibold tracking-wider text-charcoal hidden md:flex"
      variants={variants}
      animate={cursorVariant}
    >
      {cursorVariant === 'text' && cursorText}
    </motion.div>
  )
}

export default CustomCursor