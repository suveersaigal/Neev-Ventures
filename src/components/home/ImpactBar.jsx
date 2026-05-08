import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '~20,000', label: 'Women Empowered', accent: 'from-bronze to-bronze-dark' },
  { value: '6', label: 'States Reached', accent: 'from-neev-orange to-bronze' },
  { value: '~40%', label: 'Avg. Income Growth', accent: 'from-neev-gold to-neev-orange' },
  { value: '30', label: 'Workshops', accent: 'from-bronze-light to-bronze' },
]

const parseStatValue = (value) => {
  const match = String(value).match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/)
  if (!match) return { number: null, prefix: '', suffix: String(value) }
  return {
    prefix: match[1] || '',
    number: parseInt(match[2].replace(/,/g, ''), 10),
    suffix: match[3] || '',
  }
}

const AnimatedStatValue = ({ value, inView }) => {
  const { number, prefix, suffix } = useMemo(() => parseStatValue(value), [value])
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (number == null || Number.isNaN(number)) return

    let startTime = null
    const durationMs = 1800

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / durationMs, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)
      const next = Math.floor(easeOut * number)
      setCount(next)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, number])

  if (number == null || Number.isNaN(number)) {
    return <>{value}</>
  }

  return (
    <span className="inline-flex items-end justify-center whitespace-nowrap">
      {prefix ? <span className="mr-0.5">{prefix}</span> : null}
      <span>{count.toLocaleString('en-US')}</span>
      {suffix ? <span className="ml-0.5 text-[0.85em] leading-none">{suffix}</span> : null}
    </span>
  )
}

const ImpactBar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <section className="relative bg-gradient-to-br from-ink via-[#1a1410] to-ink text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/impact/impact-bar-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-1"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-ink/90" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-bronze/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-bronze-light text-xs md:text-sm font-bold mb-4">
            Our Impact
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Urbanist'] font-extrabold text-white leading-[1.05]">
            Real change, <br className="md:hidden" />
            <span className="bg-gradient-to-r from-bronze-light via-neev-gold to-bronze bg-clip-text text-transparent">
              in real numbers.
            </span>
          </h2>
          <p className="mt-5 text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Neev Ventures empowers underserved and overlooked women by helping them build sustainable livelihoods through
            entrepreneurship, financial literacy, and market access.
            <br />
            From formerly incarcerated women to migrant workers and grassroots artisans, we help transform skills and lived
            experiences into scalable businesses and economic independence.
            <br />
            Because talent is everywhere — access is not.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 md:p-10 text-center hover:border-bronze/40 hover:bg-white/[0.07] transition-all overflow-hidden group"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent}`} />
              <div className={`font-['Urbanist'] font-extrabold leading-none bg-gradient-to-br ${s.accent} bg-clip-text text-transparent`}>
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight whitespace-nowrap">
                  <AnimatedStatValue value={s.value} inView={inView} />
                </div>
              </div>
              <div className="mt-4 text-sm md:text-base text-white/80 font-semibold uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactBar
