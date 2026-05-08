import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const logoSrc = '/Neevlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Ventures', path: '/our-ventures' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Media Coverage', path: '/media-coverage' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Awards & Recognition', path: '/awards-recognition' },
  ]

  return (
    <>
      <div className="h-24" /> {/* Spacer to prevent content from hiding underneath fixed navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`font-display bg-ink/70 backdrop-blur-xl border border-bronze-light/20 w-full max-w-[95%] shadow-elev-2 transition-all duration-300 ${
            isOpen ? 'rounded-3xl overflow-hidden' : 'rounded-full'
          } lg:rounded-full`}
        >
          <div className="px-6 py-3 flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 shrink-0">
              <motion.img
                src={logoSrc}
                alt="Neev Ventures logo icon"
                data-no-lightbox
                className="w-8 h-8 object-contain"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-champagne-100 font-display font-normal text-lg tracking-wide hover:text-bronze-light transition-colors duration-300">
                Neev Ventures
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-6 text-[15px] font-normal text-gray-300">
              {navLinks.map((link) => {
                const isActive = !link.anchor && location.pathname === link.path
                const textClasses = `relative font-display hover:text-white transition-colors duration-300 ${
                  isActive ? 'text-white' : ''
                }`
                return (
                  <div key={link.path}>
                    {link.anchor ? (
                      <a href={link.path} className={textClasses}>
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className={textClasses}>
                        {link.name}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Section: Get Involved Button & Mobile Toggle */}
            <div className="flex items-center space-x-4 shrink-0">
              <Link to="/contact" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-bronze font-display font-normal tracking-wide uppercase text-xs px-5 py-2.5 rounded-full flex items-center space-x-2"
                >
                  <span>Get Involved</span>
                  <span className="w-5 h-5 bg-champagne-100 text-bronze-dark rounded-full flex justify-center items-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden px-6 pb-6 pt-2 max-h-[calc(100vh-8rem)] overflow-y-auto"
            >
              {navLinks.map((link) => {
                const baseClasses = `block py-3 font-normal text-gray-300 hover:text-white transition-colors border-b border-white/5`
                return link.anchor ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={baseClasses}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={baseClasses}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="mt-6 sm:hidden">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-white text-black font-semibold text-sm px-5 py-3 rounded-full flex justify-center items-center space-x-2 shadow-sm">
                    <span>Get Involved</span>
                    <div className="w-5 h-5 bg-black rounded-full flex justify-center items-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </>
  )
}

export default Navbar
