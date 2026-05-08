import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 relative overflow-hidden font-['Urbanist']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <img src="/Neevlogo.png" alt="Neev Ventures logo" className="w-24 h-24 object-contain bg-white/5 p-2 rounded-2xl border border-white/10" />
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-neev-gold to-neev-orange bg-clip-text text-transparent mb-3">
                Neev Ventures
              </h3>
              <p className="text-gray-300 font-normal text-lg mb-4">
                From Our Villages, For Our Future
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                Empowering rural women through financial literacy, entrepreneurship, and sustainable product creation.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-xl mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block font-normal">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block font-normal">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-ventures" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block font-normal">
                  Our Ventures
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block font-normal">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 inline-block font-normal">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500 font-normal tracking-wide">
            © {new Date().getFullYear()} Neev Ventures. All rights reserved. Made with care.
          </p>
        </div>
      </div>
      
      {/* Subtle background gradient elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neev-gold/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-neev-orange/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </footer>
  )
}

export default Footer
