import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const TanaBana = () => {
  return (
    <>
      <SEO
        title="Tana Bana"
        description="Tana Bana is a women-led venture in Faridabad transforming textile waste into handcrafted patchwork products."
        keywords="Tana Bana, Neev Ventures, patchwork, textile waste, sustainable textiles, Faridabad"
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
              <img src="/ventures/tanabana.png" alt="Tana Bana logo" className="w-full h-full object-contain p-3" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black">
              Tana Bana
            </h1>
            <p className="font-['Urbanist'] font-normal text-black/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A women-led patchwork venture creating sustainable products from textile waste.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md bg-gray-50 order-2 md:order-1">
              <img
                src="/products/laptopbag.jpeg"
                alt="Patchwork products"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 space-y-4 order-1 md:order-2">
              <p className="font-['Urbanist'] text-sm uppercase tracking-[0.2em] font-bold text-gray-500">
                About
              </p>
              <p className="font-['Urbanist'] text-black/80 leading-relaxed text-lg">
                Tana Bana is a women-led venture based in Mewla Maharajpur, Faridabad, developed in collaboration with Nisarg Agripreneurship Foundation. The women of Tana Bana breathe new life into discarded fabrics by transforming textile waste into beautifully handcrafted patchwork products including cushion covers, tote bags, laptop bags, and more. Driven by creativity, sustainability, and skill, Tana Bana turns waste into functional products, reducing textile pollution while creating meaningful livelihoods for local women artisans.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default TanaBana

