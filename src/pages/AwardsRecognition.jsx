import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const AwardsRecognition = () => {
  return (
    <>
      <SEO
        title="Awards & Recognition"
        description="Honoured for the work, humbled by the women — awards and recognitions for Neev Ventures."
        keywords="Neev Ventures awards, recognition, BRICS CCI, Dr. Kiran Bedi, India Vision Foundation"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd] overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <p className="uppercase tracking-[0.3em] text-bronze text-xs md:text-sm font-bold mb-3">
              Awards &amp; Recognition
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold mb-6 text-black">
              Honoured for the work, humbled by the women.
            </h1>
            <p className="font-['Urbanist'] text-lg md:text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
              Recognition that reflects the women-led outcomes we&apos;re proud to support.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="bg-[#0b1220] p-6 flex items-center justify-center">
                  <img
                    src="/awards/blue-ocean.jpeg"
                    alt="Blue Ocean Competition"
                    className="max-h-[460px] w-auto object-contain rounded-md shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="uppercase text-[11px] tracking-[0.2em] font-bold text-bronze mb-2">Blue Ocean Competition</p>
                  <h2 className="text-xl font-['Urbanist'] font-bold text-black mb-2">Recognition</h2>
                  <p className="text-sm text-black/70 font-['Urbanist'] leading-relaxed">
                    Selected among the Top 100 globally at the Blue Ocean Entrepreneurship Competition, from over 23,000+ submissions from 173 Countries — placing us in the top 0.4% of all applicants. Neev Ventures was recognized for its innovative approach to entrepreneurship, sustainability, and women-led economic empowerment, focusing on building scalable livelihood ecosystems for underserved communities across India.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
              >
                <img
                  src="/about/impact.jpg"
                  alt="Awarded by Dr. Kiran Bedi"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="uppercase text-[11px] tracking-[0.2em] font-bold text-bronze mb-2">India Vision Foundation</p>
                  <h2 className="text-xl font-['Urbanist'] font-bold text-black mb-2">Youngest Entrepreneur Mentor Award</h2>
                  <p className="text-sm text-black/70 font-['Urbanist'] leading-relaxed">
                    Presented by Dr. Kiran Bedi — recognising mentorship of women entrepreneurs across underserved communities and a measurable,
                    on-the-ground impact model.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AwardsRecognition
