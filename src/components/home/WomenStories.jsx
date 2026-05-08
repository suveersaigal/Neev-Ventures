import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiSparkles } from 'react-icons/hi'
import homeWomenStories from '../../data/homeWomenStories'

const stories = homeWomenStories

const formatStoryMeta = (story) => {
  const parts = []
  if (story.age) parts.push(`Age ${story.age}`)
  if (story.location) parts.push(story.location)
  return parts.join(' • ')
}

const WomenStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="womens-stories"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-champagne-100 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-80 h-80 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-neev-blue/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Women's Stories
          </motion.h2>
	          <p className="font-['Urbanist'] font-normal text-black text-lg md:text-xl leading-relaxed flex flex-col gap-2 md:flex-row md:items-center md:justify-center text-center md:text-left">
	            Stories of resilience, learning and growth—told in their words. Through their voices, we celebrate strength, impact and growth.
	            <HiSparkles className="text-neev-pink self-center md:self-auto" />
	          </p>
	        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full relative"
        >
          {/* Infinite auto-scrolling marquee */}
          <div className="flex overflow-hidden relative pb-12 pt-4">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
	              {[...stories, ...stories].map((item, index) => (
	                <div 
	                  key={index} 
	                  className="w-[85vw] sm:w-[450px] shrink-0 surface-card-elevated p-8 md:p-10 flex flex-col text-center overflow-hidden"
	                >
	                  <div className="-mx-8 -mt-8 md:-mx-10 md:-mt-10 mb-6">
	                    <img
	                      src={item.imageSrc}
	                      alt={item.imageAlt || `${item.name}'s work`}
	                      className="w-full h-48 object-cover"
	                      loading="lazy"
	                      onError={(e) => { e.currentTarget.src = '/home/hero.jpg' }}
	                    />
	                  </div>
	                  <h3 className="text-2xl font-bold font-['Urbanist'] text-black mb-4 pb-4 border-b border-gray-100">
	                    {item.name}
	                  </h3>
	                  {formatStoryMeta(item) ? (
	                    <p className="font-['Urbanist'] text-sm font-semibold text-gray-500 uppercase tracking-[0.18em] -mt-2 mb-5">
	                      {formatStoryMeta(item)}
	                    </p>
	                  ) : null}
	                  <p className="font-['Urbanist'] font-normal text-gray-600 text-[15px] leading-relaxed">
	                    {item.story}
	                  </p>
	                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WomenStories
