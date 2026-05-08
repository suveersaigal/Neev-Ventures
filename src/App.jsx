import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Resources from './pages/Resources'
import OurVentures from './pages/OurVentures'
import Contact from './pages/Contact'
import Navjeevan from './pages/Navjeevan'
import Kali from './pages/Kali'
import TanaBana from './pages/TanaBana'
import Partnerships from './pages/Partnerships'
import MediaCoverage from './pages/MediaCoverage'
import AwardsRecognition from './pages/AwardsRecognition'
import ImageLightbox from './components/ImageLightbox'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-champagne-200 text-ink font-body">
        <Navbar />
        <ImageLightbox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-ventures" element={<OurVentures />} />
          <Route path="/navjeevan" element={<Navjeevan />} />
          <Route path="/ventures/kali" element={<Kali />} />
          <Route path="/ventures/tana-bana" element={<TanaBana />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/awards-recognition" element={<AwardsRecognition />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
