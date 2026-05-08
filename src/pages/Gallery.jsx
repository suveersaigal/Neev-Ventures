import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const imageItems = [
  { id: 1, src: '/products/womanstitching.png', title: 'Women artisans', caption: 'Artisan-led workshops' },
  { id: 2, src: '/products/laptopbag.jpeg', title: 'Patchwork', caption: 'Sustainable textiles' },
  { id: 3, src: '/products/gulal.png', title: 'Holi colors', caption: 'Natural pigments' },
  { id: 4, src: '/products/village moments.jpg', title: 'A Day in The Life', caption: 'Behind the Scenes of the Neev Community' },
  { id: 5, src: '/gallery/image-5.jpg', title: 'Craftwork', caption: 'Skill Development' },
  { id: 6, src: '/gallery/image-6.jpg', title: 'Candle Making', caption: 'Hand-poured creations' },
  { id: 7, src: '/our-model/workshopsimage.jpg', title: 'Workshops', caption: 'in-person training sessions' },
]

const Gallery = () => {
  return (
    <>
      <SEO 
        title="Gallery"
        description="Explore photos from Neev Ventures workshops, products, and the inspiring women we work with."
        keywords="gallery, photos, workshops, rural women, products, behind the scenes"
      />
      <div className="min-h-screen bg-[#fdfdfd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-4">
              Our Gallery
            </h1>
            <p className="font-['Urbanist'] font-normal text-black text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Capturing moments of transformation, empowerment, and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageItems.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-[#f0f2f5] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${index === 6 ? 'lg:col-start-2 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[240px] object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-center space-y-2">
                  <p className="font-['Urbanist'] text-lg font-bold text-black">{image.title}</p>
                  <p className="font-['Urbanist'] text-sm uppercase tracking-[0.2em] font-semibold text-gray-500">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
