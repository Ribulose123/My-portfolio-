// components/ui/CustomCursor.jsx
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaFigma 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript,
  SiAdobexd
} from 'react-icons/si'

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [currentIcon, setCurrentIcon] = useState(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Tech icons to cycle through
  const techIcons = [
    <FaReact className="text-blue-500 text-xl" />,
    <SiNextdotjs className="text-black dark:text-white text-xl" />,
    <FaJs className="text-yellow-400 text-xl" />,
    <SiTailwindcss className="text-cyan-400 text-xl" />,
    <SiTypescript className="text-blue-600 text-xl" />,
    <FaNodeJs className="text-green-500 text-xl" />,
    <FaFigma className="text-purple-500 text-xl" />,
    <SiAdobexd className="text-pink-500 text-xl" />
  ]

  // Check if touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  // Mouse movement effect
  useEffect(() => {
    if (isTouchDevice) return

    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    // Change cursor state on hover
    const handleLinkHover = () => setCursorVariant('link')
    const handleLinkLeave = () => setCursorVariant('default')

    document.addEventListener('mousemove', moveCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor="link"]'
    )
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover)
      el.addEventListener('mouseleave', handleLinkLeave)
    })

    // Cycle through icons every 2 seconds
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % techIcons.length)
    }, 2000)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover)
        el.removeEventListener('mouseleave', handleLinkLeave)
      })
      clearInterval(iconInterval)
    }
  }, [isTouchDevice, techIcons.length])

  // Cursor variants
  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      mixBlendMode: 'difference',
    },
    link: {
      width: 64,
      height: 64,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    }
  }

  
  if (isTouchDevice) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      variants={cursorVariants}
      initial="default"
      animate={{
        ...cursorVariants[cursorVariant],
        x: cursorPosition.x - 16,
        y: cursorPosition.y - 16,
        transition: { type: 'spring', mass: 0.1, duration: 0.3 }
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {cursorVariant === 'default' ? (
          <motion.div
            key={currentIcon}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            {techIcons[currentIcon]}
          </motion.div>
        ) : (
          <div className="text-black text-sm font-medium">View</div>
        )}
      </div>
    </motion.div>
  )
}