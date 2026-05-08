import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="mission" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-champagne-200 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50], rotate: [0, 360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-40 h-40 bg-neev-orange/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [100, -100, 100], y: [50, -50, 50], rotate: [360, 0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-60 h-60 bg-neev-mustard/10 rounded-full blur-2xl"
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-[#f0f2f5] rounded-full px-6 py-2.5 border border-gray-200/60 shadow-sm">
              <span className="text-black font-['Urbanist'] font-bold text-sm tracking-wide uppercase">Our Mission</span>
            </div>
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-6 leading-tight"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Where others see limitations, we build pathways to enterprise.
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center">
            <div className="font-['Urbanist'] font-normal text-black text-lg md:text-xl leading-relaxed text-center space-y-6 max-w-4xl">
              <p>
                In every community, there are women with powerful ideas that often go unseen, not because they lack ability, but because they’ve never been given access, opportunity, or belief.
              </p>
              <p className="font-semibold">
                Neev Ventures exists to change that.
              </p>
              <p>
                We work with communities that are often overlooked — from formerly incarcerated women rebuilding their lives, to migrant workers, to women navigating systemic barriers of caste, class, and circumstance. Our work is simple at its core: we find potential where the world has stopped looking.
              </p>
              <p>
                Through hands-on training, financial literacy, and entrepreneurial support, we help women transform what they already have: their skills, their resilience, their lived experiences — into sustainable livelihoods.
              </p>
              <p>
                Because the problem isn’t a lack of talent. It’s a lack of access. And when access is built, everything changes.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-bronze font-display font-normal text-sm tracking-wide uppercase px-8 py-4 rounded-full inline-flex items-center gap-3"
                >
                  <span>Read More</span>
                  <span className="w-6 h-6 bg-champagne-100 text-bronze-dark rounded-full flex justify-center items-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>

        </motion.div>

        {/* Removed: decorative circles below Mission */}
      </div>
    </section>
  )
}

export default Mission
