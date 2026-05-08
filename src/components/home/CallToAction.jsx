import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { HiSparkles } from 'react-icons/hi'

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-champagne-200">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-neev-blue/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-neev-pink/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-6 flex items-center justify-center gap-4 flex-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Join the Movement! <HiSparkles className="text-neev-pink" />
          </motion.h2>
          
          <motion.p 
            className="font-['Urbanist'] font-normal text-black text-lg md:text-xl leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Together, we can create lasting change in rural communities
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-bronze group flex items-center gap-3 px-12 py-5 rounded-full font-display font-normal tracking-wide uppercase text-sm"
              >
                <HiSparkles className="text-2xl text-champagne-100 group-hover:animate-pulse" />
                Get Involved
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
