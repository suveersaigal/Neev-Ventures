import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const AnimatedCounter = ({ target, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''))
    if (isNaN(numericTarget)) {
      setCount(target)
      return
    }

    let startTime = null
    const duration = 2.5 // seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOut * numericTarget))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(animate)
  }, [target, inView])

  const suffix = target.replace(/[0-9]/g, '')
  return <>{count}{suffix}</>
}

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-champagne-100 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-80 h-80 bg-neev-orange/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          x: [-50, 50, -50]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-neev-pink/10 rounded-full blur-3xl"
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
            <div className="inline-flex items-center gap-3 bg-[#f0f2f5] rounded-full p-1.5 pr-6 border border-gray-200/60 shadow-sm">
              <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-sm">
                <span className="text-black font-bold text-xs leading-none">02</span>
              </div>
              <span className="text-black font-['Urbanist'] font-bold text-sm tracking-wide uppercase">Our Impact</span>
            </div>
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-['Urbanist'] font-bold text-black mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Building the Foundation For a Stronger Future.
          </motion.h2>
          <motion.p 
            className="font-['Urbanist'] font-normal text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            From financial basics to thriving businesses, we turn dreams into real-world impact.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full mt-12">
          {/* Left Metrics */}
          <div className="flex flex-col gap-12 w-full lg:w-1/3 text-center lg:text-right">
            <div className="flex flex-col lg:items-end items-center gap-3">
              <p className="font-display text-ink-muted font-normal uppercase tracking-[0.18em] text-xs">Change In Income</p>
              <div className="surface-card px-8 py-5 rounded-2xl">
                <span className="font-display font-light text-5xl text-ink tracking-tight">
                  <AnimatedCounter target="45%" inView={inView} />
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:items-end items-center gap-3">
              <p className="font-display text-ink-muted font-normal uppercase tracking-[0.18em] text-xs">Number of Women</p>
              <div className="surface-card px-8 py-5 rounded-2xl">
                <span className="font-display font-light text-5xl text-ink tracking-tight">
                  <AnimatedCounter target="15000+" inView={inView} />
                </span>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-64 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-[50%] relative border-[8px] border-champagne-100 shadow-elev-3">
               <img src="/home/impactwall.png" alt="Impact" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Metrics */}
          <div className="flex flex-col gap-12 w-full lg:w-1/3 text-center lg:text-left">
            <div className="flex flex-col lg:items-start items-center gap-3">
              <p className="font-display text-ink-muted font-normal uppercase tracking-[0.18em] text-xs">Number of Businesses Scaled</p>
              <div className="surface-card px-8 py-5 rounded-2xl">
                <span className="font-display font-light text-5xl text-ink tracking-tight">
                  <AnimatedCounter target="15+" inView={inView} />
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center gap-3">
              <p className="font-display text-ink-muted font-normal uppercase tracking-[0.18em] text-xs">Number of States Operational</p>
              <div className="surface-card px-8 py-5 rounded-2xl">
                <span className="font-display font-light text-5xl text-ink tracking-tight">
                  <AnimatedCounter target="8" inView={inView} />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
