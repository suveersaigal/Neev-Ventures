import { motion } from 'framer-motion'

const AwardMoment = () => {
  return (
    <section className="relative bg-gradient-to-b from-champagne-200 via-champagne-100 to-cream py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-bronze/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neev-gold/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-bronze text-xs md:text-sm font-bold mb-3">
            A Moment To Remember
          </p>
          <h2 className="text-3xl md:text-5xl font-['Urbanist'] font-extrabold text-ink leading-tight">
            Honoured by <span className="text-bronze">Dr. Kiran Bedi</span>
          </h2>
          <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-bronze to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-12 items-center"
        >
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-bronze/25 to-neev-gold/25 rounded-[2rem] -z-10 blur-sm" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elev-2 ring-1 ring-bronze/20">
              <img
                src="/awards/kiran-bedi-ceremony.jpg"
                alt="Receiving the certificate from Dr. Kiran Bedi at the Navjyoti Convocation"
                className="w-full h-[360px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                <span className="bg-cream/95 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-bronze-dark shadow-elev-1">
                  Navjyoti × DEFSYS · Convocation Ceremony
                </span>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="space-y-5">
            <span className="inline-block uppercase text-[11px] tracking-[0.25em] font-bold text-bronze bg-bronze/10 px-4 py-1.5 rounded-full">
              Featured Recognition
            </span>
            <h3 className="text-2xl md:text-4xl font-['Urbanist'] font-bold text-ink leading-tight">
              Youngest Entrepreneur Mentor Award
            </h3>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed font-['Urbanist']">
              Presented by <strong className="text-ink">Dr. Kiran Bedi</strong>, India’s first
              woman IPS officer and Magsaysay Award recipient, in recognition of mentorship of
              women entrepreneurs across underserved communities — and the on-the-ground impact
              of the Neev Ventures model.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-ink-soft">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-bronze flex-shrink-0" />
                <span>Conferred at the Navjyoti India Foundation Convocation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-bronze flex-shrink-0" />
                <span>Recognising the youngest mentor in the cohort</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-bronze flex-shrink-0" />
                <span>For sustained, measurable impact across communities</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardMoment
