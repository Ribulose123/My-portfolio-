// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {  FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ]
  
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
          >
            Okposio Kp
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item, i) => (
                <motion.li key={i} whileHover={{ y: -2 }}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
           
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
           
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className="block py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}