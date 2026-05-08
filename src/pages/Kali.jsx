import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const Kali = () => {
  return (
    <>
      <SEO
        title="Kali"
        description="Kali is a women-led enterprise in Sehjawas Gaon, Haryana, transforming floral waste into sustainable products."
        keywords="Kali, Neev Ventures, floral waste, sustainable products, rural women, Haryana"
      />

      <div className="min-h-screen bg-[#fdfdfd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="mx-auto w-24 h-24 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">
              <img src="/ventures/kali.png" alt="Kali logo" className="w-full h-full object-contain p-3" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black">
              Kali
            </h1>
            <p className="font-['Urbanist'] font-normal text-black/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A women-led enterprise turning floral waste into sustainable, community-made products.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 space-y-4">
              <p className="font-['Urbanist'] text-sm uppercase tracking-[0.2em] font-bold text-gray-500">
                About
              </p>
              <p className="font-['Urbanist'] text-black/80 leading-relaxed text-lg">
                Our journey began with Kali, a women-led enterprise in Sehjawas Gaon, Haryana, created in collaboration with Navjyoti India Foundation. Kali brings together rural women artisans who transform flowers and floral waste into sustainable products such as holi colors, dhoop batti, and candles. Rooted in tradition, sustainability, and empowerment, Kali promotes environmentally conscious alternatives to chemical-based products.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-gray-50">
              <img
                src="/products/gulal.png"
                alt="Kali products"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default Kali

