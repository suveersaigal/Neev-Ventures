import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSeedling, FaHandsHelping, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const benefits = [
  {
    icon: <FaSeedling />,
    title: 'Rooted in Community',
    body: 'We start by listening. Every program is co-designed with the women it serves — never imposed from the outside.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Skill, Not Charity',
    body: 'We invest in capability: training, mentorship, market access. The result is dignified income that lasts beyond a grant cycle.',
  },
  {
    icon: <FaChartLine />,
    title: 'Measured Impact',
    body: 'Every venture is tracked against income growth, household stability, and ownership of decisions — not vanity metrics.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Transparent & Accountable',
    body: 'Clear reporting, ethical sourcing, and direct fair compensation to the women whose hands make every product.',
  },
]

const WhyNeev = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-champagne-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center surface-card rounded-full px-6 py-2.5">
              <span className="text-ink font-display font-normal text-xs tracking-[0.2em] uppercase">Why Neev</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-ink leading-[1.1] tracking-tight">
            A different way to build <em className="text-bronze-dark not-italic">livelihoods</em>.
          </h2>
          <p className="mt-6 text-lg md:text-xl font-light text-ink-soft leading-relaxed">
            We exist at the intersection of community, craft, and commerce — building ventures that make sense for the women who run them and the markets they reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="surface-card-elevated p-8 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-bronze-light to-bronze-dark text-champagne-100 flex items-center justify-center text-2xl shadow-bronze-glow mb-6">
                {b.icon}
              </div>
              <h3 className="font-display font-normal text-xl text-ink mb-3 tracking-tight">
                {b.title}
              </h3>
              <p className="font-display font-light text-ink-soft text-[15px] leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote band */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 surface-card-elevated p-10 md:p-16 text-center"
        >
          <p className="text-2xl md:text-4xl font-display font-light italic text-ink leading-snug max-w-4xl mx-auto">
            “Empowerment is not charity. It is the power to <span className="text-bronze-dark not-italic font-normal">create</span>, <span className="text-bronze-dark not-italic font-normal">own</span>, and <span className="text-bronze-dark not-italic font-normal">lead</span>.”
          </p>
          <div className="divider-bronze w-24 mx-auto my-8" />
          <p className="font-display font-normal text-xs tracking-[0.3em] uppercase text-ink-muted">
            The Neev Belief
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNeev
