import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUniversity, FaRocket, FaStar } from 'react-icons/fa'
import { GiWheat, GiTakeMyMoney, GiGrowth } from 'react-icons/gi'

const pillars = [
  {
    title: 'Economic Empowerment',
    images: ['/our-model/economics.jpg'],
    icon: <GiWheat className="text-6xl" />,
    description: 'We begin by listening. Every community is unique, and every group of women carries its own strengths, challenges, and lived experiences. We engage closely with women from marginalized and often overlooked backgrounds to understand their daily realities, income needs, and the resources available to them. From there, we co-create pathways to income by helping them develop meaningful, sustainable products such as Holi colours, candles, incense, and more ensuring that their work reflects both creativity and economic potential.',
    highlight: 'Turning local skills and resources into steady, dignified income for women and their families.',
    color: 'from-neev-blue via-neev-sky to-neev-pink',
  },
  {
    title: 'Financial Literacy',
    images: ['/our-model/finance.jpg', '/our-model/finance-2.jpg'],
    icon: <FaUniversity className="text-6xl" />,
    description: 'For many women operating outside formal systems, banking and digital finance can feel inaccessible and complex. We aim to bridge this gap through simple, hands-on, and community-driven learning experiences. Through small-group workshops, we support women in building confidence with digital payments, understanding savings and borrowing, accessing government schemes, and planning their finances both individually and collectively. The focus is on making financial systems approachable, practical, and empowering.',
    highlight: 'Building financial confidence so women can save, spend, and plan on their own terms.',
    color: 'from-neev-mustard via-neev-gold to-neev-rust',
  },
  {
    title: 'Entrepreneurial Spirit',
    images: ['/our-model/entrepreneurship.jpg', '/our-model/entrepreneurship-2.jpg'],
    icon: <FaRocket className="text-6xl" />,
    description: 'Once products are created, the next step is enabling women to present and sell them with confidence. We work with them to build their entrepreneurial identity through basic branding, packaging, storytelling, and market positioning. From designing labels and capturing product stories to facilitating access to both online and offline markets, we ensure their work reaches a wider audience. We also connect them with corporates, schools, and partner organizations creating sustainable pathways for visibility, income, and long-term growth.',
    highlight: 'Helping women build a product identity, reach real markets, and lead as entrepreneurs.',
    color: 'from-neev-pink via-neev-orange to-neev-coral',
  },
]

const OurModel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-champagne-200 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-64 h-64 bg-neev-pink/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-neev-mustard/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-[#f0f2f5] rounded-full px-6 py-2.5 border border-gray-200/60 shadow-sm">
              <span className="text-black font-['Urbanist'] font-bold text-sm tracking-wide uppercase">Our Model</span>
            </div>
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Three Core Pillars
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 70, rotate: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="surface-card-elevated h-full p-10 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 rounded-3xl overflow-hidden">
                  <div
                    className={`grid ${pillar.images.length > 1 ? 'grid-cols-2 gap-3' : ''}`}
                  >
                    {pillar.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${pillar.title} visual ${idx + 1}`}
                        className="w-full h-40 md:h-48 object-cover rounded-2xl"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                {/* Icon */}
                <motion.div 
                  className="w-24 h-24 mb-6 mx-auto rounded-2xl bg-gradient-to-br from-bronze-light via-bronze to-bronze-dark flex items-center justify-center text-champagne-100 shadow-bronze-glow"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  {pillar.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-['Urbanist'] font-bold mb-5 text-black">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-['Urbanist'] font-normal text-black/80 leading-relaxed mb-4 text-base">
                  {pillar.description}
                </p>

                {/* Highlight */}
                <div className={`mt-6 pt-6 border-t border-gray-200`}>
                  <p className="font-['Urbanist'] italic text-black font-semibold text-base flex items-start gap-2">
                    <span className="text-neev-pink text-xl leading-none">•</span>
                    {pillar.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default OurModel
